import React, { useState } from "react";

function WithoutTrans() {
  const [name, setName] = useState("");
  const [lists, setLists] = useState([]);

  const LIST_SIZE = 9000;

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
    const dataList = [];

    for (let i = 0; i < LIST_SIZE; i++) {
      dataList.push(value);
    }
    setLists(dataList);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      {lists.map((list) => {
        return <div key={list}>{list}</div>;
      })}
    </div>
  );
}

export default WithoutTrans;
