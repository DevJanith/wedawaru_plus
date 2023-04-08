import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import {
    Button,
    Card,
    CardHeader,
    Container,
    MenuItem,
    Popover,
    Stack,
    Typography
} from '@mui/material';
// components
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DialogModel from '../components/dialog/dialog';
import { AppointmentCreate } from '../components/form/AppontmentCreate';
import { AppointmentEdit } from '../components/form/AppontmentEdit';
import { AppointmentValidate } from '../components/form/AppontmentValidate';
import { AppointmentView } from '../components/form/AppontmentView';
import Iconify from '../components/iconify';
import { SearchFilter } from '../components/search-filter/SearchFilter';
import DataTable from '../components/table/DataTable';

export default function AppointmentPage() {
    // model 
    const [open, setOpen] = useState(null);

    const handleOpenMenu = (event) => {
        setOpen(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setOpen(null);
    };

    // dialog action
    const handleDialogClickOpen = (props) => {
        setDialogCom({
            dialogTitle: props.title,
            dialogForm: props.component,
            dialogOpen: true,
            handleDialogOpen: handleDialogClickOpen,
            handleDialogClose: handleDialogClickClose
        })
        handleCloseMenu()
    };

    const handleDialogClickClose = () => {
        setDialogCom({
            dialogTitle: undefined,
            dialogForm: undefined,
            dialogOpen: false,
            handleDialogOpen: handleDialogClickOpen,
            handleDialogClose: handleDialogClickClose,
        })
    };

    const [dialogCom, setDialogCom] = useState({
        dialogTitle: undefined,
        dialogForm: undefined,
        dialogOpen: false,
        handleDialogOpen: handleDialogClickOpen,
        handleDialogClose: handleDialogClickClose,
    })

    return (
        <>
            <Helmet>
                <title> Appointment List | Wedawaru Plus </title>
            </Helmet>

            <Container maxWidth="100%">
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Appointment List
                    </Typography>
                    <Button variant="contained" startIcon={<Iconify icon="eva:arrow-down-outline" />} onClick={handleOpenMenu}>
                        Actions on Appointment
                    </Button>
                </Stack>
            </Container>

            <Card sx={{ marginBottom: "3%" }}>
                <CardHeader
                    title={"Appointment List Search & Filter"}
                />
                <SearchFilter />
            </Card>

            <Card>
                <DataTable />
            </Card>

            <Popover
                open={Boolean(open)}
                anchorEl={open}
                onClose={handleCloseMenu}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                PaperProps={{
                    sx: {
                        p: 1,
                        width: 250,
                        '& .MuiMenuItem-root': {
                            px: 1,
                            typography: 'body2',
                            borderRadius: 0.75,
                        },
                    },
                }}
            >
                <MenuItem sx={{
                    border: '1px solid green', color: "green",
                    '&:hover': {
                        backgroundColor: 'green',
                        color: "white"
                    },
                    mb: 1
                }}
                    onClick={() => {
                        handleDialogClickOpen({
                            title: "Make An Appointment",
                            component: <AppointmentCreate handleDialogClose={handleDialogClickClose} />
                        })
                    }}
                >
                    <Iconify icon={'eva:plus-outline'} sx={{ mr: 2 }} />
                    Make An Appointment
                </MenuItem>
                <MenuItem sx={{
                    border: '1px solid blue', color: "blue",
                    '&:hover': {
                        backgroundColor: 'blue',
                        color: "white"
                    },
                    mb: 1
                }}
                    onClick={() => {
                        handleDialogClickOpen({
                            title: "Edit An Appointment",
                            component: <AppointmentEdit handleDialogClose={handleDialogClickClose} />
                        })
                    }}
                >
                    <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
                    Edit An Appointment
                </MenuItem>
                <MenuItem sx={{
                    border: '1px solid orange', color: "orange",
                    '&:hover': {
                        backgroundColor: 'orange',
                        color: "white"
                    },
                    mb: 1
                }}
                    onClick={() => {
                        handleDialogClickOpen({
                            title: "View An Appointment",
                            component: <AppointmentView handleDialogClose={handleDialogClickClose} />
                        })
                    }}
                >
                    <Iconify icon={'eva:eye-outline'} sx={{ mr: 2 }} />
                    View An Appointment
                </MenuItem>
                <MenuItem sx={{
                    border: '1px solid red', color: "red",
                    '&:hover': {
                        backgroundColor: 'red',
                        color: "white"
                    },
                }}
                    onClick={() => {
                        handleDialogClickOpen({
                            title: "Validate An Appointment",
                            component: <AppointmentValidate handleDialogClose={handleDialogClickClose} />
                        })
                    }}
                >
                    <Iconify icon={'eva:checkmark-circle-fill'} sx={{ mr: 2 }} />
                    Verify An Appointment
                </MenuItem>
            </Popover>
            
            {dialogCom.dialogOpen && <>
                <DialogModel
                    dialogTitle={dialogCom.dialogTitle}
                    dialogForm={dialogCom.dialogForm}
                    dialogOpen={dialogCom.dialogOpen}
                    handleDialogOpen={dialogCom.handleDialogOpen}
                    handleDialogClose={dialogCom.handleDialogClose}
                />
            </>}
        </>
    );
}
