import React, { Fragment } from 'react';
import { Col, FormGroup, Label, Row } from 'reactstrap';
import { Addtext } from "../../../Constant";
function SliderText({ register, errors }) {
  return (
    <Fragment>
      <Row>
        <Col>
          <FormGroup>
            <Label>{Addtext}</Label>
            <input
              className="form-control"
              type="text"
              name="text_name"
              placeholder="Add Text"
              {...register("text_name", { required: true })}
            />
            <span style={{ color: "red" }}>
              {errors.text_name && "Text Name is required"}
            </span>
          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
}

export default SliderText