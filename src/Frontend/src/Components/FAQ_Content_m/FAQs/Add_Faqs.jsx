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
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { insertFAQQuestion, updateFAQItem } from "../../../api/api";

function Add_Faqs() {
  const location = useLocation();
  const navigate = useNavigate();

  const [questionValState, setquestionValState] = useState("");
  const [answerState, setanswerState] = useState("");

  const saveFAQindb = async () => {
    const dataObj = {
      faqsection_question: questionValState,
      faqsection_answer: answerState,
    };
    const res = await insertFAQQuestion(dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/add_faq_list`);
    } else {
      alert("Error");
    }
  };

  const updateFAQ = async (id) => {
    const dataObj = {
      faqsection_question: questionValState,
      faqsection_answer: answerState,
    };
    const res = await updateFAQItem(id, dataObj);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/add_faq_list`);
    } else {
      alert("Error occured.");
    }
  };

  const populateCategoryData = () => {
    if (location.state) {
      setquestionValState(location.state.dataObj.faqsection_question);
      setanswerState(location.state.dataObj.faqsection_answer);
    }
  };

  useEffect(() => {
    populateCategoryData();
  }, []);
  return (
    <Fragment>
      <Breadcrumbs parent="FAQ" title="FAQs" mainTitle="Add FAQ" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form">
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Question"}</Label>
                        <Input
                          onChange={(e) => setquestionValState(e.target.value)}
                          value={questionValState}
                          type="text"
                          className="form-control digits"
                          placeholder="Enter Question"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup className="mb-0">
                        <Label>{"Answer "}</Label>
                        <Input
                          onChange={(e) => setanswerState(e.target.value)}
                          value={answerState}
                          type="textarea"
                          className="form-control"
                          placeholder="Enter Answer "
                          rows="3"
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
                              updateFAQ(location.state.dataObj.faqsection_id)
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={saveFAQindb}
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

export default Add_Faqs;
