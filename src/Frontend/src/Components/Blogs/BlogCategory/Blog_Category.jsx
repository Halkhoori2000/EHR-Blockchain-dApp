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

import { insertBlogCategory, updateBlogCategory } from "../../../api/api";

function Blog_Category() {
  const navigate = useNavigate();
  const location = useLocation();

  const [namecat, setName] = useState('');
  const [category, setCategory] = useState('Active');
  const [serialNumber, setSerialNumber] = useState('');
  console.log(category, 'category');

  const saveCategory = async () => {
    const dataObj = {
      categorysection_name: namecat,
      categorysection_status: category,
      Categorysection_serialnumber: serialNumber,
    };
    const res = await insertBlogCategory(dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/blog_category_list`);
    } else {
      alert("Error");
    }
  };

  const updateUsefulLinkfunc = async (id) => {
    const dataObj = {
      categorysection_name: namecat,
      categorysection_status: category,
      Categorysection_serialnumber: serialNumber,
    };
    const res = await updateBlogCategory(id, dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/blog_category_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateCategoryData = () => {
    if (location.state) {
      setName(location.state.dataObj.categorysection_name);
      setCategory(location.state.dataObj.categorysection_status);
      setSerialNumber(location.state.dataObj.Categorysection_serialnumber);
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
                          onChange={(e) => setName(e.target.value)}
                          value={namecat}
                          type="text"
                          placeholder="Category Name"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>{"Category Status"}</Label>
                        <select value={category} name='categorysection_status' onChange={(e) => setCategory(e.target.value)} className="form-control">
                          <option value={'Active'}>Active</option>
                          <option value={'Deactive'}>Deactive</option>
                        </select>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Serial Number"}</Label>
                        <input
                          onChange={(e) => setSerialNumber(e.target.value)}
                          value={serialNumber}
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
                                location.state.dataObj.categorysection_id
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

export default Blog_Category;
