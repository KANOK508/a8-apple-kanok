import Image from 'next/image';
import React from 'react'

const page = async({params}) => {
  const {id} = await params;
  const res = await fetch('https://category-a8-apple-l35b.vercel.app/tiles.json')
  const data = await res.json()

  const findData = data.find((details)=> details.id == id)
  console.log(id)
    
   
  return (
    <div className="max-w-4xl mx-auto mt-19 p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
      <Image
        src={findData.image}
        alt={findData.title} width={800} height={800}
        className="w-full h-[400px] object-cover rounded-lg"
      />

      <div>
        <h1 className="text-3xl font-bold mt-4">{findData.title}</h1>
      <p className="mt-2 text-gray-600">{findData.description}</p>

      <div className="mt-4 space-y-1">
        <p><b>Category:</b> {findData.category}</p>
        <p><b>Material:</b> {findData.material}</p>
        <p><b>Dimensions:</b> {findData.dimensions}</p>
        <p><b>Price:</b> ${findData.price}</p>
        <p>
          <b>Status:</b>
          {findData.inStock ? "In Stock" : "Out of Stock"}
        </p>
      </div>
      </div>
    </div>
  )
}

export default page