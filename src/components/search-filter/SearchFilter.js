import { Button, Collapse, Grid, TextField } from '@mui/material';
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

export const SearchFilter = () => {

    const [checked, setChecked] = useState(false)

    const handleChange = () => {
        setChecked(prev => !prev)
    }

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

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Grid container spacing={2} sx={{ padding: 3 }}>
                    <Grid md={8} item>
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
                    <Grid md={1} item>
                        <Button color="primary" variant="contained" fullWidth type="button" sx={{ height: "100%" }} onClick={handleChange}>
                            <Iconify icon={'eva:options-2-outline'} />
                        </Button>
                    </Grid>
                    <Grid md={3} item>
                        <Button startIcon={<Iconify icon={'eva:search-fill'} sx={{ mr: 2 }} />} color="primary" variant="contained" fullWidth type="submit" sx={{ height: "100%" }}>
                            Search
                        </Button>
                    </Grid>
                </Grid>
                <Collapse in={checked}>
                    <Grid container spacing={2} sx={{ padding: 3 }}>
                        <Grid md={6} item>
                            <TextField
                                fullWidth
                                id="date"
                                name="date"
                                label="Date"
                                type="date"
                                value={formik.values.date}
                                onChange={formik.handleChange}
                                error={formik.touched.date && Boolean(formik.errors.date)}
                                helperText={formik.touched.date && formik.errors.date}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid md={6} item>
                            <TextField
                                fullWidth
                                id="time"
                                name="time"
                                label="Time"
                                type="time"
                                value={formik.values.time}
                                onChange={formik.handleChange}
                                error={formik.touched.time && Boolean(formik.errors.time)}
                                helperText={formik.touched.time && formik.errors.time}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                        <Grid md={9} item />
                        <Grid md={3} item>
                            <Button startIcon={<Iconify icon={'eva:search-fill'} sx={{ mr: 2 }} />} color="primary" variant="contained" fullWidth type="submit" sx={{ height: "100%" }}>
                                Filter
                            </Button>
                        </Grid>
                    </Grid>
                </Collapse>
            </form>
        </div >
    );
};

