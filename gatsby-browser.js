import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";

const theme = createMuiTheme({
    palette: {
        background: {
            default: "#222E4F "
        },
        primary: {
            main: "#283593",
        },
        secondary: {
            main: "#FFFFFF"
        }
    },
});

export const wrapRootElement = ({ element }) =>
	<ThemeProvider theme={theme}>
        <CssBaseline />
		{element}
	</ThemeProvider>;