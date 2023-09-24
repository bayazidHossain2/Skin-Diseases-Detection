import React from 'react'

export default function About() {
  return (
    <div>
      <section class="w-[98%] mx-auto bg-[#696969] border-2 pt-5 pb-5 mb-2">
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
    </div>
  )
}
