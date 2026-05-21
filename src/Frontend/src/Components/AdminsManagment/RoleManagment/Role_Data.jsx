import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";
import Permissions from "./Permissions";
export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };
export const style3 = { fontSize: 14, padding: 4 };
// export const Role_Data = [
//   {
//     Title: (
//       <div>
//         <span>Interchargebla lens Digital</span>
//       </div>
//     ),
//     Permissions: (
//       <div>
//         {" "}
//         <span>
//           <Link to={`${process.env.PUBLIC_URL}/hero_section/permission`}>
//             <Btn
//               attrBtn={{
//                 style: style3,

//                 className: "btn btn-success btn-xs",
//                 type: "button",
//               }}
//             >
//               <i className={"fa fa-edit"}></i> Manage
//             </Btn>
//           </Link>
//         </span>
//       </div>
//     ),

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
//           <Link to={`${process.env.PUBLIC_URL}/hero_section/add_popups`}>
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
export const Role_Columns = [
  {
    name: "Role Name ",
    selector: (row) => row.Title,
    sortable: true,
    center: true,
    wrap: true,
  },

  {
    name: "Permissions",
    selector: (row) => row.Permissions,
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
