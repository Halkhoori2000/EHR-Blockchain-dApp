import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Col, Form, FormGroup, Label, Row } from "reactstrap";
// import { insertServiceSectionApI } from "../../../api/api";
import Dropzone from "react-dropzone-uploader";
import Web3 from "web3";
import ABI from '../../../abi/abi';
import axios from "axios";

const CreateData = () => {
  const history = useNavigate();

  const [patient, setPatient] = useState('');
  const [file, setFile] = useState("");

  const thelocation = useLocation();
  const ifExists = thelocation.state;
  useEffect(() => {
    if (ifExists) {
      const id = ifExists?.dataObj;
      setPatient(id[1])
    }
  }, [ifExists]);
  const onHandleSubmit = async (e) => {
    e.preventDefault();
    uploadFile()
    // await insertServiceSectionApI({ servicetitle, serviceSubTitle });

    // history(`${process.env.PUBLIC_URL}/hero_section/service_section_list`, {
    //   replace: true,
    // });
  };
  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(file)
    setFile(file);
  };
  async function uploadFile() {
    console.log(file)
    if (file != "") {
      const data = new FormData();
      data.append("report_image", file)

      await axios.post(`${global.backendUrl}/uploadFile`, data).then((response) => {
        console.log(response)
        const fileNameToSave = response.data.filename;
        updateReports(fileNameToSave)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
  async function updateReports(reports) {
    

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

    let contractResponse = contract.methods.updateReports(patient, reports).send({
      from: owner,
      gas: 1500000,
      gasPrice: 0,
      value: weiValue
    }).then(async function (result) {
      console.log(result)
      alert("Reports Updated Successfully!")
      history(`${process.env.PUBLIC_URL}/ehr/reportsList`, {
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
          <Col md="6">
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
          <Col>
            <FormGroup>
              <Label>{"Files "}</Label>
              <input
                type={"file"}
                multiple={false}
                name={"file"}
                placeholder={"File"}
                className="form-control"
                onChange={(e) => {
                  console.log(e.target.files)
                  console.log(e.target.files[0])
                  setFile(e.target.files[0])
                }}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup className="mb-0">
              <Button type="submit" color="success">
                Save
              </Button>
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default CreateData;
