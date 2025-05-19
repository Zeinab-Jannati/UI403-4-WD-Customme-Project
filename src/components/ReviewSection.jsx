import { useState } from "react";

import RatingStars from "./RatingStars";

import likeButton from '../assets/icons/like.svg'
import dislikeButton from '../assets/icons/dislike.svg'

const ReviewSection = (props) => {
    const name = props.name;
    const date = props.date;
    const role = props.role;
    const comment = props.comment;
    const rating = props.rating;

    return ( 
        <>
            <hr className='border-[var(--color-custome-gray-3)] mt-[1rem]'/>
            <div className="mr-[1.5rem]">
                <div className="flex justify-between py-[1rem] px-[1.5rem]">
                    <div className="flex gap-[0.5rem]">
                        <div className="flex gap-[2rem] text-[var(--color-custome-gray-7)] font-medium">
                            <span>{ date }</span>
                            <span>{ name }</span>
                        </div>
                        <span className="text-[var(--color-state-success)]">{ role }</span>
                    </div>
                    <RatingStars rating={{rating}}/>
                </div>
                <p className="text-[var()] py-[1.5rem]">{ comment }</p>
                <hr className="border-[var(--color-custome-gray-3)]"/>
                <div className="mt-[0.75rem] mb-[1.5rem] flex justify-end w-full">
                    <span className="flex gap-[0.5rem] text-[var(--color-custome-gray-7)]">
                        آیا این دیدگاه مفید بود؟ 
                        <img src={ likeButton } alt="like-button" />
                        <img src={ dislikeButton } alt="dislike-button" />
                    </span>
                </div>
            </div>
        </>
     );
}
 
export default ReviewSection;