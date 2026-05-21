
export const StaticColumns = [
  
  {
    name: "Name",
    selector: (row) => row.Name,
    sortable: true,
    center: true,
    wrap: true,
  },
  {
    name: "Username",
    selector: (row) => row.Username,
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
