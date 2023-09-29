import React, { useEffect, useState } from 'react'

export default function AdminTokens() {
    const [token1, setToken1] = useState();
    const [token2, setToken2] = useState();
    const [token3, setToken3] = useState();
    const [token4, setToken4] = useState();
    const characters = '0123456789abcdefghijklmnop0123456789qrstuvwxyz0123456789';

    useEffect(() => {
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


    }, [])


    
    return (
        <div>
            <div className="flex flex-col m-5 rounded-lg bg-blue-100 h-[80vh]">
                <h2 className='p-2 text-2xl font-bold'>Create Tokens :</h2>

                <div className="flex flex-row mx-10">
                    <div className="flex flex-row w-3/4 space-x-4">
                        <input value={token1} type="text" class="w-24 mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />
                        <input value={token2} type="text" class="w-24 mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />
                        <input value={token3} type="text" class="w-24 mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />
                        <input value={token4} type="text" class="w-24 mt-2 py-1 px-2 text-xl font-bold rounded-lg bg-white border-2 border-gray-400 text-gray-800 focus:border-blue-500 focus:outline-none" />
                    </div>
                    <button className=' self-end bg-blue-800 px-4 py-3 rounded-xl font-bold text-white '>Create Token</button>

                </div>
                <hr className='mx-10 my-16 border-2 border-blue-600' />

                <h2 className='p-2 text-2xl font-bold'>Available Tokens : </h2>

                <table className=' border-2 border-blue-800 mx-4'>
                    <thead>
                        <tr>
                            <th className=' border-2 border-blue-800 mx-4'>ID</th>
                            <th className=' border-2 border-blue-800 mx-4'>Token</th>
                            <th className=' border-2 border-blue-800 mx-4'>Creation Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=' text-center border-2 border-blue-800 mx-4'>ID</td>
                            <td className=' border-2 border-blue-800 mx-4'>Tokentoken is vary log</td>
                            <td className=' border-2 border-blue-800 mx-4'>Creation Date</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}
