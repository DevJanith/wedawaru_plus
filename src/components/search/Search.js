import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as yup from 'yup';
import Iconify from '../iconify/Iconify';

const validationSchema1 = yup.object({
    search: yup
        .string('Enter Search Query'),
    // .when(['date', 'time'], {
    //     is: (date, time) => !date && !time,
    //     then: yup.string().required('Search Query is required'),
    //     otherwise: yup.string()
    // }),
    date: yup
        .string('Enter Date'),
    // .when('search', {
    //     is: (search) => !search,
    //     then: yup.string().required('Date is required'),
    //     otherwise: yup.string()
    // }),
    time: yup
        .string('Enter time')
    // .when('search', {
    //     is: (search) => !search,
    //     then: yup.string().required('Time is required'),
    //     otherwise: yup.string()
    // })
});

export const Search = () => {

    const initialValues = {
        search: '',
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

    // option fields
    const dateOptions = [
        { key: 1, value: "date-option-1" },
        { key: 2, value: "date-option-2" },
    ];

    const timeOptions = [
        { key: 1, value: "time-option-1" },
        { key: 2, value: "time-option-2" },
    ];

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} sx={{ padding: 3 }}>
                    <Grid md={8} sm={12} xs={12} item>
                        <TextField
                            fullWidth
                            id="search"
                            name="search"
                            label="Search"
                            placeholder='Search by Appointment Id, No, Name, Contact No ... '
                            value={formik.values.search}
                            onChange={formik.handleChange}
                            error={formik.touched.search && Boolean(formik.errors.search)}
                            helperText={formik.touched.search && formik.errors.search}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            size='small'
                        />
                    </Grid>
                    <Grid md={4} sm={9} xs={9} item>
                        <Button startIcon={<Iconify icon={'eva:search-fill'} sx={{ mr: 1 }} />} color="primary" variant="contained" fullWidth type="submit" sx={{ height: "100%" }}>
                            Search
                        </Button>
                    </Grid>
                    <Grid md={5} sm={5} xs={5} item>
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
                    <Grid md={5} sm={5} xs={5} item>
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
                    <Grid md={2} sm={12} xs={12} item>
                        <Button startIcon={<Iconify icon={'eva:pantone-fill'} sx={{ mr: 1 }} />} color="primary" variant="outlined" fullWidth type="button" sx={{ height: "100%" }}>
                            Today
                        </Button>
                    </Grid>
                </Grid>
            </form >
        </div >
    );
};

