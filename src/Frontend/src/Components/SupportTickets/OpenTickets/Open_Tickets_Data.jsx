// import { Link } from "react-router-dom";
// import { Btn, H6, Image } from "../../../AbstractElements";
// import { Input } from "reactstrap";
// const style = {
//   width: 40,
//   height: 40,
// };
// const style2 = { width: 60, fontSize: 14, padding: 4 };
// export const Open_Tickets_Data = [
//   {
//     TicketNumber: "#1254568",
//     Username: (
//       <div>
//         <span>Interchargebla lens Digital</span>
//       </div>
//     ),
//     Email: "$10",

//     Subject: "something",
//     Status: "Open",
//     action: (
//       <div>
//         <span>
//           {/* <Link to={`${process.env.PUBLIC_URL}/hero_section/add_knowledge`}> */}
//           <Input
//             type="select"
//             name="issues"
//             placeholder="Select Issues"
//             className="form-control digits"
//             required
//             onChange={(event) => {
//               history.push(
//                 `${process.env.PUBLIC_URL}/hero_section/${event.target.value}`
//               );
//             }}
//           >
//             <option disabled>Actions</option>

//             <option value={"pending_ticketss"}>
//               <Link
//                 to={`${process.env.PUBLIC_URL}/hero_section/pending_ticketss`}
//               >
//                 Pending
//               </Link>
//             </option>

//             <Link to={`${process.env.PUBLIC_URL}/hero_section/open_ticketss`}>
//               <option selected>Open</option>
//             </Link>
//             <Link to={`${process.env.PUBLIC_URL}/hero_section/closed_ticketss`}>
//               <option>Closed</option>
//             </Link>
//           </Input>
//           {/* <Btn
//               attrBtn={{
//                 style: style2,
//                 className: "btn btn-success btn-xs",
//                 type: "button",
//               }}
//             >
//               Edit
//             </Btn> */}
//           {/* </Link> */}
//         </span>
//       </div>
//     ),
//   },
// ];
// export const Open_Tickets_Columns = [
//   {
//     name: "Ticket Number ",
//     selector: (row) => row.TicketNumber,
//     sortable: true,
//     center: true,
//     wrap: true,
//   },
//   {
//     name: "Username",
//     selector: (row) => row.Username,
//     sortable: true,
//     center: true,
//   },
//   {
//     name: "Email",
//     selector: (row) => row.Email,
//     sortable: true,
//     center: true,
//   },
//   {
//     name: "Subject",
//     selector: (row) => row.Subject,
//     sortable: true,
//     center: true,
//   },
//   {
//     name: "Status",
//     selector: (row) => row.Status,
//     sortable: true,
//     center: true,
//   },

//   {
//     name: "Action",
//     selector: (row) => row.action,
//     sortable: true,
//     center: true,
//   },
// ];
