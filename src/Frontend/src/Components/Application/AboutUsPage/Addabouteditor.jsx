import React, { Fragment,useState } from "react";
import { Col, FormGroup, Label, Row } from "reactstrap";
import { AboutUsEditor } from "../../../Constant";
import CKEditors from "react-ckeditor-component";
function Addabouteditor({ register, errors }) {
     const [content, setContent] = useState("content");
     const onChange = (evt) => {
       const newContent = evt.editor.getData();
       setContent(newContent);
     };
  return (
    <Fragment>
      <Row>
        <Col>
          <FormGroup>
            <Label>{AboutUsEditor}</Label>
            <CKEditors
              activeclassName="p10"
              content={content}
              events={{
                change: onChange,
              }}
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

export default Addabouteditor;
