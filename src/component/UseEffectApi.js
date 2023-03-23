import { React, useEffect, useState } from "react";

let obj = {
  backgroundColor: "",
};



const UseEffectApi = () => {
  const [userdata, jsonList] = useState([]);

  // Storing the marked cards in dict
  const [visited, vupdt] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    jsonList(await response.json());
    console.log(userdata);
  };

  useEffect(() => {
    getUsers();
    //eslint-disable-next-line
  }, []);

  // Deleting elements
  const Delete = (e) => {
    let temp = [...userdata];
    temp.forEach(function (ele) {
      if (ele.id == e.target.value) {
        console.log("Deleted the element");
        //document.getElementById(ele.id + "rtx").style.backgroundColor = "#fff";
        temp.splice(temp.indexOf(ele), 1);
      }
    });
    jsonList(temp);
  };

  // Marking color
  const Mark = (e) => {
    let t2=[...visited]
    if(t2.includes(e.target.value)==false){
      t2.push(e.target.value)
      vupdt(t2);
    }

  
  };

  return (
    <>
    {console.log("Mark after render: ",visited)}
    

    {/* [2,4,5,7,8] */}
    
      <h1 style={{ textAlign: "center" }}>
        Posts Fetched from API (Assignment)
      </h1>
      <div className="container-fluid mt-5">
        <div className="row text-center">
          {/* This is cards */}

          {userdata.map((ele, idx) => {
       
            // console.log(visited.includes(toString(ele.id)),visited,ele.id)
            return (
              <div className="col-10  col-md-4 mt-5 " key={idx}>
                <div
                  id={ele.id + "rtx"}

                  style={{
                    padding: "10px 10px",
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                    backgroundColor: visited.includes(ele.id.toString())?"#71e771":"#fff"
                    }}    
                >
                  {/* {idx}  */}
                  <h5>
                    <span>{ele.id}</span> {ele.title}
                  </h5>
                  <p style={{ margin: "10px 10px" }}>{ele.body}</p>
                  <label>User id : {ele.userId}</label>
                  <div
                    className="d-flex mt-5"
                    style={{
                      justifyContent: "space-around",
                      padding: "10px 10px",
                    }}
                  >
                    <div>
                      <button
                        onClick={Mark}
                        type="button"
                        style={obj}
                        value={ele.id}
                        className="btn btn-outline-primary"
                      >
                        Mark
                      </button>
                    </div>

                    <div>
                      <button
                        onClick={Delete}
                        type="button"
                        value={ele.id}
                        className="btn btn-outline-danger"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
