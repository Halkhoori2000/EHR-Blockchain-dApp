import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, Image, H5 } from "../../../AbstractElements";

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
import { Call_TO_Columns } from "./Call_To_Data";
import {
  deleteCallToActionAPI,
  getCallToActionAPI,
  serverImageUrl,
} from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Call_To_List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const req = await getCallToActionAPI();
    setData(req.data);
  };

  const onDelete = async (id) => {
    const res = await deleteCallToActionAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.calltoactionsection_id !== id );
      setData(arr)
    } 
  };

  useEffect(() => {
    fetchData();
  }, []);

  const style2 = { width: 60, fontSize: 14, padding: 4 };
  const flexboxstyle = { display: "flex", alignItems: "center", gap: "7px" };
  const style = { width: 40, height: 40 };
  const Call_TO_Data = data.map((val) => {
    return {
      image: (
        <Image
          attrImage={{
            src: serverImageUrl + val.calltoactionsection_image,
            style: style,
            alt: "",
          }}
        />
      ),
      Text: val.Calltoactionsection_title,
      ButtonText: val.calltoactionsection_buttontext,
      ButtonUrl: val.calltoactionsection_buttonURL,
      action: (
        <div style={flexboxstyle}>
          <Button
            style={style2}
            type="button"
            color="danger"
            size="sm"
            onClick={() => onDelete(val.calltoactionsection_id)}
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
                `${process.env.PUBLIC_URL}/hero_section/call_to_action`,
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
        title="Call To Action Section List"
        mainTitle="Call To Action Section List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Call To Action List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Call_TO_Columns}
                    data={Call_TO_Data}
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

export default Call_To_List;
