import Image from "next/image";
import { client, urlFor } from './../lib/sanity';
import  Link  from 'next/link';


async function getData() {
    const query = "*[_type == 'heroImage'][0]"

    const data = await client.fetch(query)

    return data;
}

export default async function Hero() {
    const data = await getData()
    return (
        <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
            <div className="mb-8 flex flex-wrap justify-between md:mb-16">
                <div className="mb-6 flex w-full flex-col justify-center sm:mb-12 lg:mb-0 lg:w-1/3 lg:pb-24 lg:pt-24">
                    <h1 className="mb-4 text-4xl font-bold text-black sm:text-5xl md:mb-8 md:text-6xl">Unlock the Rhythm of <span className="text-[#16A34AFF]">Live</span> Music!</h1>
                    <p className="max-w-md leading-relaxed xl:text-lg">
                    Experience the thrill of live events with our ticket store, where access to your favorite concerts is just a <span className="text-[#16A34AFF]">click</span> away!  
                    </p>
                </div>
                <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-black shadow-lg md:left-16 md:top-6 lg:ml-0">
                        <Image priority src={urlFor(data.image1).url()}
                        alt="Pic1" className="object-cover object-center" width={400} height={500} />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-black shadow-lg">
                        <Image priority src={urlFor(data.image2).url()}
                        alt="Pic2" className="object-cover object-center" width={400} height={500} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex h-12 w-64 divide-x overflow-hidden rounded-lg border">
                    <Link href='/Rock' className="flex w-1/3 items-center justify-center text-black transition duration-100 hover:bg-green-300 active:bg-green-400">Rock</Link>
                    <Link href='/Electronic' className="flex w-1/3 items-center justify-center text-black transition duration-100 hover:bg-green-300 active:bg-green-400">Electronic</Link>
                    <Link href='/Hip-Hop' className="flex w-1/3 items-center justify-center text-black transition duration-100 hover:bg-green-300 active:bg-green-400">Hip-Hop</Link>
                </div>
            </div>
        </section>
    );
}