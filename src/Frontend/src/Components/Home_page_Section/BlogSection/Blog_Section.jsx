import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import Update from "./Update";
import Create from "./Create";
import { useLocation } from "react-router-dom";

function Blog_Section() {
  const [listId, setListId] = useState(null);
  const thelocation = useLocation();
  const ifExists = thelocation.state;

  useEffect(() => {
    if (ifExists) {
      const id = ifExists?.dataObj;
      setListId(id?.blogsection_id);
    }
  }, [ifExists]);

  console.log(listId);
  return (
    <Fragment>
      <Breadcrumbs
        parent="Home Page  Section"
        title="Blog Section"
        mainTitle="Blog Section"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                {listId ? <Update listId={listId} /> : <Create />}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Blog_Section;
