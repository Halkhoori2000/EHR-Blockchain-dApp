import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5, Image } from "../../../AbstractElements";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { IntroColumns } from "./IntroSection_List_Data";
import { deleteIntroSectionAPI, getIntroSectionAPI, serverImageUrl } from "../../../api/api";
import { useNavigate } from "react-router-dom";

const style2 = { width: 60, fontSize: 14, padding: 4 };
const flexboxstyle = { display: 'flex', alignItems: 'center', gap: '7px' };
const style = { width: 40, height: 40 };

function IntroSection_List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
 
  const fetchData = async () => {
    const req = await getIntroSectionAPI();
    setData(req.data);
  }

  const onDelete = async (id) => {
    const res = await deleteIntroSectionAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.introsection_id !== id );
      setData(arr)
    } 
  };
  useEffect(() => {
    fetchData();
  },[]);
  
  const IntroData = data.map((val) => {
    return {
      image: !val.introsection_image.includes('.mp4') === true ? <Image attrImage={{ src: serverImageUrl + val.introsection_image, style: style, alt: "" }} /> : <video autoPlay={true} muted={true} playsInline={true} loop={true} style={style}>
      <source src={serverImageUrl + val.introsection_image}></source>
    </video>,
      Title: val.introsection_title,
      VedioLink: val.introsection_videolink,
      Text: val.introsection_text,
      ButtonText: val.introsection_buttontext,
      buttonurl: val.introsection_buttonURL,
      action: (
        <div style={flexboxstyle}>
          <Button style={style2} type="button" color="danger" size="sm" onClick={()=> onDelete(val.introsection_id)}>Delete</Button>
          <Button style={style2} type="button" color="success" size="sm" onClick={()=> navigate(`${process.env.PUBLIC_URL}/hero_section/intro_section`, {state: {dataObj: val}})}>Edit</Button>
        </div>
      )
    }
  })

  return (
    <Fragment>
      <Breadcrumbs
        parent="Hero Section"
        title="IntroSection List"
        mainTitle="IntroSection List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"IntroSection List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={IntroColumns}
                    data={IntroData}
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

export default IntroSection_List;
