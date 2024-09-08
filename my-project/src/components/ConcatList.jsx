//

import ConcatItem from "./ConcatItem";

function ConcatList({ list, handleDeleteItem, searchTerm }) {
  return (
    <div className="border border-gray-300 rounded-md px-8 py-6">
      <div className="flex justify-between items-center border-b pb-2 m-2 border-gray-200">
        <span>Name</span>
        <span>Email</span>
        <span>PhoneNumber</span>
        <span>Delete</span>
      </div>
      {list
        .filter(
          ({ name, email, phoneNumber }) =>
            name.includes(searchTerm) ||
            email.includes(searchTerm) ||
            phoneNumber.includes(searchTerm)
        )
        .map(({ id, name, email, phoneNumber }) => (
          <ConcatItem
            key={id}
            id={id}
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            onDeleteHandler={() => handleDeleteItem(id)}
          />
        ))}
    </div>
  );
}

export default ConcatList;
