
import { useLoginContext } from "../../context/LoginContext"
import { RiLogoutBoxFill } from 'react-icons/ri';


const Logout = () =>{

    const {logout}= useLoginContext()


    return(
        <div className="">
           <a href="" onClick={logout}>
            <RiLogoutBoxFill className="text-4xl cursor-pointer"/>
            </a>
            
        </div>
    )
}

export default Logout;