import '../../App.css'


const NumButton = ({onClick, value}) => (
    <button className="button" onClick = {(e)=> onClick(e)}>
        {value}
    </button>
)

export default NumButton