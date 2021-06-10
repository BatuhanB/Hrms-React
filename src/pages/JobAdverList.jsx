import React, { useState, useEffect } from "react";
import { Table, Button,Header,Icon } from "semantic-ui-react";
import JobAdvertService from "../services/jobAdvertService";

export default function JobAdverList() {
  const [jobAdverts, setJobAdvert] = useState([]);
  const colors = ["red",]
  useEffect(() => {
    let jobAdvertService = new JobAdvertService();
    jobAdvertService
      .getJobAdvertList()
      .then((result) => setJobAdvert(result.data.data));
  }, []);

  return (
    <div>
        <Header as="h3" icon textAlign='center'>
      <Icon name="list alternate outline" />
        <Header.Content >Job Advert List</Header.Content>
      </Header>
      {colors.map((color) => (
      <Table  color={color} key={color}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Salary</Table.HeaderCell>
            <Table.HeaderCell>Open Position Count</Table.HeaderCell>
            <Table.HeaderCell>Publish Date</Table.HeaderCell>
            <Table.HeaderCell>Deadline</Table.HeaderCell>
            <Table.HeaderCell>Is Open</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdverts.map((jobAdvert) => (
            <Table.Row key={jobAdvert.id}>
              <Table.Cell>{jobAdvert.job.jobTitle}</Table.Cell>
              <Table.Cell>{jobAdvert.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvert.city.name}</Table.Cell>
              <Table.Cell>{jobAdvert.description}</Table.Cell>
              <Table.Cell>
                {jobAdvert.salaryMin}TL - {jobAdvert.salaryMax}TL
              </Table.Cell>
              <Table.Cell>{jobAdvert.openJobCounter}</Table.Cell>
              <Table.Cell>{jobAdvert.publishDate}</Table.Cell>
              <Table.Cell>{jobAdvert.applicationDeadline}</Table.Cell>
              <Table.Cell>{jobAdvert.openPos.toString()}</Table.Cell>
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
