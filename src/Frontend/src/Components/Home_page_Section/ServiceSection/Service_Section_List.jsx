import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "reactstrap";
import DataTable from "react-data-table-component";
import { ServiceColumns } from "./Service_list_data";
import {
  deleteServiceSectionAPI,
  getServiceSectionAPI,
} from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Service_Section_List() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  
  const fetchData = async () => {
    const req = await getServiceSectionAPI();
    setData(req.data);
  };

  const onDelete = async (id) => {
    const res = await deleteServiceSectionAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.servicesection_id !== id );
      setData(arr)
    } 
  };

  useEffect(() => {
    fetchData();
  },[]);
  const style2 = { width: 60, fontSize: 14, padding: 4 };
  const flexboxstyle = { display: "flex", alignItems: "center", gap: "7px" };

  const ServiceData = data.map((val) => {
    return {
      Title: val.servicesection_title,
      SubTitle: val.servicesection_subtitle,
      action: (
        <div style={flexboxstyle}>
          <Button
            style={style2}
            type="button"
            color="danger"
            size="sm"
            onClick={() => onDelete(val.servicesection_id)}
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
                `${process.env.PUBLIC_URL}/hero_section/service_section`,
                { state: { dataObj: val } }
              )
            }
          >
            Edit
          </Button>
        </div>
      ),
    };
  });

  return (
    <Fragment>
      <Breadcrumbs
        parent="Home Page  Section"
        title="Service Section List"
        mainTitle="Service Section List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Service Section List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={ServiceColumns}
                    data={ServiceData}
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

export default Service_Section_List;
