'use client';

type propsTypes = {
    title: string,
    Icon: any
}

export default function HeaderItems({
    title,
    Icon
}: propsTypes
) {

    return (
        <div className='flex flex-col items-center w-12 sm:w-20 hover:text-gray-50 group cursor-pointer'>
            <Icon className='h-8 mb-1 group-hover:animate-bounce' />
            <p className='opacity-0 group-hover:opacity-100 tracking-widest text-xs sm:text-sm'>
                {title}
            </p>
        </div>
    )
}
