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
import { BlogColumns } from "./Blog_Section_Data";
import { deleteBlogAPI, getBlogAPI } from "../../../api/api";
import { useNavigate } from "react-router-dom";

function Blog_Section_List() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const req = await getBlogAPI();
    setData(req.data);
  };

  // blogsection_id

  const onDelete = async (id) => {
    const res = await deleteBlogAPI(id);
    if(res.status === 200) {
      const arr = data.filter( ( val ) => val.blogsection_id !== id );
      setData(arr)
    } 
  };
  useEffect(() => {
    fetchData();
  }, []);
  const style2 = { width: 60, fontSize: 14, padding: 4 };
  const flexboxstyle = { display: "flex", alignItems: "center", gap: "7px" };

  const BlogData = data.map((val) => {
    return {
      Title: val.blogsection_title,
      Text: val.blogsection_text,
      action: (
        <div style={flexboxstyle}>
          <Button
            style={style2}
            type="button"
            color="danger"
            size="sm"
            onClick={() => onDelete(val.blogsection_id)}
          >
            Delete
          </Button>
          <Button
            style={style2}
            type="button"
            color="success"
            size="sm"
            onClick={() =>
              navigate(`${process.env.PUBLIC_URL}/hero_section/blog_section`, {
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
        title="Blog Section List"
        mainTitle="Blog Section List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Blog Section List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={BlogColumns}
                    data={BlogData}
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

export default Blog_Section_List;
