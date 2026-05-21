import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { Log_Text_Columns, style, style2 } from "./Log_Text_Data";
import { deleteLogoItem, getLogoandTextList, serverImageUrl } from "../../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";


function LogText_List () {

  const navigate = useNavigate();

  const [ sliderList, setsliderList ] = useState( [] );

  const getSliderList = async () => {
    const res = await getLogoandTextList();
    setsliderList( [ ...res.data ] );
  };

  const deleteItem = async( id ) => {
    const res = await deleteLogoItem( id );
    if ( res.status === 200 ) {
      const freshArray = sliderList.filter( ( val ) => val.logandtextsection_id !== id );
      setsliderList( freshArray );
    }
  }

  useEffect( () => {
    getSliderList();
  }, [] );
  
  
  const Logo_And_Text_List_Data = sliderList.map((elem) => {
  return {
    image: <Image attrImage={ { src: serverImageUrl + elem.logandtextsection_image, style: style, alt: "" } } />,

    FooterText: `${elem.logandtextsection_footer_text}`,
    NewsletterText: `${elem.logandtextsection_newsletter}`,
    CopyrightText: `${elem.tbl_logoandtext_copyright}`,
    action: (
      <div>
        <span>
          <Button
            onClick={() => deleteItem(elem.logandtextsection_id)}
            className="btn btn-danger btn-xs"
            style={style2}
          >
            Delete
          </Button>
        </span>{ " " }
        &nbsp;&nbsp;
        <span>
          <Button
            onClick={ () => {
              navigate('/viho/hero_section/logtext', {state:{dataObj: elem}})
            }}
            className="btn btn-success btn-xs"
            style={style2}
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
        parent="Footer"
        title="Logo & Text  List"
        mainTitle="Logo & Text List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Slider List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Log_Text_Columns}
                    data={Logo_And_Text_List_Data}
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

export default LogText_List;
