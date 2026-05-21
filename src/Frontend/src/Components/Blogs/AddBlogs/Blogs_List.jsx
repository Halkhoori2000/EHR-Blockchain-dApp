import React, { Fragment, useState, useEffect } from "react";
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
import { Add_Blogs_Columns, style, style2 } from "./Blogs_Data";
import { useNavigate } from "react-router-dom";
import {
  deleteAddBlogSection,
  getAddBlogSection,
  serverImageUrl,
} from "../../../api/api";

function Blogs_List() {
  const navigate = useNavigate();
  const [blogListState, setblogListState] = useState([]);

  const getBlogLinks = async () => {
    const res = await getAddBlogSection();
    setblogListState([...res.data]);
  };

  const deleteBlogElem = async (id) => {
    const res = await deleteAddBlogSection(id);
    if (res.status === 200) {
      const freshArray = blogListState.filter(
        (val) => val.blogsection_id !== id
      );
      setblogListState(freshArray);
    }
  };

  useEffect(() => {
    getBlogLinks();
  }, []);

  const Add_Blogs_Data = blogListState.map((elem) => {
    return {
      image: (
        <Image
          attrImage={{
            src: serverImageUrl + elem.blogsection_image,
            style: style,
            alt: "Unavailable",
          }}
        />
      ),

      Title: `${elem.blogsection_title}`,
      Category: `${elem.blog_category_id}`,
      Serialnumber: `${elem.blogsection_serialnumber}`,

      action: (
        <div>
          <span>
            <Button
              onClick={() => deleteBlogElem(elem.blogsection_id)}
              className="btn btn-danger btn-xs"
              style={style2}
            >
              Delete
            </Button>
          </span>{" "}
          &nbsp;&nbsp;
          <span>
            <Button
              onClick={() => {
                navigate(`${process.env.PUBLIC_URL}/hero_section/add_blog`, {
                  state: { dataObj: elem },
                });
              }}
              className="btn btn-success btn-xs"
              style={style2}
            >
              Edit{" "}
            </Button>
          </span>
        </div>
      ),
    };
  });

  return (
    <Fragment>
      <Breadcrumbs parent="Blogs" title="Blog  List" mainTitle="Blog List" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Blogs List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Add_Blogs_Columns}
                    data={Add_Blogs_Data}
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

export default Blogs_List;
