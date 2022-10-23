import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Menu from '../Menu/Menu';
import Calculator from '../Calculator/Calculator';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import Converter from '../Converter/Converter';
import Sidebar from '../Sidebar/Sidebar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { grey, blue } from '@mui/material/colors';


export default function App() {

    const mode = useSelector((state: RootState) => state.mode.value);

    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === 'light'
                        ? {
                            // palette values for light mode
                            primary: blue,
                            divider: blue[400],
                            text: {
                                primary: grey[900],
                                secondary: grey[800],
                            },
                            background: {
                                // default: grey[900],
                                paper: "#cfe8fc",
                            },
                        }
                        : {
                            // palette values for dark mode
                            primary: grey,
                            divider: grey[700],
                            background: {
                                default: grey[900],
                                paper: grey[900],
                            },
                            text: {
                                primary: '#fff',
                                secondary: grey[500],
                            },
                        }),
                },
            }),
        [mode],
    );

    const menuMode = useSelector((state: RootState) => state.menu.value);

    const sidebarState = useSelector((state: RootState) => state.sidebar.value);

    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="sm" style={{ padding: '0' }} >
                    <Box sx={{ bgcolor: 'background.paper', height: '100vh', display: 'flex', flexDirection: 'column' }}>
                        {sidebarState ? <Sidebar /> : ""}
                        <Menu />
                        {
                            menuMode === "calculator"
                                ? <Calculator />
                                : <Converter />
                        }
                    </Box>
                </Container>
            </ThemeProvider>


        </>
    );
}
