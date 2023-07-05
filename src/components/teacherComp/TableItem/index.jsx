import { Table } from "antd";
import { useState } from "react";

function TableComponent(props) {
  const { data = [], columns = [] } = props;
  return (
    <div className="w-[780px]">
      <Table columns={columns} dataSource={data} />
    </div>
  );
}

export default TableComponent;