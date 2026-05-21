
export const Call_TO_Columns = [
  {
    name: "Image",
    selector: (row) => row.image,
    sortable: true,
    center: true,
  },
  {
    name: "Text",
    selector: (row) => row.Text,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Button Text",
    selector: (row) => row.ButtonText,
    sortable: true,
    center: true,
  },
  {
    name: "Button Url",
    selector: (row) => row.ButtonUrl,
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
