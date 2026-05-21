
export const IntroColumns = [
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
    name: "Vedio URL",
    selector: (row) => row.VedioLink,
    sortable: true,
    center: true,
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
    selector: (row) => row.buttonurl,
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
