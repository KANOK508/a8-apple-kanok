import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const TilesCard = ({tile}) => {
  return (
    <div
            
            className="p-4 border hover:scale-103 transition-all duration-300  border-black/15 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            
            <Image
              src={tile.image}
              alt={tile.title}
              className="w-full h-50 object-cover rounded-md hover:scale-102 transition-all duration-300" width={600} height={600}
            />
            <div >
              <h3 className="font-semibold text-lg mt-2">
                {tile.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                {tile.category}
              </p>

              <p className="text-blue-600 font-bold mt-2">
                {tile.currency} {tile.price}
              </p>

              <Link
                href={`/all-tiles/${tile.id}`}
                className="mt-4 inline-block w-full text-center bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>

          </div>
  )
}

export default TilesCard