import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, Image, H5 } from "../../AbstractElements";
import { Card, Button, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { Portfolio_Columns } from "./Portfolio_Data";
import { useNavigate } from "react-router-dom";
import { deleteAddPortfolios, getAddPortfolios, serverImageUrl } from "../../api/api";

const style2 = { width: 60, fontSize: 14, padding: 4 };
const flexboxstyle = { display: 'flex', alignItems: 'center', gap: '7px' };
const style = { width: 40, height: 40 };

function Portfolio_List() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const getData = async () => {
    const res = await getAddPortfolios();
    setData(res.data);
  }
  const onDelete = async (id) => {
    const res = await deleteAddPortfolios(id);
    if(res.status === 200) {
      const arr = data?.filter((val) => val.portfoliosection_id !== id );
      setData(arr)
    } 
  }

  const PorfolioData = data.map((val) => {
    return {
      featuredImage: <Image attrImage={{ src: serverImageUrl + val.Portfoliosection_featuredimages, style: style, alt: "" }} />,
      sliderImage: <Image attrImage={{ src: serverImageUrl + val.portfoliosection_sliderimages, style: style, alt: "" }} />,
      Title: val.portfoliosection_title,
      Services: val.portfoliosection_service,
      action: (
        <div style={flexboxstyle}>
          <Button style={style2} type="button" color="danger" size="sm" onClick={()=> onDelete(val.portfoliosection_id)}>Delete</Button>
          <Button style={style2} type="button" color="success" size="sm" onClick={()=> navigate(`${process.env.PUBLIC_URL}/hero_section/add_porfolio`, {state: {dataObj: val}})}>Edit</Button>
        </div>
      )
    }
  })

  
  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs
        parent="Portfolios"
        title="Portfolios"
        mainTitle="Portfolios"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Portfolios List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Portfolio_Columns}
                    data={PorfolioData}
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

export default Portfolio_List;
