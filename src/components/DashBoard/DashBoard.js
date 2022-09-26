import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// for hero icon 
import { ChartSquareBarIcon, HomeIcon, MenuIcon, PuzzleIcon, SparklesIcon, UserGroupIcon, ViewBoardsIcon, ViewGridAddIcon } from '@heroicons/react/solid'
import CustomLink from './Active/CustomLink';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { signOut } from 'firebase/auth';

const DashBoard = () => {
	const [user, loading, error] = useAuthState(auth);
	if (loading) {
		return <Loading></Loading>
	}
	if (error) {
		console.log(error);
	}
	// const logout = () => {
	// 	signOut(auth);
	// };
	return (
		<>
			<div className="container mx-auto px-2 lg:px-0">
				<div className="drawer drawer-mobile ">
					<input id="open-dashboard-menu" type="checkbox" className="drawer-toggle" />
					<div className="drawer-content  flex flex-col bg-slate-200 py-6" id='total_content'>
						{/* <!-- Page content here --> */}
						<div className="text-left mt-4 fixed" style={{ zIndex: '1111111' }}>
							<label htmlFor="open-dashboard-menu" className="w-10 rounded h-10 inline-block cursor-pointer bg-blue-500 hover:bg-blue-800 text-white lg:hidden"><span>
								<MenuIcon />
							</span> </label>
						</div>
						<div className="text-center ">
							<div id="header" className='py-6'>

							</div>
							<div className="text-left px-3">
								<Outlet></Outlet>
							</div>
						</div>

					</div>
					<div className="drawer-side ">
						<label htmlFor="open-dashboard-menu" className="drawer-overlay "></label>
						<ul className="menu p-4 overflow-y-auto w-80 bg-white border-r-1 shadow-2xl  text-slate-600 font-semibold" id='slideBar'>
							{/* <div className="profile text-center py-8">
								{
									user?.photoURL?
										<div className="avatar online ">
											<div className="w-24 rounded-full">
												<img src={user?.photoURL} alt='' />
											</div>
										</div>
										:
										<div className="avatar">
											<div className="w-24 rounded-full">
												<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-full">
													<path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
												</svg>
											</div>
										</div>
								}

								<strong className='block'>{user?.displayName}</strong>
								{
									user ? <button className='capitalize mt-4 inline-block border text-slate-400 hover:bg-blue-700 text-sm hover:text-white px-6 py-2 rounded' onClick={logout}>logOut</button> :
										<Link to={'/login'} className='capitalize mt-1 inline-block border text-slate-400 hover:bg-blue-700 text-sm hover:text-white px-6 py-2 rounded'>logIn</Link>
								}
							</div> */}
							{/* <!-- Sidebar content here --> */}
							<li className='py-1 text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/'}><ViewBoardsIcon className='text-slate-600 w-6'></ViewBoardsIcon>
								Boards </CustomLink></li>
							<li className='py-1 text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/collection'}><SparklesIcon className='text-slate-600 w-6' /> Collection </CustomLink></li>
							<li className='py-1 text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/ticket'}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="text-slate-600 w-6">
								<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
							</svg> Views Ticket</CustomLink></li>
							<li className='py-1 text-lg hover:text-black rounded'><CustomLink className='flex gap-4 capitalize' to={'/members'}><UserGroupIcon className='text-slate-600 w-6' /> Members</CustomLink></li>
						</ul>
					</div>
				</div>
			</div>
		</>
	);
};

export default DashBoard;