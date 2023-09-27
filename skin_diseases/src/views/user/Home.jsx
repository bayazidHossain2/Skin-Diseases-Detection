import React, { useState } from 'react'
import heroImg from '/hero.jpeg'
import axiosClient from '../../axios-client';


export default function Home() {

  const [image, setImage] = useState();

  const upload = () => {
    const data = new FormData();
    data.append('image', image);
    console.log(data);
    axiosClient.post('/image/save', data)
      .then(() => {
        console.log('profile update success');
        closeBox();
        navigate('/profile')
      })
  }

  return (
    <div>
      {/* Hero  */}
      <div className="relative">
        <img className=' w-full' src={heroImg} alt="" />
        <div className="absolute inset-0 flex items-center justify-center p-4 lg:p-10">
          <div className="flex flex-col space-y-4 text-center bg-orange-500 rounded-lg shadow-md bg-opacity-50 p-4 lg:space-y-6  lg:p-8">
            <h2 className=' text-xl font-bold text-white'>Set Your Test Image</h2>

            <input onChange={(ev) => {
              setImage(ev.target.files[0]);
              console.log(ev.target.files[0])
            }} className='text-lg px-2 py-2 border-2 border-orange-300 rounded-xl text-black' type="file" />
            {/* <input className='flex flex-col' type="file" /> */}
            <button onClick={upload} className={image ? 'bg-orange-800 border-2 hover:bg-orange-700 border-orange-300 py-2 text-xl font-bold text-white rounded-2xl' : 'hidden'}>Submit</button>
          </div>

        </div>
      </div>

      <div class="h-full mb-10">
        {/* Statistics Cards  */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4 lg:p-10">
          <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">1,257</p>
              <p>Visitors</p>
            </div>
          </div>
          <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">557</p>
              <p>Orders</p>
            </div>
          </div>
          <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">$11,257</p>
              <p>Sales</p>
            </div>
          </div>
          <div class="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">$75,257</p>
              <p>Balances</p>
            </div>
          </div>
        </div>
        {/* ./Statistics Cards  */}

        <div class="grid grid-cols-1 lg:grid-cols-1 p-4 gap-4 lg:p-10">

          {/* Social Traffic */}
          <div class="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
            <div class="rounded-t mb-0 px-0 border-0">
              <div class="flex flex-wrap items-center px-4 py-2">
                <div class="relative w-full max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-gray-900 dark:text-gray-50">Diseases Search</h3>
                </div>
                <div class="relative w-full max-w-full flex-grow flex-1 text-right">
                  <button class="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                </div>
              </div>

              <div className="flex flex-col bg-red-100 w-full">
                <div className="flex flex-row p-2 justify-between">

                  <div class="px-4 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Referral</div>
                  <div class="px-4 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Visitors</div>
                  <div class="px-4 bg-gray-100 text-gray-500 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px">Parcentage</div>
                </div>
                {/* Catagory Parcentage */}
                <div className="w-full">
                  <div class="text-gray-700 w-full flex flex-row">
                    <h3 class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 whitespace-nowrap p-4 text-left text-sm font-semibold">Normal</h3>
                    <p class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">5,480</p>
                    <div class="border-t-0 px-4 w-1/2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="mr-2">70%</span>
                        <div class="relative w-full">
                          <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div class="shadow-none flex flex-col w-[70%] text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Catagory Parcentage */}
                <div className="w-full">
                  <div class="text-gray-700 w-full flex flex-row">
                    <h3 class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Normal</h3>
                    <p class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">5,480</p>
                    <div class="border-t-0 px-4 w-1/2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="mr-2">70%</span>
                        <div class="relative w-full">
                          <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div class="shadow-none flex flex-col w-[70%] text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Catagory Parcentage */}
                <div className="w-full">
                  <div class="text-gray-700 w-full flex flex-row">
                    <h3 class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Normal</h3>
                    <p class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">5,480</p>
                    <div class="border-t-0 px-4 w-1/2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="mr-2">70%</span>
                        <div class="relative w-full">
                          <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div class="shadow-none flex flex-col w-[70%] text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Catagory Parcentage */}
                <div className="w-full">
                  <div class="text-gray-700 w-full flex flex-row">
                    <h3 class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Normal</h3>
                    <p class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">5,480</p>
                    <div class="border-t-0 px-4 w-1/2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="mr-2">70%</span>
                        <div class="relative w-full">
                          <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div class="shadow-none flex flex-col w-[70%] text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Catagory Parcentage */}
                <div className="w-full">
                  <div class="text-gray-700 w-full flex flex-row">
                    <h3 class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Normal</h3>
                    <p class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">5,480</p>
                    <div class="border-t-0 px-4 w-1/2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="mr-2">70%</span>
                        <div class="relative w-full">
                          <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div class="shadow-none flex flex-col w-[70%] text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                {/* Catagory Parcentage */}
                <div className="w-full">
                  <div class="text-gray-700 w-full flex flex-row">
                    <h3 class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Normal</h3>
                    <p class="border-t-0 px-4 w-1/4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">5,480</p>
                    <div class="border-t-0 px-4 w-1/2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      <div class="flex items-center">
                        <span class="mr-2">70%</span>
                        <div class="relative w-full">
                          <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                            <div class="shadow-none flex flex-col w-[70%] text-center whitespace-nowrap text-white justify-center bg-blue-600"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="block w-full overflow-x-auto bg-red-100">
                <table class="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr className='flex flex-row justify-between w-full'>
                    </tr>
                  </thead>
                  <tbody>

                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Basal Cell Carcinoma</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">3,380</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <span class="mr-2">40%</span>
                          <div class="relative w-full">
                            <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div class="shadow-none flex flex-col w-[40%] text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Actinic Keratosis</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">4,105</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <span class="mr-2">45%</span>
                          <div class="relative w-full">
                            <div class="overflow-hidden h-2 text-xs flex rounded bg-pink-200">
                              <div class="shadow-none flex flex-col w-[45%] text-center whitespace-nowrap text-white justify-center bg-pink-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Seborrheic Keratosis</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">4,985</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <span class="mr-2">60%</span>
                          <div class="relative w-full">
                            <div class="overflow-hidden h-2 text-xs flex rounded bg-red-200">
                              <div class="shadow-none flex flex-col w-[60%] text-center whitespace-nowrap text-white justify-center bg-red-500"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Dermatofibrosarcoma Protuberans</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">2,250</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <span class="mr-2">30%</span>
                          <div class="relative w-full">
                            <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div class="shadow-none flex flex-col w-[30%] text-center whitespace-nowrap text-white justify-center bg-blue-700"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">Melanoma</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">2,250</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <span class="mr-2">10%</span>
                          <div class="relative w-full">
                            <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div class="shadow-none flex flex-col w-[30%] text-center whitespace-nowrap text-white justify-center bg-blue-700"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr class="text-gray-700 dark:text-gray-100">
                      <th class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left">melanocytic nevi</th>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">2,250</td>
                      <td class="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div class="flex items-center">
                          <span class="mr-2">20%</span>
                          <div class="relative w-full">
                            <div class="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div class="shadow-none flex flex-col w-[30%] text-center whitespace-nowrap text-white justify-center bg-blue-700"></div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* ./Social Traffic */}

        </div>
        {/* Contact Form  */}
        <div class="mt-8 mx-4">
          <div class="grid grid-cols-1 md:grid-cols-2">
            <div class="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
              <h1 class="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">Get in touch</h1>
              <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">Fill in the form to submit any query</p>

              <div class="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">Dhaka, Street, State, Postal Code</div>
              </div>

              <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">+880 1234567890</div>
              </div>

              <div class="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" class="w-8 h-8 text-gray-500">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div class="ml-4 text-md tracking-wide font-semibold w-40">info@demo.com</div>
              </div>
            </div>
            <form class="p-6 flex flex-col justify-center">
              <div class="flex flex-col">
                <label for="name" class="hidden">Full Name</label>
                <input type="name" name="name" id="name" placeholder="Full Name" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
              </div>

              <div class="flex flex-col mt-2">
                <label for="email" class="hidden">Email</label>
                <input type="email" name="email" id="email" placeholder="Email" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
              </div>

              <div class="flex flex-col mt-2">
                <label for="tel" class="hidden">Number</label>
                <input type="tel" name="tel" id="tel" placeholder="Telephone Number" class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
              </div>

              <button type="submit" class="md:w-32 bg-blue-600 dark:bg-gray-100 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-500 dark:hover:bg-gray-200 transition ease-in-out duration-300">Submit</button>
            </form>
          </div>
        </div>
        {/* ./Contact Form  */}

        {/* External resources  */}
        <div class="mt-8 mx-4">
          <div class="p-4 bg-blue-50 dark:bg-gray-800 dark:text-gray-50 border border-blue-500 dark:border-gray-500 rounded-lg shadow-md">
            <h4 class="text-lg font-semibold">Have taken ideas & reused components from the following resources:</h4>
            <ul>
              <li class="mt-3">
                <a class="flex items-center text-blue-700 dark:text-gray-100" href="https://tailwindcomponents.com/component/sidebar-navigation-1" target="_blank">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span class="inline-flex pl-2">Sidebar Navigation</span>
                </a>
              </li>
              <li class="mt-2">
                <a class="flex items-center text-blue-700 dark:text-gray-100" href="https://tailwindcomponents.com/component/contact-form-1" target="_blank">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span class="inline-flex pl-2">Contact Form</span>
                </a>
              </li>
              <li class="mt-2">
                <a class="flex items-center text-blue-700 dark:text-gray-100" href="https://tailwindcomponents.com/component/trello-panel-clone" target="_blank">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span class="inline-flex pl-2">Section: Task Summaries</span>
                </a>
              </li>
              <li class="mt-2">
                <a class="flex items-center text-blue-700 dark:text-gray-100" href="https://windmill-dashboard.vercel.app/" target="_blank">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span class="inline-flex pl-2">Section: Client Table</span>
                </a>
              </li>
              <li class="mt-2">
                <a class="flex items-center text-blue-700 dark:text-gray-100" href="https://demos.creative-tim.com/notus-js/pages/admin/dashboard.html" target="_blank">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span class="inline-flex pl-2">Section: Social Traffic</span>
                </a>
              </li>
              <li class="mt-2">
                <a class="flex items-center text-blue-700 dark:text-gray-100" href="https://mosaic.cruip.com" target="_blank">
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span class="inline-flex pl-2">Section: Recent Activities</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
