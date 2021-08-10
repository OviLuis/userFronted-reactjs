import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import logo from './logo.svg';
import './App.css';

import { UserAPI } from './api/user.api' ;
import { UserDto } from './api/dto/user.dto';

import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function App() {

  const classes = useStyles();

  const [users, setUsers] = useState<UserDto[]>([]);

  useEffect(() => {
    async function fetchAll(){
      const res = await UserAPI.getAll();

      setUsers(res);
   
    }
    fetchAll();
  }, [])


  return (
    <div className="App"> 
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" style={{flexGrow: 1}}>
            USER MANAGEMENT
          </Typography>
        </Toolbar>
      </AppBar>  

      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">NAME</TableCell>
            <TableCell align="right">EMAIL</TableCell>
            <TableCell align="right">PHONE</TableCell>
            <TableCell align="right">USERNAME</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell component="th" scope="row">{user.id}</TableCell>
              <TableCell align="right">{user.name}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              <TableCell align="right">{user.username}</TableCell>
              <TableCell align="right">
                <Button color="inherit">View</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      
    </div>
  );
}

export default App;
