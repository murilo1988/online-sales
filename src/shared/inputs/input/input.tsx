import TextField from "@mui/material/TextField"
import { createTheme, ThemeProvider } from "@mui/material/styles"
import Stack from "@mui/material/Stack";
import { BoxInput } from "./input.style";
const Input = () => {
    const borderInputLogin = createTheme({
        palette: {
            primary: {
                main: '#172C33'
            }
        }
    })

    return (
        <BoxInput>
            <ThemeProvider theme={borderInputLogin}>
                <Stack spacing={2}>
                    < TextField id='outlined-basic' label='E-mail' size="small" />
                    < TextField id='outlined-basic' label='Password' size="small" />
                </Stack>
            </ThemeProvider>
        </BoxInput>

    )


}


export default Input