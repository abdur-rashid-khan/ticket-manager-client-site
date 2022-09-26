import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import AddComponents from '../AddComponents/AddComponents';
import './Overview.css'

const Overview = () => {
  const [ticket, setTicket] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  useEffect(() => {
    fetch('http://localhost:5000/ticket', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => setTicket(data))
  }, [])
  console.log(ticket);
  // call add ticket component 

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = e => {

    const ticketDetails = {
      ticketTitle: e.ticketTitle,
      description: e.description,
      ticketType: e.ticketType,
      comment: e.comment
    }
    fetch('http://localhost:5000/add-ticket', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify(ticketDetails)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          Swal.fire('Data insert success', '', 'success');
          reset();
        }
      })
    console.log(ticketDetails);
    reset()
  }



  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    console.log(error);
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full text-slate-700 border">
          <thead style={{ backgroundColor: '#fff' }}>
            <tr className='text-center'>
              {/* <th>Id</th> */}
              <th>Normal </th>
              <th>Stander</th>
              <th>Medium</th>
              <th>Height</th>
            </tr>
          </thead>
          <tbody>
            {
              ticket?.map((t) =>
                <>
                  <tr>
                    {t.ticketType === 'normal'}<td>{t?.ticketTitle}</td>
                    {/* {t.ticketType === 'stander'} <td>{t?.ticketTitle}</td> */}
                    {/* {t.ticketType === 'medium'} <td>{t?.ticketTitle}</td> */}
                    {/* {t.ticketType === 'height'} <td>{t?.ticketTitle}</td> */}
                  </tr>
                </>
              )
            }
            <td className='text-center border-r border-[#fefefe] text-[#fff] rounded px-0 py-0'><label htmlFor="my-modal" className="btn modal-button w-full rounded bg-blue-700 border-none hover:bg-blue-600">Add Ticket</label></td>
            <td className='text-center border-r border-[#fefefe] text-[#fff] rounded px-0 py-0' ><label htmlFor="my-modal" className="btn modal-button w-full rounded bg-blue-700 border-none hover:bg-blue-600">Add Ticket</label></td>
            <td className='text-center border-r border-[#fefefe] text-[#fff] rounded px-0 py-0' ><label htmlFor="my-modal" className="btn modal-button w-full rounded bg-blue-700 border-none hover:bg-blue-600">Add Ticket</label></td>
            <td className='text-center border-r border-[#fefefe] text-[#fff] rounded px-0 py-0' ><label htmlFor="my-modal" className="btn modal-button w-full rounded bg-blue-700 border-none hover:bg-blue-600">Add Ticket</label></td>
          </tbody>
        </table>
        <>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal px-2 " >
            <div className="modal-box overflow-hidden ">
              <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2  border-none bg-transparent hover:bg-[#07070718] text-slate-600 hover:text-red-600 ease-in-out duration-300">✕</label>
              <div className="flex gap-4 ">
                <form className='w-[80%]' onSubmit={handleSubmit(onSubmit)}>
                  <div className="">
                    <div>
                      <label htmlFor="ticketTitle" className="text-slate-600 font-semibold">Ticket Title</label>
                      <input id="ticketTitle" name="ticketTitle" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Ticket Title"
                        {...register("ticketTitle", {
                          required: {
                            value: true,
                            message: "Enter Ticket Title",
                          },
                        }
                        )}
                      />
                      <label className="">
                        {errors.ticketTitle?.type === "required" && (
                          <span className="text-red-500 text-sm pt-2 capitalize">
                            {errors.ticketTitle.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div className='pt-4'>
                      <label htmlFor="description" className="text-slate-600 font-semibold">Description</label>
                      <textarea id="description" name="description" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        cols="1" rows="6"
                        placeholder="Type Here Ticket Description"
                        {...register("description", {
                          // required: {
                          //   value: true,
                          //   message: "Product Type",
                          // },
                        }
                        )}
                      />
                      <label className="">
                        {errors.description?.type === "required" && (
                          <span className="text-red-500 text-sm pt-2 capitalize">
                            {errors.description.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div className='pt-4'>
                      <label htmlFor="customFields " className="text-slate-600 font-semibold ">Choses Ticket</label>
                      {/* <textarea id="customFields" name="customFields" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      cols="6" rows="6"
                      placeholder="Type Here Ticket customFields"
                        {...register("customFields", {
                          // required: {
                          //   value: true,
                          //   message: "Product Type",
                          // },
                        }
                        )}
                      />
                      <label className="">
                        {errors.customFields?.type === "required" && (
                          <span className="text-red-500 text-sm pt-2 capitalize">
                            {errors.customFields.message}
                          </span>
                        )}
                      </label> */}
                      <select className='w-full mt-1 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
                        {...register("ticketType", {
                          required: {
                            value: true,
                            message: "Product Type",
                          }
                        })}>
                        <option disabled selected >Select Ticket</option>
                        <option value={'normal'}>Normal</option>
                        <option value={'stander'}>Stander</option>
                        <option value={'medium'}>Medium</option>
                        <option value={'height'}>Height</option>
                      </select>
                      <label className="">
                        {errors.customFields?.type === "required" && (
                          <span className="text-red-500 text-sm pt-2 capitalize">
                            {errors.customFields.message}
                          </span>
                        )}
                      </label>
                    </div>
                    <div className='pt-4'>
                      <label htmlFor="comment" className="text-slate-600 font-semibold">Comment</label>
                      <div className="flex items-center gap-2 mt-2">
                        <img className='w-12 h-12 rounded-full' src="https://placeimg.com/80/80/people" alt='' />
                        <textarea id="comment" name="comment" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                          cols="6" rows="2"
                          placeholder="Comment......"
                          {...register("comment", {
                            // required: {
                            //   value: true,
                            //   message: "Product Type",
                            // },
                          }
                          )}
                        />
                      </div>

                      <label className="">
                        {errors.comment?.type === "required" && (
                          <span className="text-red-500 text-sm pt-2 capitalize">
                            {errors.comment.message}
                          </span>
                        )}
                      </label>
                    </div>
                  </div>
                  <div className="text-center py-8">
                    <button className='bg-blue-700 px-16 rounded py-2 hover:bg-blue-600 text-white hover:tracking-[2px] ease-in-out duration-500'>Save</button>
                  </div>
                </form>
                <div className="w-[20%]">
                  <div className="">
                    <div className="">
                      <div className="pt-20">
                        <h1 className='font-semibold text-[#747474cc]'>Add to card</h1>
                      </div>
                      <div className="mt-4">
                        <ul>
                          <li>
                            <Link to={"/"} className='flex items-center py-2  px-2 text-base text-slate-500 font-semibold hover:bg-[#0808081a] rounded'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                              </svg>
                              Members</Link>
                          </li>
                          <li>
                            <Link to={"/"} className='flex items-center py-2  px-2 text-base text-slate-500 font-semibold hover:bg-[#0808081a] rounded'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
                              </svg>

                              Labels</Link>
                          </li>
                          <li>
                            <Link to={"/"} className='flex items-center py-2  px-2 text-base text-slate-500 font-semibold hover:bg-[#0808081a] rounded'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                              </svg>

                              Date</Link>
                          </li>
                          <li>
                            <Link to={"/"} className='flex items-center py-2  px-2 text-base text-slate-500 font-semibold hover:bg-[#0808081a] rounded'>
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-1">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                              </svg>

                              Location</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Overview;