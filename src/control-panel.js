
import React, {PureComponent} from 'react';
const defaultContainer =  ({children}) => <div className="control-panel">{children}</div>;

export default class ControlPanel extends PureComponent {

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