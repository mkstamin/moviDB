import Styled from 'styled-components';

const MovieDetailsContainer = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    top: 50%;
    left: 50%;
    border: 2px solid chocolate;
    transform: translate(-50%, -50%);
    padding: 2% 5%;
    background-color: #008b8b6e;
    color: white;

    @media only screen and (max-width: 667px) {
        & {
            padding: 0px 5%;
            width: 90%;
            height: 100%;
            border: none;
        }
    }
`;

export default MovieDetailsContainer;
