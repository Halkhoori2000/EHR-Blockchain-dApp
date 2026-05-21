import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../AbstractElements";


const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 60, fontSize: 14, padding: 4 };
export const Client_Data = [
  {
    ClientName : (
      <div>
        <span> lens Digital</span>
      </div>
    ),
    FeedBacks: "$10",

  
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
          <Link to={`${process.env.PUBLIC_URL}/hero_section/add_admin`}>
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
export const Client_Columns = [
  {
    name: "Client Name  ",
    selector: (row) => row.ClientName,
    sortable: true,
    center: true,
    wrap: true,
  },

  {
    name: "Feed Backs ",
    selector: (row) => row.FeedBacks,
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
