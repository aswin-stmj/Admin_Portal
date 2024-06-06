import React, { useState } from 'react';

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);

  const generateRandomPassword = () => {
    const randomPassword = Math.random().toString(36).slice(-8);
    setPassword(randomPassword);
    setShowConfirmation(true);
  };

  const handleConfirm = () => {
    alert(`User Added:\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
    // Handle user addition logic here, e.g., API call
    setShowConfirmation(false)
  };

  return (
    <div className="container">
      <div className="box">
        {!showConfirmation ? (
          <div>
            <h2>Add User</h2>
            <form>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                className="GenPass"
                type="button"
                onClick={generateRandomPassword}
              >
                Generate Password
              </button>
            </form>
          </div>
        ) : (
          <div>
            <h2>Confirm User Details</h2>
            <form>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  readOnly
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  readOnly
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="text"
                  value={password}
                  readOnly
                />
              </div>
              <button
                className="GenPass"
                type="button"
                onClick={handleConfirm}
              >
                Confirm
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddUser;