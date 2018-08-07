import styled from 'styled-components';
import ReactModal from 'react-modal';

export const StyledReactModal = styled(ReactModal)`
    position: absolute;
    margin-top: -50px;
    margin-left: -50px;
    padding: 31px 20px 20px 20px;
    top: 50%;
    left: 50%;
    width: 350px;
    background: #fff;
    border-radius: 5px;
    text-align: center;
    border: 1px solid #616161;

    h4 {
        margin-bottom: 15px;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;

    input {
        padding: 12px;
        margin-right: 10px;
        margin-bottom: 15px;
        width: 100%;
        border: 0;
        border-radius: 3px;
        border: 1px solid #dedede;
    }

    button {
        border-radius: 5px;
        border: 0;
        color: #fff;
        font-weight: 600;
        font-size: 14px;
        padding: 0 20px;
        cursor: pointer;
        padding: 15px 48px 15px 48px;
        opacity: 0.8;

        &:hover {
            opacity: 1;
        }

        &.cancel {
            background: #cccccc;
            float: left;
        }

        &.save {
            float: right;
            background: #85c47c;
        }
    }
`;
