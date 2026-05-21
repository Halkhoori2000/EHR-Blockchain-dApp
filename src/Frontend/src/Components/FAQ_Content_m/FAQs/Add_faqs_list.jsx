import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { ADD_Faq_Columns, style2 } from "./Add_faqs_data";
import { deleteSelectedFaq, getAllFAQs } from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Add_faqs_list () {

  const navigate = useNavigate();

  const [allFaqState, setallFaqState] = useState( [] );

  const getCategoryList = async () => {
    const res = await getAllFAQs();
    setallFaqState( [ ...res.data ] );
  }

  const deleteFaq = async( id ) => {
    const res = await deleteSelectedFaq( id );
    console.log( id );
    console.log( res.data );
    if ( res.status === 200 ) {
      const freshArray = allFaqState.filter( ( val ) => val.faqsection_id  !== id );
      setallFaqState( freshArray );
    }
  }

  useEffect( () => {
    getCategoryList();
  },[])
  
  const ADD_Faq_Data = allFaqState.map((elem) => {
  return {
    Category: (
      <div>
        <span>{elem.faqsection_question}</span>
      </div>
    ),
    SerialNumber: `${elem.faqsection_answer}`,

    action: (
      <div>
        <span>
          <Button
            onClick={() => deleteFaq(elem.faqsection_id )}
            className="btn btn-danger btn-xs"
            style={ style2 }
          >
            Delete
          </Button>
        </span>{ " " }
        &nbsp;&nbsp;
        <span>
          <Button
            onClick={ () => {
              navigate(`${process.env.PUBLIC_URL}/hero_section/add_faq`, {state:{dataObj: elem}})
            } }
            className="btn btn-success btn-xs"
            style={ style2 }
          >
            Edit{ " " }
          </Button>
        </span>
      </div>
    ),
  }
}) 

  return (
    <Fragment>
      <Breadcrumbs parent="FAQ" title="FAQs List" mainTitle="FAQs List" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"FAQs List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={ADD_Faq_Columns}
                    data={ADD_Faq_Data}
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

export default Add_faqs_list;
