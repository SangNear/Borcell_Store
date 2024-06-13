import { getCollections } from '@/lib/actions/actions'
import React from 'react'

const Collections = async () => {
    const collections = await getCollections()
    if (collections) {
        console.log("collections", collections);
    }


    return (
        <div>
            <p className='text-heading-bold'>collections</p>
            <div>
                
            </div>
        </div>
    )
}

export default Collections