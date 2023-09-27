import React, { useEffect, useState } from 'react'
import axiosClient from '../../axios-client';

export default function About() {
  const [aboutLong, setAboutLong] = useState();
  const [mission, setMission] = useState();
  const [vision, setVision] = useState();
  const [achievement, setAchievement] = useState();



  useEffect(() => {
    axiosClient.get('/content/get?uniqueName=aboutLong')
      .then(({ data }) => {
        setAboutLong(data);
      })
    axiosClient.get('/content/get?uniqueName=mission')
      .then(({ data }) => {
        setMission(data);
      })
    axiosClient.get('/content/get?uniqueName=vision')
      .then(({ data }) => {
        setVision(data);
      })


  }, [])
  return (
    <div>
      <section class="w-[98%] mx-auto bg-orange-600 border-2 pt-5 pb-5 mb-2">
        <h2 class="w-[50%] mx-auto text-slate-900 font-Caveat font-semibold text-center text-3xl">About Us
        </h2>
        {/* About Text */}
        <p class="w-[90%] mx-auto mt-3 text-[#fff] text-sm font-normal leading-6 text-center">{aboutLong && aboutLong.content}</p>
        <div class="w-[80%] pt-10 mt-5 mx-auto grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-y-10 md:gap-x-6">
          <div
            class="max-w-lg rounded-lg bg-orange-400 shadow-2xl pb-10 text-black hover:bg-orange-500 hover:text-white hover:transition-all hover:ease-in-out hover:duration-1000 group">
            <p class="mt-5 text-center"><i class="text-4xl skew-y-6 fa-solid fa-book"></i></p>
            <h2 class="uppercase text-3xl text-center font-semibold relative py-3 about-left-right">
              Mission</h2>
            <p class="mt-8 mx-4 text-sm text-center font-medium">{mission && mission.content}</p>
          </div>
          <div
            class="max-w-lg rounded-lg bg-orange-400 shadow-2xl pb-10 text-black hover:bg-orange-500 hover:text-white hover:transition-all hover:ease-in-out hover:duration-1000 group">
            <p class="mt-5 text-center"><i class="text-4xl skew-y-6 fa-solid fa-book"></i></p>
            <h2 class="uppercase text-3xl text-center font-semibold relative py-3 about-left-right">
              Vision</h2>
            <p class="mt-8 mx-4 text-sm text-center font-medium">{vision && vision.content}</p>
          </div>
        </div>
      </section>
    </div>
  )
}
