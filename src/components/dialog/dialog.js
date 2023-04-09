import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import * as React from 'react';

const Transition = React.forwardRef((props, ref) => {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogModel(props) {

    return (
        <div>
            <Dialog
                open={props.dialogOpen}
                fullWidth
                TransitionComponent={Transition}
                keepMounted
                onClose={props.handleDialogClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{typeof props.dialogTitle === "undefined" ? "N/A" : props.dialogTitle}</DialogTitle>
                <DialogContent>
                    {typeof props.dialogForm === "undefined" ? <>N/A</> : <>{props.dialogForm}</>}
                </DialogContent>
            </Dialog>
        </div>
    );
}
