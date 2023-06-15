// import { request } from '@umijs/max'

import FormElectronicsEdit from "@/components/FormElectronicsEdit";
import { request } from "@umijs/max";
import { Link, useParams, history } from "@umijs/max";
import { Button, Form, Input, Spin, Table, message } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";

const DocsPage = () => {
  const params = useParams()
  const [messageApi, contextHolder] = message.useMessage();

const [data, setData] = React.useState();

React.useEffect(() => {
  request(`https://localhost:7051/Electronics/${params.id}`).then(result => {
   console.log(result);
   setData(result);
   //form.setFieldsValue(result);
  });
},[]);

const editHandler = (data: any) => {
  console.log(data);

  request(`https://localhost:7051/Electronics/${params.id}`, { method: 'POST', data }).then(result=>{
  history.push('/docs');
  messageApi.success("Данные сохранены")
});
}

const [form] = Form.useForm(); 

  return (
    <>
    {data ? <Form onFinish={editHandler} form={form} initialValues={data}>
      <Form.Item name="id" hidden></Form.Item>
      <FormElectronicsEdit/>

      <Button type = "primary" htmlType="submit">Сохранить</Button>
    </Form> : <Spin />}
      
    </>
  );
};

export default DocsPage;
