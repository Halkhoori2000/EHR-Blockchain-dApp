import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import {
  Carrer_Category_Columns,
  Carrer_Category_Data,
  style2,
} from "./Career_category_data";
import { useNavigate } from "react-router-dom";
import { deleteCareerListItem, getAllCareerList } from "../../../api/api";

function Career_category_list () {

  const navigate = useNavigate();

  const [ careerCategoriesState, setcareerCategoriesState ] = useState( [] );

  const getCareerListItems = async () => {
    const res = await getAllCareerList();
    setcareerCategoriesState( [ ...res.data ] );
  };

  const deleteCareerLinkSingle = async( id ) => {
    const res = await deleteCareerListItem( id );
    if ( res.status === 200 ) {
      const freshArray = careerCategoriesState.filter( ( val ) => val.categorysection_id !== id );
      setcareerCategoriesState( freshArray );
    }
  }

  useEffect( () => {
    getCareerListItems();
  }, [] );
  
  const Carrer_Category_Data = careerCategoriesState.map((elem) => {
  return {
    Name: (
      <div>
        <span>{elem.categorysection_name}</span>
      </div>
    ),
    SerialNumber: `${elem.Categorysection_serialnumber}`,

    Status: `${elem.categorysection_status}`,
    action: (
      <div>
        <span>
          <Button
            onClick={() => deleteCareerLinkSingle(elem.categorysection_id )}
            className="btn btn-danger btn-xs"
            style={ style2 }
          >
            Delete
          </Button>
        </span>{ " " }
        {/* &nbsp;&nbsp; */}
        <span>
          <Button
            onClick={ () => {
              navigate('/viho/hero_section/carrer_category', {state:{dataObj: elem}})
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
      <Breadcrumbs parent="Career" title="Category List" mainTitle="Category List" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Category List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Carrer_Category_Columns}
                    data={Carrer_Category_Data}
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

export default Career_category_list;
