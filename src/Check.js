import React from 'react'

export default function Check({match}) {
    return (
        <div>
            ID: {match.params.id}
        </div>
    )
}