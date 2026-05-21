import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5, Image } from "../../../AbstractElements";
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
import { TeamColumns } from "./Team_Section_Data";
import {
  deleteTeamSectionAPI,
  getTeamSectionAPI,
  serverImageUrl,
} from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Team_section_List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const req = await getTeamSectionAPI();
    setData(req.data);
  };

  // console.log(data)
  const onDelete = async (id) => {
    const res = await deleteTeamSectionAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.teamsection_id !== id );
      setData(arr)
    } 
  };
  useEffect(() => {
    fetchData();
  },[]);
  const style2 = { width: 60, fontSize: 14, padding: 4 };
  const flexboxstyle = { display: "flex", alignItems: "center", gap: "7px" };
  const style = { width: 40, height: 40 };

  const TeamData = data.map((val) => {
    return {
      image: (
        <Image
          attrImage={{
            src: serverImageUrl + val.teamsection_image,
            style: style,
            alt: "",
          }}
        />
      ),
      Name: val.teamsection_name,
      Rank: val.teamsection_rank,
      Facebook: val.teamsection_facebook,
      Twitter: val.teamsection_twitter,
      Instagram: val.teamsection_instagram,
      Linkedin: val.teamsection_linkedin,
      action: (
        <div style={flexboxstyle}>
          <Button
            style={style2}
            type="button"
            color="danger"
            size="sm"
            onClick={() => onDelete(val.teamsection_id)}
          >
            Delete
          </Button>
          <Button
            style={style2}
            type="button"
            color="success"
            size="sm"
            onClick={() =>
              navigate(`${process.env.PUBLIC_URL}/hero_section/team_section`, {
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
        title="Team Section List"
        mainTitle="Team Section List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Team Section List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={TeamColumns}
                    data={TeamData}
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

export default Team_section_List;
