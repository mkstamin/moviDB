import Styled from 'styled-components';

const ContentContainer = Styled.div`

    position: absolute;
    top: 30%;
    left: 5%;
    width: 33%;
    background: #ffffffad;
    padding: 1%;
    border-radius: 4px;
    text-align: justify;

    & > h1:nth-child(1) {
        margin: 0;
        font-size: larger;
        font-weight: 900;
        font-size: small;
        text-transform: capitalize;
        text-decoration: underline;
    }

    & > h2:nth-child(2) {
        margin-bottom: 0;
        font-size: larger;
        text-transform: uppercase;
    }

    & > p:nth-child(3) {
        margin-top: 5px;
    }

    @media only screen and (max-width: 667px) {

        top: 15%;
        margin-right: 6%;
        width: auto;

        & > h1:nth-child(1) {
        font-size: x-small;
        }
    }
`;

export default ContentContainer;
