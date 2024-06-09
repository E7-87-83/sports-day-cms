import React from 'react';
import { Card, Table } from 'antd';

const IndividualList = () => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      number: "P32",
    },
    {
      key: '2',
      name: 'John',
      number: "T42",
    },
  ];
  
  const columns = [
    {
      title: 'Number',
      dataIndex: 'number',
      key: 'number',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
  ];

  return (
    <Table dataSource={dataSource} columns={columns} />
  );
}

export default IndividualList;
