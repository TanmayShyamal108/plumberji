

import React from 'react'
import { Hammer } from 'lucide-react';
import { Truck } from 'lucide-react';
import { MapPinned } from 'lucide-react';


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
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center mb-10">About Plumberji</h1>
                        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 rounded-sm bg-slate-100 h-1/3">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden ">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                                    alt=""
                                    className="object-cover object-center"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 flex">

                                    <span className='me-2 p-1'> <Hammer fontSize='large' className='text-red-700  ' /></span> <span>We built our business on</span>
                                </h2>
                                <p className="mt-4 text-gray-500">
                                    At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                                    caring about that. Our new strategy is to write a bunch of things that look really good in the
                                    headlines, then clarify in the small print but hope people don't actually read it.
                                </p>
                            </div>

                        </div>
                       
                       
                        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 rounded-sm bg-slate-100 mt-5 h-1/3">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                                    alt=""
                                    className="object-cover object-center"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 flex">

                                    <span className='mr-2 p-1'><Truck fontSize='large' className='text-red-700 ' /></span> <span>We built our business on</span>
                                </h2>
                                <p className="mt-4 text-gray-500">
                                    At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                                    caring about that. Our new strategy is to write a bunch of things that look really good in the
                                    headlines, then clarify in the small print but hope people don't actually read it.
                                </p>
                            </div>

                        </div>
                        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-10 lg:grid-cols-2 rounded-sm bg-slate-100 mt-5 h-1/3">
                            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg bg-gray-100">
                                <img
                                    src="https://tailwindui.com/img/ecommerce-images/incentives-07-hero.jpg"
                                    alt=""
                                    className="object-cover object-center"
                                />
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-gray-900 flex">

                                    <span className='mr-2 p-1'><MapPinned fontSize='large' className='text-red-700 ' /></span> <span>We built our business on</span>
                                </h2>
                                <p className="mt-4 text-gray-500">
                                    At the beginning at least, but then we realized we could make a lot more money if we kinda stopped
                                    caring about that. Our new strategy is to write a bunch of things that look really good in the
                                    headlines, then clarify in the small print but hope people don't actually read it.
                                </p>
                            </div>

                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
