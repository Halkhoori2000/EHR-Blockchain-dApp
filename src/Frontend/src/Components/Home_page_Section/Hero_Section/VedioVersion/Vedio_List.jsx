import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5, Image } from "../../../../AbstractElements";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { VedioColumns } from "./Vedio_List_Data";
import { deleteVideoVerisonAPI, getVideoVersionAPI } from "../../../../api/api";
import { serverImageUrl } from "../../../../api/api";
import { useNavigate } from "react-router-dom";

const style2 = { width: 60, fontSize: 14, padding: 4 };
const flexboxstyle = { display: 'flex', alignItems: 'center', gap: '7px' };
const style = { width: 40, height: 40 };

function Vedio_List() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    const req = await getVideoVersionAPI();
    setData(req.data);
  }
  
  const onDelete = async (id) => {
    const res = await deleteVideoVerisonAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.videoversionslider_id !== id );
      setData(arr)
    } 
  };

  useEffect(() => {
    fetchData();
  },[]);

  const VideoData = data.map((val) => {
    return {
      image: <Image attrImage={{ src: serverImageUrl + val.videoversionslider_image, style: style, alt: "" }} />,
      VedioURL: val.videoversionslider_videolink,
      action: (
        <div style={flexboxstyle}>
          <Button style={style2} type="button" color="danger" size="sm" onClick={()=> onDelete(val.videoversionslider_id)}>Delete</Button>
          <Button style={style2} type="button" color="success" size="sm" onClick={()=> navigate(`${process.env.PUBLIC_URL}/hero_section/vedio_version`, {state: {dataObj: val}})}>Edit</Button>
        </div>
      )
    }
  })

  return (
    <Fragment>
      <Breadcrumbs
        parent="Hero Section"
        title="Static List"
        mainTitle="Static List"
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
                    columns={VedioColumns}
                    data={VideoData}
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

export default Vedio_List;
