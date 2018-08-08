import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Creators as ModalActions } from '../../store/ducks/modal';
import { Creators as UserActions } from '../../store/ducks/users';
import { StyledReactModal, Form } from './styles';

class AddUserModal extends Component {
    state = {
        userInput: '',
    };

    handleAddUser = (event) => {
        event.preventDefault();

        const { addUserRequest, users } = this.props;
        const { userInput } = this.state;

        addUserRequest(userInput, users.latitude, users.longitude);

        this.setState({
            userInput: '',
        });
    };

    render() {
        const { modal, openModal, users } = this.props;
        const { userInput } = this.state;

        return (
            <StyledReactModal isOpen={modal.open} ariaHideApp={false}>
                <h4>Adicionar novo usuário</h4>

                <Form onSubmit={this.handleAddUser}>
                    <div>
                        <input
                            placeholder="Usuário no Github"
                            value={userInput}
                            onChange={e => this.setState({ userInput: e.target.value })}
                        />
                    </div>

                    <div>
                        <button type="button" className="cancel" onClick={() => openModal(false)}>
                            Cancelar
                        </button>
                        <button type="submit" className="save">
                            {users.loading ? <i className="fa fa-spinner fa-pulse" /> : 'Salvar'}
                        </button>
                    </div>
                </Form>
            </StyledReactModal>
        );
    }
}

AddUserModal.propTypes = {
    addUserRequest: PropTypes.func.isRequired,
    users: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
        latitude: PropTypes.number,
        longitude: PropTypes.number,
    }).isRequired,
    openModal: PropTypes.func.isRequired,
    modal: PropTypes.shape({
        open: PropTypes.bool.isRequired,
    }).isRequired,
};

const mapStateToProps = state => ({
    modal: state.modal,
    users: state.users,
});

const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions, ...UserActions }, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddUserModal);
