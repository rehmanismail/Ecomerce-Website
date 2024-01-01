"use client";
import React, { useState } from 'react'

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_LxVXe0uUvIUeI80C3BbJoM6JbuxHO3PVnu3V0Ze3.gif",
        img2 : "https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_JMmxvFXY00wuU7utpwVPKfCMRENpkwFQiPji7aSa.gif",
        img3 : "https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_fgKTDlWowtpH3KwpwlTx4zGRKE485Hj2fJLYOOxH.gif",
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount] = useState(1);


    return (
        <div className="flex max-h-screen flex-col items-center py-10">
            <div className='flex flex-col gap-6 w-1/3'>

                <img src={activeImg} alt="" className='w-30 h-30 aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row gap-2 h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                </div>
                </div>
            
            {/* ABOUT */}
            <br />
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>Apple</span>
                    <h1 className='text-3xl font-bold'>Viva Madrid Ferro Back Case For iPhone</h1>
                </div>
                <p className='text-gray-700'>
                Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                </p>
                <div className="flex items-center">
                    <p className="text-2xl font-semibold text-black cursor-auto my-3">Rs 500</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 799</p>
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