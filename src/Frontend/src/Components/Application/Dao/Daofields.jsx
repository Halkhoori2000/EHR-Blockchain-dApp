import React, { Fragment } from "react";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { DeoHeading, DeoText } from "../../../Constant";
function Daofields({ register, errors }) {
  return (
    <Fragment>
      <Row>
        <Col>
          <FormGroup>
            <Label>{DeoHeading}</Label>
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
            <Label>{DeoText}</Label>
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

export default Daofields;
