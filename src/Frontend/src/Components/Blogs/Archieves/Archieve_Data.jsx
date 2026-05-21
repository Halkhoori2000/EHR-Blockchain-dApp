import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";
import product1 from "../../../assets/images/ecommerce/product-table-1.png";

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 60, fontSize: 14, padding: 4 };
export const Archieve_Data = [
  {
    Date: "Name",

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
          <Link to={`${process.env.PUBLIC_URL}/hero_section/archieve`}>
            <Btn
              attrBtn={{
                style: style2,
                className: "btn btn-success btn-xs",
                type: "button",
              }}
            >
              Edit{" "}
            </Btn>
          </Link>
        </span>
      </div>
    ),
  },
];
export const Archieve_Columns = [
  {
    name: "Date",
    selector: (row) => row.Date,
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
