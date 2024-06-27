//import React from 'react'

import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="flex  flex-col sm:flex-row p-3 border border-teal-500 
        justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
        <div className="flex-1 justify-center flex flex-col">
              <h2 className="text-2xl ">
                Want to Secure Your Smart Contract ?
              </h2>
              <p className="text-gray-500 my-2">
              Excellence in Smart Contract Security Auditing
              </p>
              <Button gradientDuoTone="purpleToPink" className="rounded-tl-xl rounded-bl-none">
                     <Link to="/dashboard?tab=request"
                     >Request Now</Link>
              </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/B.jpg?alt=media&token=c3999152-6668-4aa0-866f-dda9fd3fe6fb" 
            alt="" />
        </div>
    </div>
  )
}
