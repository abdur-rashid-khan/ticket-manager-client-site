import React from 'react';
import { useForm } from 'react-hook-form';

const AddComponents = () => {
   const { register, handleSubmit, reset, formState: { errors } } = useForm();
   const onSubmit = e => {
      console.log(e?.ticket);
   }
   return (
      <div>
         <div className="flex">
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="p-4">
                  <div>
                     <label htmlFor="ticket" className="text-slate-600">Product Name</label>
                     <input id="ticket" name="ticket" type="text" className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Products Name "
                        {...register("ticket", {
                           required: {
                              value: true,
                              message: "Product Type",
                           },
                        }
                        )}
                     />
                     <label className="">
                        {errors.ticket?.type === "required" && (
                           <span className="text-red-500 text-sm pt-2 capitalize">
                              {errors.ticket.message}
                           </span>
                        )}
                     </label>
                  </div>


               </div>
               <button className='uppercase bg-blue-700 w-full py-2 text-white hover:bg-blue-600 rounded-b'>submit</button>
            </form>
         </div>
      </div>
   );
};

export default AddComponents;