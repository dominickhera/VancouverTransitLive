import React, {Component} from 'react';
import {render} from 'react-dom';
import MapGL, {Marker} from 'react-map-gl';
import './App.css';

import ControlPanel from './components/control-panel';
import {defaultMapStyle} from './map-style.js';
import {grabTransitData} from './dataGrab';
import MARKER_STYLE from './marker-style';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiZG9taW5pY2toZXJhIiwiYSI6ImNqa3B1M3h3bDAzM3kza2p0MGFnYnEycnYifQ.MKWHv7_xn40QRqLHPtn-hA'; // Set your mapbox token here

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
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
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

  _renderMarker(bus, i) {
    const {name, destination, direction, coordinates} = bus;
    console.log(bus);
    return (
      <Marker key = {i} longitude={coordinates[1]} latitude={coordinates[0]} >
          <div className="bus"><span>Bus #{name}, Destination: {destination}, Direction: {direction}</span></div>
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
        { (JSON.parse(localStorage.getItem("busData")).busInfo).map(this._renderMarker) }
        <ControlPanel containerComponent={this.props.containerComponent} />
      </MapGL>
    );
  }

}
