import Link from "next/link";
const MarketPlace = () => {
    return (
       <div className="flex max-h-screen flex-col items-center py-20">
        <h1 className="font-bold text-4xl mb-4">Rehman Store</h1>
        <h1 className="text-2xl font-sans font-bold">Market Place</h1>

         {/* Card No 1 */}

         <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
         <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
         <Link href="\marketplace\headphone">
         <img src="https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_ycNYN0vtaD1dQnaf9eBBT92tW47QiZInqwqQePQY.jpg" className="h-80 w-72 object-cover rounded-t-xl"/>
         </Link>
         <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Samsung</span>
                <p className="text-lg font-bold text-black truncate block capitalize">MH7 Wireless Headphones</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 1000</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 1500</p>
                    </del>
                    </div>
        </div>

          </div>

          {/* Card No 2 */}

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="/marketplace/watch">
         <img src="https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_5e60IE5Vs262fbhkyn9r0lwf2ycVa0f4uIv8phmC.png" className="h-80 w-72 object-cover rounded-t-xl" />
         </Link>
         <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">SHAARMS</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Luxury WristWatch Men</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 3,750</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 6799</p>
                    </del>
                    </div>
        </div>

          </div>

         {/* Card No 3 */}

         <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
         <Link href="/marketplace/airpods">
         <img src="https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_GMJcTfaSVQh63oJ2SCXYcx3vPEI34xmysScQ08vk.gif" className="h-80 w-72 object-cover rounded-t-xl" />
         </Link>
         <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Apple</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Wireless Airpods 5.0</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 10,000</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 15,000</p>
                    </del>
                    </div>

                    
           </div>

          </div>

          {/* Card No 4 */}

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
          <Link href="/marketplace/shoes">
         <img src="https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_V4jeIlNp4wZnDqAox5ZPbvMJgKcSkmDhX3yJ0K6C.png" className="h-80 w-72 object-cover rounded-t-xl" />
         </Link>
         <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">JAFSPOT</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Mens Casual Sneakers</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 2,200</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 3000</p>
                    </del>
                    </div>
        </div>

          </div>

          {/* Card No 5 */}

          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
         <Link href="/marketplace/backcover">
         <img src="https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_LxVXe0uUvIUeI80C3BbJoM6JbuxHO3PVnu3V0Ze3.gif" className="h-80 w-72 object-cover rounded-t-xl" />
         </Link>
         <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Apple</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Viva Madrid Ferro Back Case For iPhone</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 500</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 799</p>
                    </del>
                    </div>
        </div>

          </div>

           {/* Card No 6 */}

           <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
         <Link href="/marketplace/mobilephoneholder">
         <img src="https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_gK07qo7HQEVrtJT9WSze5RNxK1TSI5o1i8dDSWlN.jpg" className="h-80 w-72 object-cover rounded-t-xl" />
         </Link>
         <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Robits</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Foldable Desk Mobile Phone Holder</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 25,000</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 28,799</p>
                    </del>
                    </div>
        </div>

          </div>

          {/* Card No 7 */}

          
          <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
         <Link href="/marketplace/shirt">
         <img src="https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_qdoCBBDwZqeJwSbYjvJWWFtfGLEJuLMNjQ5vcTxK.jpg" className="h-80 w-72 object-cover rounded-t-xl" />
         </Link>
         <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">PUMA</span>
                <p className="text-lg font-bold text-black truncate block capitalize">3 in 1 Zipper Set by MAT TIME</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 2,999</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 4,999</p>
                    </del>
                    </div>
        </div>
        </div>

        {/* Card No 8 */}
          

        <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
        <Link href="/marketplace/bag">
         <img src="https://d1iv6qgcmtzm6l.cloudfront.net/product_galleries/lg_9hCmHDsT5KkjOmaZBCpEGjsdfhTzDEObRVaCbKaQ.jpg" className="h-80 w-72 object-cover rounded-t-xl" />
         </Link>
         <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">FTS Bag</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Double Pockets Bags</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 2000</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 3,500</p>
                    </del>
                    </div>
        </div>
        </div>


         {/* Card No 9 */}
           
         <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
         <Link href="/marketplace/newbag">
         <img src="https://d1iv6qgcmtzm6l.cloudfront.net/products/lg_9aFsNQ8PHJMvxp0kYsgqejPS75TYFPpR4SqWxp3T.jpg" className="h-80 w-72 object-cover rounded-t-xl" />
         </Link>
         <div className="px-4 py-3 w-72">
                <span className="text-gray-400 mr-3 uppercase text-xs">Casio Bag</span>
                <p className="text-lg font-bold text-black truncate block capitalize">Brown leather laptop bag by the artist's attic</p>
                <div className="flex items-center">
                    <p className="text-lg font-semibold text-black cursor-auto my-3">Rs 500</p>
                    <del>
                        <p className="text-sm text-gray-600 cursor-auto ml-2">Rs 899</p>
                    </del>
                    </div>
        </div>
        </div>

         </section>




      </div>


       
  )
}
export default MarketPlace;