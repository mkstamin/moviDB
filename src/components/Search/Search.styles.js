import Styled from 'styled-components';

const SearchContainer = Styled.div`
  position: absolute;
  width: 90%;
  bottom: 10%;
  left: 5%;

  input[type="text"] {
    width: 35%;
    padding: 12px 20px;
    border: 1px solid;
    background-color: #ffffffc2;

    &:focus {
      border: 1px solid;
    }
  }
  @media only screen and (max-width: 667px) {
    & input[type="text"] {
        width: 50%;
    }
  }

`;

export default SearchContainer;
