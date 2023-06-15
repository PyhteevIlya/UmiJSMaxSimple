//import { request } from '@umijs/max'

import FormElectronicsEdit from "@/components/FormElectronicsEdit";
import request from "@/utils/request";
import { Link } from "@umijs/max";
import { Button, Form, Input, Select, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";

const DocsPage = () => {

  const [dataSource, setDataSource] = React.useState([]);

  // const loginHandler = (data: any) => {
  //   request('https://localhost:7051/auth/login', { method: 'POST', data}).then((result: any) => {
  //     localStorage.setItem('token', result.token);
  //   })
  // };

  return (
    <div>

      {/* <Form layout="inline" onFinish={loginHandler} style={{ marginBottom: '20px' }}>
      <Form.Item name="login">
      <Input placeholder="Логин"/>
      </Form.Item>

      <Form.Item name="password">
      <Input.Password placeholder="Пароль"/>
      </Form.Item>

      <Button type = "primary" htmlType="submit">Войти</Button>
    </Form> */}
    </div>
  );
};

export default DocsPage;
