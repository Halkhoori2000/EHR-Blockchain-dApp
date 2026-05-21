import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 60, fontSize: 14, padding: 4 };
export const CRMData = [
  {
    Name: (
      <div>
        <span>Digital camera</span>
      </div>
    ),
    Massage: <div className="font-success">In Stock</div>,
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
          <Link to={"/dashboard/crm-form"}>
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
export const CRMColumns = [
  {
    name: "Name",
    selector: (row) => row.Name,
    sortable: true,
    center: true,
    // wrap: true,
  },
  {
    name: "Massage",
    selector: (row) => row.Massage,
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
