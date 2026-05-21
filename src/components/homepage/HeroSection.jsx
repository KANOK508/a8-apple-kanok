
import Link from "next/link";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import TilesCard from "../ui/TilesCard";


 const marqueeItems = [
    `New Arrivals: `,
    "Weekly Feature: Modern Geometric Patterns",
    "Join the Community & Share Your Designs",
    "Trending: Luxury Ceramic Collection",
    "Hot Deal: 20% Off Selected Tiles",
    "Top Rated: Modern Kitchen Tiles",
    "Customer Favorite: Matte Finish Series",
    "New Stock: Italian Marble Series",
    "Design Inspiration: Minimalist Interior Tiles",
    "Explore: Outdoor Wall Tile Collection",
  ];

const HeroSection =  async () => {
   
  const res = await fetch('https://category-a8-apple-l35b.vercel.app/tiles.json')
    const data = await res.json()
   
  return (
    <div className="w-full mt-8 relative">

      <section style={{backgroundImage: "url('/bg-hero.avif')", backgroundPosition: 'center'}} className="bg-black/10 text-white h-[78vh]  flex flex-col items-center justify-center text-center px-4 relative">
       <div className="absolute inset-0 bg-black/10"></div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Discover Your Perfect Aesthetic
        </h1>

        <Link
          href="/all-tiles"
          className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition"
        >
          Browse Now
        </Link>
      </section>
    <div className=" -mt-15 max-w-[1140px] bg-black/80  mx-auto ">
      <Marquee pauseOnHover className=" " >
        {
            marqueeItems.map((item, index)=> <p key={index} className="px-5 bg-black/80 text-white py-3 text-[21px]">{item}</p>)
        }
    </Marquee>
    </div>


      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Featured Tiles
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
           {
           data.slice(0, 8).map((tile) => <TilesCard key={tile.id} tile={tile}></TilesCard>)
        }
        </div>
        <div className="text-center">
          <Link href={'/all-tiles'} className=" px-5 shadow-md hover:scale-105 transition-all duration-300 bg-linear-to-l from-[rgb(3,83,255)] via-[#53adc4] to-[rgb(3,83,255)] py-2 font-bold text-white inline-block mt-5 bg-blue-500 rounded-full">See More </Link>
        </div>
      </section>

      
    </div>
  );
};

export default HeroSection;