import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { useLocation } from "react-router-dom";
import Upate from "./Upate";
import Create from "./Create";

function Call_To_Action() {
  const [listId, setListId] = useState(null);
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  useEffect(() => {
    if (ifExists) {
      const id = ifExists?.dataObj;
      setListId(id?.calltoactionsection_id);
    }
  }, [ifExists]);

  console.log(listId)
  return (
    <Fragment>
      <Breadcrumbs
        parent="Home Page  Section"
        title="Call To Action Section"
        mainTitle="Call To Action Section"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                {listId ? <Upate listId={listId} /> : <Create/>}              
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Call_To_Action;
