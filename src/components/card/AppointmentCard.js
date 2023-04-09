import { Button, Grid } from '@mui/material';

export const AppointmentCard = (props) => {
    return (
        <>
            <Grid container spacing={2} sx={{ padding: 1 }}>
                <Grid md={6} item>App Id</Grid>
                <Grid md={6} item>{typeof props?.data?.appId === "undefined" ? "N/A" : props?.data?.appId}</Grid>
                <Grid md={6} item>App No</Grid>
                <Grid md={6} item>{typeof props?.data?.appNo === "undefined" ? "N/A" : props?.data?.appNo}</Grid>
                <Grid md={6} item>Full Name</Grid>
                <Grid md={6} item>{typeof props?.data?.fullNameWithInitials === "undefined" ? "N/A" : props?.data?.fullNameWithInitials}</Grid>
                <Grid md={6} item>Gender</Grid>
                <Grid md={6} item>{typeof props?.data?.gender === "undefined" ? "N/A" : props?.data?.gender}</Grid>
                <Grid md={6} item>ContactNo</Grid>
                <Grid md={6} item>{typeof props?.data?.contactNo === "undefined" ? "N/A" : props?.data?.contactNo}</Grid>
                <Grid md={6} item>Date</Grid>
                <Grid md={6} item>{typeof props?.data?.date === "undefined" ? "N/A" : props?.data?.date}</Grid>
                <Grid md={6} item>Time</Grid>
                <Grid md={6} item>{typeof props?.data?.time === "undefined" ? "N/A" : props?.data?.time}</Grid>
                {props.action ? <><props.action /></> : <>
                    <Grid md={9} sm={12} xs={12} item />
                    <Grid md={3} sm={12} xs={12} item >
                        <Button onClick={props.handleDialogClose} color="success" size="small" variant="outlined" fullWidth type="button" sx={{ height: "100%" }}>
                            Cancel
                        </Button>
                    </Grid>
                </>}
            </Grid>

        </>
    );
};

