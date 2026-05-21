import React from "react";
import { Form, Input, Label } from "reactstrap";

const MoreRoles = () => {
  const data = [
    { title: "Manage Client Category" },
    { title: "Manage Client SubCategory" },
    { title: "Add Client Contacts" },
    { title: "View Client Contacts" },
    { title: "Edit Client Contacts" },
    { title: "Delete Client Contacts" },
    { title: "Add Client Note" },
    { title: "View Client Note" },
    { title: "Edit Client Note" },
    { title: "Delete Client Note" },
    { title: "Add Client Document" },
    { title: "View Client Document" },
    { title: "Edit Client Document" },
    { title: "Delete Client Document" },
  ];
  return (
    <>
      <div className="more-roles-wrapper">
        {data?.map((val, i) => (
          <Form key={i} className="more-roles-flexbox">
            <div className="column-size-context"><Label>{val.title}</Label></div>
            <div className="column-size-context">
              <Input type="select" className="form-select form-select-sm">
                <option>All</option>
                <option>None</option>
              </Input>
            </div>
          </Form>
        ))}
      </div>
    </>
  )
};

export default MoreRoles;
