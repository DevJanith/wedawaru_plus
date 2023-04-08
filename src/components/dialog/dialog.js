import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

// const Transition = React.forwardRef(function Transition(props, ref) {
//     return <Slide direction="up" ref={ref} {...props} />;
// });

export default function DialogModel(props) { 

    return (
        <div>
            <Dialog
                open={props.dialogOpen}
                fullWidth
                // TransitionComponent={Transition}
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
