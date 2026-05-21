import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { useNavigate, useLocation } from "react-router-dom";

import { insertGalleryCategories, updateGalleryCategories } from "../../../api/api";

function Gallery_Categories() {
  const navigate = useNavigate();
  const location = useLocation();

  const [nameInCategory, setnameInCategory] = useState("");
  const [statusInCateg, setstatusInCateg] = useState("");
  const [serialNumCateg, setserialNumCateg] = useState("");

  const saveCategory = async () => {
    const dataObj = {
      gallerycategorysection_categoryname: nameInCategory,
      gallerycategorysection_categorystatus: statusInCateg,
      Gallerycategorysection_categoryserialnumber: serialNumCateg,
    };
    const res = await insertGalleryCategories(dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/gallery_category_list`);
    } else {
      alert("Error");
    }
  };

  const updateUsefulLinkfunc = async (id) => {
    const dataObj = {
      gallerycategorysection_categoryname: nameInCategory,
      gallerycategorysection_categorystatus: statusInCateg,
      Gallerycategorysection_categoryserialnumber: serialNumCateg,
    };
    const res = await updateGalleryCategories(id, dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/gallery_category_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateCategoryData = () => {
    if (location.state) {
      setnameInCategory(location.state.dataObj.gallerycategorysection_categoryname);
      setstatusInCateg(location.state.dataObj.gallerycategorysection_categorystatus);
      setserialNumCateg(location.state.dataObj.Gallerycategorysection_categoryserialnumber);
    }
  };


  useEffect(() => {
    populateCategoryData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs parent="Blogs" title="Categories" mainTitle="Categories" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Name "}</Label>
                        <input
                          onChange={(e) => setnameInCategory(e.target.value)}
                          value={nameInCategory}
                          type="text"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>{"Status"}</Label>
                        <Input
                          onChange={(e) => setstatusInCateg(e.target.value)}
                          value={statusInCateg}
                          type="select"
                          placeholder="Select"
                          className="form-control digits"
                          required
                        >
                          <option>
                            {" "}
                            Select a status
                          </option>
                          <option>Active</option>
                          <option>Deactive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Serial Number"}</Label>
                        <input
                          onChange={(e) => setserialNumCateg(e.target.value)}
                          value={serialNumCateg}
                          className="form-control"
                          type="number"
                          placeholder="Serial Number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        {location.state ? (
                          <Button
                            onClick={() =>
                              updateUsefulLinkfunc(
                                location.state.dataObj.gallerycategorysection_id
                              )
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={saveCategory}
                            className="me-3"
                            color="success"
                          >
                            {"Submit"}
                          </Button>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Gallery_Categories;