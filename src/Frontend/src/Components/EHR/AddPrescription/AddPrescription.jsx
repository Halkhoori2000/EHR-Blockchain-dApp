import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import CreateData from "./CreateData";

const AddPrescription = () => {
  const [listId, setListId] = useState(null);
  
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  useEffect(() => {
    if (ifExists) {
      const id = ifExists?.dataObj;
    }
  }, [ifExists]);


  return (
    <>
      <Breadcrumbs
        parent="Prescription Section"
        title="Add Prescription"
        mainTitle="Add Prescription"
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

export default AddPrescription;
