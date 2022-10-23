import { useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Button from '@mui/material/Button';
import BackspaceIcon from "@mui/icons-material/Backspace";
import { useDispatch } from 'react-redux'
import { add } from "../../store/features/calcSlice";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
}));

const obj = [
    {
        item: "AC",
        p: 'Escape'
    },
    {
        item: <BackspaceIcon style={{ height: "18px", width: "18px" }} />,
        p: 'backspace'
    },
    {
        item: "%",
        p: '%'
    },
    {
        item: "÷",
        p: '/'
    },
    {
        item: "7",
        p: '7'
    },
    {
        item: "8",
        p: '8'
    },
    {
        item: "9",
        p: '9'
    },
    {
        item: "×",
        p: '*'
    },
    {
        item: "4",
        p: '4'
    },
    {
        item: "5",
        p: '5'
    },
    {
        item: "6",
        p: '6'
    },
    {
        item: "-",
        p: '-'
    },
    {
        item: "1",
        p: '1'
    },
    {
        item: "2",
        p: '2'
    },
    {
        item: "3",
        p: '3'
    },
    {
        item: "+",
        p: '+'
    },
    {
        item: "±",
        p: '+-'
    },
    {
        item: "0",
        p: '0'
    },
    {
        item: ".",
        p: '.'
    },
    {
        item: "=",
        p: 'enter'
    },
];

export default function FullWidthGrid() {

    const dispatch = useDispatch();

    const calc = (key: string) => {

        const index = obj.findIndex(item => item.p.toLowerCase() == key.toLowerCase());

        dispatch(add(obj[index].p))
    }

    const func = (event: any) => {
        event.stopImmediatePropagation();
        if ((event.key).match(/[0-9%\/*\-+\(\)=.]|Backspace|Enter|Escape/)) calc(event.key);
    }

    useEffect(() => {
        document.addEventListener('keydown', event => func(event));
        return () => {
            document.removeEventListener('keydown', event => func(event));
        }
    })
    

    const buttonStyle = { 
        fontSize: '22px', 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer', 
        height: '70%',
        width: '70%',
        border: '1px solid'
    }

    return (
        <Box
            sx={{
                display: "flex",
                flexGrow: 1
            }}
        >
            <Grid container spacing={2} style={{margin: '0', height: '100%'}} >

                {obj.map((item: any, index: any) => {
                    return (
                        <Grid key={index} xs={3} md={3} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                            <Button size="large" style={buttonStyle} onClick={ () => dispatch(add(item.p)) }>{item.item}</Button>
                        </Grid>
                    );
                })}

            </Grid>
        </Box>
    );
}
