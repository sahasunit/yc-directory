import { formatDate } from '@/lib/utils';
import { client } from '@/sanity/lib/client';
import { STARTUP_BY_ID_QUERY } from '@/sanity/lib/queries';
import { Link } from 'lucide-react';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'

export const experimental_ppr = true;

const page = async ({params} :{params: Promise<{ id: string }>}) => {

    const id = (await params).id; //this gets the id from URL
    const post = await client.fetch(STARTUP_BY_ID_QUERY, {id}); //this fetches the startup from Sanity based on the id  

    if (!post) return notFound(); //if the post is not found, it returns a 404 page

  return (
    <>
       <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(post?._createdAt)}</p>
        <h1 className="heading">{post?.title}</h1>
        <p className="sub-heading !max-w-5xl">{post?.description}</p>
       </section>

       <section className='section_container'>
            <img src={post.image} alt="thumbnail" className='w-full h-auto rounded-xl'/>
            <div className='space-y-5 mt-10 max-w-4xl mx-auto'>
                <div className='flex-between gap-5'>
                    <Link 
                        href={`/user/${post.author?._id}`}
                        className='flex gap-2 items-center mb-3'
                    >
                        <Image 
                            src={post.author.image} 
                            alt="avatar"
                            width={64}
                            height={64}
                            className='rounded-full drop-shadow-lg'
                        />
                    </Link>
                </div>
                <div>
                    <p className='text-20-medium'>{post.author.name}</p>
                    <p className='text-216-medium !text-black-300'>{post.author.username}</p>
                </div>
            </div>
       </section>
    </>
  )
}

export default page