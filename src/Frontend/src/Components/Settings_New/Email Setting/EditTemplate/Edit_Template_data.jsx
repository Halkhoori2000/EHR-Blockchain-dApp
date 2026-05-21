import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../../AbstractElements";

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 60, fontSize: 14, padding: 4 };
export const Edit_Data = [
  {
    EmailType: (
      <div>
        <span> lens Digital</span>
      </div>
    ),
    EmailSubject: "$10",

    action: (
      <div>

        <span>
          <Link to={`/edit_template_form`}>
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
export const Edit_Columns = [
  {
    name: "    Email Type",
    selector: (row) => row.EmailType,
    sortable: true,
    center: true,
    wrap: true,
  },

  {
    name: "EmailSubject ",
    selector: (row) => row.EmailSubject,
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
