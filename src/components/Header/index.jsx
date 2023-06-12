import { NotificationOutlined, DownOutlined } from "@ant-design/icons";
import { Avatar, Badge, Dropdown, Space } from "antd";
import { Button, NavDropdown, Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

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
      <Container fluid>
        <Navbar.Brand href="/" className="ml-[18px] mr-[180px]">
          Logo
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 flex gap-4 items-center"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink to="/">Trang chủ</NavLink>
            <NavDropdown title="Khóa học" id="navbarScrollingDropdown">
              <NavDropdown.Item>
                {" "}
                <NavLink to="/12">Khóa học 1</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <NavLink to="/13">Khóa học 2</NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                {" "}
                <NavLink to="/14">Khóa học 3</NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink to="/news">Tin tức</NavLink>
            <NavLink to="/contact">Liên hệ</NavLink>
          </Nav>
          <Form className="d-flex mr-[8px]">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
        <Space size={24}>
          <Badge count={100} className="flex items-center justify-center">
            <Avatar shape="circle" icon={<NotificationOutlined />} />
          </Badge>
          <Badge>
            <Avatar
              shape="circle"
              className="mr-1"
              src="https://yt3.googleusercontent.com/mm2-5anuZ6ghmK2zL6QM7wciD6kuupOfOagiAh5vZE1hx9tRhKEXTAExZUUY4PVq2RSw9jBpBQ=s900-c-k-c0x00ffffff-no-rj"
            />
          </Badge>
        </Space>
        <Dropdown
          menu={{
            items,
          }}
          trigger={["click"]}
        >
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