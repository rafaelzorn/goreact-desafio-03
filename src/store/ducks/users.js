export const Types = {
    ADD_REQUEST: 'users/ADD_REQUEST',
    ADD_SUCCESS: 'users/ADD_SUCCESS',
    ADD_FAILURE: 'users/ADD_FAILURE',
    ADD_DISTANCE: 'users/ADD_DISTANCE',
    REMOVE: 'users/REMOVE',
};

const INITIAL_STATE = {
    loading: false,
    data: [],
    latitude: null,
    longitude: null,
    error: null,
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.ADD_REQUEST:
        return { ...state, loading: true };
    case Types.ADD_SUCCESS:
        return {
            ...state,
            loading: false,
            error: null,
            data: [...state.data, action.payload.data],
        };
    case Types.ADD_FAILURE:
        return { ...state, loading: false, error: action.payload.error };
    case Types.ADD_DISTANCE:
        return {
            ...state,
            latitude: action.payload.latitude,
            longitude: action.payload.longitude,
        };
    case Types.REMOVE:
        return { ...state, data: state.data.filter(data => data.id !== action.payload.id) };
    default:
        return state;
    }
}

export const Creators = {
    addUserRequest: (user, latitude, longitude) => ({
        type: Types.ADD_REQUEST,
        payload: {
            user,
            latitude,
            longitude,
        },
    }),

    addUserSuccess: data => ({
        type: Types.ADD_SUCCESS,
        payload: { data },
    }),

    addUserFailure: error => ({
        type: Types.ADD_FAILURE,
        payload: { error },
    }),

    addDistance: (latitude, longitude) => ({
        type: Types.ADD_DISTANCE,
        payload: {
            latitude,
            longitude,
        },
    }),

    removeUser: id => ({
        type: Types.REMOVE,
        payload: { id },
    }),
};
