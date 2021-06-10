import React, {useState,useEffect} from 'react'
import { Table, Button,Header,Icon } from "semantic-ui-react";
import EmployerService from '../services/employerService';

export default function EmployerList() {
    const [employers, setEmployers] = useState([]);
    const colors = ["red"];

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getEmployers()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return (
    <div>
        <Header as="h3" icon textAlign='center'>
      <Icon name="list alternate outline" />
        <Header.Content >Employer List</Header.Content>
      </Header>
      {colors.map((color) => (
      <Table  color={color} key={color}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Company Name</Table.HeaderCell>
            <Table.HeaderCell>Domain email</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>Website name</Table.HeaderCell>
            <Table.HeaderCell>Details</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {employers.map((employer) => (
            <Table.Row key={employer.id}>
              <Table.Cell>{employer.companyName}</Table.Cell>
              <Table.Cell>{employer.domainMail}</Table.Cell>
              <Table.Cell>{employer.phoneNumber}</Table.Cell>
              <Table.Cell>{employer.websiteName}</Table.Cell>
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
