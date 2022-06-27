import { Button, Checkbox, Form, Input } from "antd";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserLoginActionService } from "../../redux/slices/userSlice";
import { localStorageService } from "../../services/localStorageService";

const LoginPage = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    // userService
    //   .postLogin(values)
    //   .then((res) => {
    //     console.log(res);
    //     history("/");
    //     dispatch(setUserLogin(res.data.content));
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    dispatch(setUserLoginActionService(values))
      .unwrap()
      .then((resDispatch) => {
        console.log("resDispatch: ", resDispatch);
        localStorageService.setUserInfo(resDispatch);
        navigate("/");
      });
    // console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{
        span: 24,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginPage;
