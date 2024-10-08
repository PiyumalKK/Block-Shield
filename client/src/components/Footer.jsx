/* eslint-disable react/no-unescaped-entities */
//import React from 'react'

import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble } from "react-icons/bs";

function FooterCom() {
  return (
    <Footer container className=' sticky top-0 z-50 w-full border border-t-8 border-teal-500 '>
        <div className='w-full max-w-7xl mx-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className="mt-5">
                 <Link to="/" className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white">
                 <img className="h-12 w-auto" src="https://firebasestorage.googleapis.com/v0/b/mern-blog-2579f.appspot.com/o/logo%20B.svg?alt=media&token=2c6c3803-8227-493b-9bd7-ff228e881bd3" alt="" />
              
                
                 </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-3 sm:gap-6">
                 <div>

                 <Footer.Title title="About"/>
                 <Footer.LinkGroup col>
                    <Footer.Link
                    href='https://www.wesite.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Latest Projects
                    </Footer.Link>
                    <Footer.Link
                    href='/about'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        BlockShield
                    </Footer.Link>
                 </Footer.LinkGroup>
                 </div>
                 <div>

                 <Footer.Title title="Follow Us"/>
                 <Footer.LinkGroup col>
                    <Footer.Link
                    href='https://github.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Github
                    </Footer.Link>
                    <Footer.Link
                    href='/#'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Discod
                    </Footer.Link>
                 </Footer.LinkGroup>
                 </div>
                 <div>

                 <Footer.Title title="Legal"/>
                 <Footer.LinkGroup col>
                    <Footer.Link
                    href='https://github.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                        Privacy Policy
                    </Footer.Link>
                    <Footer.Link
                    href='/#'
                    target='_blank'
                    rel='noopener noreferrer'
                    >
                       Terms &amp; Conditions
                    </Footer.Link>
                 </Footer.LinkGroup>
                 </div>
                </div>
            </div>

            <Footer.Divider />
            <div className="w-full sm:flex sm:items:center sm:justify-between">
                <Footer.Copyright href='#' by="BlockShield" year={new Date().getFullYear()} />
                <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                    <Footer.Icon href='#' icon={BsFacebook} />
                    <Footer.Icon href='#' icon={BsInstagram} />
                    <Footer.Icon href='#' icon={BsTwitter} />
                    <Footer.Icon href='#' icon={BsGithub} />
                    <Footer.Icon href='#' icon={BsDribbble} />
                </div>
            </div>
        </div>

    </Footer>
  )
}

export default FooterCom;