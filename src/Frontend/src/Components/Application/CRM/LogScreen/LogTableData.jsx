import React, { Fragment, useContext } from "react";
import { Container, Row, Col, Card, CardHeader, Table } from "reactstrap";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";

import { BasicTable } from "../../../../Constant";
import TableContext from "../../../../_helper/Table";
function LogTableData() {
  const { data } = useContext(TableContext);
  return (
    <Fragment>
      <Container fluid={true}>
        <Row>
          {" "}
          <Col sm="12">
            <Card>
              <CardHeader>
                <H5>Log Data</H5>
                <span>
           
                </span>
              </CardHeader>
              <div className="table-responsive">
                <Table>
                  <thead>
                    <tr>
                      <th scope="col">{"#"}</th>
                      <th scope="col">{"User"}</th>
                      <th scope="col">{"Occurred"}</th>
                      <th scope="col">{"Data"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <th scope="row">{item.id}</th>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td>{item.user_name}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default LogTableData;
