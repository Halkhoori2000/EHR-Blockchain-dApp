import React, { useState } from "react";
import "./RoleTables.css";
import { Form, Input, Label } from "reactstrap";
import MoreRoles from "./MoreRoles";

const RolesTable = () => {
  const [rolesdata, setRolesData] = useState([
    { name: "Clients", isMore: false },
    { name: "Employees", isMore: false },
    { name: "Projects", isMore: false },
    { name: "Attendance", isMore: false },
    { name: "Tasks", isMore: false },
    { name: "Estimate", isMore: false },
    { name: "Invoices", isMore: false },
  ]);

  const SelectRoles = () => {
    return (
      <Input type="select" className="w-auto form-control form-select-sm">
        <option>All</option>
        <option>Add</option>
        <option>None</option>
      </Input>
    );
  };
  return (
    <>
      <div className="border">
        <div className="table-columns-strip py-1">
          <div className="columns-flexbox columns-container">
            <div className="columns-size-context">
              <span>Module</span>
            </div>
            <div className="columns-size-context">
              <span>Add</span>
            </div>
            <div className="columns-size-context">
              <span>View</span>
            </div>
            <div className="columns-size-context">
              <span>Update</span>
            </div>
            <div className="columns-size-context">
              <span>Delete</span>
            </div>
          </div>
        </div>
        <div>
          {rolesdata.map((val, rIndex) => (
            <>
              <div className="column-data" key={rIndex}>
                <div className="columns-container border">
                  <Form className="columns-flexbox">
                    <div className="columns-size-context py-3">
                      <Label>{val.name}</Label>
                    </div>
                    <div className="columns-size-context py-3">
                      <SelectRoles />
                    </div>
                    <div className="columns-size-context py-3">
                      <SelectRoles />
                    </div>
                    <div className="columns-size-context py-3">
                      <SelectRoles />
                    </div>
                    <div className="columns-size-context py-3">
                      <SelectRoles />
                    </div>
                  </Form>
                </div>
                <div
                  className="column-data"
                  style={{ width: "15%", justifyContent: "center" }}
                >
                  <div
                    className="d-flex align-items-center gap-1"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        let temp = [...rolesdata];
                        const newTemp = temp.map((item, i) => {
                            if (rIndex === i) {
                                if(item.isMore === true) {
                                    return {
                                        name: item.name,
                                        isMore: false
                                    }
                                } else {
                                    return {
                                        name: item.name,
                                        isMore: true
                                    }
                                }
                            } else {
                                return {
                                    name: item.name,
                                    isMore: false
                                }
                            }
                        });
                        setRolesData(newTemp);
                    }}
                  >
                    <span>More</span>
                    {val.isMore === true ? <i className="fa fa-chevron-up" style={{fontSize: '0.9rem'}}></i> : <i className="fa fa-chevron-down" style={{fontSize: '0.9rem'}}></i>}
                  </div>
                </div>
              </div>
              {val.isMore === true ? <MoreRoles /> : null}
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default RolesTable;
