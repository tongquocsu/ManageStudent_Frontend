import Sidebar from "../../../components/Sidebar";

const CreateTeacher = () => {
  return (
    <div>
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4">
          <h1 className="text-center">CreateTeacher</h1>
        </div>
      </div>
    </div>
  );
};

export default CreateTeacher;
