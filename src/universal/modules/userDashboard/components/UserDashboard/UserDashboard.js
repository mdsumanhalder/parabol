import React, {PropTypes} from 'react';
import {
  DashContent,
  DashHeader,
  DashHeaderInfo,
  DashMain,
  dashTimestamp
} from 'universal/components/Dashboard';
import look, {StyleSheet} from 'react-look';
import UserActions from 'universal/modules/userDashboard/components/UserActions/UserActions';
import UserColumnsContainer from 'universal/modules/userDashboard/containers/UserColumns/UserColumnsContainer';
import UserProjectsHeader from '../UserProjectsHeader/UserProjectsHeader';
import getRallyLink from '../../helpers/getRallyLink';

const UserDashboard = () => {
  const {styles} = UserDashboard;
  return (
    <DashMain>
      <DashHeader>
        <DashHeaderInfo title="My Dashboard">
          {dashTimestamp} • <span className={styles.crayCrayHover}>{getRallyLink()}!</span>
        </DashHeaderInfo>
      </DashHeader>
      <DashContent padding="0">
        <div className={styles.root}>
          <div className={styles.actionsLayout}>
            <UserActions />
          </div>
          <div className={styles.projectsLayout}>
            <UserProjectsHeader />
            <UserColumnsContainer/>
          </div>
        </div>
      </DashContent>
    </DashMain>
  );
};

UserDashboard.propTypes = {
  projects: PropTypes.array
};

UserDashboard.styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    width: '100%'
  },

  actionsLayout: {
    width: '15rem'
  },

  projectsLayout: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    paddingLeft: '1rem'
  },

  crayCrayHover: {
    color: 'inherit'
  }
});

export default look(UserDashboard);
