import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";

export const style = {
  width: 40,
  height: 40,
};
export const style2 = { width: 60, fontSize: 14, padding: 4 };
export const Carrer_Category_Data = [
  {
    Name: (
      <div>
        <span>Interchargebla lens Digital</span>
      </div>
    ),
    SerialNumber: "$10",

    Status: "10",
    action: (
      <div>
        <span>
          <Btn
            attrBtn={{
              style: style2,
              className: "btn btn-danger btn-xs",
              type: "button",
            }}
          >
            Delete
          </Btn>
        </span>{" "}
        &nbsp;&nbsp;
        <span>
          <Link to={`${process.env.PUBLIC_URL}/hero_section/carrer_category`}>
            <Btn
              attrBtn={{
                style: style2,
                className: "btn btn-success btn-xs",
                type: "button",
              }}
            >
              Edit
            </Btn>
          </Link>
        </span>
      </div>
    ),
  },
];
export const Carrer_Category_Columns = [
  {
    name: "Name ",
    selector: (row) => row.Name,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Serial Number ",
    selector: (row) => row.SerialNumber,
    sortable: true,
    center: true,
  },
  {
    name: "Status",
    selector: (row) => row.Status,
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
