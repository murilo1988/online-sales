import createTheme from "@mui/material/styles/createTheme"
import styled from "styled-components"


export const BoxInput = styled.div`
    margin: 8px auto;
    width: 80%;
`

export const inputThemeLoginStyle = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                size: "small",
            }
        }
    },
    palette: {
        primary: {
            main: '#172C33'
        }
    }
})

