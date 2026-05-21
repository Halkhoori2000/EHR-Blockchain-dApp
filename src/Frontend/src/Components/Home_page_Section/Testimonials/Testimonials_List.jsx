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
import { TestimonialsColumns } from "./Testimonials_Data";
import { deleteTestimonialsAPI, getTestimonialsAPI } from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Testimonials_List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const req = await getTestimonialsAPI();
    setData(req.data);
  };
  const onDelete = async (id) => {
    const res = await deleteTestimonialsAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.testimonialsection_id !== id );
      setData(arr)
    } 
  };
  useEffect(() => {
    fetchData();
  },[]);
  const style2 = { width: 60, fontSize: 14, padding: 4 };
  const flexboxstyle = { display: "flex", alignItems: "center", gap: "7px" };

  const TestimonialsData = data.map((val) => {
    return {
      Title: val.testimonialsection_title,
      SubTitle: val.testimonialsection_subtitle,
      action: (
        <div style={flexboxstyle}>
          <Button
            style={style2}
            type="button"
            color="danger"
            size="sm"
            onClick={() => onDelete(val.testimonialsection_id)}
          >
            Delete
          </Button>
          <Button
            style={style2}
            type="button"
            color="success"
            size="sm"
            onClick={() =>
              navigate(`${process.env.PUBLIC_URL}/hero_section/testimonials`, {
                state: { dataObj: val },
              })
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
        title="Testimonials List"
        mainTitle="Testimonials List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Testimonials List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={TestimonialsColumns}
                    data={TestimonialsData}
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

export default Testimonials_List;
