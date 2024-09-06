import { FC } from "react"

import s from './Board.module.css'

type BoardPropType = {
    counter: number
    maxValue: number
}

export const Board: FC<BoardPropType> = ({ counter, maxValue }) => {
    return (
        <div className={s.board}>
            <span className={counter === maxValue ? s.maxNumber : ""}>{counter}</span>
        </div>
    )
}