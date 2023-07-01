import Sidebar from "../../../components/Sidebar";

function Home() {
  return (
    <div className="flex">
      <div className="w-1/4">
        <Sidebar />
      </div>
      <div className="w-3/4">
        <h1>Home</h1>
      </div>
    </div>
  );
}

export default Home;
