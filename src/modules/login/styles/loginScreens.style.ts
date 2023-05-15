import styled from "styled-components"


export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    z-index: 1;

`;
export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
    height: 100vh;
    width: 100%;
    max-width: 550px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
   

`

export const TitleLogin = styled.h1`
  font-family: 'Merriweather Sans', sans-serif;
  background-image: linear-gradient(-225deg,#1C2E35 0%,#43C6B1 33%,#43C6B1 66%,#1C2E35 99%);
  font-size: 50px;
  background-clip: text;
  -webkit-background-clip:text ;
  -webkit-text-fill-color: transparent;
     
`

export const LogoImage = styled.img`
   width: 202px;
   
 
`;
export const LimitedContainer = styled.div`

  margin-bottom: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  align-items: center;
  max-width: 476px;

`;


