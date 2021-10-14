import styled from 'styled-components';

export const Main = styled.main`
  background: linear-gradient(to right top, #65dfc9, #6cdbeb);
  color: ${props => props.theme.colors.text.regular};


  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  .glass {
    min-height: 80vh;
    width: 60%;
    background: white;
    background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
    backdrop-filter: blur(2rem);
    z-index: 3;
    border-radius: 2rem;

    display: flex;
    .dashboard {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.3));
      border-radius: 2rem;

      .me {
        text-align: center;

        img {
          width: 88px;
          height: 88px;
          border-radius: 50%;
        }
      }
    }

    .content {
      flex: 2;
      .skills {
        .skill {
          img {
            width: 105px;
            height: 105px;
            border-radius: 2rem;
          }
        }
      }
    }
  }
`;

export const Container = styled.div`
  .left-circle, .right-circle {
    position: absolute;
    z-index: 1;
    transition: 1s;
    &:hover {
      transform: scale(1.1);
    }

    .circle {
      position: relative;
      width: 25rem;
      height: 25rem;
    }

    .ball {
      background: linear-gradient(to right bottom, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.3));
      height: 20rem;
      width: 20rem;
      border-radius: 50%;
      position: absolute;
      transition-duration: 1000ms;
      transition-timing-function: ease-out;
      top: 0%;
      left: 0%;
    }
  }

  .right-circle {
    top: 1%;
    right: 10%;
  }

  .left-circle {
    bottom: 2%;
    left: 4%;
  }
`;