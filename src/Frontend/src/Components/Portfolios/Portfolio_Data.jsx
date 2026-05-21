export const Portfolio_Columns = [
  {
    name: "Featured Image",
    selector: (row) => row.featuredImage,
    sortable: true,
    center: true,
  },
  {
    name: 'Slider Image',
    selector: (row) => row.sliderImage,
    sortable:  true,
    center: true
  },
  {
    name: "Title",
    selector: (row) => row.Title,
    sortable: true,
    center: true,
  },
  {
    name: "Services",
    selector: (row) => row.Services,
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
