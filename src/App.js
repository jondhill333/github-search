import React, {useState} from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);
  console.log(data);

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
  }

  let displayBooks = data.map(book => (
    <div className="book">
      <a href={book.volumeInfo.previewLink}>
        <img src={book.volumeInfo.imageLinks.smallThumbnail} alt="book cover"/>
      </a>
      <div className="bookTitle">{book.volumeInfo.title}</div>
      <div className="bookAuthor">{book.volumeInfo.authors}</div>
    </div>
  ));
  
  return (
  <div className="container">
    <div className="main title">Find A Book</div>
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Search" 
          className="main input"
          onChange={handleChange}>
        </input>
        <input className="submit" type="submit" id="submit"></input>
        <label className="SubmitButtonLabel" htmlFor="submit"><span>Search</span></label>
      </form>
    </div>
    <div className="displayArea">
      {displayBooks}
    </div>
  </div> 
  );
}

export default App;
