import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { useLocation, useNavigate } from "react-router-dom";
import { Row, Col, Form, FormGroup, Label, Button } from "reactstrap";
import { updateVideoVerisonAPI } from "../../../../api/api";
const Update = ({ listId }) => {
  const history = useNavigate();
  const [videoUrl, setVideoUrl] = useState("");
  const [imgFile, setImgFile] = useState("");

  const thelocation = useLocation();
  const ifExists = thelocation.state;

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setImgFile(file);
  };
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("videoversionslider_videolink", videoUrl);
    formData.append("videoversionslider_image", imgFile);

    console.log(formData, "form");
    await updateVideoVerisonAPI(listId, formData);
    history(`${process.env.PUBLIC_URL}/hero_section/vedio_list`, {
      replace: true,
    });
  };
  const populateData = () => {
    if (ifExists) {
      setVideoUrl(ifExists?.dataObj.videoversionslider_videolink);
      setImgFile(ifExists?.dataObj.videoversionslider_image);
    }
  };

  useEffect(() => {
    populateData();
  }, []);
  return (
    <>
      <Form
        className="theme-form"
        onSubmit={onHandleSubmit}
        method="post"
        encType="multipart/form-data"
      >
        <Row>
          <Col md="12">
            <FormGroup>
              <Label>{"Video Link"}</Label>
              <input
                type="text"
                className="form-control"
                name="videoversionslider_videolink"
                placeholder="Add heading *"
                value={videoUrl}
                onChange={(e) => setVideoUrl(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{"Image"}</Label>
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
              <Button type="submit" color="success">
                Update
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Update;
