import AddToCart from "@/app/components/AddToCart";
import CheckoutNow from "@/app/components/CheckoutNow";
import ImageGallery from "@/app/components/ImageGallery";
import { fullEvent } from "@/app/lib/interface";
import { client } from "@/app/lib/sanity";



async function getData(slug: string) {

    const query = `*[_type == "event" && slug.current == "${slug}"][0] 
    {_id, images, name, date, city, place, price, description, "slug": slug.current, "genreName": genre->name, price_id }`

    const data = await client.fetch(query);
    
    return data;
}

export const dynamic = "force-dynamic";

export default async function EventPage({
    params
} : {
    params : { slug : string};
}) {
    const data: fullEvent = await getData(params.slug)
    return (
        <div className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <ImageGallery images={data.images} />
    
              <div className="md:py-4">
                <div className="mb-2 md:mb-3">
                  <span className="mb-0.5 inline-block text-gray-500">
                    {data.genre}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                    {data.name} | {data.date}
                  </h2>
                  <div className="mb-6 flex items-center gap-3 md:mb-10">
                  {data.place} | {data.city}
                </div>
               
                </div>
    
                
                <div className="mb-4">
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-gray-800 md:text-2xl">
                      ${data.price}
                    </span>
                    
                  </div>
    
                  
                </div>
    
    
                <div className="flex gap-2.5">
                <AddToCart
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="USD"
                description={data.description}
                image={data.images[0]}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
                </div>
    
                <p className="mt-12 text-base text-gray-500 tracking-wide">
                  {data.description}
                </p>
                
              </div>
            </div>
          </div>
        </div>
      );
}