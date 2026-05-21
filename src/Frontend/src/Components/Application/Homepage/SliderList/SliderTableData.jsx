
import { sliderData,sliderColumns } from "./ListData";
import React, { Fragment } from "react";
import DataTable from "react-data-table-component";

function SliderTableData() {
  return (
    <Fragment>
      <div className="table-responsive product-table">
        <DataTable
          noHeader
          pagination
          paginationServer
          columns={sliderColumns}
          data={sliderData}
        />
      </div>
    </Fragment>
  );
}

export default SliderTableData;
