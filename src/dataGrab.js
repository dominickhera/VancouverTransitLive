const request = require('superagent');

export function grabTransitData() {
        request
        .get('https://api.translink.ca/rttiapi/v1/buses?apikey=fH8nhLCTC142J3YXmtLC ')
        .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
        // .set('Access-Control-Request-Headers', 'X-Requested-With, Content-Type, Authorization, Origin, Accept')
        .set('Access-Control-Allow-Origin', '*')
        .set('Connetion', 'close')
        .set('Content-Type', 'application/xml')
        .end((err, res) => {
            // console.log(res.text);
            console.log("update21");
           var parser = new DOMParser();
           var parsedObj = parser.parseFromString(res.text, "text/xml");
           var busCount = parseInt(parsedObj.getElementsByTagName("Bus").length, 10);
           var busData = {};
           var busInfo = [];
           busData.busInfo = busInfo;

           var i;
            for(i = 0; i < busCount; i++) {
              var busNumber = parsedObj.getElementsByTagName("Bus")[i].childNodes[0].textContent;
              var busLattitude = parsedObj.getElementsByTagName("Bus")[i].childNodes[6].textContent;
              var busLongitude = parsedObj.getElementsByTagName("Bus")[i].childNodes[7].textContent;
              var detailedBusInfo = {
                "busNumber": busNumber,
                "lattitude": busLattitude,
                "longitude": busLongitude
              }
              busData.busInfo.push(detailedBusInfo);
            }

            localStorage.setItem("busData", JSON.stringify(busData));

        });
  }