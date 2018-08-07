import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as UserActions } from '../../store/ducks/users';
import { Container, StyledSideBar } from './styles';

class SideBar extends Component {
    render() {
        const { users, removeUser } = this.props;

        return (
            <Container>
                <StyledSideBar>
                    <ul>
                        {users.data.map(user => (
                            <li key={user.id}>
                                <img className="avatarUrl" src={user.avatar_url} alt={user.login} />

                                <div className="info">
                                    <span className="name">{user.name}</span>
                                    <br />
                                    <span className="login">{user.login}</span>
                                </div>

                                <div className="remove">
                                    <div
                                        className="buttonRemove"
                                        onClick={() => removeUser(user.id)}
                                        onKeyUp={this.handleKeyUp}
                                        role="presentation"
                                    >
                                        <i className="fa fa-times" />
                                    </div>
                                </div>

                                <div className="arrow">
                                    <i className="fa fa-angle-right" />
                                </div>
                            </li>
                        ))}
                    </ul>
                </StyledSideBar>
            </Container>
        );
    }
}

SideBar.propTypes = {
    removeUser: PropTypes.func.isRequired,
    users: PropTypes.shape({
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                avatar_url: PropTypes.string.isRequired,
                name: PropTypes.string.isRequired,
                loging: PropTypes.string.isRequired,
            }),
        ),
    }).isRequired,
};

const mapStateToProps = state => ({
    users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators(UserActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SideBar);
