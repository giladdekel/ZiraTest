// import TableItem from './ TableItem'
// import articleStyles from '../styles/Article.module.css'
import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";



// const SystemsList = ({ systems }) => {
//   return (
//     <div>
//       {/* {articles.map((article) => (
//         <ArticleItem article={article} />
//       ))} */}

//     </div>
//   );
// };

export default function SystemsList({ systems }) {
  // console.log("systems :", systems.data[0].name);




const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(name, type, site, status) {
  return { name, type, site, status };
}

const rows = [];


  systems.data.map((system) => {
    console.log("systemmmmmmmmm :", system.name);

    rows.push(createData(
      `${system.name}`,
      `${system.type.name}`,
      `${system.site.name}`,
      `${system.status}`
    ))
  });

// const rows = [
//   createData(`${systems.data[0].name}`, 159, 6.0, 24, 4.0),
//   createData(`${systems.data[0].type.name}`, 237, 9.0, 37, 4.3),
//   createData(`${systems.data[0].site.name}`, 262, 16.0, 24, 6.0),
//   createData(`${systems.data[0].status}`, 305, 3.7, 67, 4.3),
// ];
const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});











  const classes = useStyles();




  

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="center">Type</StyledTableCell>
            <StyledTableCell align="center">Site</StyledTableCell>
            <StyledTableCell align="center">Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="center">{row.type}</StyledTableCell>
              <StyledTableCell align="center">{row.site}</StyledTableCell>
              <StyledTableCell align="center">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
