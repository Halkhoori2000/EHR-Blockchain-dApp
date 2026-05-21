import React, { Fragment, useState, useEffect } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";
import { Btn, H4, P } from "../../../AbstractElements";
import {
  LoginWithJWT,
  Password,
  RememberPassword,
  SignIn,
} from "../../../Constant";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { firebase_app, Jwt_token } from "../../../Config/Config";
import man from "../../../assets/images/dashboard/1.png";
import { handleResponse } from "../../../Services/fack.backend";
import SocialAuth from "./SocialAuth";
import Web3 from "web3";
import ABI from '../../../abi/abi';

const LoginTab = ({ selected }) => {

  const [username, setUsername] = useState(""); //test
  const [fullName, setFullName] = useState("");
  const [userType, setUserType] = useState(0);
  const [password, setPassword] = useState(""); //test123
  const [loading, setLoading] = useState(false);
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();

  const [value, setValue] = useState(localStorage.getItem("profileURL" || man));
  const [name, setName] = useState(localStorage.getItem("Name"));

  const [currentPage, setCurrentPage] = useState("login");

  useEffect(() => {
    localStorage.setItem("profileURL", value);
    localStorage.setItem("Name", name);
  }, [value, name]);

  const loginWithJwt = (e) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { username, password },
    };

    return fetch("/users/authenticate", requestOptions)
      .then(handleResponse)
      .then((user) => {
        console.log(user)
        console.log(man)
        console.log(Jwt_token)
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        setValue(man);
        setName("John");
        localStorage.setItem("token", Jwt_token);
        // window.location.href = `${process.env.PUBLIC_URL}/ehr/patientProfile`;
        return user;
      });
  };
  const signup = async (e) => {
    if (username == "") {
      alert("Please Enter Username")
      return
    }
    else if (password == "") {
      alert("Please Enter Password")
      return
    }
    else if (fullName == "") {
      alert("Please Enter Full Name")
      return
    }
    else if (userType == 0) {
      alert("Please Select User Type")
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

    let contractResponse = contract.methods.createUser(fullName,username,password,userType).send({
      from: owner,
      gas: 1500000,
      gasPrice: 0,
      value: weiValue
    }).then(async function (result) {
      console.log(result)
      setUsername("")
      setName("")
      setPassword("")
      setUserType(1)
      setCurrentPage("login")
    }).then(function (error) {
      console.log(error)
    })

  }
  const login = async (e) => {
    if (username == "") {
      alert("Please Enter Username")
    }
    else if (password == "") {
      alert("Please Enter Password")
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

    let contractResponse = contract.methods.loginUser(username,password).call({
      from: owner,
      gas: 1500000,
      gasPrice: 0,
      value: weiValue
    }).then(async function (result) {
      console.log(result)
      if(result.name == "" && result.userType == "0"){
        alert("Wrong Username or Password")
        return
      }
      else{
        localStorage.setItem("profile", JSON.stringify(result));
        localStorage.setItem("token", Jwt_token);
        setName(result.name)
        window.location.href = `${process.env.PUBLIC_URL}/ehr/patientProfile`;
      }
      
      // setUsername("")
      // setPassword("")
      setCurrentPage("login")
    }).then(function (error) {
      console.log(error)
    })

  }

  return (
    <Fragment>
      <Form className="theme-form">
        <H4>
          {currentPage == "login" ? `Sign In` : `Signup`}
        </H4>
        <P>{`Enter your username & password to ${currentPage == "login" ? `login` : `signup`}`}</P>
        <FormGroup>
          <Label className="col-form-label">{"Username"}</Label>
          <Input
            className="form-control"
            type="text"
            required=""
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </FormGroup>
        <FormGroup className="position-relative">
          <Label className="col-form-label">{Password}</Label>
          <Input
            className="form-control"
            type={togglePassword ? "text" : "password"}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required=""
          />
          <div
            className="show-hide"
            onClick={() => setTogglePassword(!togglePassword)}
          >
            <span className={togglePassword ? "" : "show"}></span>
          </div>
        </FormGroup>
        {currentPage == "signup" ?
          <FormGroup>
            <Label className="col-form-label">{"Full Name"}</Label>
            <Input
              className="form-control"
              type="text"
              required=""
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
          </FormGroup>
          : null}
        {currentPage == "signup" ?
          <FormGroup>
            <Label className="col-form-label">{"User Type"}</Label>
            <Input
              onChange={(e) => setUserType(e.target.value)}
              value={userType}
              type="select"
              placeholder=" Select a User Type "
              className="form-control digits"
              required
            >
              {" "}
              <option value={0} >Select a Type</option>
              <option value={1}>Patient</option>
              <option value={2}>Doctor</option>
              <option value={3}>Lab Person</option>
            </Input>
          </FormGroup>
          : null}
        {/* {currentPage == "login" ?
          <div className="form-group mb-0">

            <div className="checkbox ms-3">
              <Input id="checkbox1" type="checkbox" />
              <Label className="text-muted" for="checkbox1">
                {RememberPassword}
              </Label>
            </div>
          </div>
          : null} */}
        <div className="form-group mb-0">

          <Btn
            attrBtn={{
              color: "primary",
              className: "btn-block",
              disabled: loading ? loading : loading,
              onClick: (e) => {
                if (currentPage == "login") {
                  login(e)
                }
                else {
                  signup()
                }

              }
            }}
          >
            {loading ? "LOADING..." : currentPage == "login" ? "Sign in" : "Sign up"}
          </Btn>
          <a onClick={(e) => {
            if (currentPage == "login") {
              setCurrentPage("signup")
            }
            else {
              setCurrentPage("login")
            }
          }} className="link" href="#javascript">
            {currentPage == "login" ? "Signup" : "Login"}
          </a>
        </div>
        {/* <SocialAuth /> */}
      </Form>
    </Fragment>
  );
};

export default LoginTab;
