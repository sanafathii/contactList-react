import ConcatList from "./ConcatList";
import ConcatForm from "./ConcatForm";
import { useConcatApp } from "../hooks/useConcatApp";
import { useState } from "react";
function ConcatApp() {
  const { list, handleDeleteItem, addconcatHandler, HandelSortList } =
    useConcatApp();
  const [searchString, setSearchString] = useState("");
  return (
    <div className="concatApp">
      <ConcatForm
        onAddItem={addconcatHandler}
        onSearch={(term) => setSearchString(term)}
        onSortList={HandelSortList}
      />
      <ConcatList
        list={list}
        handleDeleteItem={handleDeleteItem}
        searchTerm={searchString}
      />
    </div>
  );
}

export default ConcatApp;
