import React, { Fragment, useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import {
  deleteGalleryCategories,
  getGalleryCategories,
} from "../../../api/api";
import { Gallery_Category_Columns } from "./Gallery_Data";

function Gallery_Categories_List() {
  const navigate = useNavigate();

  const [categoriesList, setcategoriesList] = useState([]);

  const getCategoryList = async () => {
    const res = await getGalleryCategories();
    setcategoriesList([...res.data]);
  };

  const deleteCategoryItem = async (id) => {
    const res = await deleteGalleryCategories(id);
    if (res.status === 200) {
      const freshArray = categoriesList.filter(
        (val) => val.gallerycategorysection_id !== id
      );
      setcategoriesList(freshArray);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);
  const style2 = { width: 60, fontSize: 14, padding: 4 };
  const flexboxstyle = { display: 'flex', alignItems: 'center', gap: '7px' };
  const style = { width: 40, height: 40 };
  const Blog_Category_Data = categoriesList.map((elem) => {
    return {
      Name: (
        <div>
          <span>{elem.gallerycategorysection_categoryname}</span>
        </div>
      ),
      SerialNumber: `${elem.Gallerycategorysection_categoryserialnumber}`,

      Status: `${elem.gallerycategorysection_categorystatus}`,
      action: (
        <div>
          <span>
            <Button
              onClick={() => deleteCategoryItem(elem.gallerycategorysection_id)}
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
                navigate(
                  `${process.env.PUBLIC_URL}/hero_section/gallery_category`,
                  { state: { dataObj: elem } }
                );
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
        parent="Blogs"
        title="Categories List"
        mainTitle="Categories List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Categories List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={Gallery_Category_Columns}
                    data={Blog_Category_Data}
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

export default Gallery_Categories_List;
