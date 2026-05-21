import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { style2, Useful_Link_Columns } from "./Useful_link_data";
import { useNavigate } from "react-router-dom";
import { deleteLogoItem, deleteUsefulLink, getusefulLinksList } from "../../../api/api";



function Useful_link_List () {
  
  const navigate = useNavigate();

  const [ linksList, setlinksList ] = useState( [] );


  const getAllLinksList = async () => {
    const res = await getusefulLinksList();
    setlinksList( [ ...res.data ] );
  };

  const deleteItem = async( id ) => {
    const res = await deleteUsefulLink( id );
    console.log( id );
    console.log( res.data );
    if ( res.status === 200 ) {
      const freshArray = linksList.filter( ( val ) => val.usefullinksection_id  !== id );
      setlinksList( freshArray );
    }
  }

  useEffect( () => {
    getAllLinksList();
  }, [] );


  const Useful_Link_Data = linksList.map((elem) => {
  return {
    Name: (
      <div>
        <span>{elem.usefullinksection_name}</span>
      </div>
    ),
    UrL: `${elem.usefullinksection_url}`,

    action: (
      <div>
        <span>
          <Button
            onClick={() => deleteItem(elem.usefullinksection_id )}
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
              navigate('/viho/hero_section/useful_link', {state:{dataObj: elem}})
            } }
            className="btn btn-success btn-xs"
            style={ style2 }
          >
            Edit{ " " }
          </Button>
        </span>
      </div>
    ),
  };
})
  

  return (
    <Fragment>
      <Breadcrumbs
        parent="Footer"
        title="Useful Link List"
        mainTitle="Useful Link List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Useful LinkList"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Useful_Link_Columns}
                    data={Useful_Link_Data}
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

export default Useful_link_List;
