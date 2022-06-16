import { useEffect } from "react";
import Molehill from './molehill.png'


const EmptySlot = (props) => {
    useEffect (() => {
        let randSeconds = Math.ceil(Math.random() * 7000)
        let timer = setTimeout (() => {
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })
    return (
        <>
            <img style={{'width': '30vw'}}
            src = {Molehill} />
        </>
    )
}

export default EmptySlot