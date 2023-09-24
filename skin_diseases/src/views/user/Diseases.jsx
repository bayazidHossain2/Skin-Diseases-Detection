import React from 'react'

export default function Diseases() {
  return (
    <div>
      {/* <!--#Cards 1--> */}
      <section class="max-w-[80%] mx-auto">
        <h2
          class="max-w-sm mx-auto mt-12 font-Caveat text-4xl font-semibold text-black flex justify-center items-center pb-12">
          #Card 1</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center items">
          {/* <!--#Number 1--> */}
          <div class="max-w-md shadow-lg rounded-md overflow-hidden ">
            <div class="aspect-w-3 aspect-h-2">
              {/* <img class="object-cover" src="./images/card-1/mountain.jpg" alt="mountain"> */}
            </div>
            <div
              class="py-6 px-4 flex flex-col justify-center items-start gap-y-3 bg-gradient-to-bl from-pink-200 to-blue-300 shadow-lg rounded-b-lg">
              <h1 class="font-Caveat text-3xl md:text-4xl font-medium text-white">Mountain</h1>
              <p class="font-Ubuntu leading-6 tracking-wider text-slate-600">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptate, earum!</p>
              <div class="mt-2 flex justify-start items-center gap-4 flex-wrap text-sm font-thin">
                <span class="inline-block bg-white rounded-full py-1 px-2">#photography</span>
                <span class="inline-block bg-white rounded-full py-1 px-2">#travel</span>
                <span class="inline-block bg-white rounded-full py-1 px-2">#winter</span>
              </div>
            </div>
          </div>

          {/* <!--#Number 2--> */}
          <div class="max-w-md shadow-lg rounded-md overflow-hidden">
            <div class="aspect-w-3 aspect-h-2">
              {/* <img class="object-cover" src="./images/card-1/mountain2.jpg" alt="mountain"> */}
            </div>
            <div
              class="py-6 px-4 flex flex-col justify-center items-start gap-y-3 bg-gradient-to-bl from-blue-200 to-lime-300 shadow-lg rounded-b-lg">
              <h1 class="font-Caveat text-3xl md:text-4xl font-medium text-white">Mountain</h1>
              <p class="font-Ubuntu leading-6 tracking-wider text-slate-600">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptate, earum!</p>
              <div class="mt-2 flex justify-start items-center gap-4 flex-wrap text-sm font-thin">
                <span class="inline-block bg-white rounded-full py-1 px-2">#photography</span>
                <span class="inline-block bg-white rounded-full py-1 px-2">#travel</span>
                <span class="inline-block bg-white rounded-full py-1 px-2">#winter</span>
              </div>
            </div>
          </div>

          {/* <!--#Number 3--> */}
          <div class="max-w-md shadow-lg rounded-md overflow-hidden">
            <div class="aspect-w-3 aspect-h-2">
              {/* <img class="object-cover" src="./images/card-1/mountain3.jpg" alt="mountain"> */}
            </div>
            <div
              class="py-6 px-4 flex flex-col justify-center items-start gap-y-3 bg-gradient-to-bl from-teal-200 to-pink-300 shadow-lg rounded-b-lg">
              <h1 class="font-Caveat text-3xl md:text-4xl font-medium text-white">Mountain</h1>
              <p class="font-Ubuntu leading-6 tracking-wider text-slate-600">Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Voluptate, earum!</p>
              <div class="mt-2 flex justify-start items-center gap-4 flex-wrap text-sm font-thin">
                <span class="inline-block bg-white rounded-full py-1 px-2">#photography</span>
                <span class="inline-block bg-white rounded-full py-1 px-2">#travel</span>
                <span class="inline-block bg-white rounded-full py-1 px-2">#winter</span>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* <!--#Card 2--> */}
      <section class="mt-20 max-w-[80%] mx-auto">
        <div class="w-full">
          <h2 class="max-w-sm mx-auto mt-6 font-Caveat text-4xl font-semibold text-black flex justify-center items-center">
            #Card 2</h2>

          {/* <!--#Number 1--> */}
          <div class="mx-auto grid grid-cols-1 lg:grid-cols-3 py-20">
            <div class="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 lg:aspect-w-3 lg:aspect-h-1">
              {/* <img src="./images/card-2/Moutain_1.jpg" alt="background" class="object-cover rounded-sm"> */}
            </div>
            <div
              class="lg:col-span-2 bg-white px-4 py-10 flex flex-col items-start justify-start gap-8 shadow-lg rounded-b-md">
              <h1 class="font-Caveat text-3xl font-semibold tracking-widest text-teal-900">Mount Everest</h1>
              <p class="leading-7 font-medium text-sm text-justify font-mono text-[#0c4a6e]">Mount Everest is Earth's
                highest
                mountain
                above sea level, located in the Mahalangur Himal sub-range of the Himalayas. The China–Nepal border runs
                across its summit point. Its elevation of 8,848.86 m was most recently established in 2020 by the Chinese
                and Nepali authorities</p>
              <div class="self-end flex justify-end items-center">
                <button type="button"
                  class="text-emerald-500 font-Indie font-semibold text-lg py-1 px-2 outline outline-emerald-500 rounded-md shadow-lg hover:text-white hover:outline-none hover:bg-emerald-400 hover:font-normal">
                  <a href="#">
                    More Details
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* <!--#Number 2--> */}
          <div class="mx-auto grid grid-cols-1 lg:grid-cols-3 pb-20">
            <div class="order-1 lg:order-2 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 lg:aspect-w-3 lg:aspect-h-1">
              {/* <img src="./images/card-2/Mountain_2.jpg" alt="background" class="object-cover rounded-sm"> */}
            </div>
            <div
              class="order-2 lg:order-1 lg:col-span-2 bg-white px-4 py-10 flex flex-col items-start justify-start gap-8 shadow-lg rounded-b-md">
              <h1 class="font-Caveat text-3xl font-semibold tracking-widest text-teal-900">Bukhansan</h1>
              <p class="leading-7 font-medium text-sm text-justify font-mono text-violet-900">Bukhansan, or Bukhan Mountain,
                is a mountain on the northern periphery of Seoul, South Korea. There are three major
                peaks, Baegundae 836.5 meters, Insubong 810.5 meters, Mangyeongdae 787.0 meters.</p>
              <div class="self-end lg:self-start flex justify-end items-center">
                <button type="button"
                  class="text-gray-700 font-Indie font-semibold text-lg py-1 px-2 outline outline-pink-500 rounded-md shadow-lg hover:text-white hover:outline-none hover:bg-pink-400 hover:font-normal">
                  <a href="#">
                    More Details
                  </a>
                </button>
              </div>
            </div>
          </div>

          {/* <!--#Number 3--> */}
          <div class="mx-auto grid grid-cols-1 lg:grid-cols-3 pb-20">
            <div class="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 lg:aspect-w-3 lg:aspect-h-1">
              {/* <img src="./images/card-2/Mountain_3.jpg" alt="background" class="object-cover rounded-sm"> */}
            </div>
            <div
              class="lg:col-span-2 bg-white px-4 py-10 flex flex-col items-start justify-start gap-8 shadow-lg rounded-b-md">
              <h1 class="font-Caveat text-3xl font-semibold tracking-widest text-teal-900">Dolomites</h1>
              <p class="leading-7 font-medium text-sm text-justify font-mono text-[#0c4a6e]">The Dolomites, also known as
                the Dolomite Mountains, Dolomite Alps or Dolomitic Alps, are a mountain range located in
                northeastern Italy. They form part of the Southern Limestone Alps and extend from the River Adige in the
                west to the
                Piave Valley in the east.</p>
              <div class="self-end flex justify-end items-center">
                <button type="button"
                  class="text-[#9333ea] font-Indie font-semibold text-lg py-1 px-2 outline outline-[#a78bfa] rounded-md shadow-lg hover:text-white hover:outline-none hover:bg-[#a78bfa] hover:font-normal">
                  <a href="#">
                    More Details
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
