// import TilesCard from '@/components/ui/TilesCard'
// import React from 'react'

// const AllTiles = async () => {
//   // Next.js maps the root "/" directly to your public/ folder
//   const res = await fetch('http://localhost:3000/tiles.json')
//   const data = await res.json()

//   return (
//     <div>
//       <h2 className="text-3xl font-bold mb-8 mt-8">
//         All Tiles
//       </h2>
//       <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
//         {
//           data.map((tile) => <TilesCard key={tile.id} tile={tile}></TilesCard>)
//         }
//       </div>
//     </div>
//   )
// }

// export default AllTiles


import TilesCard from '@/components/ui/TilesCard'
import React from 'react'

const AllTiles = async () => {
  let data = []

  try {
    // 1. Check if we have an environment variable (for your future Vercel URL), 
    // otherwise fallback to your current localhost for local dev.
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'
    
    const res = await fetch(`${baseUrl}/tiles.json`, {
      // Prevents Vercel from failing the build if localhost is unreachable at compile time
      next: { revalidate: 60 } 
    })
    
    if (res.ok) {
      data = await res.json()
    }
  } catch (error) {
    console.log("Fetch failed during build, falling back to empty array or direct mock data:", error.message)
    // Safe fallback to prevent your Vercel deployment from crashing
    data = [] 
  }

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 mt-8">
        All Tiles
      </h2>
      
      {data.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {data.map((tile) => (
            <TilesCard key={tile.id} tile={tile} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No tiles found or loading locally...</p>
      )}
    </div>
  )
}

export default AllTiles