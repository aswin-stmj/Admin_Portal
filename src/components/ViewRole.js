import React, { useState, useEffect } from 'react';

const ViewRole = () => {
//   const [data, setData] = useState({
//   });
const [data, setData] = useState([
    { id: 1, name: 'John Doe', role: 'Admin' },
    { id: 2, name: 'Jane Smith', role: 'Editor' },
    { id: 3, name: 'Alice Johnson', role: 'Viewer' }
  ]);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch('/api/roles'); // Replace with your API endpoint
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`/api/roles/${id}`, { // Replace with your API endpoint
        method: 'DELETE'
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setData(data.filter(item => item.id !== id));
      alert('Role successfully deleted');
    } catch (error) {
      console.error('Error deleting role:', error);
      alert('Failed to delete role');
    }
  };

  const handleEdit = (id) => {
    // Implement your edit functionality here
    alert(`Edit functionality for role ID: ${id} to be implemented`);
  };

  return (
    <div className="ViewRoleContainer">
      <div className="ViewRoleBox">
        <h2>Role Permissions</h2>
        <table>
          <thead>
          <tr>
              <th rowSpan="2">Name</th>
              <th rowSpan="2">Role</th>
              <th colSpan="4">User</th>
              <th colSpan="4">Role</th>
              <th colSpan="2" rowSpan="2">Actions</th>
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
            {data.map(role => (
              <tr key={role.id}>
                <td>{role.name}</td>
                <td>{role.role}</td>
                <td>{role.permissions?.user.add ? 'Yes' : 'No'}</td>
                <td>{role.permissions?.user.view ? 'Yes' : 'No'}</td>
                <td>{role.permissions?.user.edit ? 'Yes' : 'No'}</td>
                <td>{role.permissions?.user.delete ? 'Yes' : 'No'}</td>
                <td>{role.permissions?.role.add ? 'Yes' : 'No'}</td>
                <td>{role.permissions?.role.view ? 'Yes' : 'No'}</td>
                <td>{role.permissions?.role.edit ? 'Yes' : 'No'}</td>
                <td>{role.permissions?.role.delete ? 'Yes' : 'No'}</td>
                <td>
                  <button onClick={() => handleEdit(role.id)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(role.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewRole;


