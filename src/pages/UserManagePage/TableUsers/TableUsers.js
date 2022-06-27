import { Table } from "antd";
import { headerTableUser } from "../../../utils/userManagerment.utils";

const TableUser = ({ UserList }) => (
  <div>
    <Table columns={headerTableUser} dataSource={UserList} />
  </div>
);

export default TableUser;
