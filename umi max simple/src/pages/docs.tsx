//import { request } from '@umijs/max'

import FormElectronicsEdit from "@/components/FormElectronicsEdit";
import request from "@/utils/request";
import { Link } from "@umijs/max";
import {  } from "@umijs/max";
import { Button, Form, Input, Select, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";

const DocsPage = () => {

  const [dataSource, setDataSource] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getElectronics = (data: any) => {
    setLoading(true);
    request('https://localhost:7051/Electronics/Index', { method: 'POST', data }).then(result => {
      console.log(result);
      setDataSource(result);
      setLoading(false);
    });
  }


  React.useEffect(() => getElectronics({}), []);

  const searchElectronicHandler = (data: any) => {
    console.log(data);
    getElectronics(data);
  };

  const removeHandler = (id: number) => {
    request(`https://localhost:7051/Electronics/${id}`, { method: 'DELETE' }).then(result => {
      const newDataSource = dataSource.filter((value, index) => value.id != id);

      console.log(newDataSource);
      setDataSource(newDataSource);
    });
  }

  const columns: ColumnsType<never> = [
    {
      title: 'id',
      dataIndex: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
    },
    {
      title: 'type',
      dataIndex: 'type',
    },
    // {
    //   title: 'price',
    //   dataIndex: 'price',
    // },
    {
      title: 'Действия',
      key: 'action',
      render: (_, record, index) => (
        <>
          <Link to={`/edit/${record.id}`}>Редактировать</Link>{' '}
          <a onClick={() => removeHandler(record.id)}>Удалить</a>
        </>
      )
    },

  ];


  return (
    <div>
      <Space direction="vertical" style={{ marginBottom: '20px' }}>
        <Link to="/create">
          <Button type="primary">Создать эл.оборудование</Button>
        </Link>
      </Space>

      <Form layout="inline" onFinish={searchElectronicHandler} style={{ marginBottom: '20px' }}>
      <Form.Item name="name">
      <Input placeholder="Название эл.оборудования"/>
      </Form.Item>

      <Form.Item name="type">
      <Select allowClear style={{ width:'120px'}} options={[
            { value: 1, lebel: 'Notebook' },
            { value: 2, lebel: 'PersonalComputer' },
            { value: 3, lebel: 'Monoblock' },
            { value: 4, lebel: 'Camera' },
            { value: 5, lebel: 'TV' },
            { value: 6, lebel: 'Monitor' }
          ]} />
      </Form.Item>

      <Button type = "primary" htmlType="submit">Искать</Button>
    </Form>

      <Table dataSource={dataSource} columns={columns} loading={loading} />
    </div>
  );
};

export default DocsPage;
