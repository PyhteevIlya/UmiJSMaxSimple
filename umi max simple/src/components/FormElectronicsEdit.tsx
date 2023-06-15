import React from "react";
import { Button, Form, Input, Modal, Select } from "antd";




export default (props: any) =>{

  // Notebook = 1,
  // PersonalComputer = 2,
  // Monoblock = 3,
  // Camera = 4,
  // TV = 5,
  // Monitor = 6


  return (
    <>
      <Form.Item name="name" label="Название эл.оборудования">
        <Input/>

      </Form.Item>
      <Form.Item name="type" label="Тип">
          <Select options={[
            { value: 1, lebel: 'Notebook' },
            { value: 2, lebel: 'PersonalComputer' },
            { value: 3, lebel: 'Monoblock' },
            { value: 4, lebel: 'Camera' },
            { value: 5, lebel: 'TV' },
            { value: 6, lebel: 'Monitor' }
          ]} />
      </Form.Item>
    </>
  );
}
