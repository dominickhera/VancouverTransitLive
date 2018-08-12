
import React, {PureComponent} from 'react';
import X2JS from 'x2js';
const request = require('superagent');
// const convertXML = require('x2js');
// const nocache = require('superagent-no-cache');
// const prefix = require('superagent-prefix')('/static');
const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
  // _xmlToJson = (xml) => {
    // console.log("this shit was not supposed to happen");
    // console.log(xml);
  //   // Create the return object
  //   var obj = {};
  
  //   if (xml.nodeType == 1) { // element
  //     // do attributes
  //     if (xml.attributes.length > 0) {
  //     obj["@attributes"] = {};
  //       for (var j = 0; j < xml.attributes.length; j++) {
  //         var attribute = xml.attributes.item(j);
  //         obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
  //       }
  //     }
  //   } else if (xml.nodeType == 3) { // text
  //     obj = xml.nodeValue;
  //   }
  
  //   // do children
  //   if (xml.hasChildNodes()) {
  //     for(var i = 0; i < xml.childNodes.length; i++) {
  //       var item = xml.childNodes.item(i);
  //       var nodeName = item.nodeName;
  //       if (typeof(obj[nodeName]) == "undefined") {
  //         obj[nodeName] = xmlToJson(item);
  //       } else {
  //         if (typeof(obj[nodeName].push) == "undefined") {
  //           var old = obj[nodeName];
  //           obj[nodeName] = [];
  //           obj[nodeName].push(old);
  //         }
  //         obj[nodeName].push(xmlToJson(item));
  //       }
  //     }
  //   }
  //   return obj;
  // }

  _grabTransitData = () => {
    // const request = require('superagent');
    //     const nocache = require('superagent-no-cache');
    //     const prefix = require('superagent-prefix')('/static');
    // console.log("hello there");
        request
        .get('https://api.translink.ca/rttiapi/v1/buses?apikey=fH8nhLCTC142J3YXmtLC ')
        // .use(prefix)
        // .use(nocache)
        .set('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT')
        // .set('Access-Control-Request-Headers', 'X-Requested-With, Content-Type, Authorization, Origin, Accept')
        .set('Access-Control-Allow-Origin', '*')
        .set('Connetion', 'close')
        .set('Content-Type', 'application/xml')
        .end((err, res) => {
            // console.log(res.text);
            // this._xmlToJson(res.text);
            var jsonInstance = new X2JS();
            var xmlText = res.text;
            var jsonObj = jsonInstance.xml_str2json(xmlText);
            console.log(jsonObj);

        });
  }
  componentDidMount() {
    this._grabTransitData();
    
  }

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