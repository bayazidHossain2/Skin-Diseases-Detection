import React, { useEffect, useRef, useState } from 'react'
import avater from '/avater.webp'
import axiosClient from '../../axios-client';

export default function AdminDiseases() {
    const titleRef = useRef();
    const moreRef = useRef();
    const descRef = useRef();

    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [diseases, setDiseases] = useState();
    const [image, setImage] = useState();

    let counter = 0;

    useEffect(() => {
        axiosClient.get('/diseases/all')
            .then(({ data }) => {
                setDiseases(data);
                console.log('data added');
                console.log(data);
            })
    }, [])

    const onSubmit = () => {
        console.log("Submit Click");
        setError('');
        if (!titleRef.current.value) {
            setError('Title fild is empty. You must add a unique title for the content.')
            return
        } else if (!descRef.current.value) {
            setError('Discription is empty. You must add a title for the content.')
            return
        } else if (!image) {
            setError('You have not select any image.')
            return
        }
        const data = new FormData();
        data.append('image', image);
        console.log(data);
        axiosClient.post('/image/diseases', data)
            .then(({ data }) => {
                console.log('profile update success');
                console.log(data);

                const payload = {
                    "title": titleRef.current.value,
                    "description": descRef.current.value,
                    "moreLink": moreRef.current.value,
                    "imageUrl": data
                }
                console.log(payload);
                axiosClient.post('/diseases/add', payload)
                    .then(({ data }) => {
                        console.log('data : ' + data);
                        setSuccess('Your content successfully added to database.');
                    })
            })

    }
    const onEdit = () => {
        console.log("Edit");
    }
    const onDelete = () => {
        console.log("Delet");
    }


    return (
        <div>

            <div className=" bg-slate-200 m-4 rounded-md shadow-md">
                <h2 className='p-2 text-2xl font-bold'>Add new diseases:</h2>

                {/* Error  */}
                <div className={error ? "flex flex-row justify-between bg-red-200 m-5 p-4 border-2 border-red-400 rounded-xl" : "hidden"}>
                    <p>{error}</p>
                    <button onClick={(ev) => { ev.preventDefault(); setError('') }} className='text-red-800 p-2 hover:bg-blue-100'>X</button>
                </div>
                {/* Success  */}
                <div className={success ? "flex flex-row justify-between bg-green-200 m-5 p-4 border-2 border-green-400 rounded-xl" : "hidden"}>
                    <p>{success}</p>
                    <button onClick={(ev) => { ev.preventDefault(); setSuccess('') }} className='text-red-800 p-2 hover:bg-blue-100'>X</button>
                </div>
                {/* Diseases Form  */}
                <div class="p-6 flex flex-col justify-center">
                    <div className="flex flex-col lg:flex-row lg:space-x-2 w-full">
                        <div className="w-full lg:w-1/2">
                            <div class="flex flex-col w-full">
                                <label class="font-bold">Title: </label>
                                <input ref={titleRef} type="text" placeholder="Write Title.." class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
                            </div>

                            <div class="flex flex-col mt-2">
                                <label class="font-bold">More link url: </label>
                                <input ref={moreRef} type="text" placeholder="Write refrence link.." class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
                            </div>

                            <div class="flex flex-col mt-2">
                                <label class="font-bold">Select a Image: </label>
                                <input onChange={(ev) => {
                                    setImage(ev.target.files[0]);
                                    console.log(ev.target.files[0])
                                }} className='text-lg px-2 py-2 border-2 border-slate-300 rounded-md text-black' type="file" />
                            </div>
                        </div>
                        <div class="flex flex-col lg:w-1/2 mt-2">
                            <label class="font-bold">Description : </label>
                            <textarea ref={descRef} type="tel" name="tel" id="tel" placeholder="Write description about the diseases.." className=" h-[40vh] w-100 mt-2 py-3 px-3 rounded-lg bg-white border-gray-400 text-gray-800  font-semibold focus:border-blue-500 focus:outline-none" />
                        </div>
                    </div>

                    <button onClick={onSubmit} type="submit" className=" self-end md:w-32 bg-blue-900 dark:bg-gray-100 text-white font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-700 dark:hover:bg-gray-200 transition ease-in-out duration-300">Submit</button>
                </div>
            </div>

            <div className="m-5 mt-10 bg-slate-100 rounded-md shadow-md">
                <h2 class="max-w-sm pt-10 mx-auto font-Caveat text-4xl font-semibold text-black flex justify-center items-center">
                    All Diseases</h2>
                {/* Previous content */}
                <div className="p-4">
                    {diseases &&
                        diseases.map(dis => (

                            (counter++ & 1) ?
                                <div class="mx-auto grid grid-cols-1 gap-4 lg:grid-cols-3 pb-20">
                                    <div class="order-1 lg:order-2 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 lg:aspect-w-3 lg:aspect-h-1">
                                        <img src={dis.imageUrl ? `${import.meta.env.VITE_API_BASE_URL}` + '/image/diseases?link=' + dis.imageUrl : avater} alt="background" className="object-cover rounded-sm" />
                                    </div>
                                    <div
                                        class="order-2 lg:order-1 lg:col-span-2 bg-white px-4 py-10 flex flex-col items-start justify-start gap-8 shadow-lg rounded-b-md">
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
                                        <img src={dis.imageUrl ? `${import.meta.env.VITE_API_BASE_URL}` + '/image/diseases?link=' + dis.imageUrl : avater} alt="background" className="object-cover rounded-sm" />
                                    </div>
                                    <div
                                        class="lg:col-span-2 bg-white px-4 py-10 flex flex-col items-start justify-start gap-8 shadow-lg rounded-b-md">
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
            </div>

        </div>
    )
}
