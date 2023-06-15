
import FormElectronicsEdit from "@/components/FormElectronicsEdit";
import { Link, useParams, history } from "@umijs/max";
// import { Link,  request } from "@umijs/max";
import { Button, Form, Input, Spin, Table, message } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";
import request from '@/utils/request';

const DocsPage = () => {
  const [messageApi, contextHolder] = message.useMessage();

const createHandler = (data: any) => {
  console.log(data);

  request(`https://localhost:7051/Electronics/`, { method: 'PUT', data }).then(result=>{
  history.push('/docs');
  // messageApi.success("Данные сохранены")
});
}

  return (
    <>
    <Form onFinish={createHandler}>
      {/* <Form.Item name="id" hidden></Form.Item> */}

        <FormElectronicsEdit/>

      
      <Button type = "primary" htmlType="submit">Создать</Button>
    </Form>
      
    </>
  );
};

export default DocsPage;
