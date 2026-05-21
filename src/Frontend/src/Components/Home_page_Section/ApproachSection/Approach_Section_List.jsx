import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { ApproachColumns } from "./Approach_Section_Data";
import { deleteApproachSectionAPI, getApproachSectionAPI } from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Approach_Section_List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const req = await getApproachSectionAPI();
    setData(req.data);
  };
  
  const onDelete = async (id) => {
    const res = await deleteApproachSectionAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.approachsection_id !== id );
      setData(arr)
    } 
  };
  useEffect(() => {
    fetchData();
  }, []);
  const style2 = { width: 60, fontSize: 14, padding: 4 };
  const flexboxstyle = { display: "flex", alignItems: "center", gap: "7px" };

  const ApproachData = data.map((val) => {
    return {
      Title: val.approachsection_title,
      SerialNumber: val.approachsection_serialnumber,
      ButtonText: val.approachsection_buttontext,
      ButtonURL: val.approachsection_buttonURL,
      action: (
        <div style={flexboxstyle}>
          <Button
            style={style2}
            type="button"
            color="danger"
            size="sm"
            onClick={() => onDelete(val.approachsection_id)}
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
                `${process.env.PUBLIC_URL}/hero_section/approach_section`,
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
        title="Approach Section List"
        mainTitle="Approach Section List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Approach List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={ApproachColumns}
                    data={ApproachData}
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

export default Approach_Section_List;
