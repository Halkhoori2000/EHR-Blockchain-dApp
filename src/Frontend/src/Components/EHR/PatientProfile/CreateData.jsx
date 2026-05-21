import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
// import { insertServiceSectionApI } from "../../../api/api";
import Web3 from "web3";
import ABI from '../../../abi/abi';
const CreateData = () => {
  const history = useNavigate();

  const [userType, setUserType] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [description, setDescription] = useState('');

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    // await insertServiceSectionApI({ servicetitle, serviceSubTitle });

    // history(`${process.env.PUBLIC_URL}/hero_section/service_section_list`, {
    //   replace: true,
    // });
  };
  useEffect(() => {
    fetchProfile();
  }, [])
  async function fetchProfile() {
    console.log(localStorage.getItem("profile"));
    if (localStorage.getItem("profile") == null || localStorage.getItem("profile") == undefined || localStorage.getItem("profile") == "") {
      history(`${process.env.PUBLIC_URL}/login`, {
        replace: true,
      });
      return
    }
    const profile = JSON.parse(localStorage.getItem("profile"))
    console.log(profile)
    setUsername(profile[1])
    setUserType(profile[3])
    if (profile[3] != "1") {
      setName(profile[0])
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

    let contractResponse = contract.methods.getPatientProfile(profile[1]).call({
      from: owner,
      gas: 1500000,
      gasPrice: 0,
      value: weiValue
    }).then(async function (result) {
      console.log(result)
      setName(result.name)
      setPhone(result.phone)
      setSymptoms(result.symptoms)
      setDescription(result.description)
    }).then(function (error) {
      console.log(error)
    })

  }
  async function updateProfile() {
    if (name == "") {
      alert("Please Enter Name")
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

    let contractResponse = contract.methods.updateProfile(username, name, phone, symptoms, description).send({
      from: owner,
      gas: 1500000,
      gasPrice: 0,
      value: weiValue
    }).then(async function (result) {
      console.log(result)
      alert("Profile Updated Successfully!")
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
          <Col md="6">
            <FormGroup>
              <Label>{"Name"}</Label>
              <input
                type={"text"}
                name={"name"}
                placeholder={"Name"}
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
          {userType == "1" && (
            <Col md="6">
              <FormGroup>
                <Label>{"Phone"}</Label>
                <input
                  type={"text"}
                  placeholder="Phone"
                  name="phone"
                  value={phone}
                  className="form-control"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </FormGroup>
            </Col>
          )}
        </Row>
        {userType == "1" && (
          <Row>
            <Col md="12">
              <FormGroup>
                <Label>{"Symptoms"}</Label>
                <input
                  type={"text"}
                  placeholder="Symptoms"
                  name="symptoms"
                  value={symptoms}
                  className="form-control"
                  onChange={(e) => setSymptoms(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
        )}
        {userType == "1" && (
          <Row>
            <Col md="12">
              <FormGroup>
                <Label>{"Description"}</Label>
                <textarea
                  type={"text"}
                  placeholder="Description"
                  name="description"
                  value={description}
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormGroup>
            </Col>
          </Row>
        )}
        <Row>
          <Col>
            <FormGroup className="mb-0">
              <Button onClick={(e) => {
                updateProfile()
              }} type="submit" color="success">
                Update
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CreateData;
