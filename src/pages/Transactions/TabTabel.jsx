import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function BasicTable({rows}) {
  return (
    <TableContainer component={Paper} sx={{
      display:{
        xs:"none",
        sm:"block"
      }
    }}>
      {" "}
      <Table aria-label="simple table">
        {" "}
        <TableHead>
          {" "}
          <TableRow>
            {" "}
            <TableCell
              sx={{
                fontSize: {
                  xs: "12px", // Default font size for extra small screens
                  sm: "14px", // Font size for small screens and up
                  lg: "16px", // Font size for large screens and up
                  xl: "20px", // Font size for extra large screens and up
                },
                textAlign: "center", // Align text to the center
              }}
            >
              {" "}
              Id{" "}
            </TableCell>{" "}
            <TableCell sx={{
                fontSize: {
                  xs: "12px", // Default font size for extra small screens
                  sm: "14px", // Font size for small screens and up
                  lg: "16px", // Font size for large screens and up
                  xl: "20px", // Font size for extra large screens and up
                },
                textAlign: "center", // Align text to the center
              }} align="center">Date</TableCell>{" "}
            <TableCell sx={{
                fontSize: {
                  xs: "12px", // Default font size for extra small screens
                  sm: "14px", // Font size for small screens and up
                  lg: "16px", // Font size for large screens and up
                  xl: "20px", // Font size for extra large screens and up
                },
                textAlign: "center", // Align text to the center
              }} align="center">Type</TableCell>{" "}
            <TableCell sx={{
                fontSize: {
                  xs: "12px", // Default font size for extra small screens
                  sm: "14px", // Font size for small screens and up
                  lg: "16px", // Font size for large screens and up
                  xl: "20px", // Font size for extra large screens and up
                },
                textAlign: "center", // Align text to the center
              }} align="center">Amount</TableCell>{" "}
            <TableCell sx={{
                fontSize: {
                  xs: "12px", // Default font size for extra small screens
                  sm: "14px", // Font size for small screens and up
                  lg: "16px", // Font size for large screens and up
                  xl: "20px", // Font size for extra large screens and up
                },
                textAlign: "center", // Align text to the center
              }} align="center">Status</TableCell>{" "}
          </TableRow>{" "}
        </TableHead>{" "}
        <TableBody>
          {" "}
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {" "}
              <TableCell component="th" scope="row" align="center">
                {" "}
                {row.id}{" "}
              </TableCell>{" "}
              <TableCell align="center">{row.date}</TableCell>{" "}
              <TableCell align="center">{row.type}</TableCell>{" "}
              <TableCell align="center">{row.amount}</TableCell>{" "}
              <TableCell align="center">{row.status}</TableCell>{" "}
            </TableRow>
          ))}{" "}
        </TableBody>{" "}
      </Table>{" "}
    </TableContainer>
  );
};
