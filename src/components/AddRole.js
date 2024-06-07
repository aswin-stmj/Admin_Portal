import React, { useState, useEffect } from 'react';

const AddRole = () => {
  const [data, setData] = useState([]);
  const [permissions, setPermissions] = useState({});

  // Fetch data from backend API when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getUsers'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to fetch user data');
      }
    };

    fetchData();
  }, []);

  const handlePermissionChange = (id, type, action) => {
    setPermissions(prevPermissions => ({
      ...prevPermissions,
      [id]: {
        ...prevPermissions[id],
        [type]: {
          ...prevPermissions[id]?.[type],
          [action]: !prevPermissions[id]?.[type]?.[action] || false
        }
      }
    }));
  };

  const handleAdd = async (user) => {
    const userPermissions = permissions[user.id];
    const payload = {
      name: user.name,
      role: user.role,
      permissions: userPermissions
    };

    try {
      const response = await fetch('/api/addUser', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('User permissions successfully updated!');
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      alert('Failed to update user permissions');
    }
  };

  return (
    <div className="AddRolecontainer">
      <div className="AddRolebox">
        <h2>User Permissions</h2>
        <table>
          <thead>
            <tr>
              <th rowSpan="2">Name</th>
              <th rowSpan="2">Role</th>
              <th colSpan="4">User</th>
              <th colSpan="4">Role</th>
              <th rowSpan="2">Actions</th>
            </tr>
            <tr>
              <th>Add</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Add</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {data.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.role}</td>
                {['add', 'view', 'edit', 'delete'].map(action => (
                  <td key={`user-${action}`}>
                    <input
                      type="checkbox"
                      checked={permissions[user.id]?.user?.[action] || false}
                      onChange={() => handlePermissionChange(user.id, 'user', action)}
                    />
                  </td>
                ))}
                {['add', 'view', 'edit', 'delete'].map(action => (
                  <td key={`role-${action}`}>
                    <input
                      type="checkbox"
                      checked={permissions[user.id]?.role?.[action] || false}
                      onChange={() => handlePermissionChange(user.id, 'role', action)}
                    />
                  </td>
                ))}
                <td>
                  <button onClick={() => handleAdd(user)}>Submit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddRole;



