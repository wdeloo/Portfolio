import { useEffect, useState } from "react"

interface Tape {
    corner: number
    rotation: number
    position: {
        x: number
        y: number
    }
    length: number
    width: number
}

function getRandomRotation() {
    const min = 35
    const max = 55

    return Math.floor(Math.random() * ((max - min) + 1)) + min
}

function getRandomPosition() {
    const min = 3
    const max = 7

    return Math.floor(Math.random() * ((max - min) + 1)) + min
}

function getRandomLength() {
    const min = 25
    const max = 40

    return Math.floor(Math.random() * ((max - min) + 1)) + min
}

function getRandomWidth() {
    const min = 11
    const max = 13

    return Math.floor(Math.random() * ((max - min) + 1)) + min
}

export default function Sticked({ children, className }: { children: React.ReactNode, className: string }) {
    const [tapes, setTapes] = useState<Tape[]>([])

    useEffect(() => {
        const twoTapes = Math.floor(Math.random() * 2)
        const newTapes: Tape[] = []

        if (twoTapes) {
            if (Math.floor(Math.random() * 2)) {
                newTapes.push(
                    { corner: 0, rotation: getRandomRotation(), length: getRandomLength(), width: getRandomWidth(), position: { x: getRandomPosition(), y: getRandomPosition() } },
                    { corner: 3, rotation: getRandomRotation(), length: getRandomLength(), width: getRandomWidth(), position: { x: getRandomPosition(), y: getRandomPosition() } },
                )
            } else {
                newTapes.push(
                    { corner: 1, rotation: getRandomRotation(), length: getRandomLength(), width: getRandomWidth(), position: { x: getRandomPosition(), y: getRandomPosition() } },
                    { corner: 2, rotation: getRandomRotation(), length: getRandomLength(), width: getRandomWidth(), position: { x: getRandomPosition(), y: getRandomPosition() } },
                )
            }
        } else {
            newTapes.push(
                { corner: 0, rotation: getRandomRotation(), length: getRandomLength(), width: getRandomWidth(), position: { x: getRandomPosition(), y: getRandomPosition() } },
                { corner: 1, rotation: getRandomRotation(), length: getRandomLength(), width: getRandomWidth(), position: { x: getRandomPosition(), y: getRandomPosition() } },
                { corner: 2, rotation: getRandomRotation(), length: getRandomLength(), width: getRandomWidth(), position: { x: getRandomPosition(), y: getRandomPosition() } },
                { corner: 3, rotation: getRandomRotation(), length: getRandomLength(), width: getRandomWidth(), position: { x: getRandomPosition(), y: getRandomPosition() } },
            )
        }

        console.log(twoTapes)
        console.log(newTapes)
        setTapes(newTapes)
    }, [])

    return (
        <div className={className + " relative overflow-visible"}>
            {children}
            {tapes.map(({ corner, rotation, length, width, position }, i) => {
                const topCorner = corner === 0 || corner === 1
                const leftCorner = corner === 0 || corner === 2

                const rotatePos = topCorner === leftCorner

                return (
                    <div
                        key={i}
                        style={{
                            top: topCorner ? position.y : undefined,
                            left: leftCorner ? position.x : undefined,
                            bottom: !topCorner ? position.y : undefined,
                            right: !leftCorner ? position.x : undefined,

                            height: length,
                            width: width,

                            translate: `${leftCorner ? -50 : 50}% ${topCorner ? -50 : 50}%`,
                            rotate: `${rotation * (rotatePos ? 1 : -1)}deg`
                        }}
                        className="bg-white/85 backdrop-blur-[0.5px] absolute"
                    />
                )
            })}
        </div>
    )
}