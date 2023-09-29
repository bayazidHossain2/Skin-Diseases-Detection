import React, { useEffect, useState } from 'react'
import heroImg from '/hero.jpeg'
import avater from '/avater.webp'
import axiosClient from '../../axios-client';
import { useNavigate } from 'react-router-dom';


export default function Home() {

  const [image, setImage] = useState();
  const [resultBox, setResultBox] = useState(true);
  const navigator = useNavigate();
  const [userCount, setUserCount] = useState(0);
  const [diseasesCount, setDiseasesCount] = useState(0);

  useEffect(() => {
    axiosClient.get('/user/count')
      .then(({ data }) => {
        setUserCount(data);
      })
    axiosClient.get('/diseases/count')
      .then(({ data }) => {
        setDiseasesCount(data);
      })


  }, [])

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
      <div className={resultBox ? ' opacity-50 pointer-events-none' : ''}>
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

        {/* Statistics  */}
        <div class="h-full mb-10">
          {/* Statistics Cards  */}
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4 lg:p-10">
            <div class="bg-orange-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-orange-600 dark:border-gray-600 text-white font-medium group">
              <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="stroke-current text-black transform transition-transform duration-500 ease-in-out"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <div class="text-right">
                <p class="text-2xl">{userCount}</p>
                <p>Total User</p>
              </div>
            </div>
            <div class="bg-orange-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-orange-600 dark:border-gray-600 text-white font-medium group">
              <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg className='p-2' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div>
              <div class="text-right">
                <p class="text-2xl">12145</p>
                <p>Total Search</p>
              </div>
            </div>
            <div onClick={(ev) => { ev.preventDefault(); navigator('/diseases') }} class="bg-orange-500 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-orange-600 dark:border-gray-600 text-white font-medium group">
              <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg width="30" height="30" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>number_sign [#110]</title> <desc>Created with Sketch.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Dribbble-Light-Preview" transform="translate(-382.000000, -7721.000000)" fill="#000000"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M332,7571 L336,7571 L336,7567 L332,7567 L332,7571 Z M342,7567 L342,7565 L338,7565 L338,7561 L336,7561 L336,7565 L332,7565 L332,7561 L330,7561 L330,7565 L326,7565 L326,7567 L330,7567 L330,7571 L326,7571 L326,7573 L330,7573 L330,7577 L332,7577 L332,7573 L336,7573 L336,7577 L338,7577 L338,7573 L342,7573 L342,7571 L338,7571 L338,7567 L342,7567 Z" id="number_sign-[#110]"> </path> </g> </g> </g> </g></svg>
              </div>
              <div class="text-right">
                <p class="text-2xl">{diseasesCount}</p>
                <p>Number or Diseases</p>
              </div>
            </div>
            <div onClick={(ev) => { ev.preventDefault(); navigator('/feedback') }} class="bg-orange-500  shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-orange-600 text-white font-medium group">
              <div class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                <svg width="30" height="30" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M7.549 10.078c.46.182.88.424 1.258.725.378.3.701.65.97 1.046a4.829 4.829 0 0 1 .848 2.714V15H9.75v-.438a3.894 3.894 0 0 0-1.155-2.782 4.054 4.054 0 0 0-1.251-.84 3.898 3.898 0 0 0-1.532-.315A3.894 3.894 0 0 0 3.03 11.78a4.06 4.06 0 0 0-.84 1.251c-.206.474-.31.985-.315 1.531V15H1v-.438a4.724 4.724 0 0 1 .848-2.713 4.918 4.918 0 0 1 2.229-1.77 2.994 2.994 0 0 1-.555-.493 3.156 3.156 0 0 1-.417-.602 2.942 2.942 0 0 1-.26-.683 3.345 3.345 0 0 1-.095-.739c0-.423.08-.82.24-1.189a3.095 3.095 0 0 1 1.626-1.627 3.067 3.067 0 0 1 2.386-.007 3.095 3.095 0 0 1 1.627 1.627 3.067 3.067 0 0 1 .157 1.928c-.06.237-.148.465-.266.684a3.506 3.506 0 0 1-.417.608c-.16.187-.345.35-.554.492zM5.812 9.75c.301 0 .584-.057.848-.17a2.194 2.194 0 0 0 1.162-1.163c.119-.269.178-.554.178-.854a2.138 2.138 0 0 0-.643-1.538 2.383 2.383 0 0 0-.697-.472 2.048 2.048 0 0 0-.848-.178c-.3 0-.583.057-.847.17a2.218 2.218 0 0 0-1.17 1.17c-.113.264-.17.547-.17.848 0 .3.057.583.17.847.115.264.27.497.466.697a2.168 2.168 0 0 0 1.552.643zM15 1v7h-1.75l-2.625 2.625V8H9.75v-.875h1.75v1.388l1.388-1.388h1.237v-5.25h-8.75v1.572a7.255 7.255 0 0 0-.438.069 2.62 2.62 0 0 0-.437.123V1H15z"></path></g></svg>
              </div>
              <div class="text-right">
                <p class="text-2xl">$75,257</p>
                <p>Total Feedback</p>
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
        </div>
      </div>
      {/* Result box container */}
      {/* Box Container  */}
      <div className={resultBox ? "fixed rounded-lg pb-10 bg-orange-300 bg-opacity-80 p-8 top-5 md:top-10 lg:top-16 min-h-fit w-[60%] left-[20%]" : " hidden "}>
        <div className="flex flex-col">
          <div className="flex flex-row mb-4 justify-between">
            <h2 className=' text-2xl font-bold text-blue-900'>Search Result</h2>
            <button onClick={(ev) => { ev.preventDefault(); setResultBox(false) }} className=' bg-slate-800 rounded-md text-white px-3'>Close</button>
          </div>
          {/* Image */}
          <div className="flex flex-row justify-center ">
            <img src={false ? 'http://localhost:8081/image/profile?link=' : avater} className='max-h-[40vh] border-4 border-orange-500 rounded-lg' />
          </div>
          {/* Result show section */}
          <div className="flex flex-col space-y-4 mt-10 lg:flex-row lg:space-y-0 justify-between">
            <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0">
              <h2 className=' text-2xl font-bold'>Diseases Name : </h2>
              <h2 className=' text-2xl font-semibold'>Diseas</h2>
            </div>
            <div className="flex flex-col lg:flex-row lg:space-x-2 lg:space-y-0">
              <h2 className=' text-2xl font-bold'>With Confidence : </h2>
              <h2 className=' text-2xl font-semibold'>78%</h2>
            </div>
          </div>
          {/* Feedback Section */}
          <div className="flex flex-col mt-4">
            <textarea placeholder='Write your feedback about the result..' className='h-[12vh] p-2 w-full border-2 border-orange-600 rounded-lg' />
            <button className=' bg-orange-800 mt-2 px-4 py-1 rounded-md text-white self-end'>Submit Feedback</button>
          </div>
        </div>
      </div>
    </div>

  )
}
