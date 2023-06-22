import { NotificationOutlined, DownOutlined } from "@ant-design/icons";
import { Avatar, Badge, Dropdown, Space } from "antd";
import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
//-------------------------------------------------------------------------
function Header() {
  const items = [
    {
      label: <a href="https://www.antgroup.com">1st menu item</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div>
          <img src="" />
          <span>logo</span>
        </div>
        <div>
          <ul className="header-menu font-sans">
            <li className="mr-12">
              <Link to="#" className="">Khóa học</Link>
            </li>
            <li className="mr-12">
              <Link to="#" className="">Thông báo</Link>
            </li>
            <li className="mr-12">
              <Link to="#" className="">Liên hệ</Link>
            </li>
            <li className="mr-12">
              <Link to="#" className="">Tin tức</Link>
            </li>
          </ul>
        </div>
        <Space size={24} className="absolute right-8">
          <Badge count={100} className="flex items-center justify-center">
            <Avatar shape="circle" icon={<NotificationOutlined />} />
          </Badge>
          <Badge>
            <Avatar
              shape="circle"
              className="mr-3"
              src="https://yt3.googleusercontent.com/mm2-5anuZ6ghmK2zL6QM7wciD6kuupOfOagiAh5vZE1hx9tRhKEXTAExZUUY4PVq2RSw9jBpBQ=s900-c-k-c0x00ffffff-no-rj"
            />
          </Badge>
        </Space>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <DownOutlined className="cursor-pointer" />
            </Space>
          </a>
        </Dropdown>
      </Container>
    </Navbar>
  );
}

export default Header;
