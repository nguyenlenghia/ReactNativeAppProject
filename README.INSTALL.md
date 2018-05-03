react-native init AwesomeNativeBase
cd AwesomeNativeBase

npm install --save react-navigation
npm install --save @babel/core
npm install --save native-base

// Vì expo và android chỉ cho phép sử dụng ip, ko dùng localhost khi truy cập nên để sử dụng http post
// thì cần phải config để iis express của visual chuyển từ localhost sang ip máy.
// Bước 1: Add the new site to ISS Express’s configuration
// - Đối với VS2012, edit file %USERPROFILE%\Documents\iisexpress\config\applicationhost.config
// - Đối với VS2015 trở lên, edit file $(SolutionDir)\.vs\config\applicationHost.config
// - Search tìm port và app mà mình muốn mở. Thêm hoặc Sửa dòng <binding> vào với ip là ip máy local của mình
// Bước 2: Set up HTTP.sys.
// - Gõ lệnh: "netsh http add urlacl url=http://10.32.42.50:45144/ user=everyone" với ip và port là ip và port máy local của mình
// Bước 3: Open up the firewall
// - Gõ lệnh: "netsh advfirewall firewall add rule name="IISExpressWeb" dir=in protocol=tcp localport=45144 profile=domain,private remoteip=any action=allow" với port là port máy local của mình
// Hoàn thành. 
// Tham khảo:
// - http://bendetat.com/access-iis-express-from-another-machine.html
// - https://stackoverflow.com/questions/14881515/browse-web-site-with-ip-address-rather-than-localhost
// - https://johan.driessen.se/posts/Accessing-an-IIS-Express-site-from-a-remote-computer
<bindings>
      <binding protocol="http" bindingInformation="*:45144:10.32.42.50" />
</bindings>
netsh http add urlacl url=http://10.32.42.50:45144/ user=everyone
netsh advfirewall firewall add rule name="IISExpressWeb" dir=in protocol=tcp localport=45144 profile=domain,private remoteip=any action=allow