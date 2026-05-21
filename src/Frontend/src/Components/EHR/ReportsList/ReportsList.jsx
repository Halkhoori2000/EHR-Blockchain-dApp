import React, { Fragment, useEffect, useState } from "react";
import { Breadcrumbs, H5 } from "../../../AbstractElements";
import { Button, Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import DataTable from "react-data-table-component";
import { StaticColumns } from "./reports_list_Data";
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
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [doctorUsername, setDoctorUsername] = useState("");

  const fetchData = async () => {
    if (localStorage.getItem("profile") == null || localStorage.getItem("profile") == undefined || localStorage.getItem("profile") == "") {
      history(`${process.env.PUBLIC_URL}/login`, {
        replace: true,
      });
      return
    }
    const profile = JSON.parse(localStorage.getItem("profile"))
    console.log(profile)
    setDoctorUsername(profile[1])
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

    let contractResponse = contract.methods.getPatients().call({
      from: owner,
      gas: 1500000,
      gasPrice: 0,
      value: weiValue
    }).then(async function (result) {
      console.log(result)
      // setData(result)
      contract.methods.getDoctorsPatients().call({
        from: owner,
        gas: 1500000,
        gasPrice: 0,
        value: weiValue
      }).then(async function (resultDoctorPatient) {
        console.log(resultDoctorPatient)
        contract.methods.getPatientsPrescription().call({
          from: owner,
          gas: 1500000,
          gasPrice: 0,
          value: weiValue
        }).then(async function (resultPatientPrescription) {
          console.log(resultPatientPrescription)

          let dataArray = []
          result.forEach(element => {
            console.log(element)
            console.log(element[0])
            let isAccessed = false
            let prescriptionValue = ""
            let reportsValue = ""
            resultDoctorPatient.forEach(elementInner => {
              console.log(elementInner)
              //Is user is current doctor
              // if (elementInner[0] == profile[1]) {
              const filteredInner = elementInner[1].filter((e) => e == element[1])
              console.log(filteredInner)
              const filteredPrescription = resultPatientPrescription.filter((e) => e[0] == element[1])
              console.log(filteredPrescription)
              if (filteredPrescription.length > 0) {
                prescriptionValue = filteredPrescription[0][5]
                reportsValue = filteredPrescription[0][6]
              }
              if (filteredInner.length > 0) {
                isAccessed = true
              }
              // }
            });
            if (isAccessed == true) {
              dataArray.push([
                element[0],
                element[1],
                element[2],
                element[3],
                isAccessed,
                prescriptionValue,
                reportsValue
              ])
            }
          });
          console.log("dataArray", dataArray)
          setData(dataArray)
        }).then(function (error) {
          console.log(error)
        })
      }).then(function (error) {
        console.log(error)
      })
    }).then(function (error) {
      console.log(error)
    })
    // const req = await getStativVersionAPI();
    // setData(req.data);
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
      Prescription: `${elem[5]}`,
      action: (
        <div style={flexboxstyle}>
          <Button style={style2} type="button" color="success" size="sm" onClick={() => {
            console.log(elem)
            const uri = global.backendUrlFile+elem[6]
            var link = document.createElement("a");
            link.href = uri;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}>Download Reports</Button>
        </div>
      ),
    };
  })

  return (
    <Fragment>
      <Breadcrumbs
        parent="Reports Section"
        title="Reports List"
        mainTitle="Reports List"
      />
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <H5>{"Reports List"}</H5>
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
