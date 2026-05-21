
export const ApproachColumns = [
  {
    name: "Title",
    selector: (row) => row.Title,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Serial Number",
    selector: (row) => row.SerialNumber,
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
