"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const BackButton = () => {
    const router = useRouter();

    const handleBack = () => {
        router.back();
    };

    return (
        <button onClick={handleBack} aria-label="戻る">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="29.5" y="29.5" width="29" height="29" rx="4.5" transform="rotate(180 29.5 29.5)" fill="white" stroke="#E2E8F0" />
                <path fillRule="evenodd" clipRule="evenodd" d="M15.5303 21.5303C15.2374 21.8232 14.7626 21.8232 14.4697 21.5303L8.46967 15.5303C8.17678 15.2374 8.17678 14.7626 8.46967 14.4697L14.4697 8.46967C14.7626 8.17678 15.2374 8.17678 15.5303 8.46967C15.8232 8.76256 15.8232 9.23744 15.5303 9.53033L10.8107 14.25L21 14.25C21.4142 14.25 21.75 14.5858 21.75 15C21.75 15.4142 21.4142 15.75 21 15.75L10.8107 15.75L15.5303 20.4697C15.8232 20.7626 15.8232 21.2374 15.5303 21.5303Z" fill="#64748B" />
            </svg>
        </button>
    );
};

export default BackButton;

