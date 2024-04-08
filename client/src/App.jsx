import {Route, Routes} from 'react-router-dom';

import {
  Home,
  Signin,
  Signup,
  Dashboard,
  Transfer,
  Transactions,
  Profile,
} from '@pages';

const App = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transfer" element={<Transfer />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
