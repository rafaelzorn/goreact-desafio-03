import React, { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Main extends Component {
    state = {
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            latitude: -29.685689,
            longitude: -51.130012,
            zoom: 14,
        },
    };

    handleMapClick = (e) => {
        const [latitude, longitude] = e.lngLat;
    };

    render() {
        const { viewport } = this.state;

        return (
            <ReactMapGL
                {...viewport}
                onClick={this.handleMapClick}
                mapStyle="mapbox://styles/mapbox/basic-v9"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOXACCESSTOKEN}
                onViewportChange={viewport => this.setState({ viewport })}
            >
                <p>TESTE</p>
            </ReactMapGL>
        );
    }
}

export default Main;
