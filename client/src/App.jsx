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
import {ThemeToggler, SourceCode} from '@components';
import {sourceCodeLink} from '@data/constants';
import {githubLogo} from '@assets';

const App = () => {
  return (
    <>
      <section className="flex">
        <main className="max-container relative h-screen basis-full overflow-y-auto">
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

            <div className="pointer-events-auto absolute right-0 top-6 px-2 py-3 lg:right-5">
              <ThemeToggler />
            </div>
          </div>

          <SourceCode link={sourceCodeLink} icon={githubLogo} />
        </main>
      </section>
    </>
  );
};

export default App;
