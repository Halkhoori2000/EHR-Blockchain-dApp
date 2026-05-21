import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../AbstractElements";

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
import { Contact_Columns, style2 } from "./Contact_Data";
import { useNavigate } from "react-router-dom";
import { deleteContactInfoItem, getContactsList } from "../../api/api";

function Contact_list() {
  const navigate = useNavigate();

  const [contactListState, setcontactListState] = useState([]);

  const getJobPosts = async () => {
    const res = await getContactsList();
    setcontactListState([...res.data]);
  };

  const deleteSingleLink = async (id) => {
    const res = await deleteContactInfoItem(id);
    if (res.status === 200) {
      const freshArray = contactListState.filter(
        (val) => val.contactpage_id !== id
      );
      setcontactListState(freshArray);
    }
  };

  useEffect(() => {
    getJobPosts();
  }, []);

  const Contact_Data = contactListState.map((elem) => {
    return {
      Title: (
        <div>
          <span>{elem.contactpage_title}</span>
        </div>
      ),
      Email: `${elem.contactpage_email}`,
      Latitude: `${elem.contactpage_phone}`,
      Longitude: `${elem.Contactpage_address}`,

      action: (
        <div>
          <span>
            <Button
              onClick={() => deleteSingleLink(elem.contactpage_id)}
              className="btn btn-danger btn-xs"
              style={style2}
            >
              Delete
            </Button>
          </span>{" "}
          {/* &nbsp;&nbsp; */}
          <span>
            <Button
              onClick={() => {
                navigate(`${process.env.PUBLIC_URL}/hero_section/contact_page`, {
                  state: { dataObj: elem },
                });
              }}
              className="btn btn-success btn-xs"
              style={style2}
            >
              Edit
            </Button>
          </span>{" "}
        </div>
      ),
    };
  });

  return (
    <Fragment>
      <Breadcrumbs
        parent="Content Managment"
        title="Content List"
        mainTitle="Content List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Content List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Contact_Columns}
                    data={Contact_Data}
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

export default Contact_list;
