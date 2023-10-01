import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';

export default function Diseases() {

  const [diseases, setDiseases] = useState();


  let counter = 0;

  useEffect(() => {
    axiosClient.get('/diseases/all')
      .then(({ data }) => {
        setDiseases(data);
        console.log('data added');
        console.log(data);
      })
  }, [])

  return (
    <div className=' bg-orange-200 mx-auto md:w-[80%]'>
      
      <section class="max-w-[90%] min-h-screen mx-auto md:max-w-[80%]">
        <div class="w-full">
          <h2 class="max-w-sm mx-auto pt-16 font-Caveat text-4xl font-semibold text-black flex justify-center items-center">
            About Diseases</h2>

          {diseases &&
            diseases.map(dis => (

              (counter++ & 1) ?
                <div class="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 pb-20">
                  <div class="order-1 lg:order-2 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 lg:aspect-w-3 lg:aspect-h-1">
                    <img src={dis.imageUrl ? `${import.meta.env.VITE_API_BASE_URL}` + '/image/diseases?link=' + dis.imageUrl : avater} alt="background" className="object-cover rounded-lg" />
                  </div>
                  <div
                    className="order-2 lg:order-1 lg:col-span-2 bg-orange-100 rounded-md px-4 py-10 flex flex-col items-start justify-start gap-8 shadow-lg rounded-b-md">
                    <h1 class="font-Caveat text-3xl font-semibold tracking-widest text-teal-900">{dis.title}</h1>
                    <p class="leading-7 font-medium text-sm text-justify font-mono text-violet-900">{dis.description}</p>
                    <div class="self-end lg:self-start flex justify-end items-center">
                      <a href={dis.moreLink} target="_blank" className="text-gray-700 target:block font-Indie font-semibold text-lg py-1 px-2 outline outline-pink-500 rounded-md shadow-lg hover:text-white hover:outline-none hover:bg-pink-400 hover:font-normal">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
                :
                <div class="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 py-20">
                  <div class="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 lg:aspect-w-3 lg:aspect-h-1">
                    <img src={dis.imageUrl ? `${import.meta.env.VITE_API_BASE_URL}` + '/image/diseases?link=' + dis.imageUrl : avater} alt="background" className="object-cover rounded-lg" />
                  </div>
                  <div
                    class="lg:col-span-2 bg-orange-100 px-4 py-10 flex flex-col items-start justify-start gap-8 shadow-lg rounded-md">
                    <h1 class="font-Caveat text-3xl font-semibold tracking-widest text-teal-900">{dis.title}</h1>
                    <p class="leading-7 font-medium text-sm text-justify font-mono text-[#0c4a6e]">{dis.description}</p>
                    <div className={dis.moreLink ? "self-end flex justify-end items-center" : "hidden"}>
                      <a href={dis.moreLink} target="_blank" className="text-gray-700 target:block font-Indie font-semibold text-lg py-1 px-2 outline outline-pink-500 rounded-md shadow-lg hover:text-white hover:outline-none hover:bg-pink-400 hover:font-normal">
                        More Details
                      </a>
                    </div>
                  </div>
                </div>
            ))

          }
        </div>
      </section>
    </div>
  )
}
