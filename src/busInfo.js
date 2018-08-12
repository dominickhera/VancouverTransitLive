import React, {PureComponent} from 'react';

export default class BusInfo extends PureComponent {

  render() {
    const {info} = this.props;
    const displayName = `${info.busNumber}`;

    return (
      <div>
        <div>
          {displayName} 
        </div>
        {/* //<img width={240} src={info.image} /> */}
      </div>
    );
  }
}