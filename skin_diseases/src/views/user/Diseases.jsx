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


  {/* <!--About US--> */}
  <section class="w-[98%] mx-auto bg-[#696969] border-2 mt-20 pt-5 pb-5 mb-2">
    <h2 class="w-[50%] mx-auto text-slate-900 font-Caveat font-semibold text-center text-3xl">About Us
    </h2>
    <p class="w-[90%] mx-auto mt-3 text-[#fff] text-sm font-normal leading-6 text-center">Lorem ipsum dolor sit
      amet
      consectetur
      adipisicing
      elit. Nihil
      repudiandae fugit officia quam quidem perferendis exercitationem sint unde, perspiciatis saepe odit eum provident
      harum laboriosam doloremque cupiditate veniam aliquid magni laudantium at delectus ipsam dolores rerum error!
      Laudantium magnam iure non, iste minus maiores veniam? Nesciunt similique aliquid error cupiditate!</p>
    <div class="w-[80%] pt-10 mt-5 mx-auto grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-y-10 md:gap-x-6">
      <div
        class="max-w-lg bg-white shadow-2xl pb-10 text-black hover:bg-emerald-400 hover:text-white hover:transition-all hover:ease-in-out hover:duration-1000 group">
        <p class="mt-5 text-center"><i class="text-4xl skew-y-6 fa-solid fa-book"></i></p>
        <h2 class="uppercase text-3xl text-center font-semibold relative py-3 about-left-right">
          Mission</h2>
        <p class="mt-8 mx-4 text-sm text-center font-medium">Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Facere neque eligendi commodi quo deserunt reiciendis maxime nobis eveniet
          asperiores, unde possimus, aperiam placeat, debitis earum quidem officiis laudantium quae minima. Debitis
          ducimus itaque nostrum aspernatur ex? Quidem eos maxime, repudiandae saepe nam debitis quae hic rem dicta
          optio voluptatum. Recusandae eum eligendi assumenda expedita voluptate!</p>
      </div>
      <div
        class="max-w-lg bg-zinc-50 shadow-2xl pb-10 text-black hover:bg-teal-400 hover:text-white hover:transition-all hover:ease-in-out hover:duration-1000 group">
        <p class="text-center mt-5"><i class="text-4xl fa-solid fa-earth-asia"></i></p>
        <h2 class="uppercase text-3xl text-center font-semibold relative py-3 about-left-right">Vision</h2>
        <p class="mt-8 mx-4 text-sm text-center font-medium">Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Facere neque eligendi commodi quo deserunt reiciendis maxime nobis eveniet
          asperiores, unde possimus, aperiam placeat, debitis earum quidem officiis laudantium quae minima. Debitis
          ducimus itaque nostrum aspernatur ex? Quidem eos maxime, repudiandae saepe nam debitis quae hic rem dicta
          optio voluptatum. Recusandae eum eligendi assumenda expedita voluptate!</p>
      </div>
      <div
        class="max-w-lg bg-white shadow-2xl pb-10 text-black hover:bg-blue-400 hover:text-white hover:transition-all hover:ease-in-out hover:duration-1000 group">
        <p class="text-center mt-5"><i class="text-4xl fa-solid fa-pencil"></i></p>
        <h2 class="uppercase text-3xl text-center font-semibold relative py-3 about-left-right">Achievements</h2>
        <p class="mt-8 mx-4 text-sm text-center font-medium">Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Facere neque eligendi commodi quo deserunt reiciendis maxime nobis eveniet
          asperiores, unde possimus, aperiam placeat, debitis earum quidem officiis laudantium quae minima. Debitis
          ducimus itaque nostrum aspernatur ex? Quidem eos maxime, repudiandae saepe nam debitis quae hic rem dicta
          optio voluptatum. Recusandae eum eligendi assumenda expedita voluptate!</p>
      </div>
    </div>
  </section>


  {/* <!--Footer Section--> */}
  <section class="w-[98%] mx-auto bg-slate-700 mt-20 pt-10 pb-5 mb-2">
    <div class="w-[90%] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:justify-items-center gap-y-10">
        <div class="flex flex-col items-start gap-y-2">
          <h2 class="text-white uppercase font-semibold relative pb-1 footer-left-half">
            Products</h2>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Drag And Drop</p>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Visual Studio X</p>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Easy Content</p>
        </div>
        <div class="flex flex-col items-start gap-y-2">
          <h2 class="text-white uppercase font-semibold relative pb-1 footer-left-half">Resources</h2>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Industries & Tools</p>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Use Cases</p>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Blog</p>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Online Evernet</p>
        </div>
        <div class="flex flex-col items-start gap-y-2">
          <h2 class="text-white uppercase font-semibold relative pb-1 footer-left-half">Company</h2>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Diversity & Inclusion</p>
          <p class="text-sm text-gray-400 hover:text-cyan-500">About Us</p>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Press</p>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Customer Stories</p>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Online Communities</p>
        </div>
        <div class="flex flex-col items-start gap-y-2">
          <h2 class="text-white uppercase font-semibold relative pb-1 footer-left-half">Support</h2>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Documentation</p>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Tutorials & Guides</p>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Webinars</p>
          <p class="text-sm text-gray-400 hover:text-cyan-500">Open Source</p>
        </div>
      </div>

      <div class="mt-12 flex flex-col lg:flex-row justify-around items-center gap-y-10 mb-4">
        <div class="text-sm text-gray-400">
          <span class="text-white mr-2"><i class="fa-regular fa-copyright"></i></span> 2022 Apply. All rights
          reserved.
        </div>
        <div class="text-sm text-gray-400 flex space-x-2">
          <a class="hover:text-cyan-500" href="#">Terms</a>
          <a class="hover:text-cyan-500" href="#">Privacy</a>
          <a class="hover:text-cyan-500" href="#">Policy</a>
        </div>
        <div class="flex justify-center items-center space-x-8 text-3xl flex-wrap gap-y-6">
          <a class="footer-link group" href="#"><i class="fa-brands fa-facebook text-[#3b5998] footer-icon"></i></a>
          <a class="footer-link group" href=" #"><i class="fa-brands fa-twitter text-[#00ACEE] footer-icon"></i></a>
          <a class="footer-link group" href=" #"><i class="fa-brands fa-github text-black footer-icon"></i></a>
          <a class="footer-link group" href="#"><i class="fa-brands fa-linkedin text-[#0e76a8] footer-icon"></i></a>
          <a class="footer-link group" href="#"><i class="fa-brands fa-instagram text-[#8a3ab9] footer-icon"></i></a>
          <a class="footer-link group" href="#"><i class="fa-brands fa-youtube text-[#FF0000] footer-icon"></i></a>
        </div>
      </div>
    </div>
  </section>
    </div>
  )
}
