import Styled from 'styled-components';

const HeaderContainer = Styled.div`

    position: relative;

    img {
       width: 100%;
       height: 90vh;
    }

    @media only screen and (max-width: 667px) {
      img {
        height: 20rem;
      }
    }
`;

export default HeaderContainer;
