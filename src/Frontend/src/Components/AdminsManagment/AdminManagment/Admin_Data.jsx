import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";
import product1 from "../../../assets/images/ecommerce/product-table-1.png";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };
// export const Admins_Data = [
//   {
//     image: <Image attrImage={{ src: product1, style: style, alt: "" }} />,
//     Username: (
//       <div>
//         <span>Interchargebla lens Digital</span>
//       </div>
//     ),
//     Email: "$10",

//     Role: "10",
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
//           <Link to={`${process.env.PUBLIC_URL}/hero_section/add_admin`}>
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
export const Admins_Columns = [
  {
    name: "Image",
    selector: (row) => row.image,
    sortable: true,
    center: true,
  },
  {
    name: "Username  ",
    selector: (row) => row.Username,
    sortable: true,
    center: true,
    wrap: true,
  },

  {
    name: "Email ",
    selector: (row) => row.Email,
    sortable: true,
    center: true,
  },
  {
    name: "Role ",
    selector: (row) => row.Role,
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
