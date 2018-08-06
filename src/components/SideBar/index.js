import React, { Component } from 'react';
import { Container, StyledSideBar } from './styles';

class SideBar extends Component {
    remove = () => {
        alert('aqui');
    };

    render() {
        return (
            <Container>
                <StyledSideBar>
                    <ul>
                        <li>
                            <img
                                className="avatarUrl"
                                src="https://avatars2.githubusercontent.com/u/2254731?v=4"
                                alt="avatar"
                            />

                            <div className="info">
                                <span className="name">Diego Fernandes</span>
                                <br />
                                <span className="login">diego3g</span>
                            </div>

                            <div className="remove">
                                <div
                                    className="buttonRemove"
                                    onClick={() => this.remove()}
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
                    </ul>
                </StyledSideBar>
            </Container>
        );
    }
}

export default SideBar;
