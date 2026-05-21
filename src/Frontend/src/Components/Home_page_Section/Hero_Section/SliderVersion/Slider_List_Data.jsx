import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../../AbstractElements";
import product1 from "../../../../assets/images/ecommerce/product-table-1.png";

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 60, fontSize: 14, padding: 4 };
export const SliderData = [
  {
    image: <Image attrImage={{ src: product1, style: style, alt: "" }} />,
    Title: (
      <div>
        <span>Interchargebla lens Digital</span>
      </div>
    ),
    Text: "$10",
    ButtonText: <div className="font-success">In Stock</div>,
    ButtonURL: "//:http/dgba",
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
          <Link to={`${process.env.PUBLIC_URL}/hero_section/slider_version`}>
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
export const SliderColumns = [
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
    wrap: true,
  },
  {
    name: "Text",
    selector: (row) => row.Text,
    sortable: true,
    center: true,
  },
  {
    name: "Button Text",
    selector: (row) => row.ButtonText,
    sortable: true,
    center: true,
  },
  {
    name: "Button URL",
    selector: (row) => row.ButtonURL,
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
