import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../../axios-client';

export default function AdminTokens() {
    const [token1, setToken1] = useState();
    const [token2, setToken2] = useState();
    const [token3, setToken3] = useState();
    const [token4, setToken4] = useState();
    const [success, setSuccess] = useState();
    const [error, setError] = useState();
    const [allTokens, setAllTokens] = useState();
    const countRef = useRef();

    const characters = '0123456789abcdefghijklmnop0123456789qrstuvwxyz0123456789';

    useEffect(() => {
        generateToken();
        getAllToken();
    }, [])

    const getAllToken = () => {
        axiosClient.get('/token/all')
            .then(({ data }) => {
                setAllTokens(data);
                console.log(data);
            })
    }

    const generateToken = () => {
        let tnk = '';
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        console.log('char : ' + tnk)
        setToken1(tnk);
        tnk = '';
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        console.log('char : ' + tnk)
        setToken2(tnk);
        tnk = '';
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        console.log('char : ' + tnk)
        setToken3(tnk);
        tnk = '';
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        tnk += characters.charAt(Math.floor(Math.random() * 56));
        console.log('char : ' + tnk)
        setToken4(tnk);
    }


    const onCreateToken = () => {
        setError('');
        if (countRef && countRef.current.value) {
            console.log('cr : ');
            console.log(countRef);
        }else {
            setError('Count is empty.');
            // console.log('NNN cr : ');
            // console.log(countRef);
            return;
        }
        const payload = {
            token: token1 + token2 + token3 + token4,
            count: countRef.current.value
        }

        axiosClient.post('/token/add', payload)
            .then(({ data }) => {
                console.log('Token added success');
                console.log(data);
                setSuccess(data);
                getAllToken();
            })
    }
    const onDelete = (id) => {
        axiosClient.delete('/token/delete/' + id)
            .then(({ data }) => {
                setSuccess('Delete Success');
                console.log('Delete success');
                getAllToken();
            })
    }

    return (
        <div>
            <div className="flex flex-col m-5 rounded-lg pb-10 bg-blue-100 min-h-[80vh]">
                <h2 className='p-2 text-2xl font-bold'>Create Tokens :</h2>
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
                <div className="flex flex-col space-y-4 mx-10">
                    <div className="flex flex-row space-x-4">
                        <input value={token1} onChange={event => { event.preventDefault(); if (token1.length <= 4) setToken1(event.target.value) }} type="text" class="w-24 mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />
                        <input value={token2} onChange={event => { event.preventDefault(); if (token2.length <= 4) setToken2(event.target.value) }} type="text" class="w-24 mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />
                        <input value={token3} onChange={event => { event.preventDefault(); if (token3.length <= 4) setToken3(event.target.value) }} type="text" class="w-24 mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />
                        <input value={token4} onChange={event => { event.preventDefault(); if (token4.length <= 4) setToken4(event.target.value) }} type="text" class="w-24 mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />
                        <div onClick={generateToken} className="">
                            <svg className='w-12 rounded-lg bg-blue-800 p-2' fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>reload</title> <path d="M0 16q0-2.784 1.088-5.312t2.912-4.384 4.384-2.912 5.344-1.088q2.784 0 5.312 1.088t4.384 2.912 2.912 4.384 1.088 5.312h2.304q0.736 0 1.28 0.416t0.8 1.024 0.16 1.28-0.64 1.184l-4.576 4.576q-0.672 0.672-1.6 0.672t-1.632-0.672l-4.576-4.576q-0.512-0.512-0.608-1.184t0.128-1.28 0.8-1.024 1.312-0.416h2.272q0-2.464-1.216-4.576t-3.328-3.328-4.576-1.216-4.608 1.216-3.328 3.328-1.216 4.576 1.216 4.608 3.328 3.328 4.608 1.216q1.728 0 3.36-0.64l3.424 3.392q-3.136 1.824-6.784 1.824-2.816 0-5.344-1.088t-4.384-2.912-2.912-4.384-1.088-5.344z"></path> </g></svg>
                        </div>
                    </div>
                    <div className="flex flex-row  space-x-4 items-center">
                        <div className="flex flex-row justify-center items-center">
                            <h2 className='p-2 text-Lg font-bold'>Count : </h2>
                            <input ref={countRef} type="text" class=" mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />
                        </div>

                        <button onClick={onCreateToken} className=' self-end bg-blue-800 px-4 py-3 rounded-xl font-bold text-white '>Create Token</button>

                    </div>
                </div>
                <hr className='mx-10 my-16 border-2 border-blue-600' />

                <h2 className='p-2 text-2xl font-bold'>Available Tokens : </h2>

                <table className=' border-2 border-blue-800 mx-4'>
                    <thead>
                        <tr className='bg-blue-300'>
                            <th className=' text-xl p-2 border-2 border-blue-800 mx-4'>ID</th>
                            <th className=' text-xl p-2 border-2 border-blue-800 mx-4'>Token</th>
                            <th className=' text-xl p-2 border-2 border-blue-800 mx-4'>count</th>
                            <th className=' text-xl p-2 border-2 border-blue-800 mx-4'>Creation Date (dd-MM-yyyy HH:mm:ss)</th>
                            <th className=' text-xl p-2 border-2 border-blue-800 mx-4'>Action</th>

                        </tr>
                    </thead>
                    <tbody>

                        {allTokens &&
                            allTokens.map(token => (
                                <tr className='text-center'>
                                    <td className='p-1 font-semibold text-lg border-2 border-blue-800 mx-4'>{token.id}</td>
                                    <td className='p-1 font-semibold text-lg border-2 border-blue-800 mx-4'>{token.token.slice(0, 4)} - {token.token.slice(4, 8)} - {token.token.slice(8, 12)} - {token.token.slice(12, 16)}</td>
                                    <td className='p-1 font-semibold text-lg border-2 border-blue-800 mx-4'>{token.count ? token.count : 0}</td>
                                    <td className='p-1 font-semibold text-lg border-2 border-blue-800 mx-4'>{token.time}</td>
                                    <td className='p-1 font-semibold text-lg border-2 border-blue-800 mx-4'>
                                        <button onClick={ev => { ev.preventDefault(); onDelete(token.id) }} className='text-white bg-red-600 px-2 rounded-md'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
