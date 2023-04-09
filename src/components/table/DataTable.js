import { Button, Chip } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

// const columns = [
//   { field: 'id', headerName: 'ID', width: 100 },
//   { field: 'firstName', headerName: 'First name', width: 200 },
//   { field: 'lastName', headerName: 'Last name', width: 200 },
//   {
//     field: 'age',
//     headerName: 'Age',
//     type: 'number',
//     width: 100,
//   },
//   {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 300,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
// ];

// const rows = [
//   { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
//   { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
//   { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
//   { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
//   { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
//   { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
//   { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
//   { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
//   { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
// ];


const columns = [
  { field: 'appId', headerName: 'App ID', width: 125 },
  { field: 'appNo', headerName: 'App No', width: 125 },
  { field: 'fullNameWithInitials', headerName: 'Full Name (with initials)', width: 200 },
  { field: 'gender', headerName: 'Gender', width: 150 },
  { field: 'contactNo', headerName: 'Contact No', width: 150 },
  {
    field: 'status', headerName: 'Status', width: 150,
    renderCell: (params) => {
      return (
        <>
          <Chip label={params.row.status || ''} variant="outlined" sx={{ width: "100%" }} />
        </>
      )
    },
  },
  // { field: 'date', headerName: 'Date', width: 150 },
  // { field: 'time', headerName: 'Time', width: 150 },
  {
    field: 'action', headerName: 'Action', width: 230,
    renderCell: (params) => {
      if (typeof params.row.status === "undefined") {
        return (
          <>
            <Button fullWidth size='small' variant='contained' disabled>
              N/A
            </Button>
          </>
        )
      }
      if (params.row.status === "PENDING") {
        return (
          <>
            <Button fullWidth size='small' variant='contained' color='secondary' >
              Check In
            </Button>
          </>
        )
      }
      if (params.row.status === "COMPLETED") {
        return (
          <>
            <Button fullWidth size='small' variant='contained' disabled>
              Checked Out
            </Button>
          </>
        )
      }
      if (params.row.status === "HOLD") {
        return (
          <>
            <Button fullWidth size='small' variant='contained' disabled>
              HOLD
            </Button>
          </>
        )
      }
      return null
    },
  },
]

const rows = [
  { id: 1, appId: "454532", appNo: "01", fullNameWithInitials: "A B C Peprera", gender: "Male", contactNo: "0718078368", status: "COMPLETED", date: "2023-04-08", time: "11:00:00", action: "" },
  { id: 2, appId: "454533", appNo: "02", fullNameWithInitials: "A R C Karunarathna", gender: "Male", contactNo: "0718078363", status: "COMPLETED", date: "2023-04-08", time: "11:15:00", action: "" },
  { id: 3, appId: "454534", appNo: "03", fullNameWithInitials: "G B C Gamage", gender: "Male", contactNo: "0718078365", status: "HOLD", date: "2023-04-08", time: "11:30:00", action: "" },
  { id: 4, appId: "454535", appNo: "04", fullNameWithInitials: "H B C Mahipala", gender: "Male", contactNo: "0718078366", status: "COMPLETED", date: "2023-04-08", time: "11:45:00", action: "" },
  { id: 5, appId: "454536", appNo: "05", fullNameWithInitials: "A I C Thissa", gender: "Male", contactNo: "0718078367", status: "HOLD", date: "2023-04-08", time: "13:00:00", action: "" },
  { id: 6, appId: "454537", appNo: "06", fullNameWithInitials: "R G C Gunawardhana", gender: "Male", contactNo: "0718078361", status: "PENDING", date: "2023-04-08", time: "13:15:00", action: "" },

]

export default function DataTable() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // checkboxSelection
      />
    </div>
  );
}
