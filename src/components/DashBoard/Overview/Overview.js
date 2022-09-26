import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import AddComponents from '../AddComponents/AddComponents';
import './Overview.css'

const Overview = () => {
  const [headline, setHeadline] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  // useEffect(() => {
  //   fetch('', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => setHeadline(data))
  // }, [user])

  // call add ticket component 

  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = e => {
     console.log(e?.ticket);
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
            <td className='text-center border-r border-[#fefefe] text-[#fff] rounded px-0 py-0'><label htmlFor="my-modal" className="btn modal-button w-full rounded bg-blue-700 border-none hover:bg-blue-600">open modal</label></td>
            <td className='text-center border-r border-[#fefefe] text-[#fff] rounded px-0 py-0' ><label htmlFor="my-modal" className="btn modal-button w-full rounded bg-blue-700 border-none hover:bg-blue-600">open modal</label></td>
            <td className='text-center border-r border-[#fefefe] text-[#fff] rounded px-0 py-0' ><label htmlFor="my-modal" className="btn modal-button w-full rounded bg-blue-700 border-none hover:bg-blue-600">open modal</label></td>
            <td className='text-center border-r border-[#fefefe] text-[#fff] rounded px-0 py-0' ><label htmlFor="my-modal" className="btn modal-button w-full rounded bg-blue-700 border-none hover:bg-blue-600">open modal</label></td>
          </tbody>
        </table>
        <>
          <input type="checkbox" id="my-modal" className="modal-toggle" />
          <div className="modal px-2">
            <div className="modal-box">
              <div className="flex gap-4 ">
                <form className='w-[70%]'  onSubmit={handleSubmit(onSubmit)}>
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
                    <div className='pt-2'>
                      <label htmlFor="description" className="text-slate-600">Description</label>
                      <textarea id="description" name="description" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      cols="6" rows="6"
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
                    <div className='pt-2'>
                      <label htmlFor="customFields " className="text-slate-600">Custom Fields</label>
                      <textarea id="customFields" name="customFields" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
                      </label>
                    </div>
                  </div>
                  
                </form>
                <div className="w-[25%]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, consequatur!
                </div>
              </div>
              <div className="modal-action">
                <label htmlFor="my-modal" className="btn">Yay!</label>
              </div>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default Overview;