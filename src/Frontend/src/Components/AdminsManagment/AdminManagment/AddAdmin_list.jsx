import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5, Image } from "../../../AbstractElements";

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
import { Admins_Columns, style, style2 } from "./Admin_Data";
import { useNavigate } from "react-router-dom";
import {
  deleteAdminInfoInDb,
  getAdminInfoInDb,
  serverImageUrl,
} from "../../../api/api";

function AddAdmin_list() {
  const navigate = useNavigate();

  const [adminList, setadminList] = useState([]);

  const getAdminList = async () => {
    const res = await getAdminInfoInDb();
    setadminList([...res.data]);
  };

  const deleteAdminItem = async (id) => {
    const res = await deleteAdminInfoInDb(id);
    if (res.status === 200) {
      const freshArray = adminList.filter((val) => val.admin_id !== id);
      setadminList(freshArray);
    }
  };

  useEffect(() => {
    getAdminList();
  }, []);

  const Admins_Data = adminList.map((elem) => {
    return {
      image: (
        <Image
          attrImage={{
            src: serverImageUrl + elem.admin_image,
            style: style,
            alt: "",
          }}
        />
      ),
      Username: (
        <div>
          <span>{elem.admin_username}</span>
        </div>
      ),
      Email: `${elem.admin_email}`,

      Role: `${elem.admin_role}`,
      action: (
        <div>
          <span>
            <Button
              onClick={() => deleteAdminItem(elem.admin_id)}
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
                navigate(`${process.env.PUBLIC_URL}/admin/add_admin`, {
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
        title="Admins List"
        mainTitle="Admins List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Admins List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Admins_Columns}
                    data={Admins_Data}
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

export default AddAdmin_list;
