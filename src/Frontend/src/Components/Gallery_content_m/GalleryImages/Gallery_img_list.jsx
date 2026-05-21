import React, { Fragment, useState, useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import {
  deleteGallerySection,
  getGallerySection,
  serverImageUrl,
} from "../../../api/api";
import { GalleryColumns } from "./Gallery_img_Data";

function Gallery_img_list() {
  const navigate = useNavigate();

  const [categoriesList, setcategoriesList] = useState([]);

  const getCategoryList = async () => {
    const res = await getGallerySection();
    setcategoriesList([...res.data]);
  };

  const deleteCategoryItem = async (id) => {
    const res = await deleteGallerySection(id);
    if (res.status === 200) {
      const freshArray = categoriesList.filter(
        (val) => val.gallerysection_id !== id
      );
      setcategoriesList(freshArray);
    }
  };

  useEffect(() => {
    getCategoryList();
  }, []);
  const style2 = { width: 60, fontSize: 14, padding: 4 };
  const style = { width: 40, height: 40 };
  const Blog_Category_Data = categoriesList.map((elem) => {
    return {
      image: (
        <Image
          attrImage={{
            src: serverImageUrl + elem.gallerysection_image,
            style: style,
            alt: "",
          }}
        />
      ),
      Title: (
        <div>
          <span>{elem.gallerysection_title}</span>
        </div>
      ),
      Category: `${elem.gallerysection_category}`,
      SerialNumber: `${elem.gallerysection_serialnumber}`,
      action: (
        <div>
          <span>
            <Button
              onClick={() => deleteCategoryItem(elem.gallerysection_id)}
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
                  `${process.env.PUBLIC_URL}/hero_section/gallery_img_list`,
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
                    columns={GalleryColumns}
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

export default Gallery_img_list;
