import { CrewData,crewColumns } from "./CrewData";
import React, { Fragment } from "react";
import DataTable from "react-data-table-component";

function CrewTableData() {
  return (
    <Fragment>
      <div className="table-responsive product-table">
        <DataTable
          noHeader
          pagination
          paginationServer
          columns={crewColumns}
          data={CrewData}
        />
      </div>
    </Fragment>
  );
}

export default CrewTableData;
