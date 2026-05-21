import { Link } from "react-router-dom";
import { Btn, H6, Image } from "../../../AbstractElements";
import product1 from "../../../assets/images/ecommerce/product-table-1.png";

const style = {
  width: 40,
  height: 40,
};
const style2 = { width: 60, fontSize: 14, padding: 4 };
export const TeamData = [
  {
    image: <Image attrImage={{ src: product1, style: style, alt: "" }} />,

    Name: "Name ",
    Rank: "Rank data",
    Facebook: "//:http/dgba",
    Twitter: "//:http/dgba",
    Instagram: "//:http/dgba",
    Linkedin: "//:http/dgba",
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
          <Link to={`${process.env.PUBLIC_URL}/hero_section/team_section`}>
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
export const TeamColumns = [
  {
    name: "Image",
    selector: (row) => row.image,
    sortable: true,
    center: true,
  },

  {
    name: "Name",
    selector: (row) => row.Name,
    sortable: true,
    center: true,
  },
  {
    name: "Rank",
    selector: (row) => row.Rank,
    sortable: true,
    center: true,
  },
  {
    name: "Facebook",
    selector: (row) => row.Facebook,
    sortable: true,
    center: true,
  },
  {
    name: "Twitter",
    selector: (row) => row.Twitter,
    sortable: true,
    center: true,
  },
  {
    name: "Instagram",
    selector: (row) => row.Instagram,
    sortable: true,
    center: true,
  },
  {
    name: "Linkedin",
    selector: (row) => row.Linkedin,
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
