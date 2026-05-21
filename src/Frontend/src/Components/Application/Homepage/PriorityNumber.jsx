import React, { Fragment } from "react";
import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { PriorityData, BtnText, BtnUrl } from "../../../Constant";
function PriorityNumber({ register, errors }) {
  return (
    <Fragment>
      <Row>
        <Col sm="4">
          <FormGroup>
            <Label>{PriorityData}</Label>
            <input
              className="form-control"
              type="number"
              name="rate"
              defaultValue="10"
              placeholder="Enter project Rate"
              {...register("rate", { required: true })}
            />
          </FormGroup>
        </Col>
        <Col sm="4">
          <FormGroup>
            <Label>{BtnText}</Label>
            <Input
              type="text"
              name="progress_level"
              className="form-control digits"
              required
            />
          </FormGroup>
        </Col>
        <Col sm="4">
          <FormGroup>
            <Label>{BtnUrl}</Label>
            <Input
              type="text"
              name="badge"
              placeholder="Btn Url"
              className="form-control digits"
              required
            />
          </FormGroup>
        </Col>
      </Row>
    </Fragment>
  );
}

export default PriorityNumber;
