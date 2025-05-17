import { useState, useEffect } from 'react';
import './App.css';
import { getPosts } from './api';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPosts().then((users) => setData(users));
  }, []);

  return (
    <div className="container">
      <h1>User List</h1>
      {
        data ? (
          <ul className="user-list">
            {data.map((user) => (
              <li key={user.id} className="user-item">
                {user.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>No Data</p>
        )
      }
    </div>
  );
}

export default App;
