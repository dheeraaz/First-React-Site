import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../Sub-Components";
import { FaFacebookF, FaTwitter, FaDiscord } from "react-icons/fa6";

function Footer() {
  return (
    <div className=" bg-primary md:mt-12">
      <div className="container flex flex-col items-center justify-center">
        <div className=" hidden  md:flex justify-around items-center h-28 w-[90%] bg-[#F3F4F6] -translate-y-3/4 rounded-md shadow-lg ">
          <div>
            <p className=" font-poppins font-medium text-md text-gray-500">
              Wants To Try Our Products?
            </p>
            <p className=" font-poppins font-medium text-lg text-gray-600">
              Order Today...
            </p>
          </div>
          <NavLink to="/services">
            <Button btnText="Products" />
          </NavLink>
        </div>

        <div className="grid grid-cols-[auto] gap-14 md:justify-between md:-mt-12 md:grid-cols-[auto_auto_auto_auto]  w-[90%]">
          <div>
            <p className=" text-white font-medium text-lg mb-2">Lorem Ipsum</p>
            <p className="text-gray-300 font-normal text-md">
              Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
            </p>
          </div>
          <div>
            <p className=" text-white font-medium text-lg mb-2">
              Subscibe To Get Important Offers
            </p>
            <input
              type="email"
              placeholder="Your Email"
              autoComplete="off"
              className=" h-10 outline-none w-[90%] mb-4"
            />
            <Button btnText="Subscribe"></Button>
          </div>
          <div>
            <p className=" text-white font-medium text-lg mb-2">Follow Us</p>
            <div className="flex gap-4">
              <div className="border-2 border-white p-2 w-fit h-fit rounded-full hover:cursor-pointer hover:bg-white group">
                <FaFacebookF className=" text-white group-hover:text-black" />
              </div>
              <div className="border-2 border-white p-2 w-fit h-fit rounded-full hover:cursor-pointer hover:bg-white group">
                < FaTwitter className=" text-white group-hover:text-black" />
              </div>
              <div className="border-2 border-white p-2 w-fit h-fit rounded-full hover:cursor-pointer hover:bg-white group">
                <FaDiscord className=" text-white group-hover:text-black" />
              </div>
            </div>
          </div>
          <div>
            <p className=" text-white font-medium text-lg mb-2">Call Us</p>
            <a
              href="tel:9810xxxxxx"
              className="text-gray-300 font-normal text-md hover:text-white"
            >
              +977 9810xxxxxx
            </a>
          </div>
        </div>

        <hr className="w-full h-[2px] my-6 bg-white" />

        <div className="grid grid-cols-[auto] gap-14 md:justify-around md:grid-cols-[auto_auto]  w-[90%]">
          <div>
            <p className="text-gray-300 font-normal text-md hover:text-white hover:underline hover:underline-offset-4 hover:cursor-pointer">
              PRIVACY POLICY
            </p>
            <p className="text-gray-300 font-normal text-md hover:text-white hover:underline hover:underline-offset-4 hover:cursor-pointer">
              TERMS AND CONDITIONS
            </p>

          </div>
          <div>
            <p className="text-gray-300 font-normal text-md">
              @2024 Dhiraj Acharya. All Rights Reserved.
            </p>
          </div>


        </div>

      </div>
    </div>
  );
}

export default Footer;
