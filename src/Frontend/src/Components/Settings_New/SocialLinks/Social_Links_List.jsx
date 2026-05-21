import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { Edit_Columns, style2 } from "./Social_Links_Data";
import { useNavigate } from "react-router-dom";
import { deleteSocialLinkItemFromDB, getSocialLinksDataFromDb } from "../../../api/api";
function Social_Links_List () {

  const navigate = useNavigate();

  const [ socialLinksList, setsocialLinksList ] = useState( [] );

  const getSocialLinksDb = async () => {
    const res = await getSocialLinksDataFromDb();
    setsocialLinksList( [ ...res.data ] );
  }

  const deleteSocialLinkItem = async( id ) => {
    const res = await deleteSocialLinkItemFromDB( id );
    console.log( id );
    console.log( res.data );
    if ( res.status === 200 ) {
      const freshArray = socialLinksList.filter( ( val ) => val.sociallinks_id !== id );
      setsocialLinksList( freshArray );
    }
  }

  useEffect( () => {
    getSocialLinksDb();
  },[])
  
  const Edit_Data = socialLinksList.map((elem) => {
  return {
    URLs: (
      <div>
        <span>{elem.sociallinks_url}</span>
      </div>
    ),
    SerialNumber: `${elem.Sociallinks_serialnumber}`,

    action: (
      <div>
        <span>
          <Button
            onClick={() => deleteSocialLinkItem(elem.sociallinks_id)}
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
              navigate('/settings/social_links', {state:{dataObj: elem}})
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
        parent="Settings"
        title="Social Links List"
        mainTitle="Social Links List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Social Links List "}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Edit_Columns}
                    data={Edit_Data}
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

export default Social_Links_List;
