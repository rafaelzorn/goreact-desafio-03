import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    padding: 20px;
    width: 320px;
    height: 100%;
    z-index: 999;
`;

export const StyledSideBar = styled.div`
    padding: 20px;
    width: 100%;
    min-height: 100%;
    background-color: #fff;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    border-radius: 5px;

    ul {
        li {
            display: flex;
            flex-direction: row;
            padding: 10px 0 10px 0;
            border-bottom: 1px solid #eee;

            .avatarUrl {
                margin-right: 5px;
                width: 48px;
                height: 48px;
                border-radius: 50%;
            }

            .info {
                margin-right: 25px;
                padding: 5px;

                .name {
                    font-size: 14px;
                    color: #333;
                    font-weight: 600;
                }

                .login {
                    font-size: 12px;
                    color: #999;
                }
            }

            .remove {
                flex: 1;
                padding-top: 18px;

                .buttonRemove {
                    padding: 2px;
                    background: #d45454;
                    color: #fff;
                    text-align: center;
                    border-radius: 50%;
                    width: 14px;
                    height: 16px;
                    font-size: 10px;
                    opacity: 0.7;
                    cursor: pointer;

                    :hover {
                        opacity: 1;
                        transition: 1s;
                    }
                }
            }

            .arrow {
                padding-top: 17px;
            }
        }
    }
`;
