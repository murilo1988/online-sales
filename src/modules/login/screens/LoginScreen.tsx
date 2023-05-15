
import Input from "../../../shared/inputs/input/input";
import { inputThemeLoginStyle } from "../../../shared/inputs/input/input.style";
import { BackgroundImage, ContainerLogin, LogoImage, TitleLogin } from "../styles/loginScreens.style";
import { LimitedContainer } from './../styles/loginScreens.style';


function LoginScreen() {
    return (
        <div>
            <BackgroundImage src="./capaLogin.jpg" />
            <ContainerLogin>
                <LimitedContainer>
                    <LogoImage src="./logoLogin.png" />
                    <TitleLogin >
                        OrganicWeb
                    </TitleLogin>
                    <Input title="Email" id="outlined-basic" inputTheme={inputThemeLoginStyle} {...{}} />
                    <Input title="Password" id="outlined-basic" inputTheme={inputThemeLoginStyle} />
                </LimitedContainer>
            </ContainerLogin>
            z
        </div>
    )
}

export default LoginScreen