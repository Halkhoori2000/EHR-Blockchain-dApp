import React, { Fragment } from "react";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { AddMeetName, AddMeetTitle, AddMeetTwitter, AboutUsImage } from "../../../Constant";
import Dropzone from "react-dropzone-uploader";

function AddCrewHeadings({ register, errors }) {
          const getUploadParams = ({ meta }) => {
            return {
              url: "https://httpbin.org/post",
            };
          };
          const handleChangeStatus = ({ meta, file }, status) => {};
  return (
    <Fragment>
      <Row>
        <Col>
          <FormGroup>
            <Label>{AddMeetName}</Label>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Add heading *"
              {...register("title", { required: true })}
            />
            <span style={{ color: "red" }}>
              {errors.title && "Title is required"}
            </span>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label>{AddMeetTitle}</Label>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Add heading *"
              {...register("title", { required: true })}
            />
            <span style={{ color: "red" }}>
              {errors.title && "Title is required"}
            </span>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label>{AddMeetTwitter}</Label>
            <input
              className="form-control"
              type="text"
              name="title"
              placeholder="Add heading *"
              {...register("title", { required: true })}
            />
            <span style={{ color: "red" }}>
              {errors.title && "Title is required"}
            </span>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <FormGroup>
            <Label>{AboutUsImage}</Label>
            <Dropzone
              getUploadParams={getUploadParams}
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
    </Fragment>
  );
}

export default AddCrewHeadings;
