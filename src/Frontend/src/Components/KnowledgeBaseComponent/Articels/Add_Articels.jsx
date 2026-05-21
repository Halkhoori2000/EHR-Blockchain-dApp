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
import ProjectContext from "../../../_helper/Project";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link, useLocation } from "react-router-dom";
import CKEditors from "react-ckeditor-component";
import { insertArticles, updateArticles } from "../../../api/api";

function Add_Articels() {
  const navigate = useNavigate();
  const location = useLocation();

  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [serialNumber, setserialNumber] = useState("");
  const [metaKeywords, setmetaKeywords] = useState("");
  const [metaDescription, setmetaDescription] = useState("");

  const [content, setContent] = useState("content");
  const onChange = (evt) => {
    const newContent = evt.editor.getData();
    setContent(newContent);
  };

  const saveArticles = async () => {
    const dataObj = {
      articlespage_title: title,
      articlespage_category: category,
      articlespage_metakeywords: metaKeywords,
      articlespage_metadescription: metaDescription,
      articlespage_content: content,
      articlespage_serialnumber: serialNumber,
    };
    const res = await insertArticles(dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/knowledge/add_articles_list`);
    } else {
      alert("Error");
    }
  };

  const updateArtclesInfo = async (id) => {
    const dataObj = {
      articlespage_title: title,
      articlespage_category: category,
      articlespage_metakeywords: metaKeywords,
      articlespage_metadescription: metaDescription,
      articlespage_content: content,
      articlespage_serialnumber: serialNumber,
    };
    const res = await updateArticles(id, dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/knowledge/add_articles_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateArticlesFields = () => {
    if (location.state) {
      settitle(location.state.dataObj.articlespage_title);
      setcategory(location.state.dataObj.articlespage_category);
      setmetaKeywords(location.state.dataObj.articlespage_metakeywords);
      setmetaDescription(location.state.dataObj.articlespage_metadescription);
      setContent(location.state.dataObj.articlespage_content);
      setserialNumber(location.state.dataObj.articlespage_serialnumber);
    }
  };

  useEffect(() => {
    populateArticlesFields();
  }, []);
  return (
    <Fragment>
      <Breadcrumbs
        parent="Knowledge Base"
        title="Article"
        mainTitle="Article"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                >
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Title  "}</Label>
                        <Input
                          onChange={(e) => settitle(e.target.value)}
                          value={title}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md="6">
                      <FormGroup>
                        <Label>{"Category"}</Label>
                        <Input
                          onChange={(e) => setcategory(e.target.value)}
                          value={category}
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled selected>
                            {" "}
                            Select a Category
                          </option>
                          <option>Active</option>
                          <option>Deactive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"12"}>
                      {" "}
                      <FormGroup>
                        <Label>{"Serial Number"}</Label>
                        <input
                          onChange={(e) => setserialNumber(e.target.value)}
                          value={serialNumber}
                          className="form-control"
                          type="number"
                          name="rate"
                          defaultValue="10"
                          placeholder="Serial Number"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Meta Keywords "}</Label>
                        <Input
                          onChange={(e) => setmetaKeywords(e.target.value)}
                          value={metaKeywords}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description "}</Label>
                        <Input
                          onChange={(e) => setmetaDescription(e.target.value)}
                          value={metaDescription}
                          type="textarea"
                          className="form-control"
                          placeholder="Enter Meta Description "
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Content "}</Label>
                        <CKEditors
                          activeclassName="p10"
                          content={content}
                          events={{
                            change: onChange,
                          }}
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
                              updateArtclesInfo(
                                location.state.dataObj.articlespage_id
                              )
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={saveArticles}
                            disabled={
                              title &&
                              category &&
                              serialNumber &&
                              metaKeywords &&
                              metaDescription &&
                              content !== ""
                                ? false
                                : true
                            }
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

export default Add_Articels;
