import React, { Component } from 'react';
import ReactMap, { Popup } from 'react-mapbox-gl';

const accessToken = "pk.eyJ1IjoiYWxleDMxNjUiLCJhIjoiY2l4b3V0Z3RpMDAxczJ4cWk2YnEzNTVzYSJ9.MFPmOyHy8DM5_CVaqPYhOg";
const style = "mapbox://styles/mapbox/streets-v9";

const mapStyle = {
  height: '100vh',
  width: '100vw'
}

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      position_popup: null,
      center: [0, 0],
      some_state: ""
    }
  }

  componentDidMount() {
    const self = this
    setTimeout(function () {
      self.setState({
        center: [105.307265, -5.117839]
      })
    }, 3000);
    setTimeout(function () {
      self.setState({
        some_state: "tes"
      })
    }, 4000);
  }

  handleClickMap(map, event) {
    this.setState({
      position_popup: event.lngLat,
      center: [event.lngLat.lng, event.lngLat.lat]
    })
  }

  handleClickPopup() {
    this.setState({
      position_popup: null
    })
  }

  render() {
    const longitude = this.state.position_popup ? this.state.position_popup.lng : 0
    const latitude = this.state.position_popup ? this.state.position_popup.lat : 0

    console.log(this.state.center);
    return (
      <ReactMap
        center={this.state.center}
        zoom={[11]}
        style={style}
        accessToken={accessToken}
        containerStyle={mapStyle}
        onClick={this.handleClickMap.bind(this)}
      >
        {this.state.position_popup ?
          <Popup coordinates={[longitude, latitude]} onClick={this.handleClickPopup.bind(this)}>
            tes popup
          </Popup> : null
        }
      </ReactMap>
    );
  }
}

export default App;
