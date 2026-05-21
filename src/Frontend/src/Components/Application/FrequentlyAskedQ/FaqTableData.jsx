import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 60, fontSize: 14, padding: 4 };
export const FaqData = [
  {
    Questions: (
      <div>
        <H6>Red Lipstick</H6>
        <span>
          Interchargebla lens Digital Camera with APS-C-X Trans CMOS Sens
        </span>
      </div>
    ),
    Answer: <div className="font-success">In Stock</div>,
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
          <Link to={"/dashboard/faq"}>
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
export const FaqColumns = [
  {
    name: "Questions",
    selector: (row) => row.Questions,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Answer",
    selector: (row) => row.Answer,
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
