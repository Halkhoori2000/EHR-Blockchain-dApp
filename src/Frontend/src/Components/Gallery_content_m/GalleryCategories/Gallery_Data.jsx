
export const Gallery_Category_Columns = [
  {
    name: "Name ",
    selector: (row) => row.Name,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Serial Number ",
    selector: (row) => row.SerialNumber,
    sortable: true,
    center: true,
  },
  {
    name: "Status",
    selector: (row) => row.Status,
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
