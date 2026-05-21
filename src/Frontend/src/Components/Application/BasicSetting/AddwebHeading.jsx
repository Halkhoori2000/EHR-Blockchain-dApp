import React, { Fragment } from "react";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { WebHeading } from "../../../Constant";

function AddwebHeading({ register, errors }) {
  return (
    <Fragment>
      <Row>
        <Col>
          <FormGroup>
            <Label>{WebHeading}</Label>
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
    </Fragment>
  );
}

export default AddwebHeading;
