import React, { Fragment, useState, useEffect } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { Job_Category_Columns, style2 } from "./Job_Data";
import { useNavigate } from "react-router-dom";
import { deleteJobPostItem, getAllJobPostsList } from "../../../api/api";
function JobManagment () {
  
  const navigate = useNavigate();

  const [ jobPostList, setjobPostList ] = useState( [] );

  const getJobPosts = async () => {
    const res = await getAllJobPostsList();
    setjobPostList( [ ...res.data ] );
  };

  const deleteSingleJobPost = async( id ) => {
    const res = await deleteJobPostItem( id );
    if ( res.status === 200 ) {
      const freshArray = jobPostList.filter( ( val ) => val.postjobsection_id !== id );
      setjobPostList( freshArray );
    }
  }

  useEffect( () => {
    getJobPosts();
  }, [] );

  const Job_Category_Data = jobPostList.map((elem) => {
  return {
    Title: (
      <div>
        <span>{elem.postjobsection_title}</span>
      </div>
    ),
    Category: `${elem.postjobsection_category}`,
    Vecancy: `${elem.postjobsection_vacancy}`,
    SerialNumber: `${elem.postjobsection_serialnumber}`,

    action: (
      <div>
        <span>
          <Button
            onClick={() => deleteSingleJobPost(elem.postjobsection_id )}
            className="btn btn-danger btn-xs"
            style={ style2 }
          >
            Delete
          </Button>
        </span>{ " " }
        {/* &nbsp;&nbsp; */}
        <span>
          <Button
            onClick={ () => {
              navigate('/viho/hero_section/post_job', {state:{dataObj: elem}})
            } }
            className="btn btn-success btn-xs"
            style={ style2 }
          >
            Edit
          </Button>
        </span>{ " " }
        <span>
          <Button
            onClick={ () => {
              navigate('/viho/hero_section/post_job_list/view_job_details',  {state:{dataObj: elem}})
            } }
            className="btn btn-warning btn-xs"
            style={ style2 }
          >
            View
          </Button>
        </span>
      </div>
    ),
  }
  })
  

  return (
    <Fragment>
      <Breadcrumbs parent="Career" title="Jobs List" mainTitle="Jobs List" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Jobs List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Job_Category_Columns}
                    data={Job_Category_Data}
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

export default JobManagment;
