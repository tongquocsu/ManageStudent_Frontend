import { SearchOutlined } from "@ant-design/icons";
// eslint-disable-next-line react/prop-types
function SearchInput({ onSearch, placeholder }) {
  const handleInputChange = (e) => {
    const searchValue = e.target.value;
    onSearch(searchValue);
  };

  return (
    <div className="flex items-center border-2 px-2 rounded py-1 border-black ">
    <SearchOutlined className="pr-1"/> 
      <input type="text" placeholder={placeholder} onChange={handleInputChange} className="focus:outline-none " />
    </div>
  );
}

export default SearchInput;