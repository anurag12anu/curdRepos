import React, { useState } from "react";
import axios from "axios";

const AddBooks = () => {
  const[Data,setData]=useState({booksname:"",auther:"",description:"",prise:"",image:""});

  const change=(e)=>{
    const {name,value}=e.target;
    setData({...Data,[name]: value});
  };
  console.log(Data);

const submit =async()=>{
  
  await axios.post("http://localhost:1000/api/add",Data).then((res)=>alert(res.data.message));

  {/*setData({booksname:"",auther:"",description:"",prise:"",image:""});*/}

}

  return (
    <div
      className="bg-dark d-flex justify-content-center align-items-center"
      style={{ minHeight: "91.5vh" }}
    >
      <div className="container  p-3">
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Book Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Name"
            name="booksname"
            value={Data.booksname}
            onChange={change}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Auther Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Auther Name"
            name="auther"
            value={Data.auther}
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Prise
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Book Prise"
            name="prise"
            value={Data.prise}
            onChange={change}
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Image
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Image URL"
            name="image"
            value={Data.image}
            onChange={change}
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="exampleFormControlInput1"
            className="form-label text-white"
          >
            Description
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Enter Description"
            name="description"
            value={Data.description}
            onChange={change}
          />
        </div>
        <div>
          <button className="btn btn-success" onClick={submit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default AddBooks;
