import React from "react";
import { useGlobalAppContext } from "../context/AppContext";
import { Button } from "../Sub-Components";

function Products({ sliceFrom, SliceTo, title }) {
  const { services } = useGlobalAppContext();
  return (
    <>
      <h2 className=" mt-3 mb-6 text-center font-bold text-2xl md:text-3xl">
        {title}
      </h2>
      <div className="grid grid-cols-[auto] md:grid-cols-[auto_auto] lg:grid-cols-[auto_auto_auto] justify-evenly gap-y-8">
        {services.slice(sliceFrom, SliceTo).map((currElement) => {
          const { id, image, description, category } = currElement;

          return (
            <div
              className="flex w-80 p-6 flex-col rounded-xl bg-gray-100 text-gray-900 shadow-md transition-all hover:cursor-pointer hover:bg-gray-200 group"
              key={id}
            >
              <div className="mx-4 h-40 overflow-hidden rounded-xl bg-white bg-clip-border shadow-md flex justify-center items-center group-hover:shadow-lg group-hover:animate-bounce">
                <img src={image} alt="" className=" max-h-full max-w-full" />
              </div>
              <div className="p-6">
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {category}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {`${description.slice(0, 80)} ....`}
                </p>
              </div>
              <div className="p-6 pt-0">
                <Button btnText="Read More" />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Products;
