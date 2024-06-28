

import Link from 'next/link'
import React from 'react'

export default function Page() {
    return (
        <main className='flex justify-center align-middle ' style={{ height: "100vh" }}>
            <div className='w-1/3 mt-40 p-4'>
                <h3 className='text-4xl font-bold'>Register as Pro Plumber</h3>
                <form className="bg-white  sm:rounded-xl md:col-span-2">
                    <div className="px-4 py-6 sm:p-8">
                        <div>
                            <div className="sm:col-span-3">
                                <label htmlFor="pcity" className="block text-sm font-bold leading-6 text-gray-900 sm:pt-1.5">
                                    Plumber City                                </label>
                                <div className="mt-2 sm:col-span-2 sm:mt-0">
                                    <select
                                        id="country"
                                        name="pcity"
                                        autoComplete="city-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option value="-1">Select city</option>
                                        <option>Hyd</option>
                                        <option>Mum</option>
                                    </select>
                                </div>
                            </div>

                            <div className="sm:col-span-3 mt-2">
                                <label htmlFor="pexp" className="block text-sm font-bold leading-6 text-gray-900">
                                    Plumber Experience
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="pexp"
                                        id="experience"
                                        autoComplete="family-name"
                                        placeholder='Enter years of experience'
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-4">
                                <label htmlFor="company-name" className="block text-sm font-bold leading-6 text-gray-900">
                                    Plumber Company Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="company-name"
                                        name="company-name"
                                        type="text"
                                        autoComplete="company-name"
                                        placeholder='Enter plumber company name'
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>



                            <div className="col-span-full">
                                <label htmlFor="pstate" className="block text-sm font-bold leading-6 text-gray-900">
                                    Plumber State
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="pstate"
                                        id="state"
                                        autoComplete="Plumber State"
                                        placeholder='Enter plumber state'
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                            <div className="col-span-full">
                                <label htmlFor="pincode" className="block text-sm font-bold leading-6 text-gray-900">
                                    Plumber Pincode
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="number"
                                        name="pincode"
                                        id="pincode"
                                        autoComplete="Plumber pincode"
                                        placeholder='Enter plumber pincode'
                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                        </div>
                    </div>
                    <div className="flex items-center justify-start gap-x-6 border-t border-gray-900/10 px-4 py-4 sm:px-8">
                        <button type="button" className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Previous
                        </button>
                        <Link
                            href="/plumberReg3"
                            className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Next
                        </Link>
                    </div>
                </form>
            </div>

        </main>
    )
}
