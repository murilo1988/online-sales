
import Input from "../../../shared/inputs/input/input";
import { BackgroundImage, ContainerLogin, LogoImage } from "../styles/loginScreens.style";
import { LimitedContainer } from './../styles/loginScreens.style';


function LoginScreen() {
    return (
        <div>
            <BackgroundImage src="./capaLogin.jpg" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logoLogin.png" />
                    <Input />
                </LimitedContainer>
            </ContainerLogin>

        </div>
    )
}

export default LoginScreen