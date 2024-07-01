"use client"

import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Link from 'next/link';

// Validation schema for each step
const validationSchema = [
    Yup.object({
        firstName: Yup.string().required('Required'),
        lastName: Yup.string().required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        phone: Yup.string().required('Required'),
    }),
    Yup.object({
        pcity: Yup.string().required('Required'),
        pexp: Yup.string().required('Required'),
        companyName: Yup.string().required('Required'),
        pstate: Yup.string().required('Required'),
        pincode: Yup.string().required('Required'),
    }),
    Yup.object({
        paddress: Yup.string().required('Required'),
        ppassword: Yup.string().required('Required'),
        confirmpassword: Yup.string().oneOf([Yup.ref('ppassword'), null], 'Passwords must match').required('Required'),
    }),
];

const MultiStepForm = () => {
    const [step, setStep] = useState(0);

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const handleSubmit = (values, { setSubmitting }) => {
        if (step === validationSchema.length - 1) {
            console.log('Form submitted:', values);
            setSubmitting(false);
            return;
        }
        console.log(values);
        setSubmitting(false);
    };

    return (
        <div className="w-1/3 mt-40 p-4">
            <h3 className="text-4xl font-bold">Register as Pro Plumber</h3>
            <Formik
                initialValues={{
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
                }}
                validationSchema={validationSchema[step]}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="bg-white sm:rounded-xl md:col-span-2">
                        {step === 0 && (
                            <div className="px-4 py-6 sm:p-8">
                                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                                            First name
                                        </label>
                                        <Field
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            autoComplete="given-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                                            Last name
                                        </label>
                                        <Field
                                            type="text"
                                            name="lastName"
                                            id="lastName"
                                            autoComplete="family-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <Field
                                            type="email"
                                            name="email"
                                            id="email"
                                            autoComplete="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                                            Mobile
                                        </label>
                                        <Field
                                            type="number"
                                            name="phone"
                                            id="phone"
                                            autoComplete="tel"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 1 && (
                            <div className="px-4 py-6 sm:p-8">
                                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="pcity" className="block text-sm font-medium leading-6 text-gray-900">
                                            Plumber City
                                        </label>
                                        <Field
                                            as="select"
                                            name="pcity"
                                            id="pcity"
                                            autoComplete="city-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                        >
                                            <option value="">Select city</option>
                                            <option value="Hyd">Hyderabad</option>
                                            <option value="Mum">Mumbai</option>
                                        </Field>
                                        <ErrorMessage name="pcity" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="pexp" className="block text-sm font-medium leading-6 text-gray-900">
                                            Plumber Experience
                                        </label>
                                        <Field
                                            type="text"
                                            name="pexp"
                                            id="pexp"
                                            autoComplete="plumber-exp"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="pexp" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="sm:col-span-4">
                                        <label htmlFor="companyName" className="block text-sm font-medium leading-6 text-gray-900">
                                            Plumber Company Name
                                        </label>
                                        <Field
                                            type="text"
                                            name="companyName"
                                            id="companyName"
                                            autoComplete="company-name"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="companyName" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="pstate" className="block text-sm font-medium leading-6 text-gray-900">
                                            Plumber State
                                        </label>
                                        <Field
                                            type="text"
                                            name="pstate"
                                            id="pstate"
                                            autoComplete="plumber-state"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="pstate" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="col-span-full">
                                        <label htmlFor="pincode" className="block text-sm font-medium leading-6 text-gray-900">
                                            Plumber Pincode
                                        </label>
                                        <Field
                                            type="number"
                                            name="pincode"
                                            id="pincode"
                                            autoComplete="plumber-pincode"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="pincode" component="div" className="text-red-500 text-sm" />
                                    </div>
                                </div>
                            </div>
                        )}
                        {step === 2 && (
                            <div className="px-4 py-6 sm:p-8">
                                <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-6">
                                        <label htmlFor="paddress" className="block text-sm font-medium leading-6 text-gray-900">
                                            Plumber Address
                                        </label>
                                        <Field
                                            as="textarea"
                                            rows={5}
                                            name="paddress"
                                            id="paddress"
                                            autoComplete="plumber-address"
                                            className="p-4 block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="paddress" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="ppassword" className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                        <Field
                                            type="password"
                                            name="ppassword"
                                            id="ppassword"
                                            autoComplete="new-password"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="ppassword" component="div" className="text-red-500 text-sm" />
                                    </div>
                                    <div className="sm:col-span-3">
                                        <label htmlFor="confirmpassword" className="block text-sm font-medium leading-6 text-gray-900">
                                            Confirm Password
                                        </label>
                                        <Field
                                            type="password"
                                            name="confirmpassword"
                                            id="confirmpassword"
                                            autoComplete="new-password"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                        <ErrorMessage name="confirmpassword" component="div" className="text-red-500 text-sm" />
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="flex justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                            {step > 0 && (
                                <button
                                    type="button"
                                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={prevStep}
                                >
                                    Previous
                                </button>
                            )}
                            {step < 2 ? (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Next
                                </button>
                            ) : (
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Submit
                                </button>
                            )}
                        </div>
                    </Form>
                )}
            </Formik>
            {step === 2 && (
                <div className="text-center mt-4">
                    <Link href="/plumberLogIn" className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Have an account? <u className="ml-2 text-green-600">Log in</u>
                    </Link>
                </div>
            )}
        </div>
    );
};

const PlumberRegistration = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <MultiStepForm />
        </div>
    );
};

export default PlumberRegistration;
