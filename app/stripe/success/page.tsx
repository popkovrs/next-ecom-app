import {  CheckCheck  } from "lucide-react"

export default function stripeSuccess() {
    return(
        <div className="mt-32 md:max-w-[50vw] mx-auto">
            <CheckCheck className='text-green-500 w-16 h-16 mx-auto my-6' />
            <div className="text-center"><h3 className="md:text-2xl text-base text-gray-900 font-bold text-center">Payment Successful!</h3></div>
           
        </div>
    )
}