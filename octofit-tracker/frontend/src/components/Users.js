import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://refactored-space-broccoli-grxpg7v9j9rhwgrr-8000.app.github.dev/api/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Users</h1>
      <ul className="list-group">
        {users.map(user => (
          <li key={user.id} className="list-group-item">{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;