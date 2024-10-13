import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BooksSection from '../component/BooksSection';

const Books = () => {
  const [Data, setData] = useState(null); // Use camelCase for variable names

  useEffect(() => {
    
    const fetch = async () => {
     
        await axios.get("http://localhost:1000/api/getbook")
        .then((res)=>setData(res.data.books));
      
    };

    fetch();
  }); 

  return (
    <div className="bg-dark" style={{ minHeight: "91.5vh" }}>
      <div className="d-flex justify-content-center align-items-center py-3">
    
      </div>
      <h4 className="text-white d-flex justify-content-around">Books Section</h4>
      {Data ? (
        <div className="text-white">

          <BooksSection data={Data} /> {/* Pass Data to BooksSection */}
          .
          +
          
        </div>
      ) : (
        <div className="text-white">Loading...</div>
      )}
    </div>
  );
};

export default Books;
