import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5, Image } from "../../../AbstractElements";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { PartnersColumns } from "./Partners_Data";
import { deletePartnersAPI, getPartnersAPI, serverImageUrl } from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Partners_List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const req = await getPartnersAPI();
    setData(req.data);
  }

  const onDelete = async (id) => {
    const res = await deletePartnersAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.partnerssection_id !== id );
      setData(arr)
    } 
  };

  useEffect(() => {
    fetchData();
  },[]);

  const style2 = { width: 60, fontSize: 14, padding: 4 };
  const flexboxstyle = { display: 'flex', alignItems: 'center', gap: '7px' };
  const style = { width: 40, height: 40 };

  const PartnersData = data.map((val) => {
    return {
      image: (
        <Image
          attrImage={{
            src: serverImageUrl + val.partnerssection_image,
            style: style,
            alt: "",
          }}
        />
      ),
      Url: val.partnerssection_url,
      SerialNumber: val.partnerssection_serialnumber,
      action: (
        <div style={flexboxstyle}>
          <Button
            style={style2}
            type="button"
            color="danger"
            size="sm"
            onClick={() => onDelete(val.partnerssection_id)}
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
                `${process.env.PUBLIC_URL}/hero_section/partners`,
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
        title="Partners List"
        mainTitle="PartnersList"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Partners List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={PartnersColumns}
                    data={PartnersData}
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

export default Partners_List;
