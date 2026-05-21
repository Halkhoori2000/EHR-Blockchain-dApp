import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5, Image } from "../../../AbstractElements";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { Services_Columns, style, style2 } from "./Services_Data";
import { useNavigate } from "react-router-dom";
import { deleteServices, getServices, serverImageUrl } from "../../../api/api";

function Services_List () {

  const navigate = useNavigate();

  const [ getServicesList, setgetServicesList ] = useState( [] );

  const getServicesItems = async () => {
    const res = await getServices();
    setgetServicesList( [ ...res.data ] );
  };

  const deleteServiceLinkItem = async( id ) => {
    const res = await deleteServices( id );
    if ( res.status === 200 ) {
      const freshArray = getServicesList.filter( ( val ) => val.servicesection_id !== id );
      setgetServicesList( freshArray );
    }
  }

  useEffect( () => {
    getServicesItems();
  }, [] );
  
  const Services_Data = getServicesList.map((elem) => {
  return {
    image: <Image attrImage={{ src: serverImageUrl + elem.servicesection_image, style: style, alt: "" }} />,

    Title: `${elem.servicesection_title}`,
    Category: `${elem.servicesection_category}`,
    Serialnumber: `${elem.servicesection_serialnumber}`,
    MetaKeyword: `${elem.servicesection_metakeywords}`,
    MetaDescription: `${elem.servicesection_metadiscription}`,
    Summary: `${elem.servicesection_summary}`,
    CopyrightText: `${elem.servicesection_copyrighttext}`,
    action: (
      <div>
        <span>
          <Button
            onClick={() => deleteServiceLinkItem(elem.servicesection_id )}
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
              navigate('/viho/hero_section/services_detail', {state:{dataObj: elem}})
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
  });
  

  return (
    <Fragment>
      <Breadcrumbs
        parent="Services"
        title="Services  List"
        mainTitle="Services List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Services List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Services_Columns}
                    data={Services_Data}
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

export default Services_List;
