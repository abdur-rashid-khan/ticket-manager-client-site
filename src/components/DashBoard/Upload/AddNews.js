import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import './Upload.css'

const AddNews = () => {
  const [user, loading, error] = useAuthState(auth);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => {

  }

  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    console.log(error);
  }
  return (
    <section>
      {/*  */}
      <h1>Coming soon</h1>
    </section>
  );
};

export default AddNews;