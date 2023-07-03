import { Table , Button } from "antd";
import { Link } from "react-router-dom";
import { Component } from "react";
import axios from "axios";
import {EyeOutlined} from '@ant-design/icons';

// const {Column} = Table
const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "siso",
    dataIndex: "classEnrollment",
    key: "classEnrollment",
  },
  {
    title: "action",
    key: "action",
    render: (_, record) => (
      <div size="middle">
        <Button><Link to="/"> <EyeOutlined /> </Link></Button>
      </div>
    ),
  },
];
class index extends Component {
  state = {
    classList: [],
  };

  componentDidMount() {
    axios
      .get(`http://127.0.0.1:3002/api/v1/class/class-list/`)
      .then((res) => {
        const classList = res.data.classes;
        this.setState({ classList });
        console.log(classList);
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="w-full">
        <h2 className="my-3 text-center font-bold font-sm text-[#515ddd]">
          Danh sách các lớp
        </h2>
        <Table
          dataSource={this.state.classList}
          columns={columns}
          pagnination={false}
          bordered
          className="border-1 mt-6 rounded-lg border-[#515ddd] "
        />
      </div>
    );
  }
}

// const dataSource = [
//   {
//     key: '1',
//     stt: '1',
//     name: <Link to="/teacher/managerClass">6A</Link>,
//     score: <Link to="/teacher/inputScore"><i className="fa-solid fa-pencil"></i></Link>,
//     sl: '24',
//     GVCN: 'Ngô Minh Tuấn'
//   },
//   {
//     key: '2',
//     stt: '2',
//     name:  <Link to="/quanlylop">6B</Link>,
//     score:  <Link to="/teacher/inputScore"><i className="fa-solid fa-pencil"></i></Link>,
//     sl: '40',
//     GVCN: 'Hà Thị Minh Tuyết',
//   },
//   {
//     key: '3',
//     stt: '3',
//     name:  <Link to="/quanlylop">6C</Link>,
//     score: <i className="fa-solid fa-pencil"></i>,
//     sl: '40',
//     GVCN: 'Dương Văn Nam',
//   },

// ];

export default index;
