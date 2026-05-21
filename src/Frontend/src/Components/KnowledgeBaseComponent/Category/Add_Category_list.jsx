import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import {
  knowledge_Category_Columns,
  style2,
} from "./Add_Category_Data";
import { useNavigate } from "react-router-dom";
import { deleteKnowledgeCategory, getKnowledgeCategoryList } from "../../../api/api";

function Add_Category_list() {

  const navigate = useNavigate();

  const [ categoriesList, setcategoriesList ] = useState( [] );

  const getCategoryList = async () => {
    const res = await getKnowledgeCategoryList();
    setcategoriesList( [ ...res.data ] );
  }
  
  const deleteCategoryItem = async( id ) => {
    const res = await deleteKnowledgeCategory( id );
    console.log( id );
    console.log( res.data );
    if ( res.status === 200 ) {
      const freshArray = categoriesList.filter( ( val ) => val.categoriespage_id !== id );
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
        <span>{elem.categoriespage_name}</span>
      </div>
    ),
    SerialNumber: `${elem.Categoriespage_serialnumber}`,

    Status: `${elem.categoriespage_status}`,
    action: (
      <div>
        <span>
          <Button
            onClick={() => deleteCategoryItem(elem.categoriespage_id)}
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
              navigate(`${process.env.PUBLIC_URL}/knowledge/add_category`, {state:{dataObj: elem}})
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
        parent="Knowledge Base"
        title="Category List"
        mainTitle="Category List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Categories "}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={knowledge_Category_Columns}
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

export default Add_Category_list;
