"use client"

import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  pcity: '',
  pexp: '',
  companyName: '',
  pstate: '',
  pincode: '',
  paddress: '',
  ppassword: '',
  confirmpassword: '',
};

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  pcity: Yup.string().required('City is required'),
  pexp: Yup.string().required('Experience is required'),
  companyName: Yup.string().required('Company name is required'),
  pstate: Yup.string().required('State is required'),
  pincode: Yup.string().required('Pincode is required'),
  paddress: Yup.string().required('Address is required'),
  ppassword: Yup.string().required('Password is required'),
  confirmpassword: Yup.string().oneOf([Yup.ref('ppassword'), null], 'Passwords must match').required('Confirm password is required'),
});

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => setStep((prev) => prev + 1);
  const handlePrev = () => setStep((prev) => prev - 1);

  const handleSubmit = (values) => {
    console.log(values);
    
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid }) => (
        <Form className="bg-white sm:rounded-xl md:col-span-2">
          
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}

          <div className="flex justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
            {step > 1 && (
              <button type="button" onClick={handlePrev} className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Previous
              </button>
            )}
            {step < 3 ? (
              <button type="button" onClick={handleNext} disabled={!isValid} className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Next
              </button>
            ) : (
              <button type="submit" disabled={!isValid} className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Submit
              </button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};


const Step1 = () => (
    <div className="px-4 py-6 sm:p-8">
      <h3 className="text-4xl font-bold">Register as Pro Plumber</h3>
      <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mt-10">
        <div className="sm:col-span-3">
          <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">First name</label>
          <Field name="firstName" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm" />
          <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">Last name</label>
          <Field name="lastName" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm" />
          <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <Field name="email" type="email" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm" />
          <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="col-span-full">
          <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Mobile</label>
          <Field name="phone" type="number" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm" />
          <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
        </div>
      </div>
    </div>
  );

  const Step2 = () => (
    <div className="px-4 py-6 sm:p-8">
      <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label htmlFor="pcity" className="block text-sm font-bold leading-6 text-gray-900 sm:pt-1.5">Plumber City</label>
          <Field name="pcity" as="select" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm">
            <option value="">Select city</option>
            <option value="Hyd">Hyd</option>
            <option value="Mum">Mum</option>
          </Field>
          <ErrorMessage name="pcity" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="sm:col-span-3 mt-2">
          <label htmlFor="pexp" className="block text-sm font-bold leading-6 text-gray-900">Plumber Experience</label>
          <Field name="pexp" type="text" className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm" />
          <ErrorMessage name="pexp" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="sm:col-span-4">
          <label htmlFor="companyName" className="block text-sm font-bold leading-6 text-gray-900">Plumber Company Name</label>
          <Field name="companyName" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm" />
          <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="col-span-full">
          <label htmlFor="pstate" className="block text-sm font-bold leading-6 text-gray-900">Plumber State</label>
          <Field name="pstate" type="text" className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm" />
          <ErrorMessage name="pstate" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="col-span-full">
          <label htmlFor="pincode" className="block text-sm font-bold leading-6 text-gray-900">Plumber Pincode</label>
          <Field name="pincode" type="number" className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm" />
          <ErrorMessage name="pincode" component="div" className="text-red-500 text-sm" />
        </div>
      </div>
    </div>
  );
  const Step3 = () => (
    <div className="px-4 py-6 sm:p-8">
      <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="col-span-full">
          <label htmlFor="paddress" className="block text-sm font-bold leading-6 text-gray-900">Plumber Address</label>
          <Field name="paddress" as="textarea" rows="5" className="p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm" />
          <ErrorMessage name="paddress" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="sm:col-span-3">
          <label htmlFor="ppassword" className="block text-sm font-bold leading-6 text-gray-900">Password</label>
          <Field name="ppassword" type="password" className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm" />
          <ErrorMessage name="ppassword" component="div" className="text-red-500 text-sm" />
        </div>
        <div className="sm:col-span-3 mt-2">
          <label htmlFor="confirmpassword" className="block text-sm font-bold leading-6 text-gray-900">Confirm Password</label>
          <Field name="confirmpassword" type="password" className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm" />
          <ErrorMessage name="confirmpassword" component="div" className="text-red-500 text-sm" />
        </div>
      </div>
    </div>
  );

  const Register = () => (
    <main className="flex justify-center align-middle">
    <div className="w-1/3 mt-40 p-4 ">
      <MultiStepForm />
      <div className='text-center mt-4'>
        <a href="/plumberLogIn" className="text-sm text-center font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
          Have an account? <u className='ml-2 text-green-600'>Log in</u>
        </a>
      </div>
    </div>
    </main>
  );
  
  export default Register;