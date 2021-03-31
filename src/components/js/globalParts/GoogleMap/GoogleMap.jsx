import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

class GoogleMap extends Component {
  renderMarkers = () => {
    let markers = [];

    if (this.props.organizations.length > 1) {
      this.props.organizations.map((itm, index) => {
        markers.push(
          <Marker
            key={index}
            position={{ lat: itm.latitude, lng: itm.longitude }}
          />
        );
      });
    } else {
      this.props.organizations.id &&
        markers.push(
          <Marker
            key={this.props.organizations.id.toString()}
            position={{
              lat: this.props.organizations.latitude,
              lng: this.props.organizations.longitude
            }}
          />
        );
    }
    return markers;
  };

  renderContent = () => {
    let content = null;
    if (this.props.organizations.length > 1) {
      content = (
        <Map
          google={this.props.google}
          zoom={12}
          id="map"
          className={this.props.className}
          initialCenter={{ lat: 41.7151, lng: 44.8271 }}
        >
          {this.renderMarkers()}
        </Map>
      );
    } else {
      // let orgLat = parseFloat(this.props.organizations.latitude);
      // let orgLng = parseFloat(this.props.organizations.longitude);
      if(this.props.organizations.latitude && this.props.organizations.longitude){
        content = (
          <Map
            google={this.props.google}
            zoom={12}
            id="map"
            className={this.props.className}
            initialCenter={{ lat: 41.7151, lng: 44.8271 }}
            center={
              this.props.organizations.latitude &&
              this.props.organizations.longitude && {
                lat: this.props.organizations.latitude,
                lng: this.props.organizations.longitude
              }
            }
          >
            {this.renderMarkers()}
          </Map>
        );

      } else {
        content = (
          <Map
            google={this.props.google}
            zoom={12}
            id="map"
            className={this.props.className}
            initialCenter={{ lat: 41.7151, lng: 44.8271 }}
          >
            {this.renderMarkers()}
          </Map>
        );
      }
    }

    return content;
  };
  render() {
    return <>{this.props.organizations && this.renderContent()}</>;
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBQivF_U965QpiZ7Cg5O9RS053djXwGlag"
})(GoogleMap);
