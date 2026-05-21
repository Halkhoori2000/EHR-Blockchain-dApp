import React, { Fragment, useContext } from "react";
import { Col, Card, CardHeader, Table, Input } from "reactstrap";
import { H5 } from "../../../AbstractElements";
function Permissions() {
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader>
            <H5>{"Permissions"}</H5>
          </CardHeader>
          <div className="table-responsive">
            <Table className="table-border-horizontal">
              <thead>
                <tr>
                  <th scope="col">{"Module"}</th>
                  <th scope="col">{"Add"}</th>
                  <th scope="col">{"View"}</th>
                  <th scope="col">{"Update"}</th>
                  <th scope="col">{"Delete"}</th>
                </tr>
              </thead>
              <tbody>
                <tr key={1}>
                  <th scope="row">Clients</th>
                  <td>
                    {" "}
                    <div>
                      <span>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option selected>None</option>

                          <option>View</option>
                        </Input>
                      </span>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div>
                      <span>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option selected>None</option>

                          <option>View</option>
                        </Input>
                      </span>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div>
                      <span>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option selected>None</option>

                          <option>View</option>
                        </Input>
                      </span>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div>
                      <span>
                        <Input
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option selected>None</option>

                          <option>View</option>
                        </Input>
                      </span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Card>
      </Col>
    </Fragment>
  );
}

export default Permissions;
