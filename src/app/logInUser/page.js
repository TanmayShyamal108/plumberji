

import React from 'react'
import Link from 'next/link'
export default function Page() {
    return (
        <div className='flex justify-center align-middle ' style={{ height: "100vh" }}>

            <div className='w-1/3 mt-40 p-4 c'>
                <h3 className='text-4xl font-bold'>Sign in to your account</h3>
                <form >
                    <dl className='mt-10'>
                        <dt class="block mb-2 font-medium  ">Email Id</dt>
                        <dd><input type="email" name="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></dd>
                        <dt class="block mb-2 text-sm font-semibold">Password</dt>
                        <dd><input type="password" name="Password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" /></dd>
                    </dl>
                    <div>
                    <button class="text-white mt-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Login</button>
                    </div>
                    <Link href="/userRagistration" className="text-blue-700 font-semibold"><u>New User ? create account</u> </Link>

                </form>
            </div>

        </div>
    )
}
