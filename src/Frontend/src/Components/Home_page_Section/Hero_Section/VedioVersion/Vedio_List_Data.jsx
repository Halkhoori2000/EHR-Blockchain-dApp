import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../../AbstractElements";
import product1 from "../../../../assets/images/ecommerce/product-table-1.png";

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 60, fontSize: 14, padding: 4 };
export const VedioData = [
  {
    image: <Image attrImage={{ src: product1, style: style, alt: "" }} />,

    VedioURL: "//:http/dgba",
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
          <Link to={`${process.env.PUBLIC_URL}/hero_section/vedio_version`}>
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
export const VedioColumns = [
  {
    name: "Image",
    selector: (row) => row.image,
    sortable: true,
    center: true,
  },

  {
    name: "Vedio Link",
    selector: (row) => row.VedioURL,
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
