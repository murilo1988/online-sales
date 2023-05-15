import TextField from "@mui/material/TextField"
import { InputProps } from "@mui/material/Input/Input";
import { ThemeProvider } from "@mui/material/styles"
import Stack from "@mui/material/Stack";
import { BoxInput } from "./input.style";
interface InputInfo extends InputProps {
    title: string,
    id?: string,
    inputTheme: object,
}

const Input = ({ title, id, inputTheme, ...props }: InputInfo) => {

    return (
        <BoxInput>
            <ThemeProvider theme={inputTheme}>
                <Stack >
                    < TextField id={`${id}`} label={`${title}`} InputProps={{ ...props }} />
                </Stack>
            </ThemeProvider>
        </BoxInput>
    )
}

export default Input