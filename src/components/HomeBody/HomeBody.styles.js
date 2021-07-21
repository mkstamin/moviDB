import Styled from 'styled-components';

const HomeBodyContent = Styled.div`

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem 4%;

    padding: 0 5%;
    color: rgba(0, 0, 0, 0.753);

    & > a {
      width: 100%;
      position: relative;

      img {
        width: 100%;
      }

      .view-details {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        text-align: center;
        transition-duration: 0.4s;

        h3 {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-transform: uppercase;
          border: 1px solid;
          font-size: 80%;
          padding: 1%;
          opacity: 0;
        }
        &:hover > h3 {
          opacity: 1;
          transition: ease-out 0.4s;
        }
      }
      &:hover > .view-details {
        background-color: #ececec82;
        transition: ease-out 0.4s;
      }
    }

    .btn-relod {
      text-align: center;
      grid-column: 1/-1;

      button {
        padding: 5px 10px;
        font-size: large;
        font-weight: 600;
        text-transform: uppercase;
        color: cadetblue;
        margin-bottom: 1%;
        cursor: pointer;
        border: 1px solid rgba(0, 0, 0, 0.377);
        color: rgba(0, 0, 0, 0.377);
        transition-duration: 0.4s;

        &:hover {
          background-color: rgba(0, 0, 0, 0.644);
          color: rgba(248, 248, 247, 0.822);
        }
      }
    }
`;

export default HomeBodyContent;
