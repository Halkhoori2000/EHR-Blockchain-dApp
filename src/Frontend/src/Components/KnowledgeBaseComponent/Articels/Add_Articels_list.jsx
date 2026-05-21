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
import { Article_Category_Columns, style2 } from "./Add_Articels_Data";
import { useNavigate } from "react-router-dom";
import { deleteArticle, getArticlesDataList } from "../../../api/api";

function Add_Articels_list() {
  const navigate = useNavigate();

  const [gettingArticles, setgettingArticles] = useState([]);

  const getArticlesList = async () => {
    const res = await getArticlesDataList();
    setgettingArticles([...res.data]);
  };

  const deleteArticleItem = async (id) => {
    const res = await deleteArticle(id);
    console.log(id);
    console.log(res.data);
    if (res.status === 200) {
      const freshArray = gettingArticles.filter(
        (val) => val.articlespage_id !== id
      );
      setgettingArticles(freshArray);
    }
  };

  useEffect(() => {
    getArticlesList();
  }, []);

  const Article_Category_Data = gettingArticles.map((elem) => {
    return {
      Title: (
        <div>
          <span>{elem.articlespage_title}</span>
        </div>
      ),
      Category: `${elem.articlespage_category}`,
      SerialNumber: `${elem.articlespage_serialnumber}`,

      action: (
        <div>
          <span>
            <Button
              onClick={() => deleteArticleItem(elem.articlespage_id)}
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
                navigate(`${process.env.PUBLIC_URL}/knowledge/add_articles`, {
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
      <Breadcrumbs
        parent="Knowledge Base"
        title="Article List"
        mainTitle="Article List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Article List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Article_Category_Columns}
                    data={Article_Category_Data}
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

export default Add_Articels_list;
