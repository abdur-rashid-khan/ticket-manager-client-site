
import './App.css';
import { Routes, Route } from "react-router-dom";
import DashBoard from './components/DashBoard/DashBoard';
import Overview from './components/DashBoard/Overview/Overview';
// import RequireAuth from './components/Auth/RequireAuth';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/CreateAccout/NewAccount';
import ManageNews from './components/DashBoard/ManageNews/ManageNews';
import AddNews from './components/DashBoard/Upload/AddNews';
function App() {
  return (
    <>
      {/* <Header></Header> */}
      <Routes>
        <Route path="/" element={<DashBoard />} >
          <Route index element={
            <Overview></Overview>
          }></Route>
          <Route path='add-news' element={
            <AddNews></AddNews>
          }></Route>
          <Route path='manage-news' element={
            <ManageNews></ManageNews>
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