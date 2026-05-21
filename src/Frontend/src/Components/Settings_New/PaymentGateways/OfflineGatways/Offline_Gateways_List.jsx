import React, { Fragment, useContext } from "react";
import { Col, Card, CardHeader, Table, Input } from "reactstrap";
import { useNavigate, Link } from "react-router-dom";

import { H5, Btn } from "../../../../AbstractElements";
const style2 = { width: 60, fontSize: 14, padding: 4 };
function Offline_Gateways_List() {
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CardHeader>
            <H5>{"Offline Gateways"}</H5>
          </CardHeader>
          <div className="table-responsive">
            <Table className="table-border-horizontal">
              <thead>
                <tr>
                  <th scope="col">{"Name	"}</th>
                  <th scope="col">{"Product Checkout	"}</th>
                  <th scope="col">{"Package Checkout	"}</th>
                  <th scope="col">{"Course Checkout	"}</th>
                  <th scope="col">{"Donation Checkout	"}</th>
                  <th scope="col">{"Event Checkout	"}</th>
                  <th scope="col">{"Actions"}</th>
                </tr>
              </thead>
              <tbody>
                <tr key={1}>
                  <th>Bank America</th>
                  <td>
                    {" "}
                    <div>
                      <span>
                        <Input
                          placeholder="Select Issues"
                          className="form-control-success-fill "
                          name="select"
                          type="select"
                          required
                        >
                          <option selected>Active</option>

                          <option>Deactive</option>
                        </Input>
                      </span>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div>
                      <span>
                        <Input
                          placeholder="Select Issues"
                          className="form-control-success-fill "
                          name="select"
                          type="select"
                          required
                        >
                          <option selected>Active</option>

                          <option>Deactive</option>
                        </Input>
                      </span>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div>
                      <span>
                        <Input
                          placeholder="Select Issues"
                          className="form-control-success-fill "
                          name="select"
                          type="select"
                          required
                        >
                          <option selected>Active</option>

                          <option>Deactive</option>
                        </Input>
                      </span>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div>
                      <span>
                        <Input
                          placeholder="Select Issues"
                          className="form-control-success-fill "
                          name="select"
                          type="select"
                          required
                        >
                          <option selected>Active</option>

                          <option>Deactive</option>
                        </Input>
                      </span>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div>
                      <span>
                        <Input
                          placeholder="Select Issues"
                          className="form-control-success-fill "
                          name="select"
                          type="select"
                          required
                        >
                          <option selected>Active</option>

                          <option>Deactive</option>
                        </Input>
                      </span>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <div>
                      <span>
                        <Btn
                          attrBtn={{
                            style: style2,
                            className: "btn btn-danger btn-xs",
                            type: "button",
                          }}
                        >
                          Delete
                        </Btn>
                      </span>{" "}
                      &nbsp;
                      <span>
                        <Link to={`/offline_gatways`}>
                          <Btn
                            attrBtn={{
                              style: style2,
                              className: "btn btn-success btn-xs",
                              type: "button",
                            }}
                          >
                            Edit{" "}
                          </Btn>
                        </Link>
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

export default Offline_Gateways_List;
