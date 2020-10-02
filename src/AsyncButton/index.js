import React, {useState} from 'react';

const AsyncButton = ({index, value, setNumber}) => {
    const [isDisabled, setDisabled] = useState(false)

    const generate = async () => {
        setDisabled(true)
        const newNumber = await new Promise((resolve) => setTimeout(() => {
            const newNumber = Math.floor(Math.random() * 10)
            resolve(newNumber)
        }, 1000))
        setNumber(index, newNumber)
        setDisabled(false)
    }

    return <button disabled={isDisabled} onClick={() => generate()}>Click to generate a new value. Current value: {value}</button>
}

export default AsyncButton