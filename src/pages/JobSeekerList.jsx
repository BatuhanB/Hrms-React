import React, { useState, useEffect } from "react";
import { Table, Button, Header, Icon } from "semantic-ui-react";
import JobSeekerService from "../services/jobSeekerService";

export default function JobSeekerList() {
  const [jobSeekers, setJobSeeker] = useState([]);
  const colors = ["red",]
  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
      .getJobSeeker()
      .then((result) => setJobSeeker(result.data.data));
  }, []);

  return (
    <div>
      <Header as="h3" icon textAlign="center">
        <Icon name="list alternate outline" />
        <Header.Content>Job Seeker List</Header.Content>
      </Header>
      {colors.map((color) => (
      <Table  color={color} key={color}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>JFirst Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Identity Number</Table.HeaderCell>
            <Table.HeaderCell>Date Of Birth</Table.HeaderCell>
            <Table.HeaderCell>VerifyMernis</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobSeekers.map((jobSeeker) => (
            <Table.Row key={jobSeeker.id}>
              <Table.Cell>{jobSeeker.firstName}</Table.Cell>
              <Table.Cell>{jobSeeker.lastName}</Table.Cell>
              <Table.Cell>{jobSeeker.identityNumber}</Table.Cell>
              <Table.Cell>{jobSeeker.dateOfBirth}</Table.Cell>
              <Table.Cell>{jobSeeker.verifyMernis.toString()}</Table.Cell>
              <Table.Cell>
                <Button>View</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      ))}
    </div>
  );
}
