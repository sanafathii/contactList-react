//

import { useState } from "react";

function ConcatForm({ onAddItem, onSearch, onSortList }) {
  const [item, setItem] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  const handelumit = (e) => {
    e.preventDefault();
    if (item.name.trim() && item.email.trim() && item.phoneNumber.trim()) {
      onAddItem(item);
      setItem({
        name: "",
        email: "",
        phoneNumber: "",
      });
    } else {
      alert("please fill all inputs");
    }
  };

  const HandelSearch = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mt-12">
      <div className="">
        <label htmlFor="search">Search: </label>
        <input
          type="text"
          id="search"
          placeholder="Searching..."
          value={searchTerm}
          onChange={HandelSearch}
          className="border-gray-300 border rounded-md py-1 px-2 w-80"
        />
        <button
          onClick={onSortList}
          className="ml-8 bg-pink-500 rounded-md px-3 py-1 text-white"
        >
          sort
        </button>
      </div>
      <form className="rounded-md py-6" onSubmit={handelumit}>
        <div className="flex">
          <div className="mr-3 flex">
            <label htmlFor="name" className="mr-2">
              Name:{" "}
            </label>
            <input
              type="text"
              id="name"
              className="border-gray-300 border rounded-md py-1 px-2"
              value={item.name}
              onChange={(e) => setItem({ ...item, name: e.target.value })}
            />
          </div>
          <div className="mr-3 flex">
            <label htmlFor="email" className="mr-2">
              Email:{" "}
            </label>
            <input
              type="email"
              id="email"
              className="border-gray-300 border rounded-md py-1 px-2"
              value={item.email}
              onChange={(e) => setItem({ ...item, email: e.target.value })}
            />
          </div>
          <div className="mr-3 flex">
            <label htmlFor="phoneNumber" className="mr-2">
              PhoneNumer:{" "}
            </label>
            <input
              type="text"
              className="border-gray-300 border rounded-md py-1 px-2"
              value={item.phoneNumber}
              onChange={(e) =>
                setItem({ ...item, phoneNumber: e.target.value })
              }
            />
          </div>

          <button
            className="bg-pink-600 text-white px-4 py-1 rounded-md"
            type="submit"
          >
            add
          </button>
        </div>
      </form>
    </div>
  );
}

export default ConcatForm;
