"use client";
import React, { useState } from 'react'

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_GMJcTfaSVQh63oJ2SCXYcx3vPEI34xmysScQ08vk.gif",
        img2 : "https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_rQuOi1S2mZkJbQ52crN0ggAHChzTVgnWzLMuzfwK.gif",
        img3 : "https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_qu62hM0XGfkI5HOF5miD7qmN73K7BBkkuNDhxAxr.gif",
        img4 : "https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_0LKebpdpRlwChk7aT8GMJwjfl1SMcR12MOCDBMnF.gif",
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);


    return (
        <div className="flex max-h-screen flex-col items-center py-10">
            <div className='flex flex-col gap-6 w-1/3'>

                <img src={activeImg} alt="" className='w-30 h-30 aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
                </div>
            
            {/* ABOUT */}
            <br />
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>Apple</span>
                    <h1 className='text-3xl font-bold'>Wireless Airpods 5.0</h1>
                </div>
                <p className='text-gray-700'>
                Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                </p>
                <div className="flex items-center">
                    <p className="text-2xl font-semibold text-black cursor-auto my-3">Rs 10,000</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 15,000</p>
                    </del>
                    </div>
                <div className='flex flex-row items-center gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button className='bg-red-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Buy</button>
                </div>
                <br />
            <br />
            </div>
        </div>
    )
}

export default ProductPage