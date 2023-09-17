'use client';

import Image from 'next/image';
import HeaderItems from './HeaderItems';
import { ChartPieIcon, CheckBadgeIcon, HomeIcon, LightBulbIcon, ServerStackIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
    return (
        <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
            <div className='flex flex-grow justify-evenly max-w-2xl'>
                <HeaderItems title='HOME' Icon={HomeIcon} />
                <HeaderItems title='TRENDING' Icon={LightBulbIcon} />
                <HeaderItems title='VERIFIED' Icon={CheckBadgeIcon} />
                <HeaderItems title='COLLECTIONS' Icon={ChartPieIcon} />
                <HeaderItems title='SEARCH' Icon={ServerStackIcon} />
                <HeaderItems title='ACCOUNT' Icon={UserCircleIcon} />
            </div>
            <Image
                className='object-contain'
                src="/imgs/hulu-logo-black-and-white.png"
                alt="logo"
                width={200}
                height={100}
            />
        </header>
    )
}
