import React from "react";
import { useState } from "react";
import { Space, Button, Typography } from "antd";
import UserService from "../../api/user-service";

const { Text, Link } = Typography;

const Users = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const response = await UserService.fetchUsers();
      if (response.status === 200) {
        let users = [...response.data];
        setUsers(users);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const clearUsers = () => {
    setUsers([]);
  }

  return (
    <Space direction="vertical">
      <Space direction="vertical">
        {users.map(user => {
          return <Text code copyable key={user.email}>{user.email}</Text>
        })}
      </Space>

      <Space direction="horizontal">
        <Button type="primary" onClick={getUsers}>
          Get users
        </Button>
        <Button onClick={clearUsers}>Clear users</Button>
      </Space>
    </Space>
  )
};


export default Users;
