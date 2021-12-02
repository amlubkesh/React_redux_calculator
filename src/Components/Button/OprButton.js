import '../../App.css'


const OprButton = ({onClick, value, id }) => (
    <button className="button" id={id} onClick = {(e)=> onClick(e)}>
        {value}
    </button>
)

export default OprButton