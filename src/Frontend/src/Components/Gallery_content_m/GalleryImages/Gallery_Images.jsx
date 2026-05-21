import React, { Fragment, useContext, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button
} from "reactstrap";
import { Breadcrumbs } from "../../../AbstractElements";
import { useNavigate, useLocation } from "react-router-dom";
import Dropzone from "react-dropzone-uploader";
import { insertGallerySection, updateGallerySection } from "../../../api/api";

function Gallery_Images() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [serialnumber, setSerialNumber] = useState("");
  const [imagefile, setImageFile] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handlSubmitData = async () => {
    const formData = new FormData();
    formData.append("gallerysection_title", title);
    formData.append("gallerysection_category", category);
    formData.append("gallerysection_serialnumber", serialnumber);
    formData.append("gallerysection_image", imagefile);

    const res = await insertGallerySection(formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/gallery_img_list`);
    } else {
      alert("Error occured.");
    }
  };
  const handlUpdateData = async (id) => {
    const formData = new FormData();
    formData.append("gallerysection_title", title);
    formData.append("gallerysection_category", category);
    formData.append("gallerysection_serialnumber", serialnumber);
    formData.append("gallerysection_image", imagefile);

    const res = await updateGallerySection(id, formData);
    if (res.status === 200) {
      navigate(`${process.env.PUBLIC_URL}/hero_section/gallery_img_list`);
    } else {
      alert("Error occured.");
    }
  };

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setImageFile(file);
  };
  const populateCategoryData = () => {
    if (location.state) {
      setTitle(location.state.dataObj.gallerysection_title);
      setCategory(location.state.dataObj.gallerysection_category);
      setSerialNumber(location.state.dataObj.gallerysection_serialnumber);
      setImageFile(location.state.dataObj.gallerysection_image);
    }
  };

  useEffect(() => {
    populateCategoryData();
  }, []);
  return (
    <Fragment>
      <Breadcrumbs parent="Gallery" title="Gallery" mainTitle="Gallery" />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form className="theme-form">
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Title"}</Label>
                        <Input
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Serial Number"}</Label>
                        <input
                          className="form-control"
                          type="number"
                          placeholder="Serial Number"
                          value={serialnumber}
                          onChange={(e) => setSerialNumber(e.target.value)}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <Label>{"Category "}</Label>
                        <Input
                          type="select"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                          value={category}
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option> Select a Category</option>
                          <option>Active</option>
                          <option>Deactive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <Label>{"Image "}</Label>
                        <Dropzone
                          onChangeStatus={handleChangeStatus}
                          maxFiles={1}
                          multiple={false}
                          canCancel={false}
                          inputContent="Drop A File"
                          styles={{
                            dropzone: { width: "100%", height: 50 },
                            dropzoneActive: { borderColor: "green" },
                          }}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        {location.state ? (
                          <Button
                            onClick={() =>
                              handlUpdateData(
                                location.state.dataObj.gallerysection_id
                              )
                            }
                            className="me-3"
                            color="success"
                          >
                            {"Update"}
                          </Button>
                        ) : (
                          <Button
                            onClick={handlSubmitData}
                            className="me-3"
                            color="success"
                          >
                            {"Submit"}
                          </Button>
                        )}
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default Gallery_Images;
