import Styled from 'styled-components';

const NavContainer = Styled.div`

    background-color: aqua;
    display: flex;
    align-items: center;
    justify-content: space-around;
    align-content: center;

    .button--switch {
      position: relative;
      display: inline-block;
      width: 55px;
      height: 30px;

      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(241, 241, 241);
        transition: 0.4s;

        &:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 45%;
          left: 2px;
          bottom: 2px;
          background-color: #0c0c0ced;
          transition: 0.4s;
        }
      }

      input {
        opacity: 0;
        width: 0;
        height: 0;

        &:checked + .slider {
          background-color: #0c0c0ced;
        }

        &:checked + .slider:before {
          background-color: rgb(241, 241, 241);
        }

        &:checked + .slider:before {
          transform: translateX(100%);
        }
      }

      /* Rounded sliders */
      .round {
        border-radius: 34px;

        &:before {
          border-radius: 50%;
        }
      }
    }

`;

export default NavContainer;
