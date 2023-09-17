/* eslint-disable react/display-name */
'use client';

import { HandThumbUpIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { forwardRef } from 'react';

const Thumnail = forwardRef(({ result }: any, ref: any) => {
    return (
        <div ref={ref} className='group p-3 cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50 3xl:max-w-[30rem]'>
            <Image
                layout='responsive'
                src={`https://image.tmdb.org/t/p/original/${result.backdrop_path || result.poster_path || result.profile_path}`}
                alt="thumbnail image"
                height={1080}
                width={1920}
            />
            <div className="p-2">
                <p className="truncate max-w-md">
                    {result.overview}
                </p>
                <h2 className='mt-1 text-2xl text-gray-50 transition-all duration-100 ease-in-out group-hover:font-bold'>
                    {result.title || result.original_name}
                </h2>
                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {result.media_type && `${result.media_type} .`} {' '}
                    {result.release_date || result.first_air_date} . {' '}
                    <HandThumbUpIcon className='h-5 mx-2' /> {result.vote_count}
                </p>
            </div>
        </div>
    )
})

export default Thumnail;
