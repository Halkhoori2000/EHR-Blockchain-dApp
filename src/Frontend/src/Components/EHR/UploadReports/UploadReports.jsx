import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import CreateData from "./CreateData";


const UploadReports = () => {
  const [listId, setListId] = useState(null);
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  useEffect(() => {
    if (ifExists) {
      const id = ifExists?.dataObj;
      setListId(id?.servicesection_id);
    }
  }, [ifExists]);

  console.log(listId, 'service')

  return (
    <>
      <Breadcrumbs
        parent="Reports Section"
        title="Upload Reports"
        mainTitle="Upload Reports"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                 <CreateData/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UploadReports;
