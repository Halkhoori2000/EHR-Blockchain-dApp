import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { StaticColumns } from "./doctors_list_Data";
import { deleteStaticVerisonAPI, getStativVersionAPI } from "../../../api/api";
import { Link, useNavigate } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";
import { serverImageUrl } from "../../../api/api";
import Web3 from "web3";
import ABI from '../../../abi/abi';

const style2 = { fontSize: 14, padding: 4 };
const flexboxstyle = { display: 'flex', alignItems: 'center', gap: '7px' };

const style = {
  width: 40,
  height: 40,
};

function List() {
  const history = useNavigate();
  const [data, setData] = useState([]);
  const [patientUsername, setPatientUsername] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    if (localStorage.getItem("profile") == null || localStorage.getItem("profile") == undefined || localStorage.getItem("profile") == "") {
      history(`${process.env.PUBLIC_URL}/login`, {
        replace: true,
      });
      return
    }
    const profile = JSON.parse(localStorage.getItem("profile"))
    console.log(profile)
    setPatientUsername(profile[1])
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

    let contractResponse = contract.methods.getDoctors().call({
      from: owner,
      gas: 1500000,
      gasPrice: 0,
      value: weiValue
    }).then(async function (result) {
      console.log(result)
      // setData(result)
      let contractResponse = contract.methods.getDoctorsPatients().call({
        from: owner,
        gas: 1500000,
        gasPrice: 0,
        value: weiValue
      }).then(async function (resultDoctorPatient) {
        let dataArray=[]
        result.forEach(element => {
          console.log(element)
          console.log(element[0])
          let isAccessed = false
          resultDoctorPatient.forEach(elementInner => {
            console.log(elementInner)
            if(elementInner[0] == element[1]){
              const filteredInner = elementInner[1].filter((e)=>e == profile[1])
              if(filteredInner.length > 0){
                isAccessed = true
              }
            }
          });
          dataArray.push([
            element[0],
            element[1],
            element[2],
            element[3],
            isAccessed
          ])
        });
        console.log("dataArray",dataArray)
        setData(dataArray)
      }).then(function (error) {
        console.log(error)
      })
    }).then(function (error) {
      console.log(error)
    })
    // const req = await getStativVersionAPI();
    // setData(req.data);
  }
  async function giveAccessToDoctor(doctorUsername,patientUsername,status) {
    console.log("doctorUsername",doctorUsername)
    console.log("patientUsername",patientUsername)
    // return
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
    if(status == "Add")
    {
    let contractResponse = contract.methods.addAccessToDoctor(doctorUsername, patientUsername).send({
      from: owner,
      gas: 1500000,
      gasPrice: 0,
      value: weiValue
    }).then(async function (result) {
      console.log(result)
      fetchData()
      alert("Access is Given Successfully!")
    }).then(function (error) {
      console.log(error)
    })
  }
  else{
    let contractResponse = contract.methods.removeAccessToDoctor(doctorUsername, patientUsername).send({
      from: owner,
      gas: 1500000,
      gasPrice: 0,
      value: weiValue
    }).then(async function (result) {
      console.log(result)
      fetchData()
      alert("Access is Removed Successfully!")
    }).then(function (error) {
      console.log(error)
    })
  }

  }

  const onDelete = async (id) => {
    const res = await deleteStaticVerisonAPI(id);
    if (res.status === 200) {
      const arr = data.filter((val) => val.staticversionslider_id !== id);
      setData(arr)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  const StaticData = data.map((elem) => {
    return {
      Name: (
        <div>
          <span>{elem[0]}</span>
        </div>
      ),
      Username: `${elem[1]}`,
      action: (
        <div style={flexboxstyle}>
          <Button style={style2} type="button" color={elem[4] == true ? "info": "success"} size="sm" onClick={() => {
            if(patientUsername!=""){
              if(elem[4] == true)
              {
                giveAccessToDoctor(elem[1],patientUsername,"Remove")
              }
              else{
                giveAccessToDoctor(elem[1],patientUsername,"Add")
              }
            }
          }}>{elem[4] == true ? "Remove Access": "Give Access"}</Button>
        </div>
      ),
    };
  })

  return (
    <Fragment>
      <Breadcrumbs
        parent="Doctors Section"
        title="Doctors List"
        mainTitle="Doctors List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Doctors List"}</H5>
              </CardHeader>
              <CardBody>
                <div className="table-responsive product-table">
                  <DataTable
                    noHeader
                    pagination
                    paginationServer
                    columns={StaticColumns}
                    data={StaticData}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default List;
