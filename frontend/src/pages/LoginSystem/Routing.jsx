import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';

const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default RoutesComponent;
