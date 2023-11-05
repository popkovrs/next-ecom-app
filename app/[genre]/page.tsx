import Link from "next/link";

import { client } from "../lib/sanity";
import Image from "next/image";
import { simplifiedEvent } from './../lib/interface';


async function getData(genre: string) {
    const query = `*[_type == "event" && genre->name == "${genre}"]{
        _id, "imageUrl": images[0].asset->url,
          price,
          name,
          date,
          city,
          "slug": slug.current,
          "genreName": genre -> name
      }`

      const data = await client.fetch(query);

      return data;
}

export const dynamic = "force-dynamic";

export default async function genrePage({
    params
}: {
    params: {genre : string};
}) {
    const data : simplifiedEvent[] = await getData(params.genre)

    return (
        <div className='bg-white'>
        <div className='mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8'>
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl font-bold tracking-tight text-black'>{params.genre} Events</h2>
               
            </div>

            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {data.map((events) => (
                    <div key={events._id} className='group relative'>
                        <div className='aspect-square w-full overflow-hidden rounded-md bg-black group-hover:opacity-75 lg:h-80'>
                            <Image src={events.imageUrl} alt="events Image" className='w-full h-full object-cover object-center lg:h-full lg:w-full' width={300} height={300}/>
                        </div>

                        <div className='mt-4 flex justify-between'>
                            <div>
                                <h3 className='text-sm text-black'>
                                    <Link href={`/events/${events.slug}`}>
                                    {events.name} 
                                    <div className='flex-col'>
                                        <p>{events.date}</p>
                                        <p>{events.city}</p>
                                    </div>
                                    </Link>
                                </h3>
                                <p className='mt-1 text-sm text-black'>{events.genre}</p>
                            </div>
                            <p className='text-sm font-medium text-black'>{events.price}$</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    )
}