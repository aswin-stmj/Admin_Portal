import React, { useState } from 'react';
import UserView from '../components/UserView';
import AddUser from '../components/AddUser';
import AddRole from '../components/AddRole';
import ViewRole from '../components/ViewRole';

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
      {user === 'Add' && <AddUser/>}
      {user === 'View' && < UserView/>}
      {role === 'Add' && <AddRole/>}
      {role === 'View' && <ViewRole/>}
    </div>
  </div>

   
  )
}

export default Dashboard