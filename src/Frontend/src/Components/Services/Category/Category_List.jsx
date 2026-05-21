import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5, Image } from "../../../AbstractElements";
import product1 from "../../../assets/images/ecommerce/product-table-1.png";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import {CategoryColumns, style, style2  } from "./Category_List_Data";
import { useNavigate } from "react-router-dom";
import { deleteServiceCategory, getServiceCategory, serverImageUrl } from "../../../api/api";
function Category_List () {

  const navigate = useNavigate();

  const [ allCategoriesList, setallCategoriesList ] = useState( [] );

  const getSliderList = async () => {
    const res = await getServiceCategory();
    setallCategoriesList( [ ...res.data ] );
  };

  const deleteItem = async( id ) => {
    const res = await deleteServiceCategory( id );
    if ( res.status === 200 ) {
      const freshArray = allCategoriesList.filter( ( val ) => val.categorysection_id !== id );
      setallCategoriesList( freshArray );
    }
  }

  useEffect( () => {
    getSliderList();
  }, [] );
  
  const CategoryData = allCategoriesList.map((elem) => {
  return {
    image: <Image attrImage={ { src: serverImageUrl + elem.Categorysection_image, style: style, alt: "" } } />,
    Name: (
      <div>
        <span>{elem.categorysection_name}</span>
      </div>
    ),
    SortText: `${elem.categorysection_sorttext}`,

    Status: `${elem.categorysection_status}`,
    SerialNumber: `${elem.categorysection_serialnumber}`,
    action: (
      <div>
        <span>
          <Button
            onClick={() => deleteItem(elem.categorysection_id )}
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
              navigate('/viho/hero_section/category', {state:{dataObj: elem}})
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
      <Breadcrumbs
        parent="Services"
        title="Categories List"
        mainTitle="Categories List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Categories List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={CategoryColumns}
                    data={CategoryData}
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

export default Category_List;
