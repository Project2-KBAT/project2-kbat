import { React, useState } from 'react';
import MediaEntry from './components/MediaEntry';
import './App.css';

function App() {
  const [query, setQuery] = useState('');
  const [mediaEntries, setMediaEntries] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search..."
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
      <body>
        {mediaEntries.map((e) => <MediaEntry title={e.title} name={e.name} pp={e.poster_path} />)}
      </body>
    </>
  );
}

export default App;
