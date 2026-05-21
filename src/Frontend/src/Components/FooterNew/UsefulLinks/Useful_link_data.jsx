import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";
import product1 from "../../../assets/images/ecommerce/product-table-1.png";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };
// export const Useful_Link_Data = [
//   {
//     Name: (
//       <div>
//         <span>Interchargebla lens Digital</span>
//       </div>
//     ),
//     UrL: "subtitle",

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
//           <Link to={`${process.env.PUBLIC_URL}/hero_section/useful_link`}>
//             <Btn
//               attrBtn={{
//                 style: style2,
//                 className: "btn btn-success btn-xs",
//                 type: "button",
//               }}
//             >
//               Edit{" "}
//             </Btn>
//           </Link>
//         </span>
//       </div>
//     ),
//   },
// ];
export const Useful_Link_Columns = [
  {
    name: "Name",
    selector: (row) => row.Name,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "URL",
    selector: (row) => row.UrL,
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
