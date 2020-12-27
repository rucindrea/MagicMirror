/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * See https://github.com/MichMich/MagicMirror#configuration
 *
 */

var config = {
	address: "localhost", 	// Address to listen on, can be:
	// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
	// - another specific IPv4/6 to listen on a specific interface
	// - "0.0.0.0", "::" to listen on any interface
	// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
	// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
	// or add a specific IPv4 of 192.168.1.5 :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
	// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
	// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"],
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "upper_third"
		},

		{
			module: "currentweather",
			position: "bottom_right",
			config: {
				locationID: "658225", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "adbeba5d31641d19e0d928db43511a61"
			}
		},
		{
			module: "weatherforecast",
			position: "bottom_right",
			header: "Weather Forecast",
			config: {
				locationID: "658225", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				appid: "adbeba5d31641d19e0d928db43511a61"
			}
		},
		{
			module: "mm-hsl-timetable",
			position: "bottom_left",
			header: "Bus schedule",
			config: {
				stops: [1431146, { "id": 1431602, "minutesFrom": 10, "name": "Herttoniemi Metro" }, { "id": 1431604, "minutesFrom": 5, "name": "Siilitie Metro" }],
				busCount: 4
			},
		},
		{
			module: "newsfeed",
			position: "upper_third",
			config: {
				feeds: [
					{
						title: "Yle News",
						url: "https://feeds.yle.fi/uutiset/v1/recent.rss?publisherIds=YLE_NEWS"
					},
					{
						title: "YLE Uuutiset",
						url: "https://feeds.yle.fi/uutiset/v1/majorHeadlines/YLE_UUTISET.rss"
					}

				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "compliments",
			position: "upper_third"
		},
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
