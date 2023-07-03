
import {Component} from "react";
import axios from 'axios';
import { Button , Input} from "antd";
import { Link } from "react-router-dom";

class index extends Component {
  state = {
    teacher: []
  }

  componentDidMount() {
    const id = '64a19ce7ec25f6da85b25979';
    console.log(id)
    axios.get(`http://127.0.0.1:3002/api/v1/teacher/detail/${id}`)
    .then(res => {
      const teacher = res.data.teacher.person;
      this.setState({ teacher });
    })
    .catch(error => console.log(error));
  }
  handleChangeName = event => {
    this.setState({ name: event.target.value });
  }
  handleChangeDate =  e => {
    this.setState({ dateOfBirth: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h2 className="my-3 text-center font-bold font-sm text-[#515ddd]">Thông tin cá nhân</h2>
        <div className="grid justify-items-center">
          <div className="mt-1 border rounded-[20px] p-[20px] w-[750px]">
            <div className="flex">
              <div className="border-r border-[#f0c0e0] w-48 h-52">
                <img
                  className="w-[100px] h-[100px] rounded-[100%] ml-[50px] mt-[50px]"
                  src="https://cdn.pixabay.com/photo/2023/06/03/17/11/giraffe-8038107_640.jpg"
                />
              </div>
              <div>
              <form onSubmit={this.handleSubmit} className="ml-3">
                <label >ID:
                  <input type="text" name="name" value={this.state.teacher._id} />
                </label><br/>
                <label >Name:
                  <input type="text" name="name" value={this.state.teacher.name} onChange={this.handleChangeName} />
                </label><br/>
                <label >nam sinh:
                  <input type="text" name="name" value={this.state.teacher.dateOfBirth} onChange={this.handleChangeDate} />
                </label><br/>
                <label >gioi tinh:
                  <input type="text" name="name" value={this.state.teacher.gender}  />
                </label><br/>
                <label >sdt:
                  <input type="text" name="name" value={this.state.teacher.mobileNumber}  />
                </label><br/>
                <label >dia chi:
                  <input type="text" name="name" value={this.state.teacher.address}  />
                </label><br/>
                <label >truong:
                  <input type="text" name="name" value={this.state.teacher.school}  />
                </label><br/>
                <Button className="bg-[#515ddd] text-[#fff]" type="submit">
                   Chỉnh sữa
                </Button>
              </form>
              </div>
            </div>
            
          </div>
        </div>
    </div>
    )
  }
}
export default index;
