import React, { useState, useEffect } from "react";
import { Table, Button,Header,Icon } from "semantic-ui-react";
import JobPositionService from "../services/jobPositionService";

export default function JobPositionList() {
  const [jobPositions, setJobPosition] = useState([]);
  const colors = ["red",]
  useEffect(() => {
    let jobPositionService = new JobPositionService();
    jobPositionService
      .getJobPosition()
      .then((result) => setJobPosition(result.data.data));
  }, []);

  return (
    <div>
     <Header as="h3" icon textAlign='center'>
      <Icon name="list alternate outline" />
        <Header.Content >Job Position List</Header.Content>
      </Header>
      {colors.map((color) => (
      <Table  color={color} key={color}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Job Title</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobPositions.map((position) => (
            <Table.Row key={position.id}>
              <Table.Cell>{position.jobTitle}</Table.Cell>
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
