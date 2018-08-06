import React, { Component, Fragment } from 'react';
import ReactMapGL from 'react-map-gl';
import SideBar from '../../components/SideBar';
import AddUserModal from '../../components/AddUserModal';

class Main extends Component {
    state = {
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            latitude: -29.685689,
            longitude: -51.130012,
            zoom: 14,
        },
        open: false,
    };

    handleMapClick = (e) => {
        const [latitude, longitude] = e.lngLat;

        this.setState({ open: true });
    };

    render() {
        const { viewport } = this.state;

        return (
            <Fragment>
                <SideBar />

                <ReactMapGL
                    {...viewport}
                    onClick={this.handleMapClick}
                    mapStyle="mapbox://styles/mapbox/basic-v9"
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOXACCESSTOKEN}
                    onViewportChange={viewport => this.setState({ viewport })}
                >
                    <AddUserModal open={this.state.open} />
                </ReactMapGL>
            </Fragment>
        );
    }
}

export default Main;
