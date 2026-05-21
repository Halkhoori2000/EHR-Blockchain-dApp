import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5, Image } from "../../AbstractElements";

import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import {Popup_Columns , style, style2} from "./popups_Data";
import { useNavigate } from "react-router-dom";
import { deletePopupInfoInDb, getPopupInfoInDb, serverImageUrl } from "../../api/api";

function Popups_list () {

  const navigate = useNavigate();

  const [ popupListData, setpopupListData ] = useState( [] );

  const getPopupList = async () => {
    const res = await getPopupInfoInDb();
    setpopupListData( [ ...res.data ] );
  };

  const deletePopupDataInDb = async( id ) => {
    const res = await deletePopupInfoInDb( id );
    if ( res.status === 200 ) {
      const freshArray = popupListData.filter( ( val ) => val.announcementpopup_id !== id );
      setpopupListData( freshArray );
    }
  }

  useEffect( () => {
    getPopupList();
  }, [] );
  
  const Popup_Data = popupListData.map((elem) => {
  return {
    image: <Image attrImage={{ src: serverImageUrl + elem.announcementpopup_image, style: style, alt: "" }} />,
    Title: (
      <div>
        <span>{elem.announcementpopup_popupname}</span>
      </div>
    ),
    SerialNumber: `${elem.announcementpopup_serialnumber}`,

    Category: `${elem.announcementpopup_delay}`,
    action: (
      <div>
        <span>
          <Button
            onClick={() => deletePopupDataInDb(elem.announcementpopup_id )}
            className="btn btn-danger btn-xs"
            style={ style2 }
          >
            Delete
          </Button>
        </span>{ " " }
        &nbsp;&nbsp;
        <span>
          <Button
            onClick={ () => {
              navigate(`${process.env.PUBLIC_URL}/annoucement/add_popups`, {state:{dataObj: elem}})
            } }
            className="btn btn-success btn-xs"
            style={ style2 }
          >
            Edit{ " " }
          </Button>
        </span>
      </div>
    ),
  }
  })
  

  return (
    <Fragment>
      <Breadcrumbs
        parent="Announcement Popup"
        title="Popups List"
        mainTitle="Popups List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Popups List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Popup_Columns}
                    data={Popup_Data}
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

export default Popups_list;
