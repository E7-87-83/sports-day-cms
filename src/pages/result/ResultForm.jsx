import React from 'react';
import { Card, Form, Input, Button, Row, Col, Radio, Select } from 'antd';
import {grouping} from '../data';

const ResultForm = () => {
  const trackEvents = ["100m", "200m", "400m", "800m", "1500m", "5000m", "110m Hurdles", "100m Hurdles", "400m Hurdles"];
  const fieldEvents = ["Shot Put", "Discus", "Javelin", "Long Jump", "High Jump", "Triple Jump"];
  const athleticsEvents = [...trackEvents, ...fieldEvents];

  const [form] = Form.useForm();
  const [numOfAthletes, setNumOfAthletes] = React.useState(8);

  const onFinish = (values) => {
    const errors = {};
    for (let i = 1; i <= numOfAthletes; i++) {
      const name = values[`name${addPaddingZero(i)}`];
      const score = values[`score${addPaddingZero(i)}`];
      if ((name && !score) || (!name && score)) {
        errors[`name${addPaddingZero(i)}`] = 'Name and score must be presented together';
        errors[`score${addPaddingZero(i)}`] = 'Name and score must be presented together';
        return;
      }
    }
    console.log('Received values of form:', values);
  };

  const addPaddingZero = (values) => {
    return values >= 10 ? values : `0${values}`
  }

  return (<Card title="Result Form">
    <Form
      form={form}
      name="name_and_score"
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
    >
      <div align="right">
      
        <Select name="event" placeholder="Athletics Event Title">
          {athleticsEvents.map((event) => (
            <Select.Option value={event}>{event}</Select.Option>
          ))}
        </Select>
        <Radio.Group name="gender">
          <Radio value="M">Male</Radio>
          <Radio value="F">Female</Radio>
        </Radio.Group>
        <Select name="group" placeholder="GROUP">
          {grouping.map((g) => (
            <Select.Option value={g.key}>{g.label}</Select.Option>
          ))}
        </Select>
        <Radio.Group onChange={(e) => setNumOfAthletes(e.target.value)}>
            <Radio value="8">8</Radio>
            <Radio value="16">16</Radio>
        </Radio.Group>
      </div>
      {[...Array(3)].map((_, index) => (
        <Row key={index} gutter={16}>
          <Col span={12}>
            <Form.Item
              label={`Name ${index + 1}`}
              name={`name${addPaddingZero(index + 1)}`}
              rules={[{ required: true, message: `Please input the name ${index + 1}!` }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={`Score ${index + 1}`}
              name={`score${addPaddingZero(index + 1)}`}
              rules={[{ required: true, message: `Please input the score ${index + 1}!` }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      ))}

      {[...Array(numOfAthletes-3)].map((_, index) => (
        <Row key={index + 3} gutter={16}>
          <Col span={12}>
            <Form.Item
              label={`Name ${index + 4}`}
              name={`name${addPaddingZero(index + 4)}`}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              label={`Score ${index + 4}`}
              name={`score${addPaddingZero(index + 4)}`}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
      ))}

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </Card>);
};

export default ResultForm;