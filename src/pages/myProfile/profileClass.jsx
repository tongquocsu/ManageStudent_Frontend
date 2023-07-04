//class index extends Component {
  //   state = {
  //     teacher: [],
  //   };
  
  //   componentDidMount() {
  //     const id = "64a19ce7ec25f6da85b25979";
  //     console.log(id);
  //     axios
  //       .get(`http://127.0.0.1:3002/api/v1/teacher/detail/${id}`)
  //       .then((res) => {
  //         const teacher = res.data.teacher.person;
  //         this.setState({ teacher });
  //       })
  //       .catch((error) => console.log(error));
  //   }
  //   handleChangeName = (event) => {
  //     this.setState({ name: event.target.value });
  //   };
  //   handleChangeDate = (e) => {
  //     this.setState({ dateOfBirth: event.target.value });
  //   };
  
  //   handleSubmit = (event) => {
  //     event.preventDefault();
  //   };
  
  //   render() {
  //     return (
  //       <div>
  //         <h2 className="my-3 text-center font-bold font-sm text-[#515ddd]">
  //           Thông tin cá nhân
  //         </h2>
  //         <div className="grid justify-items-center">
  //           <div className="mt-1 border rounded-[20px] p-[20px] w-[750px]">
  //             <div className="flex">
  //               <div className="border-r border-[#f0c0e0] w-48 h-52">
  //                 <img
  //                   className="w-[100px] h-[100px] rounded-[100%] ml-[50px] mt-[50px]"
  //                   src="https://cdn.pixabay.com/photo/2023/06/03/17/11/giraffe-8038107_640.jpg"
  //                 />
  //               </div>
  //               <div>
  //                 <form onSubmit={this.handleSubmit} className="ml-3">
  //                   <label className="ml-[50px] text-[#000] font-sans">
  //                     ID:
  //                     <input
  //                       className="ml-[35px] my-1 pl-2"
  //                       type="text"
  //                       name="name"
  //                       value={this.state.teacher._id}
  //                     />
  //                   </label>
  //                   <br />
  //                   <label className="ml-[50px]">
  //                     Họ và tên:
  //                     <input
  //                       className="ml-[35px] my-1 pl-2"
  //                       type="text"
  //                       name="name"
  //                       value={this.state.teacher.name}
  //                       onChange={this.handleChangeName}
  //                     />
  //                   </label>
  //                   <br />
  //                   <label className="ml-[50px]">
  //                     Năm sinh:
  //                     <input
  //                       className="ml-[35px] my-1 pl-2"
  //                       type="text"
  //                       name="name"
  //                       value={this.state.teacher.dateOfBirth}
  //                       onChange={this.handleChangeDate}
  //                     />
  //                   </label>
  //                   <br />
  //                   <label className="ml-[50px]">
  //                     Giới tính:
  //                     <input
  //                       className="ml-[35px] my-1 pl-2"
  //                       type="text"
  //                       name="name"
  //                       value={this.state.teacher.gender}
  //                     />
  //                   </label>
  //                   <br />
  //                   <label className="ml-[50px]">
  //                     SĐT:
  //                     <input
  //                       className="ml-[35px] my-1 pl-2"
  //                       type="text"
  //                       name="name"
  //                       value={this.state.teacher.mobileNumber}
  //                     />
  //                   </label>
  //                   <br />
  //                   <label className="ml-[50px]">
  //                     Địa chỉ:
  //                     <input
  //                       className="ml-[35px] my-1 pl-2"
  //                       type="text"
  //                       name="name"
  //                       value={this.state.teacher.address}
  //                     />
  //                   </label>
  //                   <br />
  //                   <label className="ml-[50px]">
  //                     Truờng:
  //                     <input
  //                       className="ml-[35px] my-1 pl-2 mb-3"
  //                       type="text"
  //                       name="name"
  //                       value={this.state.teacher.school}
  //                     />
  //                   </label>
  //                   <br />
  //                   <div className="grid justify-items-end">
  //                     <Button onClick={toggle}className="bg-[#515ddd] text-[#fff] " type="submit">
  //                       Chỉnh sửa
  //                     </Button>
  //                   </div>
  //                 </form>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     );
  //   }
  // }