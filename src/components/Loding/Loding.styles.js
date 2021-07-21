import Styled from 'styled-components';

const LodingContainer = Styled.div`
  position: relative;
  height: 100vh;

  .loding-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;
  }
`;

export default LodingContainer;
