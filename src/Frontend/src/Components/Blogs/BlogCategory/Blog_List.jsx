import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { Blog_Category_Columns, style2 } from "./Blog_Data";
import { useNavigate } from "react-router-dom";
import { deleteBlogCategory, getBlogCategory } from "../../../api/api";
function Blog_List () {

  const navigate = useNavigate();

  const [ categoriesList, setcategoriesList ] = useState( [] );

  const getCategoryList = async () => {
    const res = await getBlogCategory();
    setcategoriesList( [ ...res.data ] );
  }
  
  const deleteCategoryItem = async( id ) => {
    const res = await deleteBlogCategory( id );
    if ( res.status === 200 ) {
      const freshArray = categoriesList.filter( ( val ) => val.categorysection_id  !== id );
      setcategoriesList( freshArray );
    }
  }

  useEffect( () => {
    getCategoryList();
  },[])
  
  const Blog_Category_Data = categoriesList.map((elem) => {
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
            onClick={() => deleteCategoryItem(elem.categorysection_id )}
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
              navigate(`${process.env.PUBLIC_URL}/hero_section/blog_category`, {state:{dataObj: elem}})
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
        parent="Blogs"
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
                    columns={Blog_Category_Columns}
                    data={Blog_Category_Data}
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

export default Blog_List;
