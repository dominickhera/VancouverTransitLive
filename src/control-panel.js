
import React, {PureComponent} from 'react';
const request = require('superagent');
// const nocache = require('superagent-no-cache');
// const prefix = require('superagent-prefix')('/static');
const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {
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
            console.log(res.text);
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