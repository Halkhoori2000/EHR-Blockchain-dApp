import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { StaticColumns } from "./reports_list_Data";
import { deleteStaticVerisonAPI, getStativVersionAPI } from "../../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";
import { serverImageUrl } from "../../../api/api";

const style2 = { width: 60, fontSize: 14, padding: 4 };
const flexboxstyle = { display: 'flex', alignItems: 'center', gap: '7px' };

const style = {
  width: 40,
  height: 40,
};

function List() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const req = await getStativVersionAPI();
    setData(req.data);
  }
  
  const onDelete = async (id) => {
    const res = await deleteStaticVerisonAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.staticversionslider_id !== id );
      setData(arr)
    } 
  };
  
  useEffect(() => {
    fetchData();
  },[]);
  const StaticData = data.map( ( elem ) => {
    return {
      image: !elem.staticversionslider_image.includes('.mp4') === true ? <Image attrImage={{ src: serverImageUrl + elem.staticversionslider_image, style: style, alt: "" }} /> : <video autoPlay={true} muted={true} playsInline={true} loop={true} style={style}>
      <source src={serverImageUrl + elem.staticversionslider_image}></source>
    </video>,
      Title: (
        <div>
          <span>{elem.staticversionslider_title}</span>
        </div>
      ),
      Text: `${elem.staticversionslider_text}`,
      ButtonText: <div className="font-success">{elem.staticversionslider_buttontext}</div>,
      ButtonURL: `${elem.staticversionslider_buttonURL}`,
      action: (
        <div style={flexboxstyle}>
          <Button style={style2} type="button" color="danger" size="sm" onClick={()=> onDelete(elem.staticversionslider_id)}>Delete</Button>
          <Button style={style2} type="button" color="success" size="sm" onClick={()=> {
            navigate(`${process.env.PUBLIC_URL}/hero_section/static_version`, {state:{dataObj: elem}})
          }}>Edit</Button>
        </div>
      ),
    };
  } )

  return (
    <Fragment>
      <Breadcrumbs
        parent="Reports Section"
        title="Reports List"
        mainTitle="Reports List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Reports List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={StaticColumns}
                    data={StaticData}
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

export default List;
