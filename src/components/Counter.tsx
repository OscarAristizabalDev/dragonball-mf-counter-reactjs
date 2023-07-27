import React, { useState } from 'react'

export const Counter = ({ initialCounter }: CounterProps) => {

    // En caso de no recibir un valor o el initialCounter sea 0
    if (!initialCounter && initialCounter != 0) {
        throw new Error("Counter not ready"); // arrojamos la excepcion
    }

    const [counter, setCounter] = useState(initialCounter);

    return (
        <div className=' text-3xl'>
            <button onClick={() => setCounter(counter + 1)} className='bg-green-300 text-center font-bold rounded-md p-5'> +1 </button>
            <span className='mx-10'>{counter}</span>
            <button onClick={() => setCounter(counter - 1)} className='bg-yellow-400 text-center font-bold rounded-md p-5'> -1 </button>
        </div>
    )
}

type CounterProps = {
    initialCounter: number
}
