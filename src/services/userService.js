import { httpService } from "./configURL";

export const userService = {
  // https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap
  postLogin: (dataLogin) => {
    // return axios({
    //   method: "POST",
    //   url: `${BASE_URL}/api/QuanLyNguoiDung/DangNhap`,
    //   data: dataLogin,
    //   headers: {
    //     TokenCybersoft: TOKEN_CYBERSOFT,
    //   },
    // });
    return httpService.post("/api/QuanLyNguoiDung/DangNhap", dataLogin);
  },

  getUserList: () => {
    return httpService.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung");
  },
  deleteUser: (taiKhoan) => {
    console.log("deleteUser", taiKhoan);
    return httpService.delete(
      `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`
    );
  },
};
