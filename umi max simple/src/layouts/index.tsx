import { Link, Outlet} from "@umijs/max";
import './index.less';
import React from 'react';
// import { Content, Footer, Header } from "antd/es/layout/layout";
// import { Menu, Breadcrumb } from "antd";
import { Breadcrumb, Button, Form, Input, Layout, Menu, theme } from 'antd';
import request from "@/utils/request";
import { Access } from "@umijs/max";
import { useAccess } from "@umijs/max";

const { Header, Content, Footer } = Layout;

export default () => {
  const access = useAccess();

  const loginHandler = (data: any) => {
    request('https://localhost:7051/auth/login', { method: 'POST', data }).then((result: any) => {
      localStorage.setItem('token', result.token);
    })
  };

  return (
    <>
      <Access accessible={access.isUser}
      >
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              items={[
                {
                  label: <Link to="/">Home</Link>,
                  key: 'home'
                },
                {
                  label: <Link to="/docs">Electronics</Link>,
                  key: 'electronics'
                },
                {
                  label: <Link to="/auth">Auth</Link>,
                  key: 'auth'
                }
              ]}
            />
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div className="site-layout-content" style={{ background: '#f5f5f5', paddingTop: '20px' }}>
              <Outlet />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>©2023 кафедра ТИМ</Footer>
        </Layout>

      </Access>
      <Access accessible={!access.isUser}>
        <Form layout="inline" onFinish={loginHandler} style={{ marginBottom: '20px' }}>
          <Form.Item name="login">
            <Input placeholder="Логин" />
          </Form.Item>
          <Form.Item name="password">
            <Input.Password placeholder="Пароль" />
          </Form.Item>
          <Button type="primary" htmlType="submit">Войти</Button>
        </Form>
      </Access>
    </>

  );

}
