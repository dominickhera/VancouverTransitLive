import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import {render} from 'react-dom';

import logo from './logo.svg';
import './App.css';


import ControlPanel from './control-panel';
import {defaultMapStyle, pointLayer} from './map-style.js';
import {pointOnCircle} from './utils';
import {grabTransitData} from './dataGrab';
import {fromJS} from 'immutable';
import busPinStyle from './busPointStyle';
import busInfo from './busInfo';
import MARKER_STYLE from './marker-style';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZG9taW5pY2toZXJhIiwiYSI6ImNqa3B1M3h3bDAzM3kza2p0MGFnYnEycnYifQ.MKWHv7_xn40QRqLHPtn-hA'; // Set your mapbox token here

let animation = null;
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

export default class App extends Component {

  state = {
    mapStyle: defaultMapStyle,
    viewport: {
      latitude: 49.260900,
      longitude: -123.113900,
      zoom: 11,
      bearing: 0,
      pitch: 0,
      width: 500,
      height: 500
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
    grabTransitData();
    let tempVal = JSON.parse(localStorage.getItem('busData'));
    // console.log(localStorage.getItem('busData'));
    console.log(tempVal);
    // animation = window.requestAnimationFrame(this._animatePoint);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
    // window.cancelAnimationFrame(animation);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  _updateViewport = (viewport) => {
    this.setState({viewport});
  }

  // _animatePoint = () => {
  //   // this._updatePointData(pointOnCircle({center: [-123, 49], angle: Date.now() / 1000, radius: 10}));
  //   animation = window.requestAnimationFrame(this._animatePoint);
  // }

  _updatePointData = pointData => {
    let {mapStyle} = this.state;
    if (!mapStyle.hasIn(['source', 'point'])) {
      mapStyle = mapStyle
        // Add geojson source to map
        .setIn(['sources', 'point'], fromJS({type: 'geojson'}))
        // Add point layer to map
        .set('layers', mapStyle.get('layers').push(pointLayer));
    }
    // Update data source
    mapStyle = mapStyle.setIn(['sources', 'point', 'data'], pointData);

    this.setState({mapStyle});
  }

  _renderMarker(bus, i) {
    const {busNumber, coordinates} = bus;
    return (
      <Marker busNumber={i} longitude={coordinates[0]} latitude={coordinates[1]} >
        <div className="busNumber"><span>{busNumber}</span></div>
      </Marker>
    );
  }

  _onViewportChange = viewport => this.setState({viewport});

  render() {

    const {viewport, mapStyle} = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle={mapStyle}
        onViewportChange={this._onViewportChange}
        mapboxApiAccessToken={MAPBOX_TOKEN} >
        <style>{MARKER_STYLE}</style>
        { (JSON.parse(localStorage.getItem("busData"))).map(this._renderMarker) }
        {/* {JSON.parse(localStorage.getItem("busData")).map(this._setBusPoint) } */}
        {/* {this._renderBusInfoPopUp()} */}
        
        <ControlPanel containerComponent={this.props.containerComponent} />
      </MapGL>
    );
  }

}
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
