import React from "react";
import { Grid } from "semantic-ui-react";
import EmployeeList from "../pages/EmployeeList";
import EmployerList from "../pages/EmployerList";
import JobAdverList from "../pages/JobAdverList";
import JobPositionList from "../pages/JobPositionList";
import JobSeekerList from "../pages/JobSeekerList";

export default function Section() {
  return (
    <div>
      <Grid columns={4} celled="internally" divided="vertically" >
        <Grid.Row>
          <Grid.Column width={16}>
            <EmployeeList />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <EmployerList />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <JobPositionList />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <JobAdverList/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <JobSeekerList />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
