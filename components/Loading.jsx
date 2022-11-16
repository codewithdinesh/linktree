import React from 'react'

export const Loading = () => {
    return (
        <div className="p-2 m-3 max-w-sm  bg-slate-700 mx-auto h-56 rounded-lg flex items-center justify-center">

            <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                    <span className="visually-hidden"></span>
                </div>
            </div>

        </div>
    )
}
