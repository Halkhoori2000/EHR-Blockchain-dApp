
export const ServiceColumns = [

  {
    name: "Title",
    selector: (row) => row.Title,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Sub Title",
    selector: (row) => row.SubTitle,
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
