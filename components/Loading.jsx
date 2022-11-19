import React from 'react'

export const Loading = () => {
    return (
        <div className="p-2 m-3 max-w-sm bg-slate-700  mx-auto h-56 rounded-lg flex items-center justify-center">

            <div class="flex justify-center items-center">
                <div class="spinner-border animate-spin inline-block w-8 h-6 border-4 rounded-full text-red-700" role="status">

                    <span class="visually-hidden"></span>
                </div>
            </div>

        </div>
    )
}
