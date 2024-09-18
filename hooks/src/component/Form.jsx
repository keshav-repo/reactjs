import { useId, useDebugValue, useState } from "react";

function Form() {
  const id = useId();

  const [count, setCount] = useState(0);

  setInterval(() => {
    setCount(count + 1);
    console.log(count);
  }, 4000);

  // useDebugValue(count);

  useDebugValue("id " + id);

  return (
    <>
      <label htmlFor={`${id}--firstName`}>First Name</label>
      <input
        id={`${id}--firstName`}
        type="text"
        placeholder={`Generated id --> ${id}`}
      />

      <label htmlFor={`${id}--lastName`}>Last Name</label>
      <input
        id={`${id}--lastName`}
        type="text"
        placeholder={`Generated id --> ${id}`}
      />

      <label htmlFor={`${id}--email`}>Email</label>
      <input
        id={`${id}--email`}
        type="email"
        placeholder={`Generated id --> ${id}`}
      />
    </>
  );
}

export default Form;
