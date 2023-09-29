import React, { useEffect, useRef, useState } from 'react'
import axiosClient from '../../axios-client';

export default function Content() {


  const [unique, setUnique] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [contentId, setContentId] = useState();
  const [edit, setEdit] = useState(false);


  const [error, setError] = useState();
  const [success, setSuccess] = useState();
  const [contents, setContents] = useState();

  useEffect(() => {
    getallContent();
  }, [])

  const getallContent = () => {
    axiosClient.get('/content/all')
      .then(({ data }) => {
        setContents(data);
        console.log('data added');
        console.log(data);
      })
  }

  const onSubmit = () => {
    console.log("Submit Click");
    setError('');
    if (!unique) {
      setError('Uniuqe Title fild is empty. You must add a unique title for the content.')
      return
    } else if (!title) {
      setError('Title fild is empty. You must add a title for the content.')
      return
    } else if (!content) {
      setError('Content fild is empty. You must add some content text for the content.')
      return
    }
    const payload = {
      "uniqueTitle": unique,
      "title": title,
      "content": content
    }
    console.log(payload);
    if (edit) {
      payload.id = contentId;
      console.log(payload);
      axiosClient.post('/content/edit', payload)
        .then(({ data }) => {
          console.log('data : ' + data);
          setSuccess('Your content successfully updated to database.');
          getallContent();
        })
    } else {
      axiosClient.post('/content/add', payload)
        .then(({ data }) => {
          console.log('data : ' + data);
          setSuccess('Your content successfully added to database.');
          getallContent();
        })
    }
    
  }
  const onEdit = (content) => {
    setError('');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    setEdit(true);
    setUnique(content.uniqueTitle);
    setTitle(content.title);
    setContent(content.content);
    setContentId(content.id);
    console.log(content.id);
    console.log("Edit");
  }
  const onDelete = (id) => {
    console.log("Delet");
    axiosClient.delete('/content/delete/' + id)
      .then(({ data }) => {
        console.log(data);
        setSuccess('Successfully Delete the contents');
        getallContent();
      })
  }


  return (
    <div>

      <div className=" bg-slate-200 m-4 rounded-md shadow-md">
        <h2 className='p-2 text-2xl font-bold'>Write a Content:</h2>

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
        {/* Contact Form  */}
        <div class="p-6 flex flex-col justify-center">
          <div className="flex flex-col lg:flex-row lg:space-x-2 w-full">
            <div className="w-full lg:w-1/2">
              <div class="flex flex-col w-full">
                <label class="font-bold">Unique Title: </label>
                <input value={unique} onChange={(event) => { event.preventDefault(); if (edit) { setError('You can not change the unique title.') } else { setUnique(event.target.value); } }} type="text" placeholder="Write unique Title.." class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
              </div>

              <div class="flex flex-col mt-2">
                <label class="font-bold">Title: </label>
                <input value={title} onChange={(event) => { event.preventDefault(); setTitle(event.target.value) }} type="text" placeholder="Write title.." class="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-gray-50 font-semibold focus:border-blue-500 focus:outline-none" />
              </div>
            </div>
            <div class="flex flex-col lg:w-1/2 mt-2">
              <label class="font-bold">Content Text: </label>
              <textarea value={content} onChange={(event) => { event.preventDefault(); setContent(event.target.value) }} type="text" placeholder="Write the text.." className=" h-[40vh] w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800  font-semibold focus:border-blue-500 focus:outline-none" />
            </div>
          </div>

          <button onClick={onSubmit} type="submit" className=" self-end md:w-32 bg-blue-900 dark:bg-gray-100 text-white font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-700 dark:hover:bg-gray-200 transition ease-in-out duration-300">Submit</button>
        </div>
      </div>

      <h2 className='p-2 text-2xl font-bold'>All Content:</h2>
      {/* Previous content */}
      {contents &&
        contents.map((content) => (
          <div className=" bg-slate-200 m-4 rounded-md shadow-md">
            <h2 className='p-2 mt-5 pt-4 text-2xl font-bold'>{content.uniqueTitle}</h2>
            {/* Contact Form  */}
            <div class="p-6 flex flex-col justify-center">
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <h4 className='p-2 text-xl font-bold'>Title : </h4>
                  <h4 className='p-2 text-xl font-semibold'>{content.title}</h4>
                </div>
                <p>{content.content}</p>
              </div>

              <div className="flex flex-row space-x-2 self-end">
                <button onClick={(ev) => { ev.preventDefault(); onEdit(content) }} type="submit" className="md:w-32 bg-blue-900 dark:bg-gray-100 text-white font-bold py-3 px-6 rounded-lg mt-4 hover:bg-blue-700 dark:hover:bg-gray-200 transition ease-in-out duration-300">Edit</button>
                <button onClick={(ev) => { ev.preventDefault(); onDelete(content.id) }} type="submit" className="md:w-32 bg-red-900 dark:bg-gray-100 text-white font-bold py-3 px-6 rounded-lg mt-4 hover:bg-red-700 dark:hover:bg-gray-200 transition ease-in-out duration-300">Dekete</button>
              </div>
            </div>
          </div>
        ))

      }

    </div>
  )
}
