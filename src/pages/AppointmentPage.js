import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
// @mui
import {
    Button,
    Container,
    MenuItem,
    Popover,
    Stack,
    Typography
} from '@mui/material';
// components
import Iconify from '../components/iconify';


export default function AppointmentPage() {
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
                <title> Appointment | Wedawaru Plus </title>
            </Helmet>

            <Container>
                <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
                    <Typography variant="h4" gutterBottom>
                        Appointment
                    </Typography>
                    <Button variant="contained" startIcon={<Iconify icon="eva:arrow-down-outline" />} onClick={handleOpenMenu}>
                        Actions on Appointment
                    </Button>
                </Stack>
                
            </Container>

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
                <MenuItem sx={{ color: 'green' }}>
                    <Iconify icon={'eva:plus-outline'} sx={{ mr: 2 }} />
                    Create An Appointment
                </MenuItem>
                <MenuItem sx={{ color: 'blue' }}>
                    <Iconify icon={'eva:edit-fill'} sx={{ mr: 2 }} />
                    Edit An Appointment
                </MenuItem>
                <MenuItem sx={{ color: 'red' }}>
                    <Iconify icon={'eva:checkmark-circle-fill'} sx={{ mr: 2 }} />
                    Verify An Appointment
                </MenuItem>
            </Popover>
        </>
    );
}
