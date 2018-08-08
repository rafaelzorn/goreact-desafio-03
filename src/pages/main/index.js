import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { bindActionCreators } from 'redux';
import ReactMapGL, { Marker } from 'react-map-gl';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UserActions } from '../../store/ducks/users';
import SideBar from '../../components/SideBar';
import AddUserModal from '../../components/AddUserModal';

class Main extends Component {
    state = {
        viewport: {
            width: window.innerWidth,
            height: window.innerHeight,
            latitude: -29.685801,
            longitude: -51.12778,
            zoom: 14,
        },
    };

    handleMapClick = (e) => {
        const [longitude, latitude] = e.lngLat;

        const { openModal, addDistance } = this.props;

        addDistance(latitude, longitude);
        openModal(true);
    };

    render() {
        const { viewport } = this.state;
        const { users } = this.props;

        return (
            <Fragment>
                <SideBar />

                <ToastContainer />

                <ReactMapGL
                    {...viewport}
                    onClick={this.handleMapClick}
                    mapStyle="mapbox://styles/mapbox/basic-v9"
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOXACCESSTOKEN}
                    onViewportChange={viewport => this.setState({ viewport })}
                >
                    <AddUserModal />

                    {users.data.map(user => (
                        <Marker key={user.id} latitude={user.latitude} longitude={user.longitude}>
                            <img
                                style={{
                                    borderRadius: 100,
                                    width: 48,
                                    height: 48,
                                    border: '5px solid #7159C1',
                                }}
                                src={user.avatar_url}
                                alt={user.login}
                            />
                        </Marker>
                    ))}
                </ReactMapGL>
            </Fragment>
        );
    }
}

Main.propTypes = {
    openModal: PropTypes.func.isRequired,
    addDistance: PropTypes.func.isRequired,
    users: PropTypes.shape({
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                latitude: PropTypes.number.isRequired,
                longitude: PropTypes.number.isRequired,
                avatar_url: PropTypes.string.isRequired,
                login: PropTypes.string.isRequired,
            }),
        ),
    }).isRequired,
};

const mapStateToProps = state => ({
    users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Main);
