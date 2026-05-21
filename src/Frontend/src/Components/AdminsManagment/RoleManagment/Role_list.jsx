import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, Btn, H5 } from "../../../AbstractElements";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import DataTable from "react-data-table-component";
import { Role_Columns, style2, style3 } from "./Role_Data";
import { deleteRoleData, getRoleListData } from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Role_list() {
  const navigate = useNavigate();

  const [roleListData, setroleListData] = useState([]);

  const getRoleListDatafunc = async () => {
    const res = await getRoleListData();
    setroleListData([...res.data]);
  };

  const deleteRoleItem = async (id) => {
    const res = await deleteRoleData(id);
    console.log(id);
    console.log(res.data);
    if (res.status === 200) {
      const freshArray = roleListData.filter(
        (val) => val.rolemanagement_id !== id
      );
      setroleListData(freshArray);
    }
  };

  useEffect(() => {
    getRoleListDatafunc();
  }, []);

  const Role_Data = roleListData.map((elem) => {
    return {
      Title: (
        <div>
          <span>{elem.rolemanagement_name}</span>
        </div>
      ),
      Permissions: (
        <div>
          {" "}
          <span>
            <Btn
              attrBtn={{
                style: style3,

                className: "btn btn-success btn-xs",
                type: "button",
              }}
            >
              <i className={"fa fa-edit"}></i> Manage
            </Btn>
          </span>
        </div>
      ),

      action: (
        <div>
          <span>
            <Button
              onClick={() => deleteRoleItem(elem.rolemanagement_id)}
              className="btn btn-danger btn-xs"
              style={style2}
            >
              Delete
            </Button>
          </span>{" "}
          &nbsp;&nbsp;
          <span>
            <Button
              onClick={() => {
                navigate(`${process.env.PUBLIC_URL}/admin/add_role`, {
                  state: { dataObj: elem },
                });
              }}
              className="btn btn-success btn-xs"
              style={style2}
            >
              Edit{" "}
            </Button>
          </span>
        </div>
      ),
    };
  });

  return (
    <Fragment>
      <Breadcrumbs
        parent="Admins Management"
        title="Role Management List"
        mainTitle="Role Management List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Role Management List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Role_Columns}
                    data={Role_Data}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Role_list;
