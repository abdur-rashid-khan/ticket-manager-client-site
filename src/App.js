
import './App.css';
import { Routes, Route } from "react-router-dom";
import DashBoard from './components/DashBoard/DashBoard';
import Overview from './components/DashBoard/Overview/Overview';
// import RequireAuth from './components/Auth/RequireAuth';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/CreateAccout/NewAccount';
import Collection from './components/DashBoard/Collection/Collection';
import Ticket from './components/DashBoard/Ticket/Ticket';
import Members from './components/DashBoard/Members/Members';
import Navbar from './components/DashBoard/Navbar/Navbar';
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<DashBoard />} >
          <Route index element={
            <Overview></Overview>
          }></Route>
          <Route path='/collection' element={
            <Collection></Collection>
          }></Route>
          <Route path='ticket' element={
            <Ticket></Ticket>
          }></Route>
          <Route path='members' element={
            <Members></Members>
          }></Route>

        </Route>
        <Route path='/login' element={
          <Login></Login>
        }></Route>
        <Route path='/signup' element={
          <SignUp></SignUp>
        }></Route>
      </Routes>
    </>
  );
}

export default App;
// <RequireAuth><Update></Update></RequireAuth>