import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import { AppointmentCard } from '../card/AppointmentCard';
import Iconify from '../iconify/Iconify';

const validationSchema1 = yup.object({
    contactNo: yup
        .string('Enter Contact No')
        .required('Required Contact No Field'),
    fullName: yup
        .string('Enter Full Name')
        .required('Required Full Name Field'),
    gender: yup
        .string('Enter Gender')
        .required('Required Gender Field'),
    date: yup
        .string('Enter Date')
        .required('Required Date Field'),
    time: yup
        .string('Enter Time')
        .required('Required Time Field'),
});

export const AppointmentCreate = (props) => {

    const initialValues = {
        contactNo: '',
        fullName: '',
        gender: 'Male',
        date: '',
        time: '',
    }
    const [values, setValues] = useState(initialValues)

    const handleSubmit = (values, { resetForm }) => {
        // alert(JSON.stringify(values, null, 2));

        props.handleDialogClose();

        setTimeout(() => {
            props.handleDialogClickOpen({
                title: "",
                component: <AppointmentCard
                    handleDialogClose={props.handleDialogClose}
                    data={{ id: 1, appId: "454532", appNo: "01", fullNameWithInitials: "A B C Peprera", gender: "Male", contactNo: "0718078368", status: "COMPLETED", date: "2023-04-08", time: "11:00:00", action: "" }}
                    action={() => {
                        return <>
                            <Grid md={5} sm={12} xs={12} item />
                            <Grid md={3} sm={12} xs={12} item >
                                <Button onClick={props.handleDialogClose} color="success" size="small" variant="outlined" fullWidth type="button" sx={{ height: "100%" }}>
                                    Cancel
                                </Button>
                            </Grid>
                            <Grid md={4} sm={12} xs={12} item >
                                <Button onClick={props.handleDialogClose} color="primary" size="small" variant="outlined" fullWidth type="button" sx={{ height: "100%" }}>
                                    Confirm Booking
                                </Button>
                            </Grid>
                        </>
                    }
                    }
                />,
            });
        }, 100); // Change the delay time in milliseconds (ms) as needed 
        resetForm();
    }

    const formik = useFormik({
        initialValues: values,
        validationSchema: validationSchema1,
        onSubmit: handleSubmit,
    });

    // option fields
    const dateOptions = [
        { key: 1, value: "date-option-1" },
        { key: 2, value: "date-option-2" },
    ];

    const timeOptions = [
        { key: 1, value: "time-option-1" },
        { key: 2, value: "time-option-2" },
    ];

    const genderOptions = [
        { key: 1, value: "Male" },
        { key: 2, value: "Female" },
    ];

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
                        <FormControl fullWidth error={formik.touched.gender && Boolean(formik.errors.gender)} size='small'>
                            <InputLabel shrink htmlFor="gender">
                                Gender
                            </InputLabel>
                            <Select
                                label="Gender"
                                id="gender"
                                name="gender"
                                value={formik.values.gender}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    Select gender
                                </MenuItem>
                                {genderOptions.map(option => (
                                    <MenuItem key={option.key} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <div
                            style={{
                                color: "#BF3D3D",
                                lineHeight: "1.5",
                                fontSize: "0.75rem",
                                fontFamily: "Public Sans,sans-serif",
                                fontWeight: "400",
                                textAlign: "left",
                                marginTop: "4px",
                                marginRight: "14px",
                                marginBottom: "0",
                                marginLeft: "14px",
                            }}
                        >{formik.touched.gender && formik.errors.gender}</div>
                    </Grid>
                    <Grid md={12} sm={12} xs={12} item>
                        <FormControl fullWidth error={formik.touched.date && Boolean(formik.errors.date)} size='small'>
                            <InputLabel shrink htmlFor="date">
                                Date
                            </InputLabel>
                            <Select
                                label="Date"
                                id="date"
                                name="date"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    Select date
                                </MenuItem>
                                {dateOptions.map(option => (
                                    <MenuItem key={option.key} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <div
                            style={{
                                color: "#BF3D3D",
                                lineHeight: "1.5",
                                fontSize: "0.75rem",
                                fontFamily: "Public Sans,sans-serif",
                                fontWeight: "400",
                                textAlign: "left",
                                marginTop: "4px",
                                marginRight: "14px",
                                marginBottom: "0",
                                marginLeft: "14px",
                            }}
                        >{formik.touched.date && formik.errors.date}</div>
                    </Grid>
                    <Grid md={12} sm={12} xs={12} item sx={{ mb: 3 }}>
                        <FormControl fullWidth error={formik.touched.time && Boolean(formik.errors.time)} size='small'>
                            <InputLabel shrink htmlFor="time">
                                Time
                            </InputLabel>
                            <Select
                                label="Time"
                                id="time"
                                name="time"
                                value={formik.values.time}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    Select time
                                </MenuItem>
                                {timeOptions.map(option => (
                                    <MenuItem key={option.key} value={option.value}>
                                        {option.value}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <div
                            style={{
                                color: "#BF3D3D",
                                lineHeight: "1.5",
                                fontSize: "0.75rem",
                                fontFamily: "Public Sans,sans-serif",
                                fontWeight: "400",
                                textAlign: "left",
                                marginTop: "4px",
                                marginRight: "14px",
                                marginBottom: "0",
                                marginLeft: "14px",
                            }}
                        >{formik.touched.time && formik.errors.time}</div>
                    </Grid>
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
                        <Button color="primary" size="small" variant="outlined" fullWidth type="submit" sx={{ height: "100%" }}>
                            Book Appointment
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </div >
    );
};

