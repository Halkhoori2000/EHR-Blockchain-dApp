import React, { Fragment, useContext, useState, useEffect } from "react";
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
  Button,
} from "reactstrap";

import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link } from "react-router-dom";
import { getPageHeadingDataFromDb, updatePageHeadingInfo } from "../../../api/api";

function Page_Headings () {

  const [ pageHeadingState, setpageHeadingState ] = useState( [] );
  
  const [ serviceTitle, setserviceTitle ] = useState( '' );
  const [ serviceSubtitle, setserviceSubtitle ] = useState( '' );
  const [ serviceDetailsTitle, setserviceDetailsTitle ] = useState( '' );
  const [ portfolioTitle, setportfolioTitle ] = useState( '' );
  const [ portfolioSubtitle, setportfolioSubtitle ] = useState( '' );
  const [ portfolioDetailsTitle, setportfolioDetailsTitle ] = useState( '' );
  const [ faqTitle, setfaqTitle ] = useState( '' );
  const [ faqSubtitle, setfaqSubtitle ] = useState( '' );
  const [ pricingTitle, setpricingTitle ] = useState( '' );
  const [ pricingSubtitle, setpricingSubtitle ] = useState( '' );
  const [ productTitle, setproductTitle ] = useState( '' );
  const [ productSubtitle, setproductSubtitle ] = useState( '' );
  const [ productDetailsTitle, setproductDetailsTitle ] = useState( '' );
  const [ cartTitle, setcartTitle ] = useState( '' );
  const [ cartSubtitle, setcartSubtitle ] = useState( '' );
  const [ checkoutTitle, setcheckoutTitle ] = useState( '' );
  const [ checkoutSubtitle, setcheckoutSubtitle ] = useState( '' );
  const [ knowledgebaseTitle, setknowledgebaseTitle ] = useState( '' );
  const [ knowledgebaseSubtitle, setknowledgebaseSubtitle ] = useState( '' );
  const [ knowledgebaseDetailsTitle, setknowledgebaseDetailsTitle ] = useState( '' );
  const [ blogTitle, setblogTitle ] = useState( '' );
  const [ blogSubtitle, setblogSubtitle ] = useState( '' );
  const [ blogDetailsTitle, setblogDetailsTitle ] = useState( '' );
  const [ rssTitle, setrssTitle ] = useState( '' );
  const [ rssSubtitle, setrssSubtitle ] = useState( '' );
  const [ rssDetailsTitle, setrssDetailsTitle ] = useState( '' );
  const [ galleryTitle, setgalleryTitle ] = useState( '' );
  const [ gallerySubtitle, setgallerySubtitle ] = useState( '' );
  const [ careerTitle, setcareerTitle ] = useState( '' );
  const [ careerSubtitle, setcareerSubtitle ] = useState( '' );
  const [ courseTitle, setcourseTitle ] = useState( '' );
  const [ courseSubtitle, setcourseSubtitle ] = useState( '' );
  const [ courseDetailsTitle, setcourseDetailsTitle ] = useState( '' );
  const [ eventCalenderTitle, seteventCalenderTitle ] = useState( '' );
  const [ eventCalenderSubtitle, seteventCalenderSubtitle ] = useState( '' );
  const [ teamTitle, setteamTitle ] = useState( '' );
  const [ teamSubtitle, setteamSubtitle ] = useState( '' );
  const [ contactTitle, setcontactTitle ] = useState( '' );
  const [ contactSubtitle, setcontactSubtitle ] = useState( '' );
  const [ qouteTitle, setqouteTitle ] = useState( '' );
  const [ qouteSubtitle, setqouteSubtitle ] = useState( '' );
  const [ errorPageTitle, seterrorPageTitle ] = useState( '' );
  const [ errorPageSubTitle, seterrorPageSubTitle ] = useState( '' );
  const [ eventTitle, seteventTitle ] = useState( '' );
  const [ eventSubtitle, seteventSubtitle ] = useState( '' );
  const [ eventDetailsTitle, seteventDetailsTitle ] = useState( '' );
  const [ causeTitle, setcauseTitle ] = useState( '' );
  const [ causeSubTitle, setcauseSubTitle ] = useState( '' );
  const [ causeDetailsTitle, setcauseDetailsTitle ] = useState( '' );
  const [ clientFeedbackTitle, setclientFeedbackTitle ] = useState( '' );
  const [ clientFeedbackSubtitle, setclientFeedbackSubtitle ] = useState( '' );

  const getPageHeadingData = async () => {
    const res = await getPageHeadingDataFromDb();
    setpageHeadingState( [ ...res.data ] );
    setserviceTitle( res.data[ 0 ].pageheadings_servicetitle );
    setserviceSubtitle( res.data[ 0 ].pageheadings_servicesubtitle );
    setserviceDetailsTitle( res.data[ 0 ].pageheadings_servicedetailstitle );
    setportfolioTitle( res.data[ 0 ].pageheadings_portfoliotitle );
    setportfolioSubtitle( res.data[ 0 ].pageheadings_portfoliosubtitle );
    setportfolioDetailsTitle( res.data[ 0 ].pageheadings_portfoliodetailstitle );
    setfaqTitle( res.data[ 0 ].pageheadings_faqtitle );
    setfaqSubtitle( res.data[ 0 ].pageheadings_faqsubtitle );
    setpricingTitle( res.data[ 0 ].pageheadings_pricingtitle );
    setpricingSubtitle( res.data[ 0 ].pageheadings_pricingsubtitle );
    setproductTitle( res.data[ 0 ].pageheadings_producttitle );
    setproductSubtitle( res.data[ 0 ].pageheadings_productsubtitle );
    setproductDetailsTitle( res.data[ 0 ].pageheadings_productdetailstitle );
    setcartTitle( res.data[ 0 ].pageheadings_carttitle );
    setcartSubtitle( res.data[ 0 ].pageheadings_cartsubtitle );
    setcheckoutTitle( res.data[ 0 ].pageheadings_checkouttitle );
    setcheckoutSubtitle( res.data[ 0 ].pageheadings_checkoutsubtitle );
    setknowledgebaseTitle( res.data[ 0 ].pageheadings_knowledgebasetitle );
    setknowledgebaseSubtitle( res.data[ 0 ].pageheadings_knowledgebasesubtitle );
    setknowledgebaseDetailsTitle( res.data[ 0 ].pageheadings_knowledgebasedetailstitle );
    setblogTitle( res.data[ 0 ].pageheadings_blogtitle );
    setblogSubtitle( res.data[ 0 ].pageheadings_blogsubtitle );
    setblogDetailsTitle( res.data[ 0 ].pageheadings_blogdetailstitle );
    setrssTitle( res.data[ 0 ].pageheadings_RSStitle );
    setrssSubtitle( res.data[ 0 ].pageheadings_RSSsubtitle );
    setrssDetailsTitle( res.data[ 0 ].pageheadings_RSSdetailstitle );
    setgalleryTitle( res.data[ 0 ].pageheadings_gallerytitle );
    setgallerySubtitle( res.data[ 0 ].pageheadings_gallerysubtitle );
    setcareerTitle( res.data[ 0 ].pageheadings_careertitle );
    setcareerSubtitle( res.data[ 0 ].pageheadings_careersubtitle );
    setcourseTitle( res.data[ 0 ].pageheadings_coursetitle );
    setcourseSubtitle( res.data[ 0 ].pageheadings_coursesubtitle );
    setcourseDetailsTitle( res.data[ 0 ].pageheadings_coursedetailstitle );
    seteventCalenderTitle( res.data[ 0 ].pageheadings_eventcalendartitle );
    seteventCalenderSubtitle( res.data[ 0 ].pageheadings_eventcalendarsubtitle );
    setteamTitle( res.data[ 0 ].pageheadings_teamtitle );
    setteamSubtitle( res.data[ 0 ].pageheadings_teamsubtitle );
    setcontactTitle( res.data[ 0 ].pageheadings_contacttitle );
    setcontactSubtitle( res.data[ 0 ].pageheadings_contactsubtitle );
    setqouteTitle( res.data[ 0 ].pageheadings_quotetitle );
    setqouteSubtitle( res.data[ 0 ].pageheadings_quotesubtitle );
    seterrorPageTitle( res.data[ 0 ].pageheadings_errorpagetitle );
    seterrorPageSubTitle( res.data[ 0 ].pageheadings_errorpagesubtitle );
    seteventTitle( res.data[ 0 ].pageheadings_eventtitle );
    seteventSubtitle( res.data[ 0 ].pageheadings_eventsubtitle );
    seteventDetailsTitle( res.data[ 0 ].pageheadings_eventdetailstitle );
    setcauseTitle( res.data[ 0 ].pageheadings_causetitle );
    setcauseSubTitle( res.data[ 0 ].pageheadings_causesubtitle );
    setcauseDetailsTitle( res.data[ 0 ].pageheadings_causedetailstitle );
    setclientFeedbackTitle( res.data[ 0 ].pageheadings_clientfeedbacktitle );
    setclientFeedbackSubtitle( res.data[ 0 ].Pageheadings_clientfeedbacksubtitle );
  }

  const updatePageHeadingDataInDB = async(data) => {
    const dataObj = {
      pageheadings_servicetitle: serviceTitle,
      pageheadings_servicesubtitle: serviceSubtitle,
      pageheadings_servicedetailstitle: serviceDetailsTitle,
      pageheadings_portfoliotitle: portfolioTitle,
      pageheadings_portfoliosubtitle: portfolioSubtitle,
      pageheadings_portfoliodetailstitle: portfolioDetailsTitle,
      pageheadings_faqtitle: faqTitle,
      pageheadings_faqsubtitle: faqSubtitle,
      pageheadings_pricingtitle: pricingTitle,
      pageheadings_pricingsubtitle: pricingSubtitle,
      pageheadings_producttitle: productTitle,
      pageheadings_productsubtitle: productSubtitle,
      pageheadings_productdetailstitle: productDetailsTitle,
      pageheadings_carttitle: cartTitle,
      pageheadings_cartsubtitle: cartSubtitle,
      pageheadings_checkouttitle: checkoutTitle,
      pageheadings_checkoutsubtitle: checkoutSubtitle,
      pageheadings_knowledgebasetitle: knowledgebaseTitle,
      pageheadings_knowledgebasesubtitle: knowledgebaseSubtitle,
      pageheadings_knowledgebasedetailstitle: knowledgebaseDetailsTitle,
      pageheadings_blogtitle: blogTitle,
      pageheadings_blogsubtitle: blogSubtitle,
      pageheadings_blogdetailstitle: blogDetailsTitle,
      pageheadings_RSStitle: rssTitle,
      pageheadings_RSSsubtitle: rssSubtitle,
      pageheadings_RSSdetailstitle: rssDetailsTitle,
      pageheadings_gallerytitle: galleryTitle,
      pageheadings_gallerysubtitle: gallerySubtitle,
      pageheadings_careertitle: careerTitle,
      pageheadings_careersubtitle: careerSubtitle,
      pageheadings_coursetitle: courseTitle,
      pageheadings_coursesubtitle: courseSubtitle,
      pageheadings_coursedetailstitle: courseDetailsTitle,
      pageheadings_eventcalendartitle: eventCalenderTitle,
      pageheadings_eventcalendarsubtitle: eventCalenderSubtitle,
      pageheadings_teamtitle: teamTitle,
      pageheadings_teamsubtitle: teamSubtitle,
      pageheadings_contacttitle: contactTitle,
      pageheadings_contactsubtitle: contactSubtitle,
      pageheadings_quotetitle: qouteTitle,
      pageheadings_quotesubtitle: qouteSubtitle,
      pageheadings_errorpagetitle: errorPageTitle,
      pageheadings_errorpagesubtitle: errorPageSubTitle,
      pageheadings_eventtitle: eventTitle,
      pageheadings_eventsubtitle: eventSubtitle,
      pageheadings_eventdetailstitle: eventDetailsTitle,
      pageheadings_causetitle: causeTitle,
      pageheadings_causesubtitle: causeSubTitle,
      pageheadings_causedetailstitle: causeDetailsTitle,
      pageheadings_clientfeedbacktitle: clientFeedbackTitle,
      Pageheadings_clientfeedbacksubtitle: clientFeedbackSubtitle,
      uniqueID: data
    }
    const res = await updatePageHeadingInfo(dataObj);
    if ( res.status === 200 ) {
      alert( "Settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  useEffect( () => {
    getPageHeadingData();
  },[])
  return (
    <Fragment>
      <Breadcrumbs
        parent="Settings"
        title="Page Headings"
        mainTitle="Page Headings"
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
                      <FormGroup>
                        <Label>{"Service Title "}</Label>
                        <Input
                          onChange={(e) => setserviceTitle(e.target.value)}
                          value={serviceTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Service Subtitle  "}</Label>
                        <Input
                          onChange={(e) => setserviceSubtitle(e.target.value)}
                          value={serviceSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Service Details Title "}</Label>
                        <Input
                          onChange={(e) => setserviceDetailsTitle(e.target.value)}
                          value={serviceDetailsTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Portfolio Title "}</Label>
                        <Input
                          onChange={(e) => setportfolioTitle(e.target.value)}
                          value={portfolioTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Portfolio Subtitle"}</Label>
                        <Input
                          onChange={(e) => setportfolioSubtitle(e.target.value)}
                          value={ portfolioSubtitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Portfolio Details Title "}</Label>
                        <Input
                          onChange={(e) => setportfolioDetailsTitle(e.target.value)}
                          value={ portfolioDetailsTitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"FAQ Title "}</Label>
                        <Input
                          onChange={(e) => setfaqTitle(e.target.value)}
                          value={ faqTitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"FAQ Subtitle"}</Label>
                        <Input
                          onChange={(e) => setfaqSubtitle(e.target.value)}
                          value={ faqSubtitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Pricing Title "}</Label>
                        <Input
                          onChange={(e) => setpricingTitle(e.target.value)}
                          value={pricingTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Pricing Subtitle "}</Label>
                        <Input
                          onChange={(e) => setpricingSubtitle(e.target.value)}
                          value={pricingSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Product Title "}</Label>
                        <Input
                          onChange={(e) => setproductTitle(e.target.value)}
                          value={ productTitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Product Subtitle "}</Label>
                        <Input
                          onChange={(e) => setproductSubtitle(e.target.value)}
                          value={productSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Product Details Title  "}</Label>
                        <Input
                          onChange={(e) => setproductDetailsTitle(e.target.value)}
                          value={productDetailsTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Cart Title  "}</Label>
                        <Input
                          onChange={(e) => setcartTitle(e.target.value)}
                          value={cartTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Cart Subtitle   "}</Label>
                        <Input
                          onChange={(e) => setcartSubtitle(e.target.value)}
                          value={cartSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Checkout Title "}</Label>
                        <Input
                          onChange={(e) => setcheckoutTitle(e.target.value)}
                          value={checkoutTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Checkout Subtitle"}</Label>
                        <Input
                          onChange={(e) => setcheckoutSubtitle(e.target.value)}
                          value={checkoutSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Knowledgebase Title"}</Label>
                        <Input
                          onChange={(e) => setknowledgebaseTitle(e.target.value)}
                          value={knowledgebaseTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Knowledgebase Subtitle  "}</Label>
                        <Input
                          onChange={(e) => setknowledgebaseSubtitle(e.target.value)}
                          value={knowledgebaseSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Knowledgebase Details Title "}</Label>
                        <Input
                          onChange={(e) => setknowledgebaseDetailsTitle(e.target.value)}
                          value={knowledgebaseDetailsTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Blog Title"}</Label>
                        <Input
                          onChange={(e) => setblogTitle(e.target.value)}
                          value={blogTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Blog Subtitle  "}</Label>
                        <Input
                          onChange={(e) => setblogSubtitle(e.target.value)}
                          value={ blogSubtitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Blog Details Title "}</Label>
                        <Input
                          onChange={(e) => setblogDetailsTitle(e.target.value)}
                          value={blogDetailsTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"RSS Title "}</Label>
                        <Input
                          onChange={(e) => setrssTitle(e.target.value)}
                          value={rssTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"RSS Subtitle  "}</Label>
                        <Input
                          onChange={(e) => setrssSubtitle(e.target.value)}
                          value={rssSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"RSS Details Title "}</Label>
                        <Input
                          onChange={(e) => setrssDetailsTitle(e.target.value)}
                          value={ rssDetailsTitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Gallery Title  "}</Label>
                        <Input
                          onChange={(e) => setgalleryTitle(e.target.value)}
                          value={galleryTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Gallery Subtitle "}</Label>
                        <Input
                          onChange={(e) => setgallerySubtitle(e.target.value)}
                          value={gallerySubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Career Title "}</Label>
                        <Input
                          onChange={(e) => setcareerTitle(e.target.value)}
                          value={careerTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Career Subtitle"}</Label>
                        <Input
                          onChange={(e) => setcareerSubtitle(e.target.value)}
                          value={careerSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Course Title"}</Label>
                        <Input
                          onChange={(e) => setcourseTitle(e.target.value)}
                          value={courseTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Course Subtitle"}</Label>
                        <Input
                          onChange={(e) => setcourseSubtitle(e.target.value)}
                          value={courseSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Course Details Title"}</Label>
                        <Input
                          onChange={(e) => setcourseDetailsTitle(e.target.value)}
                          value={courseDetailsTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Event Calendar Title"}</Label>
                        <Input
                          onChange={(e) => seteventCalenderTitle(e.target.value)}
                          value={eventCalenderTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Event Calendar Subtitle"}</Label>
                        <Input
                          onChange={(e) => seteventCalenderSubtitle(e.target.value)}
                          value={eventCalenderSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Team Title"}</Label>
                        <Input
                          onChange={(e) => setteamTitle(e.target.value)}
                          value={teamTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Team Subtitle"}</Label>
                        <Input
                          onChange={(e) => setteamSubtitle(e.target.value)}
                          value={teamSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Contact Title "}</Label>
                        <Input
                          onChange={(e) => setcontactTitle(e.target.value)}
                          value={contactTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Contact Subtitle "}</Label>
                        <Input
                          onChange={(e) => setcontactSubtitle(e.target.value)}
                          value={contactSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Quote Title "}</Label>
                        <Input
                          onChange={(e) => setqouteTitle(e.target.value)}
                          value={qouteTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Quote Subtitle "}</Label>
                        <Input
                          onChange={(e) => setqouteSubtitle(e.target.value)}
                          value={qouteSubtitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Error Page Title"}</Label>
                        <Input
                          onChange={(e) => seterrorPageTitle(e.target.value)}
                          value={errorPageTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Error Page Subtitle  "}</Label>
                        <Input
                          onChange={(e) => seterrorPageSubTitle(e.target.value)}
                          value={ errorPageSubTitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Event Title"}</Label>
                        <Input
                          onChange={(e) => seteventTitle(e.target.value)}
                          value={eventTitle}
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Event Subtitle "}</Label>
                        <Input
                          onChange={(e) => seteventSubtitle(e.target.value)}
                          value={ eventSubtitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Event Details Title "}</Label>
                        <Input
                          onChange={(e) => seteventDetailsTitle(e.target.value)}
                          value={ eventDetailsTitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Cause Title"}</Label>
                        <Input
                          onChange={(e) => setcauseTitle(e.target.value)}
                          value={ causeTitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Cause Subtitle"}</Label>
                        <Input
                          onChange={(e) => setcauseSubTitle(e.target.value)}
                          value={ causeSubTitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Cause Details Title "}</Label>
                        <Input
                          onChange={(e) => setcauseDetailsTitle(e.target.value)}
                          value={ causeDetailsTitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Client Feedback Title "}</Label>
                        <Input
                          onChange={(e) => setclientFeedbackTitle(e.target.value)}
                          value={ clientFeedbackTitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Client Feedback Subtitle "}</Label>
                        <Input
                          onChange={(e) => setclientFeedbackSubtitle(e.target.value)}
                          value={ clientFeedbackSubtitle }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup className="mb-0">
                        <Button
                            onClick={() => updatePageHeadingDataInDB(pageHeadingState[0].pageheadings_id )}
                            disabled={ ( serviceTitle && serviceSubtitle && serviceDetailsTitle && portfolioTitle && portfolioSubtitle && portfolioDetailsTitle && faqTitle && faqSubtitle && pricingTitle && pricingSubtitle && productTitle && productSubtitle && productDetailsTitle && cartTitle && cartSubtitle && checkoutTitle && checkoutSubtitle && knowledgebaseTitle && knowledgebaseSubtitle && knowledgebaseDetailsTitle && blogTitle && blogSubtitle && blogDetailsTitle && rssTitle && rssSubtitle && rssDetailsTitle && galleryTitle && gallerySubtitle && careerTitle && careerSubtitle && courseTitle && courseSubtitle && courseDetailsTitle && eventCalenderTitle && eventCalenderSubtitle && teamTitle && teamSubtitle && contactTitle && qouteTitle && qouteSubtitle && errorPageTitle && errorPageSubTitle && eventTitle && eventSubtitle && eventDetailsTitle && causeTitle && causeSubTitle && causeDetailsTitle && clientFeedbackTitle && clientFeedbackSubtitle !== '' ) ? false : true }
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

export default Page_Headings;
