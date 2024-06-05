import React, { useState } from 'react';

const Dashboard = () => {
    const [activeComponent, setActiveComponent] = useState('');
  const [user,setUser] = useState ('')
  const [role,setRole] = useState ('')

  return (
    <div className="app">
    <div className="sidebar">
      <ul>
        <li onClick={() => setActiveComponent('userManagement')}>User Management</li>
        {activeComponent === 'userManagement' && (
          <div className="nested">
            <button onClick={() => {setUser('Add');setRole('')}}>Add</button>
            <button onClick={() => {setUser('View');setRole('')}}>View</button>
          </div>
        )}
        <li onClick={() => setActiveComponent('roleManagement')}>Role Management</li>
        {activeComponent === 'roleManagement' && (
          <div className="nested">
            <button onClick={() => {setRole('Add');setUser('')}}>Add</button>
            <button onClick={() => {setRole('View');setUser('')}}>ViewS</button>
          </div>
        )}
      </ul>
    </div>
    <div className="main-content">
      {user === 'Add' && <UserManagement />}
      {user === 'View' && <RoleManagement />}
      {role === 'Add' && <RoleManagement />}
      {role === 'View' && <RoleManagement />}
    </div>
  </div>

   
  )
}

const UserManagement = () => {
    return (
      <div>
        <h2>User Management</h2>
        {/* Add your user management code here */}
      </div>
    );
  };
  
  const RoleManagement = () => {
    return (
      <div>
        <h2>Role Management</h2>
        {/* Add your role management code here */}
      </div>
    );
  };
  

export default Dashboard