import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };
// export const ADD_Faq_Data = [
//   {
//     Category: (
//       <div>
//         <span>Interchargebla lens Digital</span>
//       </div>
//     ),
//     SerialNumber: "$10",

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
//           <Link to={`${process.env.PUBLIC_URL}/hero_section/add_faq`}>
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
export const ADD_Faq_Columns = [
  {
    name: "Question",
    selector: (row) => row.Category,
    sortable: true,
    center: true,
    width:"250px"
  },
  {
    name: "Answer",
    selector: (row) => row.SerialNumber,
    sortable: true,
    width:"250px"
  },

  {
    name: "Action",
    selector: (row) => row.action,
    sortable: true,
    center: true,
  },
];
