//

function ConcatItem({ id, name, email, phoneNumber, onDeleteHandler }) {
  return (
    <div className="flex justify-between items-center px-2 py-4">
      <span> {name}</span>
      <span> {email}</span>
      <span>{phoneNumber}</span>
      <span onClick={onDeleteHandler}>❌</span>
    </div>
  );
}

export default ConcatItem;
