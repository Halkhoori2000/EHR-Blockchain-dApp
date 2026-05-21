import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };
// export const Edit_Data = [
//   {
//     URLs: (
//       <div>
//         <span> lens Digital</span>
//       </div>
//     ),
//     SerialNumber: "$10",

//     action: (
//       <div>
//         <span>
//           <Link to={`/social_links`}>
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
export const Edit_Columns = [
  {
    name: "  URL",
    selector: (row) => row.URLs,
    sortable: true,
    center: true,
    wrap: true,
  },

  {
    name: "Serial Number	 ",
    selector: (row) => row.SerialNumber,
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
