/**
 *Submitted for verification at etherscan.io on 2023-04-28
*/

//SPDX-License-Identifier:MIT
pragma solidity ^0.8.0;

contract EHR {
    struct User {
        string name;
        string username;
        bytes32 passwordHash;
        uint userType; // 1: Patient, 2: Doctor, 3: Lab Person
    }
    struct Patient{
        string username;
        string name;
        string phone;
        string symptoms;
        string description;
        string prescription;
        string reports;
    }
    struct Doctor{
        string username;
        string[] patients;
    }
    
    string[] public usernames;
    mapping (string => User) public users;
    mapping (string => Patient) public patients;
    mapping (string => Doctor) public doctors;

    function createUser(string memory name, string memory username, string memory password, uint userType) public {
        require(keccak256(bytes(users[username].username)) != keccak256(bytes(username)), "User already registered");
        users[username].name = name;
        users[username].username = username;
        bytes32 passwordHash = keccak256(bytes(password));
        users[username].passwordHash = passwordHash;
        users[username].userType = userType;
        usernames.push(username);
        if(userType == 1)
        {
            patients[username].name = name;
            patients[username].username = username;
            patients[username].prescription = "";
            patients[username].reports = "";
        }
        if(userType == 2){
            doctors[username].username = username;
            doctors[username].patients = [""];
        }
    }
    function loginUser(string memory username, string memory password) public view returns (User memory user) {
        bytes32 passwordHash = keccak256(bytes(password));
        if(users[username].passwordHash == passwordHash){
            return users[username];
        }
    }
    function getPatientProfile(string memory username) public view returns (Patient memory patient) {
        require(keccak256(bytes(patients[username].username)) == keccak256(bytes(username)), "User doesn't exist");
        return patients[username];
    }
    function updateProfile(string memory username,string memory name,string memory phone, string memory symptoms, string memory description) public {
        require(keccak256(bytes(users[username].username)) == keccak256(bytes(username)), "User doesn't exist");
        users[username].name = name;
        if(users[username].userType == 1)
        {
            patients[username].name = name;
            patients[username].phone = phone;
            patients[username].symptoms = symptoms;
            patients[username].description = description;
        }
    }
    function getDoctors() public view returns (User[] memory) {
        uint count = 0;
        for (uint i = 0; i < usernames.length; i++) {
            if (users[usernames[i]].userType == 2) {
                count++;
            }
        }
        User[] memory result = new User[](count);
        count = 0;
        for (uint i = 0; i < usernames.length; i++) {
            if (users[usernames[i]].userType == 2) {
                result[count] = users[usernames[i]];
                count++;
            }
        }
        return result;
    }
    function getPatients() public view returns (User[] memory) {
        uint count = 0;
        for (uint i = 0; i < usernames.length; i++) {
            if (users[usernames[i]].userType == 1) {
                count++;
            }
        }
        User[] memory result = new User[](count);
        count = 0;
        for (uint i = 0; i < usernames.length; i++) {
            if (users[usernames[i]].userType == 1) {
                result[count] = users[usernames[i]];
                count++;
            }
        }
        return result;
    }
    function getDoctorsPatients() public view returns (Doctor[] memory) {
        uint count = 0;
        for (uint i = 0; i < usernames.length; i++) {
            if (users[usernames[i]].userType == 2) {
                count++;
            }
        }
        Doctor[] memory result = new Doctor[](count);
        count = 0;
        for (uint i = 0; i < usernames.length; i++) {
            if (users[usernames[i]].userType == 2) {
                result[count] = doctors[usernames[i]];
                count++;
            }
        }
        return result;
    }
    function getPatientsPrescription() public view returns (Patient[] memory) {
        uint count = 0;
        for (uint i = 0; i < usernames.length; i++) {
            if (users[usernames[i]].userType == 1) {
                count++;
            }
        }
        Patient[] memory result = new Patient[](count);
        count = 0;
        for (uint i = 0; i < usernames.length; i++) {
            if (users[usernames[i]].userType == 1) {
                result[count] = patients[usernames[i]];
                count++;
            }
        }
        return result;
    }
    function addAccessToDoctor(string memory doctorUsername,string memory patientUsername) public {
        doctors[doctorUsername].patients.push(patientUsername);
    }
    function removeAccessToDoctor(string memory doctorUsername,string memory patientUsername) public {
    //    doctors[doctorUsername].patients.push(doctorUsername);
        uint indexToRemove;
        for (uint i = 0; i < doctors[doctorUsername].patients.length; i++) {
            if (keccak256(bytes(doctors[doctorUsername].patients[i])) == keccak256(bytes(patientUsername))) {
                indexToRemove = i;
                break;
            }
        }
        if (indexToRemove < doctors[doctorUsername].patients.length) {
            for (uint j = indexToRemove; j < doctors[doctorUsername].patients.length-1; j++) {
                doctors[doctorUsername].patients[j] = doctors[doctorUsername].patients[j+1];
            }
            doctors[doctorUsername].patients.pop();
        }
    }
    function updatePrescription(string memory patientUsername,string memory prescription) public {
        patients[patientUsername].prescription= prescription;
    }
    function updateReports(string memory patientUsername,string memory reports) public {
        patients[patientUsername].reports= reports;
    }    
}