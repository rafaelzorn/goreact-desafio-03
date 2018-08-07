export const Types = {
    OPEN: 'modal/OPEN',
};

const INITIAL_STATE = {
    open: false,
};

export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
    case Types.OPEN:
        return { ...state, open: action.payload.open };
    default:
        return state;
    }
}

export const Creators = {
    openModal: open => ({
        type: Types.OPEN,
        payload: { open },
    }),
};
