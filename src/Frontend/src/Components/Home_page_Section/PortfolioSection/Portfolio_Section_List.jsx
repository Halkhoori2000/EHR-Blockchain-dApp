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
import { PortfolioColumns } from "./Portfolio_List_Data";
import { deletePortfolioAPI, getPortfolioAPI } from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Portfolio_Section_List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const req = await getPortfolioAPI();
    setData(req.data);
  };
  const onDelete = async (id) => {
    const res = await deletePortfolioAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.portfoliosection_id !== id );
      setData(arr)
    } 
  };
  useEffect(() => {
    fetchData();
  },[]);

  const style2 = { width: 60, fontSize: 14, padding: 4 };
  const flexboxstyle = { display: "flex", alignItems: "center", gap: "7px" };

  const PortfolioData = data.map((val) => {
    return {
      Title: val.portfoliosection_title,
      Text: val.portfoliosection_text,
      action: (
        <div style={flexboxstyle}>
          <Button
            style={style2}
            type="button"
            color="danger"
            size="sm"
            onClick={() => onDelete(val.portfoliosection_id)}
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
                `${process.env.PUBLIC_URL}/hero_section/portfolio_section`,
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
        title="Portfolio Section List"
        mainTitle="Portfolio Section List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Portfolio Section List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={PortfolioColumns}
                    data={PortfolioData}
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

export default Portfolio_Section_List;
