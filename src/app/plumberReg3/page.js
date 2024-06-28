

import React from 'react'
import Link from 'next/link'

export default function Page() {
    return (
        <main className='flex justify-center align-middle  ' style={{ height: "100vh" }}>
            <div className='w-2/3 p-4'>
                <h3 className='text-4xl font-bold text-center'>Register as Pro Plumber</h3>
                <form className=" bg-white  sm:rounded-xl md:col-span-2 mt-5 ">
                    <div className="px-4 py-6 sm:p-8">
                        <label htmlFor="paddress" className="block  text-sm font-bold leading-6 text-gray-900">
                            Plumber Address
                        </label>
                        <div className="mt-2">
                            <textarea
                                rows={5}
                                name="paddress"
                                id="paddress"
                                placeholder='Enter plumber address'
                                autoComplete="plumber-address"
                                className=" p-4 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                            />
                        </div>
                    </div>
                    <div className=" ms-5 w-1/2">
                        <label htmlFor="ppassword" className="block text-sm font-bold leading-6 text-gray-900">
                            Password
                        </label>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="ppassword"
                                id="state"

                                placeholder='Enter password'
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className=" ms-5 w-1/2 mt-5">
                        <label htmlFor="confirmpassword" className="block text-sm font-bold leading-6 text-gray-900">
                            Confirm Password
                        </label>
                        <div className="mt-2">
                            <input
                                type="password"
                                name="confirmpassword"
                                id="state"

                                placeholder='Enter confirm password'
                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                        <button type="button" className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Previous
                        </button>
                        <Link
                            href={'/plumberReg1'}
                            className="text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                        >
                            <u>Start again</u>
                        </Link>
                    </div>


                </form>
                <div className='text-center'>
                    <Link
                        href={'/plumberLogIn'}
                        className="text-sm text-center font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                    >
                        Have an account?<u className='ml-2 text-green-600'>Log in</u>
                    </Link>
                </div>
            </div>

        </main>
    )
}
