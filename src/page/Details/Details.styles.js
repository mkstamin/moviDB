import Styled from 'styled-components';

const MovieContainer = Styled.div`
  .heading {
    text-align: center;
    text-transform: uppercase;
    color: #000000b5;
    font-size: larger;
  }

  @media only screen and (max-width: 667px) {
    & .heading {
      font-size: x-small;
    }
  }
`;

export default MovieContainer;
