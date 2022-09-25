import React from 'react';

const Navbar = () => {
   return (
      <div className="navbar bg-[#4e72e9] shadow-2xl z-[100000] ">
         <div className="flex-1">
            <a href='/' className="btn btn-ghost normal-case text-xl text-[#fff]">Ticket Manager</a>
         </div>
         <div className="flex-none gap-2">
            <div className="form-control">
               <input type="text" placeholder="Search" className="rounded py-2 px-3 text-[#fff] outline-none border-none bg-[#0303034d] " />
            </div>
            <div className="dropdown dropdown-end">
               <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                     <img src="https://placeimg.com/80/80/people" alt=''/>
                  </div>
               </label>
               <ul tabIndex="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                     <a href='/' className="justify-between">
                        Profile
                        <span className="badge">New</span>
                     </a>
                  </li>
                  <li><a href='/'>Settings</a></li>
                  <li><a href='/'>Logout</a></li>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Navbar;