import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../AbstractElements";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };
// export const Contact_Data = [
//   {
//     Title: (
//       <div>
//         <span>Interchargebla lens Digital</span>
//       </div>
//     ),
//     Email: "Web Developer",
//     Latitude: "10",
//     Longitude: "$10",

//     action: (
//       <div>
//         <span>
//           <Btn
//             attrBtn={{
//               style: style2,
//               className: "btn btn-danger btn-xs",
//               type: "button",
//             }}
//           >
//             Delete
//           </Btn>
//         </span>{" "}
//         &nbsp;&nbsp;
//         <span>
//           <Link to={`${process.env.PUBLIC_URL}/hero_section/contact_page`}>
//             <Btn
//               attrBtn={{
//                 style: style2,
//                 className: "btn btn-success btn-xs",
//                 type: "button",
//               }}
//             >
//               Edit
//             </Btn>
//           </Link>
//         </span>
//       </div>
//     ),
//   },
// ];
export const Contact_Columns = [
  {
    name: "Title",
    selector: (row) => row.Title,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Email",
    selector: (row) => row.Email,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Phone ",
    selector: (row) => row.Latitude,
    sortable: true,
    center: true,
  },
  {
    name: "Address",
    selector: (row) => row.Longitude,
    sortable: true,
    center: true,
  },

  {
    name: "Action",
    selector: (row) => row.action,
    sortable: true,
    center: true,
  },
];
