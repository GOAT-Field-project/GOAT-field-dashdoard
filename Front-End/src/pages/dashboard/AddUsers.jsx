import React, { useState } from 'react';
import { Input } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import Select from 'react-select';
import axios from 'axios';

const options = [
  { value: 'Admin', label: 'Admin' },
  { value: 'Company', label: 'Company' },
  { value: 'User', label: 'User' }
];

export function AddUsers() {
  const [user_name, setUserName] = useState('');
  const [user_email, setUserEmail] = useState('');
  const [user_password, setUserPassword] = useState('');
  const [role, setRole] = useState('');

  const addOnSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8181/addUser', {
        user_name,
        user_email,
        user_password,
        role
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex flex-col w-72 items-end gap-6">
        <form onSubmit={addOnSubmit}>
          <Input
            className="bg-white"
            type="text"
            size="lg"
            label="Name"
            value={user_name}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            type="email"
            size="lg"
            label="Email"
            value={user_email}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <Input
            type="password"
            size="lg"
            label="Password"
            value={user_password}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <Select
            className="w-72"
            options={options}
            label="Role"
            value={role}
            onChange={(selectedOption) => setRole(selectedOption.value)}
          />
          <Button type='submit' className="w-72" color="green" ripple={true}>Add User</Button>
        </form>
      </div>
    </>
  );
}

export default AddUsers;
