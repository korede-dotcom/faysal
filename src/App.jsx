// import logo from './logo.svg';
import './App.css';
// import Navbar from './reuseable/Navbar';
// import { ProtectedRoute } from './hooks';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate,
} from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Remitances from './pages/Remitances/Remitances';
import Savings from './pages/Savings/Savings';
import Customers from './pages/Customers.jsx/Customers';
import Hsm from './pages/Hsm/Hsm';
import Processor from './pages/Processors/Processors';
import Bin from './pages/Bin/Bin';
import Provider from './pages/Provider/Provider';
import Service from './pages/service/Service';
import Setting from './pages/setting/Setting';
import Login from './pages/Auth/Login';
// import Account from './pages/Myaccount/Account';
// import Agentmanagement from './pages/Agentmanagement/Agentmanagement';
// import Terminalmanagement from './pages/terminalmanagement/Terminalmanagement'
// import Servicemanagement from './pages/servicemanagement/Servicemanagement';
// import Rentalservices from './pages/Rentalservices/Rentalservices';
// import Login from './pages/Auth/Login';
// import Signup from './pages/Auth/Signup';
// import Login from './pages/AuthPage.js/Login';
import InActivityTimeOut from './hooks/InActivityTimeOut';
import Payouts from './pages/Payouts/Payouts';
import Profile from './pages/Profile/Profile';
import  ProtectedRoute  from './hooks/ProtectedRoute';
import  ProtectAgent  from './hooks/ProtectAgent';
import Agent from './pages/Admin/Agent'
import AgentCustomers from './pages/Admin/Customers'




function App() {

  return (
    <Router>
      <Routes>
        <Route element={<InActivityTimeOut />}>
          <Route path='/' element={<Login/>} />
          <Route path='/login' element={<Login/>} />
          <Route element={<ProtectAgent/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/remitance' element={<Remitances/>} />
            <Route path='/savings' element={<Savings/>} />
            <Route path='/customers' element={<Customers/>} />
            <Route path='/payouts' element={<Payouts/>} />
            <Route path='/profile' element={<Profile/>} />
          </Route>

        <Route element={<ProtectedRoute />}>
            <Route path='/admin/dashboard' element={<Dashboard/>} />
            <Route path='/admin/location' element={<Payouts/>} />
            <Route path='/admin/agents' element={<Agent/>} />
            <Route path='/admin/remitance' element={<Remitances/>} />
            <Route path='/admin/savings' element={<Savings/>} />
            <Route path='/admin/customers' element={<AgentCustomers/>} />
            <Route path='/admin/payouts' element={<Payouts/>} />
            <Route path='/admin/profile' element={<Profile/>} />
            <Route path='/admin/location' element={<Profile/>} />
        </Route>





        </Route>
       
      </Routes>
    </Router>
  );
}

export default App;
