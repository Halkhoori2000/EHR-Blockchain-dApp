import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5, Image } from "../../../AbstractElements";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { StatisticColumns } from "./Statistics_Data";
import { deleteStatisticsSectionAPI, getStatisticsSectionAPI, serverImageUrl } from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Statistics_List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const req = await getStatisticsSectionAPI();
    setData(req.data);
  }

  const onDelete = async (id) => {
    const res = await deleteStatisticsSectionAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.statisticsection_id !== id );
      setData(arr)
    } 
  };
  useEffect(() => {
    fetchData();
  },[]);
  const style2 = { width: 60, fontSize: 14, padding: 4 };
  const flexboxstyle = { display: 'flex', alignItems: 'center', gap: '7px' };
  const style = { width: 40, height: 40 };

  const StatisticData = data.map((val) => {
    return {
      image: <Image attrImage={{ src: serverImageUrl + val.statisticsection_image, style: style, alt: "" }} />,
      Title: val.statisticsection_title,
      SerialNumber: val.statisticsection_serialnumber,
      Quantity: val.statisticsection_quantity,
      action: (
        <div style={flexboxstyle}>
          <Button
            style={style2}
            type="button"
            color="danger"
            size="sm"
            onClick={() => onDelete(val.statisticsection_id)}
          >
            Delete
          </Button>
          <Button
            style={style2}
            type="button"
            color="success"
            size="sm"
            onClick={() =>
              navigate(
                `${process.env.PUBLIC_URL}/hero_section/statistics_section`,
                { state: { dataObj: val } }
              )
            }
          >
            Edit
          </Button>
        </div>
      )
    }
  })

  return (
    <Fragment>
      <Breadcrumbs
        parent="Home Page  Section"
        title="Statistic Section List"
        mainTitle="Statistic Section List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Statistic Section List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={StatisticColumns}
                    data={StatisticData}
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

export default Statistics_List;
