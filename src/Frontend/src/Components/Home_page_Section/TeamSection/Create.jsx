import React, { useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { insertTeamSectionAPI } from "../../../api/api";

const Create = () => {
  const history = useNavigate();

  const [thename, setTheName] = useState("");
  const [rank, setRank] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [saveImg, setSaveImg] = useState("");

  // called every time a file's `status` changes
  const handleChangeStatus = ({ meta, file }, status) => {
    setSaveImg(file);
  };

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("teamsection_name", thename);
    formData.append("teamsection_rank", rank);
    formData.append("teamsection_facebook", facebook);
    formData.append("teamsection_twitter", twitter);
    formData.append("teamsection_instagram", instagram);
    formData.append("teamsection_linkedin", linkedIn);
    formData.append("teamsection_image", saveImg);

    await insertTeamSectionAPI(formData);
    history(`${process.env.PUBLIC_URL}/hero_section/team_section_list`, {
      replace: true,
    });
  };
  return (
    <>
      <Form
        className="theme-form"
        onSubmit={onHandleSubmit}
        method="post"
        encType="multipart/form-data"
      >
        <Row>
          <Col md="6">
            <FormGroup>
              <Label>{"Name"}</Label>
              <input
                placeholder="Name"
                value={thename}
                onChange={(e) => setTheName(e.target.value)}
                name="theName"
                className="form-control"
              />
            </FormGroup>
          </Col>
          <Col md="6">
            <FormGroup>
              <Label>{"Rank"}</Label>
              <input
                placeholder="Rank"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                name="rank"
                className="form-control"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{"Facebook"}</Label>
              <input
                placeholder="Facebook"
                value={facebook}
                onChange={(e) => setFacebook(e.target.value)}
                name="facebook"
                className="form-control"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{"Twitter"}</Label>
              <input
                placeholder="Twitter"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                name="theName"
                className="form-control"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{"Instagram"}</Label>
              <input
                placeholder="Instagram"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                name="instagram"
                className="form-control"
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label>{"Linkedin"}</Label>
              <input
                placeholder="LinkedIn"
                value={linkedIn}
                onChange={(e) => setLinkedIn(e.target.value)}
                name="linkedin"
                className="form-control"
              />
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
              <Button type="submit" color="success">
                Submit
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Create;
