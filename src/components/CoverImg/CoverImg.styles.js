import Styled from 'styled-components';

const CoverImgContainer = Styled.div`
    position: relative;

    & img {
       width: 100%;
       height: 95vh;
    }

    @media only screen and (max-width: 667px) {
       & img {
          height: 22rem;
       } 
    }    
`;

export default CoverImgContainer;
