import React, { Fragment, useContext, useEffect, useState } from "react";
import "./seo_styling.css";
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
  CardHeader,
  Button,
} from "reactstrap";
import { TagsInput } from "react-tag-input-component";
import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link } from "react-router-dom";
import { getSeoInfoData, insertSeoInfo, updateSeoInfo } from "../../../api/api";

function Seo_Information () {
  
  const [ seoResData, setseoResData ] = useState( [] );

  const [metaKeywordsHomePage, setmetaKeywordsHomePage] = useState([]);
  const [metaKeywordsServicesPage, setmetaKeywordsServicesPage] = useState([]);
  const [metaDescriptionHomePage, setmetaDescriptionHomePage] = useState('');
  const [metaDescriptionServicesPage, setmetaDescriptionServicesPage] = useState('');
  const [metaKeywordsForPackages, setmetaKeywordsForPackages] = useState([]);
  const [metaKeywordsForPortfolios, setmetaKeywordsForPortfolios] = useState([]);
  const [metaDescriptionForPackages, setmetaDescriptionForPackages] = useState('');
  const [metaDescriptionForPortfolios, setmetaDescriptionForPortfolios] = useState('');
  const [metaKeywordsForTeamPage, setmetaKeywordsForTeamPage] = useState([]);
  const [metaKeywordsForCareerPage, setmetaKeywordsForCareerPage] = useState([]);
  const [metaDescriptionForTeamPage, setmetaDescriptionForTeamPage] = useState('');
  const [metaDescriptionForCareerPage, setmetaDescriptionForCareerPage] = useState('');
  const [metaKeywordsForEventCalenderPage, setmetaKeywordsForEventCalenderPage] = useState([]);
  const [metaKeywordsForGalleryPage, setmetaKeywordsForGalleryPage] = useState([]);
  const [metaDescriptionForEventCalenderPage, setmetaDescriptionForEventCalenderPage] = useState('');
  const [metaDescriptionForGalleryPage, setmetaDescriptionForGalleryPage] = useState('');
  const [metaKeywordsForFaqPage, setmetaKeywordsForFaqPage] = useState([]);
  const [metaKeywordsForBlogsPage, setmetaKeywordsForBlogsPage] = useState([]);
  const [metaDescriptionForFaqPage, setmetaDescriptionForFaqPage] = useState('');
  const [metaDescriptionForBlogsPage, setmetaDescriptionForBlogsPage] = useState('');
  const [metaKeywordsForRssFeedsPage, setmetaKeywordsForRssFeedsPage] = useState([]);
  const [metaKeywordsForContactPage, setmetaKeywordsForContactPage] = useState([]);
  const [metaDescriptionForRssFeedsPage, setmetaDescriptionForRssFeedsPage] = useState('');
  const [metaDescriptionForContactPage, setmetaDescriptionForContactPage] = useState('');
  const [metaKeywordsForQoutePage, setmetaKeywordsForQoutePage] = useState([]);
  const [metaKeywordsForProductsPage, setmetaKeywordsForProductsPage] = useState([]);
  const [metaDescriptionForQoutePage, setmetaDescriptionForQoutePage] = useState('');
  const [metaDescriptionForProductsPage, setmetaDescriptionForProductsPage] = useState('');
  const [metaKeywordsForCartPage, setmetaKeywordsForCartPage] = useState([]);
  const [metaKeywordsForCheckoutPage, setmetaKeywordsForCheckoutPage] = useState([]);
  const [metaDescriptionForCartPage, setmetaDescriptionForCartPage] = useState('');
  const [metaDescriptionForCheckoutPage, setmetaDescriptionForCheckoutPage] = useState('');
  const [metaKeywordsForLoginPage, setmetaKeywordsForLoginPage] = useState([]);
  const [metaKeywordsForRegisterPage, setmetaKeywordsForRegisterPage] = useState([]);
  const [metaDescriptionForLoginPage, setmetaDescriptionForLoginPage] = useState('');
  const [metaDescriptionForRegisterPage, setmetaDescriptionForRegisterPage] = useState('');
  const [metaKeywordsForForgotPasswordPage, setmetaKeywordsForForgotPasswordPage] = useState([]);
  const [metaKeywordsForEventsPage, setmetaKeywordsForEventsPage] = useState([]);
  const [metaDescriptionForForgotPasswordPage, setmetaDescriptionForForgotPasswordPage] = useState('');
  const [metaDescriptionForEventsPage, setmetaDescriptionForEventsPage] = useState('');
  const [metaKeywordsForCausesPage, setmetaKeywordsForCausesPage] = useState([]);
  const [metaDescriptionForCausesPage, setmetaDescriptionForCausesPage] = useState('');

  const getSeoInfoTable = async () => {
    const res = await getSeoInfoData();
    setseoResData( [ ...res.data ] );
    setmetaKeywordsHomePage( [...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforhomepage)] );
    setmetaDescriptionHomePage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforhomepage ));
    setmetaKeywordsServicesPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforservicespage )] );
    setmetaDescriptionServicesPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforservicespage ));
    setmetaKeywordsForPackages( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforpackages )] );
    setmetaDescriptionForPackages( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforpackages ));
    setmetaKeywordsForPortfolios( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforportfolios )] );
    setmetaDescriptionForPortfolios( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforportfolios ));
    setmetaKeywordsForTeamPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforteampage )] );
    setmetaDescriptionForTeamPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforteampage ));
    setmetaKeywordsForCareerPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforcareerpage )] );
    setmetaDescriptionForCareerPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforcareerpage ));
    setmetaKeywordsForEventCalenderPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforeventcalendarpage )] );
    setmetaDescriptionForEventCalenderPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforeventcalendarpage ));
    setmetaKeywordsForGalleryPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforgallerypage )] );
    setmetaDescriptionForGalleryPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforgallerypage ));
    setmetaKeywordsForFaqPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforfaqpage )] );
    setmetaDescriptionForFaqPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforfaqpage ));
    setmetaKeywordsForBlogsPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforblogspage )] );
    setmetaDescriptionForBlogsPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforblogspage ));
    setmetaKeywordsForRssFeedsPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforrssfeedspage )] );
    setmetaDescriptionForRssFeedsPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforrssfeedspage ));
    setmetaKeywordsForContactPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforcontactpage )] );
    setmetaDescriptionForContactPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforcontactpage ));
    setmetaKeywordsForQoutePage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforquotepage )] );
    setmetaDescriptionForQoutePage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforquotepage ));
    setmetaKeywordsForProductsPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforproductspage )] );
    setmetaDescriptionForProductsPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforproductspage ));
    setmetaKeywordsForCartPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforcartpage )] );
    setmetaDescriptionForCartPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforcartpage ));
    setmetaKeywordsForCheckoutPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforcheckoutpage )] );
    setmetaDescriptionForCheckoutPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforcheckoutpage ));
    setmetaKeywordsForLoginPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforloginpage )] );
    setmetaDescriptionForLoginPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforloginpage ));
    setmetaKeywordsForRegisterPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforregisterpage )] );
    setmetaDescriptionForRegisterPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforregisterpage ));
    setmetaKeywordsForForgotPasswordPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforforgotpasswordpage )] );
    setmetaDescriptionForForgotPasswordPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforforgotpasswordpage ));
    setmetaKeywordsForEventsPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforeventspage )] );
    setmetaDescriptionForEventsPage( JSON.parse(res.data[ 0 ].seoinformation_metadescriptionforeventspage ));
    setmetaKeywordsForCausesPage( [ ...JSON.parse(res.data[ 0 ].seoinformation_metakeywordsforcausespage )] );
    setmetaDescriptionForCausesPage( JSON.parse(res.data[ 0 ].Seoinformation_metadescriptionforcausespage ));

  }

  const updateSeoDataInDb = async (data) => {
    const dataObj = {
      seoinformation_metakeywordsforhomepage: JSON.stringify( metaKeywordsHomePage ),
      seoinformation_metadescriptionforhomepage: JSON.stringify( metaDescriptionHomePage ),
      seoinformation_metakeywordsforservicespage: JSON.stringify( metaKeywordsServicesPage ),
      seoinformation_metadescriptionforservicespage: JSON.stringify( metaDescriptionServicesPage ),
      seoinformation_metakeywordsforpackages: JSON.stringify( metaKeywordsForPackages ),
      seoinformation_metadescriptionforpackages: JSON.stringify( metaDescriptionForPackages ),
      seoinformation_metakeywordsforportfolios: JSON.stringify( metaKeywordsForPortfolios ),
      seoinformation_metadescriptionforportfolios: JSON.stringify( metaDescriptionForPortfolios ),
      seoinformation_metakeywordsforteampage: JSON.stringify( metaKeywordsForTeamPage ),
      seoinformation_metadescriptionforteampage: JSON.stringify( metaDescriptionForTeamPage ),
      seoinformation_metakeywordsforcareerpage: JSON.stringify( metaKeywordsForCareerPage ),
      seoinformation_metadescriptionforcareerpage: JSON.stringify( metaDescriptionForCareerPage ),
      seoinformation_metakeywordsforeventcalendarpage: JSON.stringify( metaKeywordsForEventCalenderPage ),
      seoinformation_metadescriptionforeventcalendarpage: JSON.stringify( metaDescriptionForEventCalenderPage ),
      seoinformation_metakeywordsforgallerypage: JSON.stringify( metaKeywordsForGalleryPage ),
      seoinformation_metadescriptionforgallerypage: JSON.stringify( metaDescriptionForGalleryPage ),
      seoinformation_metakeywordsforfaqpage: JSON.stringify( metaKeywordsForFaqPage ),
      seoinformation_metadescriptionforfaqpage: JSON.stringify( metaDescriptionForFaqPage ),
      seoinformation_metakeywordsforblogspage: JSON.stringify( metaKeywordsForBlogsPage ),
      seoinformation_metadescriptionforblogspage: JSON.stringify( metaDescriptionForBlogsPage ),
      seoinformation_metakeywordsforrssfeedspage: JSON.stringify( metaKeywordsForRssFeedsPage ),
      seoinformation_metadescriptionforrssfeedspage: JSON.stringify( metaDescriptionForRssFeedsPage ),
      seoinformation_metakeywordsforcontactpage: JSON.stringify( metaKeywordsForContactPage ),
      seoinformation_metadescriptionforcontactpage: JSON.stringify( metaDescriptionForContactPage ),
      seoinformation_metakeywordsforquotepage: JSON.stringify( metaKeywordsForQoutePage ),
      seoinformation_metadescriptionforquotepage: JSON.stringify( metaDescriptionForQoutePage ),
      seoinformation_metakeywordsforproductspage: JSON.stringify( metaKeywordsForProductsPage ),
      seoinformation_metadescriptionforproductspage: JSON.stringify( metaDescriptionForProductsPage ),
      seoinformation_metakeywordsforcartpage: JSON.stringify( metaKeywordsForCartPage ),
      seoinformation_metadescriptionforcartpage: JSON.stringify( metaDescriptionForCartPage ),
      seoinformation_metakeywordsforcheckoutpage: JSON.stringify( metaKeywordsForCheckoutPage ),
      seoinformation_metadescriptionforcheckoutpage: JSON.stringify( metaDescriptionForCheckoutPage ),
      seoinformation_metakeywordsforloginpage: JSON.stringify( metaKeywordsForLoginPage ),
      seoinformation_metadescriptionforloginpage: JSON.stringify( metaDescriptionForLoginPage ),
      seoinformation_metakeywordsforregisterpage: JSON.stringify( metaKeywordsForRegisterPage ),
      seoinformation_metadescriptionforregisterpage: JSON.stringify( metaDescriptionForRegisterPage ),
      seoinformation_metakeywordsforforgotpasswordpage: JSON.stringify( metaKeywordsForForgotPasswordPage ),
      seoinformation_metadescriptionforforgotpasswordpage: JSON.stringify( metaDescriptionForForgotPasswordPage ),
      seoinformation_metakeywordsforeventspage: JSON.stringify( metaKeywordsForEventsPage ),
      seoinformation_metadescriptionforeventspage: JSON.stringify( metaDescriptionForEventsPage ),
      seoinformation_metakeywordsforcausespage: JSON.stringify( metaKeywordsForCausesPage ),
      Seoinformation_metadescriptionforcausespage: JSON.stringify( metaDescriptionForCausesPage ),
      uniqueId: data
    }

    const res = await updateSeoInfo( dataObj );
    if ( res.status === 200 ) {
      alert( 'Success' );
    }
  }

  useEffect( () => {
    getSeoInfoTable();
  },[])


  return (
    <Fragment>
      <Breadcrumbs
        parent="Settings"
        title="Update SEO Informations"
        mainTitle="Update SEO Informations"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Home Page"}</Label>

                        <TagsInput
                          value={metaKeywordsHomePage}
                          onChange={setmetaKeywordsHomePage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Services Page"}</Label>

                        <TagsInput
                          value={metaKeywordsServicesPage}
                          onChange={setmetaKeywordsServicesPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Home Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionHomePage(e.target.value)}
                          value={metaDescriptionHomePage}
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Services Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionServicesPage(e.target.value)}
                          value={metaDescriptionServicesPage}
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  {/* //!secnd             */}
                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Packages"}</Label>

                        <TagsInput
                          value={metaKeywordsForPackages}
                          onChange={setmetaKeywordsForPackages}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Portfolios"}</Label>

                        <TagsInput
                          value={metaKeywordsForPortfolios}
                          onChange={setmetaKeywordsForPortfolios}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Packages"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForPackages(e.target.value)}
                          value={metaDescriptionForPackages}
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Portfolios"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForPortfolios(e.target.value)}
                          value={ metaDescriptionForPortfolios }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* //!third */}
                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Team Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForTeamPage}
                          onChange={setmetaKeywordsForTeamPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Career Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForCareerPage}
                          onChange={setmetaKeywordsForCareerPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Team Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForTeamPage(e.target.value)}
                          value={ metaDescriptionForTeamPage }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Career Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForCareerPage(e.target.value)}
                          value={ metaDescriptionForCareerPage }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* //!fourth */}
                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Event Calendar Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForEventCalenderPage}
                          onChange={setmetaKeywordsForEventCalenderPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Gallery Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForGalleryPage}
                          onChange={setmetaKeywordsForGalleryPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>
                          {"Meta Description for Event Calendar Page"}
                        </Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForEventCalenderPage(e.target.value)}
                          value={metaDescriptionForEventCalenderPage}
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Gallery Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForGalleryPage(e.target.value)}
                          value={metaDescriptionForGalleryPage}
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* //!fifth */}
                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for FAQ Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForFaqPage}
                          onChange={setmetaKeywordsForFaqPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Blogs Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForBlogsPage}
                          onChange={setmetaKeywordsForBlogsPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for FAQ Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForFaqPage(e.target.value)}
                          value={metaDescriptionForFaqPage}
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Blogs Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForBlogsPage(e.target.value)}
                          value={ metaDescriptionForBlogsPage }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* //!sixtgh */}
                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for RSS Feeds Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForRssFeedsPage}
                          onChange={setmetaKeywordsForRssFeedsPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Contact Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForContactPage}
                          onChange={setmetaKeywordsForContactPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for RSS Feeds Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForRssFeedsPage(e.target.value)}
                          value={ metaDescriptionForRssFeedsPage }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Contact Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForContactPage(e.target.value)}
                          value={ metaDescriptionForContactPage }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* //!seventh */}
                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Quote Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForQoutePage}
                          onChange={setmetaKeywordsForQoutePage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Products Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForProductsPage}
                          onChange={setmetaKeywordsForProductsPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Quote Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForQoutePage(e.target.value)}
                          value={ metaDescriptionForQoutePage }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Products Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForProductsPage(e.target.value)}
                          value={ metaDescriptionForProductsPage }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  {/* //!Eigth */}
                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Cart Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForCartPage}
                          onChange={setmetaKeywordsForCartPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Checkout Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForCheckoutPage}
                          onChange={setmetaKeywordsForCheckoutPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Cart Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForCartPage(e.target.value)}
                          value={ metaDescriptionForCartPage }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Checkout Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForCheckoutPage(e.target.value)}
                          value={ metaDescriptionForCheckoutPage }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  {/* //!Ninth */}
                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Login Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForLoginPage}
                          onChange={setmetaKeywordsForLoginPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Register Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForRegisterPage}
                          onChange={setmetaKeywordsForRegisterPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Login Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForLoginPage(e.target.value)}
                          value={ metaDescriptionForLoginPage }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Register Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForRegisterPage(e.target.value)}
                          value={ metaDescriptionForRegisterPage }
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* //!Tenth */}
                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>
                          {"Meta Keywords for Forgot Password Page"}
                        </Label>

                        <TagsInput
                          value={metaKeywordsForForgotPasswordPage}
                          onChange={setmetaKeywordsForForgotPasswordPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Events Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForEventsPage}
                          onChange={setmetaKeywordsForEventsPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>
                          {"Meta Description for Forgot Password Page"}
                        </Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForForgotPasswordPage(e.target.value)}
                          value={metaDescriptionForForgotPasswordPage}
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Events Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForEventsPage(e.target.value)}
                          value={metaDescriptionForEventsPage}
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  {/* //!eleven */}
                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Keywords for Causes Page"}</Label>

                        <TagsInput
                          value={metaKeywordsForCausesPage}
                          onChange={setmetaKeywordsForCausesPage}
                          name="fruits"
                          placeHolder="Enter Meta Keywords"
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup className="mb-0">
                        <Label>{"Meta Description for Causes Page"}</Label>
                        <Input
                          onChange={(e) => setmetaDescriptionForCausesPage(e.target.value)}
                          value={metaDescriptionForCausesPage}
                          type="textarea"
                          className="form-control"
                          placeholder=""
                          rows="3"
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Button
                            onClick={() => updateSeoDataInDb(seoResData[0].seoinformation_id)}
                            disabled={ (metaKeywordsHomePage.length && metaKeywordsServicesPage.length && metaKeywordsForPackages.length && metaKeywordsForPortfolios.length && metaKeywordsForTeamPage.length && metaKeywordsForCareerPage.length && metaKeywordsForEventCalenderPage.length && metaKeywordsForGalleryPage.length && metaKeywordsForFaqPage.length && metaKeywordsForBlogsPage.length && metaKeywordsForRssFeedsPage.length && metaKeywordsForContactPage.length && metaKeywordsForQoutePage.length && metaKeywordsForProductsPage.length && metaKeywordsForCartPage.length && metaKeywordsForCheckoutPage.length && metaKeywordsForLoginPage.length && metaKeywordsForRegisterPage.length && metaKeywordsForForgotPasswordPage.length && metaKeywordsForEventsPage.length && metaKeywordsForCausesPage.length > 0 && metaDescriptionHomePage && metaDescriptionServicesPage && metaDescriptionForPackages && metaDescriptionForPortfolios && metaDescriptionForTeamPage && metaDescriptionForCareerPage && metaDescriptionForEventCalenderPage && metaDescriptionForGalleryPage && metaDescriptionForFaqPage && metaDescriptionForBlogsPage && metaDescriptionForRssFeedsPage && metaDescriptionForContactPage && metaDescriptionForQoutePage && metaDescriptionForProductsPage && metaDescriptionForCartPage && metaDescriptionForCheckoutPage && metaDescriptionForLoginPage && metaDescriptionForRegisterPage && metaDescriptionForForgotPasswordPage && metaDescriptionForEventsPage && metaDescriptionForCausesPage ) ? false : true }
                            className="me-3"
                            color="success"
                          >
                            { "Update" }
                          </Button>
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

export default Seo_Information;
