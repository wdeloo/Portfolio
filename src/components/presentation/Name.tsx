import { useEffect, useRef, useState } from "react"

const INTERVAL_TIME = 200

const me = {
    name: "Guille",
    nick: "Delo"
}

function sleep(time: number) {
    return new Promise(res => {
        setTimeout(res, time)
    })
}

export default function Name() {
    const [name, setName] = useState(me.name)

    const nameRef = useRef(name)

    useEffect(() => {nameRef.current = name}, [name])

    async function updateName(newName: string) {
        const currentName = nameRef.current
        const currentLength = currentName.length

        for (let i = 0; i < currentLength; i++) {
            setName(prev => prev.substring(0, prev.length - 1))
            await sleep(50)
        }

        const newLetters = newName.split("")
        const lastLetter = newLetters.pop()

        for (const letter of newLetters) {
            setName(prev => prev + letter)
            await sleep(50)
        }
        setName(prev => prev + lastLetter)
    }

    useEffect(() => {
        setTimeout(() => {
            updateName(me.nick)
        }, 2000)
    }, [])

    return (
        <span className="relative before:content-[''] before:bg-gradient-to-br before:from-purple-300 before:to-pink-300 before:absolute before:block before:w-[110%] before:h-full before:right-1/2 before:translate-x-1/2 before:top-0 before:z-[-10] before:rounded-lg before:rotate-2">
            {name}
        </span>
    )
}