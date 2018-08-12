
import React, {PureComponent} from 'react';
const request = require('superagent');
const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {

  // _grabTransitData = () => {
  //   // const request = require('superagent');
  //   //     const nocache = require('superagent-no-cache');
  //   //     const prefix = require('superagent-prefix')('/static');
  //   // console.log("hello there");
  //       request
  //       .get('https://api.translink.ca/rttiapi/v1/buses?apikey=fH8nhLCTC142J3YXmtLC ')
  //       // .use(prefix)
  //       // .use(nocache)
  //       .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
  //       // .set('Access-Control-Request-Headers', 'X-Requested-With, Content-Type, Authorization, Origin, Accept')
  //       .set('Access-Control-Allow-Origin', '*')
  //       .set('Connetion', 'close')
  //       .set('Content-Type', 'application/xml')
  //       .end((err, res) => {
  //           console.log(res.text);
  //           // this._xmlToJson(res.text);
  //           console.log("update21");
  //           var parser = new DOMParser();
  //           var parsedObj = parser.parseFromString(res.text, "text/xml");
  //           var busCount = parseInt(parsedObj.getElementsByTagName("Bus").length, 10);
  //          var busData = {};
  //          var busInfo = [];
  //          busData.busInfo = busInfo;

  //          var i;
  //           for(i = 0; i < busCount; i++) {
  //             // console.log(i);
  //             var busNumber = parsedObj.getElementsByTagName("Bus")[i].childNodes[0].textContent;
  //             var busLattitude = parsedObj.getElementsByTagName("Bus")[i].childNodes[6].textContent;
  //             var busLongitude = parsedObj.getElementsByTagName("Bus")[i].childNodes[7].textContent;
  //             var detailedBusInfo = {
  //               "busNumber": busNumber,
  //               "lattitude": busLattitude,
  //               "longitude": busLongitude
  //             }
  //             busData.busInfo.push(detailedBusInfo);
  //             // console.log("item " + i + " : " + parsedObj.getElementsByTagName("Bus")[i].childNodes[6].textContent);
  //           }

  //           // console.log(JSON.stringify(busData));
  //           localStorage.setItem("busData", JSON.stringify(busData));

  //       });
  // }
  // componentDidMount() {
  //   // this._grabTransitData();
    
  // }

  render() {
    const Container = this.props.containerComponent || defaultContainer;

    return (
      <Container>
        <h3>Vancouver Live Public Transit Feed</h3>
        <p>Spruce Work Sample by Dominick Hera</p>
        <div className="source-link">
          <a href="https://github.com/dominickhera/VancouverTransitLive"
            target="_new">
            View Source Code ↗
          </a>
        </div>
      </Container>
      
    );
  }
}