import React, {useState} from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  
  function handleChange(e) {
    let searchValueHolder = e.target.value;
    setSearchTerm(searchValueHolder);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const endpoint = 
    `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyC5UvLD7agMnKHaJiK-dqPRL9T9Ton9jXM`;

    fetch(endpoint)
    .then(blob => blob.json())
    .then(stuff => setData(stuff.items));

    console.log(endpoint);
  }

  let displayBooks = data.map(book => (
    <div>
        <div>{book.volumeInfo.title}</div>
        <div>{book.volumeInfo.authors}</div>
    </div>
  ));


  return (
  <div className="container">
    <div className="main title">Title</div>
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Search" 
        className="main input"
        onChange={handleChange}>
      </input>
      <input type="submit"></input>
    </form>
    <div>{displayBooks}</div>
  </div> 
  );
}

export default App;
