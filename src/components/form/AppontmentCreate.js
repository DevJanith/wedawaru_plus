import { Button, Grid, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import Iconify from '../iconify/Iconify';

const validationSchema1 = yup.object({
    contactNo: yup
        .string('Enter Contact No'),
    fullName: yup
        .string('Enter Full Name'),
    gender: yup
        .string('Enter Gender'),
    date: yup
        .string('Enter Date'),
    time: yup
        .string('Enter Time'),
});

export const AppointmentCreate = (props) => {

    const initialValues = {
        contactNo: '',
        fullName: '',
        gender: '',
        date: '',
        time: '',
    }
    const [values, setValues] = useState(initialValues)

    const handleSubmit = (values, { resetForm }) => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
    }

    const formik = useFormik({
        initialValues: values,
        validationSchema: validationSchema1,
        onSubmit: handleSubmit,
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} sx={{ padding: 1 }}>
                    <Grid md={9} sm={12} xs={12} item>
                        <TextField
                            fullWidth
                            id="contactNo"
                            name="contactNo"
                            label="Contact No"
                            value={formik.values.contactNo}
                            onChange={formik.handleChange}
                            error={formik.touched.contactNo && Boolean(formik.errors.contactNo)}
                            helperText={formik.touched.contactNo && formik.errors.contactNo}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            size='small'
                        />
                    </Grid>
                    <Grid md={3} sm={12} xs={12} item>
                        <Button startIcon={<Iconify icon={'eva:checkmark-circle-outline'} sx={{ mr: 2 }} />} color="primary" variant="contained" fullWidth type="button" sx={{ height: "100%" }}>
                            Validate
                        </Button>
                    </Grid>
                    <Grid md={12} sm={12} xs={12} item>
                        <TextField
                            fullWidth
                            id="fullName"
                            name="fullName"
                            label="Full Name (with initials)"
                            value={formik.values.fullName}
                            onChange={formik.handleChange}
                            error={formik.touched.fullName && Boolean(formik.errors.fullName)}
                            helperText={formik.touched.fullName && formik.errors.fullName}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            size='small'
                        />
                    </Grid>
                    <Grid md={12} sm={12} xs={12} item>
                        <TextField
                            fullWidth
                            id="gender"
                            name="gender"
                            label="Gender"
                            value={formik.values.gender}
                            onChange={formik.handleChange}
                            error={formik.touched.gender && Boolean(formik.errors.gender)}
                            helperText={formik.touched.gender && formik.errors.gender}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            size='small'
                        />
                    </Grid>
                    <Grid md={12} sm={12} xs={12} item>
                        <TextField
                            fullWidth
                            id="date"
                            name="date"
                            label="Date"
                            type='date'
                            value={formik.values.date}
                            onChange={formik.handleChange}
                            error={formik.touched.date && Boolean(formik.errors.date)}
                            helperText={formik.touched.date && formik.errors.date}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            size='small'
                        />
                    </Grid>
                    <Grid md={12} sm={12} xs={12} item>
                        <TextField
                            fullWidth
                            id="time"
                            name="time"
                            label="Time"
                            type='time'
                            value={formik.values.time}
                            onChange={formik.handleChange}
                            error={formik.touched.time && Boolean(formik.errors.time)}
                            helperText={formik.touched.time && formik.errors.time}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            size='small'
                        />
                    </Grid>
                    <Grid container spacing={2} sx={{ mt: 3 }}>
                        <Grid md={2} sm={12} xs={12} item />
                        <Grid md={3} sm={12} xs={12} item >
                            <Button onClick={props.handleDialogClose} color="success" size="small" variant="outlined" fullWidth type="button" sx={{ height: "100%" }}>
                                Cancel
                            </Button>
                        </Grid>
                        <Grid md={3} sm={12} xs={12} item >
                            <Button onClick={props.handleDialogClose} color="secondary" size="small" variant="outlined" fullWidth type="button" sx={{ height: "100%" }}>
                                Clear
                            </Button>
                        </Grid>
                        <Grid md={4} sm={12} xs={12} item >
                            <Button onClick={props.handleDialogClose} color="primary" size="small" variant="outlined" fullWidth type="button" sx={{ height: "100%" }}>
                                Book Appointment
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div >
    );
};

