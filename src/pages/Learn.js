import React from "react";

export default function Learn() {
  function Counter() {
    const [count, setCount] = React.useState(0);
    return (
      <React.Fragment>
        <div>{count}</div>
        <button onClick={() => setCount(count + 1)}>increment</button>
      </React.Fragment>
    );
  }

  //   function Search() {
  //       const [searchText, setSearchText] = React.useState("");
  //       return(
  //           <div>
  //               <div>
  //                   <input placeholder="กรุณาพิมพ์เพื่อค้นหา..."></input>
  //               </div>
  //           </div>
  //       )
  //   }

  return (
    <div style={{ padding: "1rem" }}>
      <h4>Counter</h4>
      {Counter()}

      <h4 style={{ paddingTop: "1rem" }}>Search</h4>
    </div>
  );
}
