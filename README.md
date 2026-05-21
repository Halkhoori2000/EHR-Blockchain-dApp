# EHR Blockchain dApp — Solidity, React, Ethereum

A decentralised Electronic Health Record system where patient data lives on the blockchain instead of a central hospital database. Patients own their records and explicitly grant or revoke doctor access — no third party controls the data. The system supports three roles: Patient, Doctor, and Lab Person.

Built with a Solidity smart contract deployed on the Ethereum network and a React frontend that connects via MetaMask and web3.js. The contract stores user accounts, patient profiles, prescriptions, and lab reports in on-chain mappings. Passwords are never stored in plaintext — only their keccak256 hash is saved on-chain. Patients manage access by calling `addAccessToDoctor` / `removeAccessToDoctor`, which updates the doctor's patient list directly in contract state. All reads are free (view functions); writes (registration, updates, access changes) require an Ethereum transaction signed through MetaMask.

**[Live Demo →](https://halkhoori2000.github.io/EHR-Blockchain-dApp/)**  
**[Contract on Etherscan →](https://etherscan.io/address/0x10E268d0EB3CD00746bF9b658324Acd585Af4166)**

---

## Use Cases
- Patient-owned medical records: instead of each hospital maintaining a siloed copy of a patient's history, the blockchain acts as a single source of truth the patient controls — any authorised provider reads the same record
- Cross-provider prescription tracking: a doctor updates the prescription field on-chain; any other authorised doctor reads the current state immediately, reducing duplicate prescriptions and dangerous drug interactions
- Lab result distribution: the Lab Person role can update the reports field directly, making results instantly visible to both patient and their authorised doctors without manual hand-off
- Auditable access logs: every `addAccessToDoctor` and `removeAccessToDoctor` call is a blockchain transaction — the full history of who had access and when is permanently recorded and tamper-proof

## Challenges
- **On-chain string storage cost**: Solidity stores strings in dynamic byte arrays — every character costs gas; patient profile fields (symptoms, description, prescription, reports) are stored as full strings on-chain, making update transactions progressively more expensive as record length grows
- **Password security on a public chain**: keccak256 hashing prevents raw password exposure, but all on-chain data is publicly readable — the hash is visible to anyone, making brute-force feasible for weak passwords; a production system would use off-chain authentication with on-chain identity proofs
- **Array-based access control gas cost**: `removeAccessToDoctor` iterates the doctor's patient array to find and remove the target — O(n) gas cost that scales with the number of a doctor's patients; a mapping-based approach would be O(1)
- **No on-chain encryption**: patient data (symptoms, descriptions, reports) is stored as plaintext in contract state, readable by any node — a production EHR would encrypt records off-chain (e.g. IPFS + symmetric key) and store only the content hash on-chain

---

## Smart Contract

**Network:** Ethereum Mainnet  
**Address:** [`0x10E268d0EB3CD00746bF9b658324Acd585Af4166`](https://etherscan.io/address/0x10E268d0EB3CD00746bF9b658324Acd585Af4166)

| Function | Description |
|---|---|
| `createUser(name, username, password, userType)` | Registers a new user; stores keccak256(password); userType: 1=Patient, 2=Doctor, 3=Lab |
| `loginUser(username, password)` | Returns the User struct if keccak256(password) matches stored hash |
| `getPatientProfile(username)` | Returns full Patient struct (name, phone, symptoms, prescription, reports) |
| `updateProfile(...)` | Updates name, phone, symptoms, description for a patient |
| `addAccessToDoctor(doctorUsername, patientUsername)` | Grants a doctor access to a patient's records |
| `removeAccessToDoctor(doctorUsername, patientUsername)` | Revokes doctor access |
| `updatePrescription(patientUsername, prescription)` | Doctor writes prescription to patient record |
| `updateReports(patientUsername, reports)` | Lab person writes report to patient record |
| `getDoctors()` | Returns array of all registered Doctor structs |
| `getPatients()` | Returns array of all registered Patient structs |
| `getDoctorsPatients()` | Returns array mapping each doctor to their permitted patient list |
| `getPatientsPrescription()` | Returns array of all patient prescription/report records |

---

## Tech Stack

| Item | Detail |
|---|---|
| Smart Contract | Solidity `^0.8.0` |
| Blockchain | Ethereum Mainnet |
| Frontend | React + web3.js |
| Wallet | MetaMask |
| State Management | Redux + Redux-Saga |
| UI | React Bootstrap + Reactstrap |

---

## Project Structure

```
EHR-Blockchain-dApp/
├── src/
│   ├── SmartContract/
│   │   └── SmartContract.sol      ← Solidity EHR contract (deployed on Ethereum)
│   └── Frontend/
│       ├── src/
│       │   ├── abi/abi.js         ← Contract ABI + address
│       │   ├── Auth/              ← MetaMask connect, login, signup
│       │   └── Components/EHR/   ← Patient profile, doctors list, patients list
│       └── package.json
└── index.html                     ← GitHub Pages overview
```

---

## Run

**Requirements:** Node.js, MetaMask browser extension connected to Ethereum Mainnet.

```bash
cd src/Frontend
npm install
npm start
# Open http://localhost:3000
# Connect MetaMask to Ethereum Mainnet
```

---

## Course

TBD  
The Pennsylvania State University