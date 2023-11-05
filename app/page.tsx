import Image from 'next/image'
import Hero from './components/Hero';
import UpcomingEvents from './components/UpcomingEvents';

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <div className='bg-white pb-6 sm:pb-8 lg:pb-12'>
      <Hero />
      <UpcomingEvents />
    </div>
  )
}
