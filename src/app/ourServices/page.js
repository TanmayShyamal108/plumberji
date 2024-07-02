
import BuildIcon from '@mui/icons-material/Build';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import React from 'react'
import { Settings, Wrench } from 'lucide-react';
import { Building } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Star } from 'lucide-react';
const incentives = [
    {
        name: 'Free shipping',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
        description: "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
    },
    {
        name: '10-year warranty',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
        description: "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
    },
    {
        name: 'Exchanges',
        imageSrc: 'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
        description:
            "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
    },
]
export default function Page() {
    return (
        <div>
            <div>

                <div className="mx-auto max-w-7xl py-24 sm:px-2 sm:py-32 lg:px-4">
                    <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-10">Plumberji Services</h1>
                        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 rounded-sm bg-slate-100 ">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden ">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                                    alt=""
                                    className="object-cover object-center"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 flex">

                                    <span className='mr-2 p-1'><Star fontSize='large' className='text-red-700  ' /></span> <span>We built our business on</span>
                                </h2>
                                <p className="mt-4 text-gray-500">
                                    At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                                    caring about that. Our new strategy is to write a bunch of things that look really good in the
                                    headlines, then clarify in the small print but hope people don't actually read it.
                                </p>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 h-40 bg-slate-100 mt-10 items-center justify-center rounded-sm mb-9 " >
                            <div className='text-center'>
                                <p className=' font-extrabold p-2 '><span>
                                    <BuildIcon fontSize='large' className='text-red-700 p-1' /></span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                                <p className='font-semibold p-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis <br />architecto, animi ea saepe impedit sit?</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 rounded-sm bg-slate-100 ">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                                    alt=""
                                    className="object-cover object-center"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                                    <span><AirportShuttleIcon fontSize='large' className='text-red-700 p-1' /></span>We built our business
                                </h2>
                                <p className="mt-4 text-gray-500">
                                    At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                                    caring about that. Our new strategy is to write a bunch of things that look really good in the
                                    headlines, then clarify in the small print but hope people don't actually read it.
                                </p>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 rounded-sm bg-slate-100 mt-5">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                                    alt=""
                                    className="object-cover object-center"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 flex">

                                    <span className='mr-2 p-1'><Building fontSize='large' className='text-red-700 ' /></span> <span>We built our business on</span>
                                </h2>
                                <p className="mt-4 text-gray-500">
                                    At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                                    caring about that. Our new strategy is to write a bunch of things that look really good in the
                                    headlines, then clarify in the small print but hope people don't actually read it.
                                </p>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 rounded-sm bg-slate-100 mt-5">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                                    alt=""
                                    className="object-cover object-center"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 flex">

                                    <span className='mr-2 p-1'><Zap fontSize='large' className='text-red-700 ' /></span> <span>We built our business on</span>
                                </h2>
                                <p className="mt-4 text-gray-500">
                                    At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                                    caring about that. Our new strategy is to write a bunch of things that look really good in the
                                    headlines, then clarify in the small print but hope people don't actually read it.
                                </p>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 h-40 bg-slate-100 mt-10 items-center justify-center rounded-sm mb-9 " >
                            <div className='text-center'>
                                <p className='p-2 flex justify-center' ><span>
                                    <Settings fontSize='large' className='text-red-700 p-1' /></span><span className='font-extrabold'> Lorem ipsum dolor sit amet.</span></p>
                                <p className='font-semibold p-2 m-2'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis <br />architecto, animi ea saepe impedit sit? Lorem ipsum dolor  sit amet consectetur adipisicing elit. <br /> Possimus unde sed veniam ipsam nemo magni et, tenetur nostrum sunt qui.</p>
                                <div><button className='text-white  bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center w-full'>Submit</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
