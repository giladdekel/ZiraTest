// import Link from 'next/link'
// import articleStyles from '../styles/Article.module.css'
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

const TableItem = ({ item }) => {
console.log('item :', item.name);
  return (


<h1>{item.name}</h1>
    // console.log('line :', line);


    //     <TableRow key={line.name}>
    //   <TableCell component="th" scope="row">
    //     {line.name}
    //   </TableCell>
    //   <TableCell>{line.type}</TableCell>
    //   <TableCell align="right">{line.site}</TableCell>
    //   <TableCell align="right">{line.status}</TableCell>
    //  </TableRow> 

  
  );
};

export default TableItem;
