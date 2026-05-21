import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5 } from "../../../../AbstractElements";
import { ProductListDesc, SliderHeading } from "../../../../Constant";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { deleteSliderVerisonAPI, getSliderVersionAPI } from "../../../../api/api";
import { Btn, H6, Image } from "../../../../AbstractElements";
import { serverImageUrl } from "../../../../api/api";
import { SliderColumns } from "./Slider_List_Data";
import { useNavigate } from "react-router-dom";

const flexboxstyle = { display: 'flex', alignItems: 'center', gap: '7px' };
const style2 = { width: 60, fontSize: 14, padding: 4 };
const style = {
  width: 40,
  height: 40,
};

function Static_List() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    const req = await getSliderVersionAPI();
    setData(req.data);
  }
 
  const onDelete = async (id) => {
    const res = await deleteSliderVerisonAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.sliderversionslider_id !== id );
      setData(arr)
    } 
  };
  
  useEffect(() => {
    fetchData();
  },[]);
  const SliderData = data.map( ( elem ) => {
    return {
      image: <Image attrImage={{ src: serverImageUrl + elem.sliderversionslider_image, style: style, alt:""}} />,
      Title: (
        <div>
          <span>{elem.sliderversionslider_title}</span>
        </div>
      ),
      Text: `${elem.sliderversionslider_text}`,
      ButtonText: <div className="font-success">{elem.sliderversionslider_buttontext}</div>,
      ButtonURL: `${elem.sliderversionslider_buttonURL}`,
      action: (
        <div style={flexboxstyle}>
          <Button style={style2} type="button" color="danger" size="sm" onClick={()=> onDelete(elem.sliderversionslider_id)}>Delete</Button>
          <Button style={style2} type="button" color="success" size="sm" onClick={()=> navigate(`${process.env.PUBLIC_URL}/hero_section/slider_version`, {state: {dataObj: elem}})}>Edit</Button>
        </div>
      ),
    };
  } )

  return (
    <Fragment>
      <Breadcrumbs
        parent="Hero Section"
        title="Slider List"
        mainTitle="Slider List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Static List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={SliderColumns}
                    data={SliderData}
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

export default Static_List;