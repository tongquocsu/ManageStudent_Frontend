
import { Link } from "react-router-dom";

function editMyProdile() {
    const [title, setNewTitle] = useState([
        "Id",
        "Name",
        "Email",
        "Phone",
        "Address",
      ]);
      const [info, setNewInfo] = useState([
          "1",
          "Nguyễn Văn Tuấn",
          "tuan@gmail.com",
          "09235134365",
          "CT",
      ]);
  return (
    <div className="grid justify-items-center">
      <div className="mt-4 border rounded-[20px] p-[20px] w-9/12" >
        <div className="flex">
          <div className=" border-r border-[#f0c0e0] w-48 h-52">
            <img
              className="w-[100px] h-[100px] rounded-[100%] ml-[50px] mt-[50px]"
              src="https://cdn.pixabay.com/photo/2023/06/03/17/11/giraffe-8038107_640.jpg"
            />
          </div>
          <div className="pl-[50px] py-[20px] flex">
            <thead className="text-black text-left">
                {title.map((t) => {
                  return <tr><th className="pl-3 font-mono w-[120px]">{t}:</th></tr> ;
                })}
            </thead>

            <tbody className="pl-3 font-mono">
              {info.map((s) => {
                return (
                    <tr><td>{s}</td></tr>
                );
              })}
            </tbody>
              
          </div>
        </div>
        <div className="grid justify-items-end">
          <Link to="">Lưu</Link>
        </div>
      </div>
    </div>
  );
}

export default editMyProdile
