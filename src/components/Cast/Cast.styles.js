import Styled from 'styled-components';

const CastContainer = Styled.div`

    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1% 4%;
    padding: 0 5%;
    margin-top: 3%;

    .actor {
      position: relative;

      img {
        width: 100%;
      }
      &--name {
        position: absolute;
        bottom: 0;
        left: 10%;
        color: #ffffffdb;
        opacity: 0;
        transition-duration: 0.2s;
      }

      &:hover > .actor--name {
        opacity: 1;
        border: 1px solid;
        padding: 1% 2%;
        background-color: rgba(0, 0, 0, 0.404);
      }
    }

    @media only screen and (max-width: 667px) {
        & .actor--name {
            font-size: x-small;
            left: 0;
            margin: auto;
      }
    }    
`;

export default CastContainer;
