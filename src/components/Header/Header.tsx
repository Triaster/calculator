import type { RootState } from '../../app/store'
import { useSelector } from 'react-redux'

export default function Header() {

    const calc = useSelector((state: RootState) => state.calc.value)

    const style = {
        padding: '5px 7px', 
        color: "black", 
        display: 'flex', 
        justifyContent: 'flex-end', 
        alignItems: 'center', 
        height: 'calc((1vw + 1vh) * 8)',
        background: "rgba( 255, 255, 255, 0.25 )",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: "blur( 4px )",
        borderRadius: "0 0 10px 10px",
        border: "1px solid rgba( 255, 255, 255, 0.18 )",
        fontSize: 'calc((1vw + 1vh) * 3.5)',
        marginBottom: '16px'
    }

    return (
        <div style={style} >
            <span style={{overflowX: "scroll"}}>{calc}</span>
        </div>
    )
}