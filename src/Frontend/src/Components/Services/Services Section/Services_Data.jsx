import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";
import product1 from "../../../assets/images/ecommerce/product-table-1.png";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };
// export const Services_Data = [
//   {
//     image: <Image attrImage={{ src: product1, style: style, alt: "" }} />,

//     Title: "Name ",
//     Category: "Rank data",
//     Serialnumber: "//:http/dgba",
//     MetaKeyword: "//:http/dgba",
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
//           <Link to={`${process.env.PUBLIC_URL}/hero_section/services_detail`}>
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
export const Services_Columns = [
  {
    name: "Image",
    selector: (row) => row.image,
    sortable: true,
    center: true,
  },
  {
    name: "Title",
    selector: (row) => row.Title,
    sortable: true,
    center: true,
  },
  {
    name: "Category",
    selector: (row) => row.Category,
    sortable: true,
    center: true,
  },
  {
    name: "Serial Number",
    selector: (row) => row.Serialnumber,
    sortable: true,
    center: true,
  },
  {
    name: "Meta Keywords",
    selector: (row) => row.MetaKeyword,
    sortable: true,
    center: true,
  },
  {
    name: "Meta Description",
    selector: (row) => row.MetaDescription,
    sortable: true,
    center: true,
  },
  {
    name: "Summary",
    selector: (row) => row.Summary,
    sortable: true,
    center: true,
  },
  {
    name: "Copyright Text",
    selector: (row) => row.CopyrightText,
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
