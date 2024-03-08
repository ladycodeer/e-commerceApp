import React, { useState } from 'react'
import { Menu } from 'antd'
import { AppstoreOutlined, SettingOutlined, UserOutlined, UserAddOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { getStatusClassNames } from 'antd/es/_util/statusUtils';


const items = [
  {
    label: 'Home',
    key: 'Home',
    icon: <AppstoreOutlined />,
  },

  {
    label: 'Login',
    key: 'setting:1',
    icon: <UserOutlined />,
    to: '/login',
  },
  {
    label: 'Register',
    key: 'setting:2',
    icon: <UserAddOutlined />,
    to: '/register',
  },
  {
    label: 'UserName',
    key: 'SubMenu',
    icon: <SettingOutlined />,
    items: [
      {
        label: 'Option 1',
        key: 'setting:3',
      },
      {
        label: 'Option 2',
        key: 'setting:4',
      },
    ],


    }



];


const Header = () => {
  const [current, setCurrent] = useState('home');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default Header