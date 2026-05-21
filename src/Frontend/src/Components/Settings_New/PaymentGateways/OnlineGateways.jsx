import React, { Fragment, useContext, useEffect, useState } from "react";
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

import { Breadcrumbs, Btn } from "../../../AbstractElements";
import { useNavigate, Link } from "react-router-dom";
import { getFlutterwaveData, getInstamojoData, getMercadopagoData, getMolliePaymentData, getPaypalData, getPaystackData, getPaytmData, getPayUmoneyData, getRazorpayData, getStripeData, updateFlutterwaveInfo, updateInstamojoInfo, updateMercadopagoInfo, updateMolliePaymentInfo, updatePaypalInfo, updatePaystackInfo, updatePaytmInfo, updatePayUmoneyInfo, updateRazorpayInfo, updateStripeInfo } from "../../../api/api";
function OnlineGateways() {

  //PAYPAL STATES
  const [ paypalResData, setpaypalResData ] = useState( [] );
  const [ paypalState, setpaypalState ] = useState( '' );
  const [ paypalTestMode, setpaypalTestMode ] = useState( '' );
  const [ paypalClientId, setpaypalClientId ] = useState( '' );
  const [ paypalClientSecret, setpaypalClientSecret ] = useState( '' );
  
  //STRIPE STATES
  const [ stripeResData, setstripeResData ] = useState( [] );
  const [ stripeState, setstripeState ] = useState( '' );
  const [ stripeKey, setstripeKey ] = useState( '' );
  const [ stripeSecret, setstripeSecret ] = useState( '' );

  //PAYTM STATES
  const [ paytmResData, setpaytmResData ] = useState( [] );
  const [ paytmState, setpaytmState ] = useState( '' );
  const [ paytmMerchantKey, setpaytmMerchantKey ] = useState( '' );
  const [ paytmMerchentMid, setpaytmMerchentMid ] = useState( '' );
  const [ paytmMerchentWebsite, setpaytmMerchentWebsite ] = useState( '' );
  const [ paytmindustryTypeId, setPaytmindustryTypeId ] = useState( '' );
  
  //INSTAMOJO STATES
  const [ instamojoResData, setinstamojoResData ] = useState( [] );
  const [ instamojoState, setinstamojoState ] = useState( '' );
  const [ InstamojoTestMode, setinstamojoTestMode ] = useState( '' );
  const [ instamojoApiKey, setinstamojoApi ] = useState( '' );
  const [instamojoAuthToken, setinstamojoAuthToken] = useState( '' );

  //PAYSTACK STATES
  const [ paystackResData, setpaystackResData ] = useState( [] );
  const [ paystackState, setpaystackState ] = useState( '' );
  const [ paystackPublicKey, setpaystackPublicKey ] = useState( '' );
  const [paystackBusinessEmail, setpaystackBusinessEmail ] = useState( '' );

  //FLUTTERWAVE STATES
  const [ flutterwaveResData, setflutterwaveResData ] = useState( [] );
  const [ flutterwaveState, setflutterwaveState ] = useState( '' );
  const [ flutterwavePublicKey, setflutterwavePublicKey ] = useState( '' );
  const [ flutterwaveSecretKey, setflutterwaveSecretKey ] = useState( '' );

  //MOLLIE PAYMENT STATES
  const [ molliePaymentResData, setmolliePaymentResData ] = useState( [] );
  const [ molliePayment, setmolliePayment ] = useState( '' );
  const [ molliePaymentKey, setmolliePaymentKey ] = useState( '' );

  //RAZORPAY STATES
  const [ razorpayResData, setrazorpayResData ] = useState( [] );
  const [ razorPayState, setrazorPayState ] = useState( '' );
  const [ razorpayKey, setrazorpayKey ] = useState( '' );
  const [ razorpaySecret, setrazorpaySecret ] = useState( '' );

  //PAYUMONEY STATES
  const [ payumoneyResData, setpayumoneyResData ] = useState( [] );
  const [ payUMoneyState, setpayUMoneyState ] = useState( '' );
  const [ payUMoneyTestMode, setpayUMoneyTestMode ] = useState( '' );
  const [ payUMoneyMerchentKey, setpayUMoneyMerchentKey ] = useState( '' );
  const [ payUMoneySalt, setpayUMoneySalt ] = useState( '' );

  //Mercadopago STATES
  const [ mercadopagoResData, setmercadopagoResData ] = useState( [] );
  const [ mercadopagoState, setmercadopagoState ] = useState( '' );
  const [ mercadopagoTestMode, setmercadopagoTestMode ] = useState( '' );
  const [mercadopagoTokenVal, setmercadopagoTokenVal] = useState( '' );

  const getPaypalTable = async () => {
    const res = await getPaypalData()
    setpaypalResData( [ ...res.data ] );
    setpaypalState( res.data[ 0 ].paypal_gateway_paypal );
    setpaypalTestMode( res.data[ 0 ].paypal_gateway_test_mode );
    setpaypalClientId( res.data[ 0 ].paypal_gateway_client_id );
    setpaypalClientSecret( res.data[ 0 ].paypal_gateway_client_secret );
  }

  const updatePayPalDataInDb = async (data) => {
    const dataObj = {
      paypal_gateway_paypal: paypalState,
      paypal_gateway_test_mode: paypalTestMode,
      paypal_gateway_client_id: paypalClientId,
      paypal_gateway_client_secret: paypalClientSecret,
      uniqueId: data
    }
    const res = await updatePaypalInfo( dataObj );
    if ( res.status === 200 ) {
      alert( "PayPal settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  const getStripeTable = async () => {
    const res = await getStripeData();
    setstripeResData( [ ...res.data ] );
    setstripeState( res.data[ 0 ].tbl_stripe );
    setstripeKey( res.data[ 0 ].tbl_stripe_key);
    setstripeSecret( res.data[ 0 ].tbl_stripe_secret);
  }

  const updateStripeDataInDb = async (data) => {
    const dataObj = {
      tbl_stripe: stripeState,
      tbl_stripe_key: stripeKey,
      tbl_stripe_secret: stripeSecret,
      uniqueId: data
    }
    const res = await updateStripeInfo( dataObj );
    if ( res.status === 200 ) {
      alert( "Stripe settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  const getPaytmTable = async () => {
    const res = await getPaytmData();
    setpaytmResData( [ ...res.data ] );
    setpaytmState( res.data[ 0 ].tbl_paytm );
    setpaytmMerchantKey( res.data[ 0 ].tbl_paytm_merchant_key);
    setpaytmMerchentMid( res.data[ 0 ].tbl_paytm_merchant_mid);
    setpaytmMerchentWebsite( res.data[ 0 ].tbl_merchant_website);
    setPaytmindustryTypeId( res.data[ 0 ].tbl_industry_type_id);
  }

  const updatePaytmDataInDb = async (data) => {
    const dataObj = {
      tbl_paytm: paytmState,
      tbl_paytm_merchant_key: paytmMerchantKey,
      tbl_paytm_merchant_mid: paytmMerchentMid,
      tbl_merchant_website: paytmMerchentWebsite,
      tbl_industry_type_id: paytmindustryTypeId,
      uniqueId: data
    }
    const res = await updatePaytmInfo( dataObj );
    if ( res.status === 200 ) {
      alert( "Paytm settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  const getInstamojoTable = async () => {
    const res = await getInstamojoData();
    setinstamojoResData( [ ...res.data ] );
    setinstamojoState( res.data[ 0 ].tbl_instamojo );
    setinstamojoTestMode( res.data[ 0 ].tbl_instamojo_testmode);
    setinstamojoApi( res.data[ 0 ].tbl_instamojo_apikey);
    setinstamojoAuthToken( res.data[ 0 ].tbl_instamojo_auth_token);
  }

  const updateInstamojoDataInDb = async (data) => {
    const dataObj = {
      tbl_instamojo: instamojoState,
      tbl_instamojo_testmode: InstamojoTestMode,
      tbl_instamojo_apikey: instamojoApiKey,
      tbl_instamojo_auth_token: instamojoAuthToken,
      uniqueId: data
    }
    const res = await updateInstamojoInfo( dataObj );
    if ( res.status === 200 ) {
      alert( "Instamojo settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  const getPaystackTable = async () => {
    const res = await getPaystackData();
    setpaystackResData( [ ...res.data ] );
    setpaystackState( res.data[ 0 ].tbl_paystack );
    setpaystackPublicKey( res.data[ 0 ].tbl_paystack_public_key);
    setpaystackBusinessEmail( res.data[ 0 ].tbl_paystack_business_email);
  }

  const updatePaystackDataInDb = async (data) => {
    const dataObj = {
      tbl_paystack: paystackState,
      tbl_paystack_public_key: paystackPublicKey,
      tbl_paystack_business_email: paystackBusinessEmail,
      uniqueId: data
    }
    const res = await updatePaystackInfo( dataObj );
    if ( res.status === 200 ) {
      alert( "Paystack settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  const getFlutterwaveTable = async () => {
    const res = await getFlutterwaveData();
    setflutterwaveResData( [ ...res.data ] );
    setflutterwaveState( res.data[ 0 ].tbl_flutterwave );
    setflutterwavePublicKey( res.data[ 0 ].tbl_flutterwave_public_key);
    setflutterwaveSecretKey( res.data[ 0 ].tbl_flutterwave_secret_key);
  }

  const updateFlutterwaveDataInDb = async (data) => {
    const dataObj = {
      tbl_flutterwave: flutterwaveState,
      tbl_flutterwave_public_key: flutterwavePublicKey,
      tbl_flutterwave_secret_key: flutterwaveSecretKey,
      uniqueId: data
    }
    const res = await updateFlutterwaveInfo( dataObj );
    if ( res.status === 200 ) {
      alert( "Flutterwave settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  const getMolliePaymentTable = async () => {
    const res = await getMolliePaymentData();
    setmolliePaymentResData( [ ...res.data ] );
    setmolliePayment( res.data[ 0 ].tbl_molliepayment );
    setmolliePaymentKey( res.data[ 0 ].tbl_molliepayment_key);
  }

  const updateMolliePaymentDataInDb = async (data) => {
    const dataObj = {
      tbl_molliepayment: molliePayment,
      tbl_molliepayment_key: molliePaymentKey,
      uniqueId: data
    }
    const res = await updateMolliePaymentInfo( dataObj );
    if ( res.status === 200 ) {
      alert( "Mollie Payment settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  const getRazorpayTable = async () => {
    const res = await getRazorpayData();
    setrazorpayResData( [ ...res.data ] );
    setrazorPayState( res.data[ 0 ].tbl_razorpay );
    setrazorpayKey( res.data[ 0 ].tbl_razorpay_key);
    setrazorpaySecret( res.data[ 0 ].tbl_razorpay_secret);
  }

  const updateRazorpayDataInDb = async (data) => {
    const dataObj = {
      tbl_razorpay: razorPayState,
      tbl_razorpay_key: razorpayKey,
      tbl_razorpay_secret: razorpaySecret,
      uniqueId: data
    }
    const res = await updateRazorpayInfo( dataObj );
    if ( res.status === 200 ) {
      alert( "Razorpay settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  const getPayUmoneyTable = async () => {
    const res = await getPayUmoneyData();
    setpayumoneyResData( [ ...res.data ] );
    setpayUMoneyState( res.data[ 0 ].tbl_payumoney);
    setpayUMoneyTestMode( res.data[ 0 ].tbl_payumoney_test_mode);
    setpayUMoneyMerchentKey( res.data[ 0 ].tbl_payumoney_merchant_key);
    setpayUMoneySalt( res.data[ 0 ].tbl_payumoney_salt);
  }

  const updatePayUmoneyDataInDb = async (data) => {
    const dataObj = {
      tbl_payumoney: payUMoneyState,
      tbl_payumoney_test_mode: payUMoneyTestMode,
      tbl_payumoney_merchant_key: payUMoneyMerchentKey,
      tbl_payumoney_salt: payUMoneySalt,
      uniqueId: data
    }
    const res = await updatePayUmoneyInfo( dataObj );
    if ( res.status === 200 ) {
      alert( "PayUMoney settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  const getMercadopagoTable = async () => {
    const res = await getMercadopagoData();
    setmercadopagoResData( [ ...res.data ] );
    setmercadopagoState( res.data[ 0 ].tbl_mercadopago);
    setmercadopagoTestMode( res.data[ 0 ].tbl_mercadopago_test_mode);
    setmercadopagoTokenVal( res.data[ 0 ].tbl_mercadopago_token);
  }

  const updateMercadopagoDataInDb = async (data) => {
    const dataObj = {
      tbl_mercadopago: mercadopagoState,
      tbl_mercadopago_test_mode: mercadopagoTestMode,
      tbl_mercadopago_token: mercadopagoTokenVal,
      uniqueId: data
    }
    const res = await updateMercadopagoInfo( dataObj );
    if ( res.status === 200 ) {
      alert( "Mercadopago settings updated successfully" );
    }
    else {
      alert( "Settings update failed" );
    }
  }

  useEffect( () => {
    getPaypalTable();
    getStripeTable();
    getPaytmTable();
    getInstamojoTable();
    getPaystackTable();
    getFlutterwaveTable();
    getMolliePaymentTable();
    getRazorpayTable();
    getPayUmoneyTable();
    getMercadopagoTable();
  },[])


  return (
    <Fragment>
      <Breadcrumbs
        parent="Settings"
        title="Payment Gateways"
        mainTitle="Online Gateways"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="4">
            <Card>
              <CardHeader>Paypal</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Paypal"}</Label>
                        <Input
                          onChange={(e) => setpaypalState(e.target.value)}
                          value={paypalState}
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Paypal Test Mode"}</Label>
                        <Input
                          onChange={(e) => setpaypalTestMode(e.target.value)}
                          value={ paypalTestMode }
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Paypal Client ID "}</Label>
                        <Input
                          onChange={(e) => setpaypalClientId(e.target.value)}
                          value={ paypalClientId }
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
                        <Label>{"Paypal Client Secret"}</Label>
                        <Input
                          onChange={(e) => setpaypalClientSecret(e.target.value)}
                          value={ paypalClientSecret }
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
                            onClick={() => updatePayPalDataInDb(paypalResData[0].paypal_gateway_id)}
                            disabled={ ( paypalState && paypalTestMode && paypalClientId && paypalClientSecret !== '' ) ? false : true }
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
          <Col sm="4">
            <Card>
              <CardHeader>Stripe</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Stripe"}</Label>
                        <Input
                          onChange={(e) => setstripeState(e.target.value)}
                          value={ stripeState }
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Stripe Key"}</Label>
                        <Input
                          onChange={(e) => setstripeKey(e.target.value)}
                          value={ stripeKey }
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
                        <Label>{"Stripe Secret"}</Label>
                        <Input
                          onChange={(e) => setstripeSecret(e.target.value)}
                          value={ stripeSecret }
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
                            onClick={() => updateStripeDataInDb(stripeResData[0].tbl_stripe_id)}
                            disabled={ ( stripeState && stripeKey && stripeSecret !== '' ) ? false : true }
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
          <Col sm="4">
            <Card>
              <CardHeader>Paytm</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Paytm"}</Label>
                        <Input
                          onChange={(e) => setpaytmState(e.target.value)}
                          value={ paytmState }
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Paytm Merchant Key"}</Label>
                        <Input
                          onChange={(e) => setpaytmMerchantKey(e.target.value)}
                          value={ paytmMerchantKey }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{" Paytm Merchant mid"}</Label>
                        <Input
                          onChange={(e) => setpaytmMerchentMid(e.target.value)}
                          value={ paytmMerchentMid }
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
                        <Label>{"Paytm Merchant website"}</Label>
                        <Input
                          onChange={(e) => setpaytmMerchentWebsite(e.target.value)}
                          value={ paytmMerchentWebsite }
                          type="text"
                          name="progress_level"
                          className="form-control digits"
                          required
                        />
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{" Industry type id"}</Label>
                        <Input
                          onChange={(e) => setPaytmindustryTypeId(e.target.value)}
                          value={paytmindustryTypeId}
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
                            onClick={() => updatePaytmDataInDb(paytmResData[0].tbl_paytm_id)}
                            disabled={ ( paytmState && paytmMerchantKey && paytmMerchentMid && paytmMerchentWebsite && paytmindustryTypeId !== '' ) ? false : true }
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

        {/* //!Secnd row */}
        <Row>
          <Col sm="4">
            <Card>
              <CardHeader>Instamojo</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Instamojo"}</Label>
                        <Input
                          onChange={(e) => setinstamojoState(e.target.value)}
                          value={ instamojoState }
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Test Mode "}</Label>
                        <Input
                          onChange={(e) => setinstamojoTestMode(e.target.value)}
                          value={ InstamojoTestMode }
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Instamojo API Key "}</Label>
                        <Input
                          onChange={(e) => setinstamojoApi(e.target.value)}
                          value={ instamojoApiKey }
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
                        <Label>{"Instamojo Auth Token"}</Label>
                        <Input
                          onChange={(e) => setinstamojoAuthToken(e.target.value)}
                          value={ instamojoAuthToken }
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
                            onClick={() => updateInstamojoDataInDb(instamojoResData[0].tbl_instamojo_id)}
                            disabled={ ( instamojoState && InstamojoTestMode && instamojoApiKey && instamojoAuthToken !== '' ) ? false : true }
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
          <Col sm="4">
            <Card>
              <CardHeader>Paystack</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Paystack"}</Label>
                        <Input
                          onChange={(e) => setpaystackState(e.target.value)}
                          value={ paystackState }
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Paystack Public Key"}</Label>
                        <Input
                          onChange={(e) => setpaystackPublicKey(e.target.value)}
                          value={ paystackPublicKey }
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
                        <Label>{"Paystack Business Email"}</Label>
                        <Input
                          onChange={(e) => setpaystackBusinessEmail(e.target.value)}
                          value={ paystackBusinessEmail }
                          type="email"
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
                            onClick={() => updatePaystackDataInDb(paystackResData[0].tbl_paystack_id)}
                            disabled={ ( paystackState && paystackPublicKey && paystackBusinessEmail !== '' ) ? false : true }
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
          <Col sm="4">
            <Card>
              <CardHeader>Flutterwave</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Flutterwave"}</Label>
                        <Input
                          onChange={(e) => setflutterwaveState(e.target.value)}
                          value={flutterwaveState}
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Flutterwave Public Key"}</Label>
                        <Input
                          onChange={(e) => setflutterwavePublicKey(e.target.value)}
                          value={flutterwavePublicKey}
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
                        <Label>{"Flutterwave Secret Key"}</Label>
                        <Input
                          onChange={(e) => setflutterwaveSecretKey(e.target.value)}
                          value={flutterwaveSecretKey}
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
                            onClick={() => updateFlutterwaveDataInDb(flutterwaveResData[0].tbl_flutterwave_id)}
                            disabled={ ( flutterwaveState && flutterwavePublicKey && flutterwaveSecretKey !== '' ) ? false : true }
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
        {/* //!Third row*/}

        <Row>
          <Col sm="4">
            <Card>
              <CardHeader>Mollie Payment</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Mollie Payment"}</Label>
                        <Input
                          onChange={(e) => setmolliePayment(e.target.value)}
                          value={molliePayment}
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Mollie Payment Key "}</Label>
                        <Input
                          onChange={(e) => setmolliePaymentKey(e.target.value)}
                          value={molliePaymentKey}
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
                            onClick={() => updateMolliePaymentDataInDb(molliePaymentResData[0].tbl_molliepayment_id)}
                            disabled={ ( molliePayment && molliePaymentKey !== '' ) ? false : true }
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
          <Col sm="4">
            <Card>
              <CardHeader>Razorpay</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Razorpay"}</Label>
                        <Input
                          onChange={(e) => setrazorPayState(e.target.value)}
                          value={razorPayState}
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Razorpay Key"}</Label>
                        <Input
                          onChange={(e) => setrazorpayKey(e.target.value)}
                          value={razorpayKey}
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
                        <Label>{"Razorpay Secret"}</Label>
                        <Input
                          onChange={(e) => setrazorpaySecret(e.target.value)}
                          value={razorpaySecret}
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
                            onClick={() => updateRazorpayDataInDb(razorpayResData[0].tbl_razorpay_id)}
                            disabled={ ( razorPayState && razorpayKey && razorpaySecret !== '' ) ? false : true }
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
          <Col sm="4">
            <Card>
              <CardHeader>PayUmoney</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"PayUmoney"}</Label>
                        <Input
                          onChange={(e) => setpayUMoneyState(e.target.value)}
                          value={ payUMoneyState }
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                    <Col md={"6"}>
                      <FormGroup>
                        <Label>{"Test Mode "}</Label>
                        <Input
                          onChange={(e) => setpayUMoneyTestMode(e.target.value)}
                          value={ payUMoneyTestMode }
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"PayUmoney Merchant Key"}</Label>
                        <Input
                          onChange={(e) => setpayUMoneyMerchentKey(e.target.value)}
                          value={ payUMoneyMerchentKey}
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
                        <Label>{"PayUmoney Salt"}</Label>
                        <Input
                          onChange={(e) => setpayUMoneySalt(e.target.value)}
                          value={ payUMoneySalt }
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
                            onClick={() => updatePayUmoneyDataInDb(payumoneyResData[0].tbl_payumoney_id)}
                            disabled={ ( payUMoneyState && payUMoneyTestMode && payUMoneyMerchentKey && payUMoneySalt !== '' ) ? false : true }
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
        {/* //!Fourth row */}

        <Row>
          <Col sm="4">
            <Card>
              <CardHeader>Mercadopago</CardHeader>
              <CardBody>
                <Form
                  className="theme-form"
                  // onSubmit={handleSubmit(AddProject)}
                >
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Mercado Pago "}</Label>
                        <Input
                          onChange={(e) => setmercadopagoState(e.target.value)}
                          value={mercadopagoState}
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    {" "}
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Mercado Pago Test Mode"}</Label>
                        <Input
                          onChange={(e) => setmercadopagoTestMode(e.target.value)}
                          value={mercadopagoTestMode}
                          type="select"
                          name="issues"
                          placeholder="Select Issues"
                          className="form-control digits"
                          required
                        >
                          <option disabled> Select a Status</option>
                          <option selected>Active</option>
                          <option>DeActive</option>
                        </Input>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md={"12"}>
                      <FormGroup>
                        <Label>{"Mercadopago Token"}</Label>
                        <Input
                          onChange={(e) => setmercadopagoTokenVal(e.target.value)}
                          value={mercadopagoTokenVal}
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
                            onClick={() => updateMercadopagoDataInDb(mercadopagoResData[0].tbl_mercadopago_id)}
                            disabled={ ( mercadopagoState && mercadopagoTestMode && mercadopagoTokenVal !== '' ) ? false : true }
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

export default OnlineGateways;
