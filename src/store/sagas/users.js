import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as UserActions } from '../ducks/users';
import { Creators as ModalActions } from '../ducks/modal';

export function* addUser(action) {
    try {
        const { data } = yield call(api.get, `/users/${action.payload.user}`);

        const userData = {
            id: data.id,
            name: data.name,
            login: data.login,
            avatar_url: data.avatar_url,
            latitude: action.payload.latitude,
            longitude: action.payload.longitude,
        };

        yield put(UserActions.addUserSuccess(userData));
        yield put(ModalActions.openModal(false));
    } catch (err) {
        yield put(UserActions.addUserFailure('Erro ao adicionar repositório'));
    }
}
