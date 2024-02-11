import { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate, useParams } from 'react-router-dom';

import Button from '@mui/material/Button';

import classes from './style.module.scss';

import toast, { Toaster } from 'react-hot-toast';

import { createStructuredSelector } from 'reselect';
import { selectProjectDetail } from './selector';
import { addNewProject, getDetailProject, setDetailProject, setUpdateProject } from './actions';
import { selectProject } from '@pages/Admin/Project/selector';
import { selectEmployee } from '@pages/Admin/Employee/selector';

const FormTeamProject = ({ project, employee }) => {

  const intl = useIntl();
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    employeeId: '',
    projectId: '',
    name: '',
    role: '',
  });

  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (id) {
  //     dispatch(getDetailProject(id));
  //   } else {
  //     dispatch(setDetailProject(null));

  //   }
  // }, [id]);

  // useEffect(() => {
  //   if (projectDetail) {
  //     setFormData(projectDetail);
  //   } else {
  //     setFormData({
  //       name: '',
  //       description: '',
  //       startDate: '',
  //       endDate: '',
  //       status: '',
  //     });
  //   }
  // }, [projectDetail]);

  const submitData = () => {
    const formDataSend = new FormData();
    formDataSend.append('name', formData.name);
    formDataSend.append('employeeId', formData.employeeId);
    formDataSend.append('projectId', formData.projectId);
    formDataSend.append('role', formData.role);
    
    if (!formData.name) {
      toast.error('Name cannot be empty');
    } else if (!formData.employeeId) {
      toast.error('Employee cannot be empty');
    } else if (!formData.projectId) {
      toast.error('Project cannot be empty');
    } else if (!formData.role) {
      toast.error('Role cannot be empty');
    }
    else {
      if (id) {
        dispatch(
          setUpdateProject(id,
            formDataSend, () => {
              navigate('/admin/project');
            }
          )
        )
      } else {
        dispatch(
          addNewProject(formDataSend, () => {
            navigate('/admin/team-project');
          })
        );
      }
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        {id ? <FormattedMessage id="app_text_team_project_update" /> : <FormattedMessage id="app_text_team_project_create" />}
      </div>

      <div className={classes.containercontent}>
        <div className={classes.subTitle}>
          <FormattedMessage id="app_text_team_project_name_team" />
        </div>
        <input
          placeholder={intl.formatMessage({ id: 'app_text_team_project_name_team' })}
          type="text"
          className={classes.inputTitle}
          value={formData.name}
          onChange={(e) => setFormData((data) => ({ ...data, name: e.target.value }))}
        />
        <div className={classes.subTitle}>
          <FormattedMessage id="app_text_team_project_name_employee" />
        </div>
        <select className={classes.inputTitle} value={formData.employeeId} onChange={(e) => setFormData((data) => ({ ...data, employeeId: e.target.value }))}>
          {employee.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <div className={classes.subTitle}>
          <FormattedMessage id="app_text_team_project_name_project" />
        </div>
        <select className={classes.inputTitle} value={formData.projectId} onChange={(e) => setFormData((data) => ({ ...data, projectId: e.target.value }))}>
          {project.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <div className={classes.subTitle}>
          <FormattedMessage id="app_text_team_project_role" />
        </div>
        <input
          placeholder={intl.formatMessage({ id: 'app_text_team_project_role' })}
          type="text"
          className={classes.inputTitle}
          value={formData.role}
          onChange={(e) => setFormData((data) => ({ ...data, role: e.target.value }))}
        />

        <div className={classes.post}>
          <Button onClick={submitData} variant="contained">
            {id ? <FormattedMessage id="app_button_update" /> : <FormattedMessage id="app_button_add" />}
          </Button>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  project: selectProject,
  employee: selectEmployee
});

export default connect(mapStateToProps)(FormTeamProject);
