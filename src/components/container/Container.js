import Containercss from './Container.css';
import Header from '../header/Header';
import Body from '../body/Body';
function Container(){
    return(
        <div className = "container">
            <Header/>
            <Body/>
        </div>
    )
}
export default Container;