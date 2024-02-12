import * as React from 'react';
import { useState } from 'react';

import PropTypes from 'prop-types';

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
import { useNavigate } from 'react-router-dom';
import { useDispatch, connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { useEffect } from 'react';
import { deleteProject, getFetchProject } from './actions';
import { selectProject } from './selector';

import toast, { Toaster } from 'react-hot-toast';
import { selectToken } from '@containers/Client/selectors';
import { jwtDecode } from 'jwt-decode';

const Project = ({ project, token }) => {
  const intl = useIntl();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchedVal, setSearchedVal] = useState('');

  useEffect(() => {
    dispatch(getFetchProject());
  }, [dispatch]);

  useEffect(() => {
    setData(project);
  }, [project]);

  useEffect(() => {
    const dataToken = jwtDecode(token);
    if (dataToken.isAdmin === false) {
      navigate('/user'); // Jika user adalah admin, navigasi ke halaman admin
    }
  }, [navigate]);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: 'no', label: 'No.', minWidth: 10 },
    { id: 'name', label: <FormattedMessage id="app_table_name" /> },
    { id: 'description', label: <FormattedMessage id="app_table_description" /> },
    { id: 'startDate', label: <FormattedMessage id="app_table_start_date" /> },
    { id: 'startEnd', label: <FormattedMessage id="app_table_end_date" /> },
    { id: 'status', label: "Status" },
    { id: 'action', label: <FormattedMessage id="app_table_action" /> },
  ];

  const handleDelete = (id) => {
    dispatch(
      deleteProject(
        String(id),
        () => dispatch(getFetchProject()),
      )
    );
  };

  const handleUpdate = (id) => {
    navigate(`/admin/project/form/${id}`)
  };

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Typography fontWeight={700} variant="h4" mt={5} gutterBottom>
          <FormattedMessage id="app_text_project" />
        </Typography>
        <div className={classes.feat}>
          <Button startIcon={<AddBoxIcon />} onClick={() => navigate("/admin/project/form")} variant="contained">
            <FormattedMessage id="app_button_add" />
          </Button>
          <TextField
            size="small"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
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
                {data
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .filter(
                    (row) =>
                      !searchedVal.length ||
                      row.name.toString().toLowerCase().includes(searchedVal.toString().toLowerCase())
                  )
                  .map((row, index) => (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      <TableCell align="center">{page * rowsPerPage + index + 1}</TableCell>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.description}</TableCell>
                      <TableCell align="center">{(row.startDate).substring(0, 10)}</TableCell>
                      <TableCell align="center">{(row.endDate).substring(0, 10)}</TableCell>
                      <TableCell align="center">{row.status ? <FormattedMessage id="app_table_done" /> : <FormattedMessage id="app_table_proccess" />}</TableCell>
                      <TableCell align="center">
                        <IconButton aria-label="delete" onClick={() => handleDelete(row.id)}>
                          <DeleteIcon />
                        </IconButton>
                        <IconButton aria-label="update" onClick={() => handleUpdate(row.id)}>
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
                {data.length === 0 && searchedVal.length > 0 && (
                  <TableRow>
                    <TableCell align="center" colSpan={columns.length}>
                      <FormattedMessage id="app_no_data" />
                    </TableCell>
                  </TableRow>
                )}
                {data.length > 0 &&
                  data.filter(
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
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
      <Toaster />
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.array,
  token: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  project: selectProject,
  token: selectToken,
});

export default connect(mapStateToProps)(Project);

