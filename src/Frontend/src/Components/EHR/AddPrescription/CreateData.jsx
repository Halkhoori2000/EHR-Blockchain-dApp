import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
// import { insertServiceSectionApI } from "../../../api/api";
import Web3 from "web3";
import ABI from '../../../abi/abi';
const CreateData = () => {
  const history = useNavigate();

  const [patient, setPatient] = useState('');
  const [prescription, setPrescription] = useState('');

  const [userType, setUserType] = useState('');

  const thelocation = useLocation();
  const ifExists = thelocation.state;

  useEffect(() => {
    if (localStorage.getItem("profile") == null || localStorage.getItem("profile") == undefined || localStorage.getItem("profile") == "") {
      history(`${process.env.PUBLIC_URL}/login`, {
        replace: true,
      });
      return
    }
    const profile = JSON.parse(localStorage.getItem("profile"))
    console.log(profile)
    setUserType(profile[3])
    if (ifExists) {
      const id = ifExists?.dataObj;
      console.log(id)
      setPatient(id[1])
      setPrescription(id[5])
    }
  }, [ifExists]);
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    updatePrescription()
  };
  async function updatePrescription() {
    if (localStorage.getItem('guestMode') === 'true') {
      alert('Sign in with MetaMask to update prescriptions.');
      return;
    }
    if (prescription == "") {
      alert("Please Enter Prescription")
      return
    }

    if (window.ethereum) { // Modern dapp browsers...
      console.log(window.ethereum)
      window.web3 = new Web3(window.ethereum);
    } else if (window.web3) { // Legacy dapp browsers...
      console.log(window.ethereum)
      window.web3 = new Web3(window.web3.currentProvider);
    }
    let ethereum = window.ethereum;
    if (typeof ethereum !== undefined && typeof ethereum !== null) {
      console.log('MetaMask is installed!');
    }
    else {
      console.log('MetaMask is uninstalled!');
    }
    const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
    const account = accounts[0];
    console.log(account);

    const contractAddress = global.smartContractAddress;
    // const contractAddress = "0xcC4e00C7db9556987652aE3C068e5ffd1D674063";
    let contract = new window.web3.eth.Contract(ABI, contractAddress);
    let owner = account;
    let weiValue = 0;
    console.log(global.smartContractAddress)
    console.log(contract.methods)

    let contractResponse = contract.methods.updatePrescription(patient, prescription).send({
      from: owner,
      gas: 1500000,
      gasPrice: 0,
      value: weiValue
    }).then(async function (result) {
      console.log(result)
      alert("Prescription Updated Successfully!")
      history(`${process.env.PUBLIC_URL}/ehr/patientList`, {
        replace: true,
      });
    }).then(function (error) {
      console.log(error)
    })

  }
  return (
    <>
      <Form
        className="theme-form"
        onSubmit={onHandleSubmit}
        method="post"
        encType="multipart/form-data"
      >
        <Row>
          <Col md="12">
            <FormGroup>
              <Label>{"Patient"}</Label>
              <input
                disabled
                type={"text"}
                name={"patient"}
                placeholder={"Patient"}
                className="form-control"
                value={patient}
                onChange={(e) => setPatient(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label>{"Prescription"}</Label>
              <textarea
                disabled={userType == 1}
                type={"text"}
                placeholder="Prescription"
                name="prescription"
                value={prescription}
                className="form-control"
                onChange={(e) => setPrescription(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        {userType != 1 ?
          <Row>
            <Col>
              <FormGroup className="mb-0">
                <Button type="submit" color="success">
                  Save
                </Button>
              </FormGroup>
            </Col>
          </Row>
          : null}
      </Form>
    </>
  );
};

export default CreateData;
