import { message } from "antd";
import React, { useEffect, useState } from "react";
import HeaderResponsive from "../../components/Header/HeaderResponsive";
import useWindowSize from "../../hook/useWindowSize";
import { userService } from "../../services/userService";
import TableUser from "./TableUsers/TableUsers";

export default function UserManagePage() {
  const [UserList, setUserList] = useState([]);
  let fetchUserList = () => {
    userService
      .getUserList()
      .then((res) => {
        let dataRaw = res.data.content.map((user) => {
          return {
            ...user,
            action: {
              onDelete: () => {
                console.log("yes");
                userService
                  .deleteUser(user.taiKhoan)
                  .then((res) => {
                    message.success("Đã xóa người dùng");
                    // window.location.href = "/";
                    fetchUserList();

                    console.log(res);
                  })
                  .catch((err) => {
                    message.error(
                      "co bien roi dai vuong oi:",
                      err.response.data.content
                    );
                    console.log("co bien roi dai vuong oi", err);
                  });
              },
              onEdit: () => {},
            },
          };
        });
        // console.log(dataRaw);
        setUserList(dataRaw);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    fetchUserList();
  }, []);
  return (
    <div>
      <div className="container mx-auto">
        <h2 className="font-bold text-3xl text-center my-5">
          <HeaderResponsive />
        </h2>
        <TableUser UserList={UserList} />
      </div>
    </div>
  );
}
