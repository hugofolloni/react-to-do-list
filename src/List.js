import "./List.css"
import { Link } from 'react-router-dom';

const List = (props) => {
    
    const toDos = props.toDos;
    
    return ( 
        <div className="texts">
            {toDos.map((toDos) => (
                <div className="singular-text">
                    <Link to={ `/toDos/${ toDos.id }` } toDos = { toDos }>
                    <div className="main">
                        <div className="mainAction" >
                            <p>{ toDos.action} </p>
                        </div>
                        <div className="deadline">
                            <p>Deadline: { toDos.deadline } </p>
                        </div>
                    </div>
                    </Link>
                </div>
            ))}
        </div>
     );
}
 
export default List;