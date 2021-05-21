import styled, { css } from 'styled-components';

export const Container = styled.div `
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(120deg, #143b7d, #fdfaf5);
`;

export const MainContentWrapper = styled.div `
  min-width: 10px;
`;

export const SectionWrapper = styled.div `
  display: flex;
  width: 100%;
`;

export const CdCaseContent = styled.div `
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  transition: all 1s ease;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const Disk = styled.div `
  position: absolute;
  z-index: 1;
  flex: 1;

  width: 550px;
  height: 550px;
  border-radius: 50%;
  box-shadow: 3px 3px 10px rgba(0, 0, 3, 0.5);
  opacity: 1;

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 350px;
    top: 220px;
  }

  &:hover {
    animation: rotation 1.5s linear infinite;
    left: 10%;
    transition-delay: 5s;
  }
  @keyframes rotation {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const InnerDisk = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 150px;
  height: 150px;
  background-color: #0473a4;
  border-radius: 50%;

  &::after {
    position: absolute;
    content: '';
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    background-color: black;
    border-radius: 50%;
  }
`;
export const Img1 = styled.img `
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const Img2 = styled.img `
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const CoverImg = styled.div `
  position: fixed;
  flex: 1;
  z-index: 2;
  transform: translateX(-40%);
  width: 590px;
  height: 590px;
  box-shadow: 1px 3px 2px 3px rgba(0, 1, 1, 1);

  @media screen and (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

export const Img = styled.img `
  width: inherit;
  height: inherit;
`;

export const CustomContent = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 2rem;
  flex: 1;
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 50vw;
    height: 50%;
  }
`;

export const CustomElement = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  border-radius: 20px;
  font-size: 3rem;
  font-weight: bold;
  font-family: 'Nanum Brush Script', cursive;

  width: 100%;
  height: 100%;
  background: linear-gradient(245deg, #143b7d, #fdfaf5);
`;

export const Button = styled.button `
  width: 5rem;
  height: 3rem;
  font-size: 1rem;
  font-weight: bold;
  font-family: 'Nanum Brush Script', cursive;
  border-radius: 20px;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-image: linear-gradient(
    120deg,
    #264986 20%,
    #5f78a3 50%,
    #dee0e5 100%
  );
  &:hover {
    animation: slidebg 2s linear infinite;
  }

  @keyframes slidebg {
    to {
      background-position: 20vw;
    }
  }
`;

const Input = css `
  padding-bottom: 3rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const CustomLp = styled.div `
  ${Input}
`;

export const CustomColor = styled.div `
  ${Input}
`;

export const CustomAlbumCover = styled.div `
  ${Input}
`;

export const CustomCenterCover = styled.div `
  ${Input}
`;

export const InputFile = styled.input `
  border: 3px solid lightblue;
  border-radius: 20px;
  color: #fff;
  font-weight: bold;
  font-family: 'Nanum Brush Script', cursive;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  box-shadow: 1px 3px 2px 1px rgba(0, 1, 1, 1);
  background-image: linear-gradient(
    120deg,
    #264986 20%,
    #5f78a3 50%,
    #dee0e5 100%
  );
  &:hover {
    animation: slidebg 2s linear infinite;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @keyframes slidebg {
    to {
      background-position: 20vw;
    }
  }
`;

export const SaveBtn = styled.button `
  background: transparent;
  color: orange;
  border: none;
  height: 60px;
  font-size: 2.5rem;
  padding: 0 3.5rem;
  cursor: pointer;
  transition: 2s ease all;
  outline: none;
  font-family: 'Lobster', cursive;
  animation: change 5s infinite linear;
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 3px;
    width: 0;
    border: rgba(233, 212, 96, 1);
    transition: 1.5s ease all;
  }
  &:hover {
    &::before,
    &::after {
      width: 100%;
      transition: 1s ease all;
    }
  }
  @keyframes change {
    from {
      filter: hue-rotate(0deg);
    }
    to {
      filter: hue-rotate(360deg);
    }
  }
`;