import React, { useEffect, useState } from "react";
import Dropzone from "react-dropzone-uploader";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
import { updateTeamSectionAPI } from "../../../api/api";

const Update = ({ listId }) => {
  const history = useNavigate();

  const [thename, setTheName] = useState("");
  const [rank, setRank] = useState("");
  const [facebook, setFacebook] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedIn, setLinkedIn] = useState("");
  const [saveImg, setSaveImg] = useState("");

  const thelocation = useLocation();
  const ifExists = thelocation.state;

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

    await updateTeamSectionAPI(listId, formData);
    history(`${process.env.PUBLIC_URL}/hero_section/team_section_list`, {
      replace: true,
    });
  };

  const populateData = () => {
    if (ifExists) {
      setTheName(ifExists?.dataObj.teamsection_name);
      setRank(ifExists?.dataObj.teamsection_rank);
      setFacebook(ifExists?.dataObj.teamsection_facebook);
      setTwitter(ifExists?.dataObj.teamsection_twitter);
      setInstagram(ifExists?.dataObj.teamsection_instagram);
      setLinkedIn(ifExists?.dataObj.teamsection_linkedin);
      setSaveImg(ifExists?.dataObj.teamsection_image);
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
