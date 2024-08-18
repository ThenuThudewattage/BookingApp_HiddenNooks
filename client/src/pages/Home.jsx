import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper';
import 'swiper/css/bundle';
import ListingItem from '../components/ListingItem';

export default function Home() {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  SwiperCore.use([Navigation]);
  //console.log(offerListings);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try{
        const res = await fetch('/api/listing/get?offer=true&limit=3');
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
        
      } catch (error){
        console.log(error);
      }
    }

    const fetchRentListings = async () => {
      try{
        const res = await fetch('/api/listing/get?type=rent&limit=3');
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error){
        console.log(error);
      }
    }

    const fetchSaleListings = async () => {
      try{
        const res = await fetch('/api/listing/get?type=sale&limit=3');
        const data = await res.json();
        setSaleListings(data);
      } catch (error){
        console.log(error);
      }
    }
    fetchOfferListings();
  }, []);

  return (
    <div>
      {/* top */}
        <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto"> 
          <h1 className='text-slate-50 font-bold 
          text-3xl lg:text-4xl'>Find Your Next Adventure, Anytime, Anywhere</h1>

          <div className='text-gray-400 text-xs sm:text-m '>
            Welcome to Hidden Nooks, where your next adventure is just a click away. 
            Whether it’s a quick getaway or a dream vacation, we make booking easy and stress-free. 
            <br/>Explore unique destinations, find the perfect stay, and let us help you create unforgettable memories. 
            Start your journey with Hidden Nooks today.
          </div>

          <Link to ={"/search"} className='text-xs sm:text-sm
          text-blue-400 font-bold hover:underline'>Book Now...</Link>
        </div>

      {/* swiper */}

      <Swiper navigation>
        {
        offerListings && offerListings.length > 0 && 
        offerListings.map((listing) => (
          <SwiperSlide>
            <div style={{background: `url(${listing.imageUrls[0]}) center no-repeat`, backgroundSize: "cover"}} className='h-[500px]' key={listing._id}>

            </div>
          </SwiperSlide>
        ))
      }
      </Swiper>

      {/* listing results */}
      <div className='max-w-6xl mx-auto p-3 flex flex-col 
      gap-8 my-10 '>
        {offerListings && offerListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold 
              text-slate-50'>Recent Offers</h2>
              <Link className='text-sm text-blue-400 hover:underline' to ={'/search?offer=true'}>
                Show more offers 
              </Link>
            </div>
            <div className='flex flex-wrap gap-8'>
              {
                offerListings.map((listing) => (
                  <ListingItem listing ={listing} key={listing._id}/>
                ))
              }
            </div>
          </div>
        )}
        {rentListings && rentListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold 
              text-slate-50'>Recent Hotels for Rent</h2>
              <Link className='text-sm text-blue-400 hover:underline' to ={'/search?type=rent'}>
                Show more places
              </Link>
            </div>
            <div className='flex flex-wrap gap-8'>
              {
                rentListings.map((listing) => (
                  <ListingItem listing ={listing} key={listing._id}/>
                ))
              }
            </div>
          </div>
        )}
        {saleListings && saleListings.length > 0 && (
          <div>
            <div className='my-3'>
              <h2 className='text-2xl font-semibold 
              text-slate-50'>Recent Home & Apartments for Rent</h2>
              <Link className='text-sm text-blue-400 hover:underline' to ={'/search?type=sale'}>
                Show more places 
              </Link>
            </div>
            <div className='flex flex-wrap gap-8'>
              {
                offerListings.map((listing) => (
                  <ListingItem listing ={listing} key={listing._id}/>
                ))
              }
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
