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

export const LogoImage = styled.img`
   width: 200px;
 
`;
export const LimitedContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  width: 85%;
  max-width: 476px;

`;


