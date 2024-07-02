import { Pen } from 'lucide-react';
import { Mail } from 'lucide-react';
import Link from 'next/link';
export default function Page() {
    return (
        <div>
            <div>

                <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                    <div className="mx-auto max-w-2xl px-4 lg:max-w-none mb-7">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center ">Contact Plumberji </h1>
                    </div>

                    <div className="mx-auto max-w-2xl px-4 lg:max-w-none grid gap-y-20 ">

                        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-20 lg:grid-cols-2 rounded-sm bg-slate-100 ">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden ">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                                    alt=""
                                    className="object-cover object-center"
                                />
                            </div>
                            <div>
                                <p className="text-2xl font-bold tracking-tight text-gray-900 flex">

                                    <span className='me-2 p-1' ><Mail fontSize='large' className='text-red-700 ' /></span> <span>Get In Touch</span>
                                </p>
                                <p className="mt-4 text-gray-500">
                                    At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                                    caring about that. Our new strategy is to write a bunch of things that look really good in the
                                    headlines, then clarify in the small print but hope people don't actually read it.
                                </p>
                                <p className="mt-4 text-gray-500">
                                    At the beginning at least, but then we realized we could make a lot more money if we kinda stopped

                                </p>
                            </div>

                        </div>

                        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 rounded-sm bg-slate-100 ">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden flex justify-center  tracking-tight text-gray-900 ">
                                <span className='me-2 p-1'><Pen fontSize='large' className='text-red-700' /></span> <span className='text-3xl font-extrabold'>Send Us A Massage</span>

                            </div>
                            <div>
                                <form className="bg-white  sm:rounded-xl md:col-span-2">
                                    <div className="px-4 py-6 sm:p-8">
                                        <div>
                                            <div className="sm:col-span-3">
                                                {/* <label htmlFor="name" className="block text-sm font-bold leading-6 text-gray-900 sm:pt-1.5">
                                                    Your Name </label> */}

                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        id="name"
                                                        autoComplete="Your-name"
                                                        placeholder='your name'
                                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>

                                            <div className="sm:col-span-3 mt-2">
                                                {/* <label htmlFor="email" className="block text-sm font-bold leading-6 text-gray-900">
                                                    Email
                                                </label> */}
                                                <div className="mt-2">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        id="email_id"
                                                        autoComplete="user_email"
                                                        placeholder='Email'
                                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>






                                            <div className="col-span-full">
                                                {/* <label htmlFor="phone" className="block text-sm font-bold leading-6 text-gray-900">
                                                    Contact
                                                </label> */}
                                                <div className="mt-2">
                                                    <input
                                                        type="number"
                                                        name="phone"
                                                        id="phone_no"
                                                        autoComplete="phone number"
                                                        placeholder='Contact Number'
                                                        className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                            <div className="px-4 py-6 sm:p-8">
                                                {/* <label htmlFor="paddress" className="block  text-sm font-bold leading-6 text-gray-900">
                                                    Plumber Address
                                                </label> */}
                                                <div className="mt-2">
                                                    <textarea
                                                        rows={5}
                                                        name="massages"
                                                        id="paddress"
                                                        placeholder='Your Massage'
                                                        autoComplete="Massage"
                                                        className=" p-4 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                        defaultValue={''}
                                                    />
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                    <div className=" gap-x-6  px-4 py-4 sm:px-8 text-center border-1 border-black">
                                    <button className='text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full'>Submit</button>
                                    </div>
                                </form>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
