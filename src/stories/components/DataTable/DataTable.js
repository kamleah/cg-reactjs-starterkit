import React from "react";
import PropTypes from "prop-types";
import "./datatable.css";
import "../../../../node_modules/bootstrap/scss/bootstrap.scss";

const DataTable = ({ headingFields, dataFieldsKeys, dataFields }) => {
  return (
    <table className="table">
      <thead className="text-center">
        <tr>
          {headingFields.map((ele) => (
            <th>{ele}</th>
          ))}
        </tr>
      </thead>
      <tbody className="text-center">
        {dataFields.map((element) => (
          <tr>
            {dataFieldsKeys.map((key) => (
              <td>{element[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

DataTable.propTypes = {
  headingFields: PropTypes.array,
  dataFieldsKeys: PropTypes.array,
  dataFields: PropTypes.array,
};

DataTable.defaultProps = {
  headingFields: ["Category", "SAP Material Code"],
  dataFieldsKeys: ["Category", "SAPMaterialCode"],
  dataFields: [
    { Category: "Category1", SAPMaterialCode: "SAP Material Code1" },
    { Category: "Category2", SAPMaterialCode: "SAP Material Code2" },
  ],
};

export default DataTable;
