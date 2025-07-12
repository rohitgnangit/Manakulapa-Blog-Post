"use client"
import React from 'react'
import { deleteBlog } from '@/actions/deleteBlog'

const DeleteButton = ({blogId}) => {

    return (
        <div>
            <form action={deleteBlog}>
                <input type="hidden" name="id" value={blogId} />
                <button className='cursor-pointer'>
                    <img src="/delete.png" alt="delete" width="30" />
                </button>
            </form>
        </div>
    )
}

export default DeleteButton
