import * as React from 'react';
import { useState } from 'react';

import { FormattedMessage, useIntl } from 'react-intl';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Typography from '@mui/material/Typography';

import classes from './style.module.scss';

const TeamProject = () => {
  const intl = useIntl();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchedVal, setSearchedVal] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: 'no', label: 'No.', minWidth: 10 },
    { id: 'name', label: <FormattedMessage id="app_table_team_name" /> },
    { id: 'position', label: <FormattedMessage id="app_table_employee_name" /> },
    { id: 'department', label: <FormattedMessage id="app_table_department_name" /> },
    { id: 'role', label: <FormattedMessage id="app_table_role" /> },
    { id: 'action', label: <FormattedMessage id="app_table_action" /> },
  ];

  const rows = [
    {
      team_name: 'Engineering Team',
      name: 'John Doe',
      department: 'Engineering',
      role: 'Software Engineer',
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Typography fontWeight={700} variant="h4" mt={5} gutterBottom>
          <FormattedMessage id="app_text_team_project" />
        </Typography>
        <div className={classes.feat}>
          <Button startIcon={<AddBoxIcon />} variant="contained">
            <FormattedMessage id="app_button_add" />
          </Button>
          <TextField
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            label={intl.formatMessage({ id: 'app_placeholder_search' })}
            sx={{ width: '30%' }}
            onChange={(e) => setSearchedVal(e.target.value)}
          />
        </div>
        <Paper sx={{ width: '100%', overflow: 'hidden', mb: 5 }}>
          <TableContainer className={classes.content} sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell key={column.id} align="center" style={{ minWidth: column.minWidth }}>
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .filter(
                    (row) =>
                      !searchedVal.length ||
                      row.name.toString().toLowerCase().includes(searchedVal.toString().toLowerCase())
                  )
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                      <TableCell align="center">{row.team_name}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.department}</TableCell>
                      <TableCell align="center">{row.role}</TableCell>
                      <TableCell align="center">
                        <IconButton aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="update">
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                {rows.length === 0 && searchedVal.length > 0 && (
                  <TableRow>
                    <TableCell align="center" colSpan={columns.length}>
                      <FormattedMessage id="app_no_data" />
                    </TableCell>
                  </TableRow>
                )}
                {rows.length > 0 &&
                  rows.filter(
                    (row) =>
                      !searchedVal.length ||
                      row.name.toString().toLowerCase().includes(searchedVal.toString().toLowerCase())
                  ).length === 0 && (
                    <TableRow>
                      <TableCell align="center" colSpan={columns.length}>
                        <FormattedMessage id="app_no_data_filter" />
                      </TableCell>
                    </TableRow>
                  )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    </div>
  );
};

export default TeamProject;
