import { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

export const useConcatApp = () => {
  const [defaultConcatList, { get, set, remove }] = useLocalStorage("concats");
  const [list, setList] = useState(defaultConcatList || []);

  const handleDeleteItem = (concatId) => {
    const newList = list.filter((item) => item.id != concatId);
    setList(newList);
    set("concats", newList);
  };

  const addconcatHandler = ({ name, email, phoneNumber }) => {
    const isDuplicate = list.some((concat) => {
      if (
        concat.name == name &&
        concat.email == email &&
        concat.phoneNumber == phoneNumber
      ) {
        return true;
      }
    });
    if (!isDuplicate) {
      const newConcat = {
        id: list.length + 1,
        name,
        email,
        phoneNumber,
      };
      const newList = [...list, newConcat];
      setList(newList);
      set("concats", newList);
    } else {
      alert("you alread have this concat!");
    }
  };

  const HandelSortList = () => {
    const sortedList = [...list].sort((a, b) => a.name.localeCompare(b.name));
    setList(sortedList);
  };

  return { list, handleDeleteItem, addconcatHandler, HandelSortList };
};
