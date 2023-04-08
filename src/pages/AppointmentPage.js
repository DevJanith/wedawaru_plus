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
                }}>
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
                }}>
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
                }}>
                    <Iconify icon={'eva:eye-outline'} sx={{ mr: 2 }} />
                    View An Appointment
                </MenuItem>
                <MenuItem sx={{
                    border: '1px solid red', color: "red",
                    '&:hover': {
                        backgroundColor: 'red',
                        color: "white"
                    },
                }}>
                    <Iconify icon={'eva:checkmark-circle-fill'} sx={{ mr: 2 }} />
                    Verify An Appointment
                </MenuItem>
            </Popover>
        </>
    );
}
