import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { RootState } from '../../store';
import { useSelector, useDispatch } from 'react-redux';
import { open, close } from '../../store/features/formSlice';

export default function FormDialog() {

    const open = useSelector((state: RootState) => state.form.value);

    const dispatch = useDispatch();

    return (
        <div>
            <Dialog open={open} onClose={() => dispatch(close())}>
                <DialogTitle>Report a bug</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    Describe the error (when it occurs), as well as the type of your device.
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Text"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => dispatch(close())}>Cancel</Button>
                    <Button onClick={() => dispatch(close())}>Send</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
