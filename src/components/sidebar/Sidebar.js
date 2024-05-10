import "./Sidebar.css";
import folder from "../assets/folder-1.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import NestedSideBar from "./nestedFolders";
import trash from "../assets/trash.png";
import { showTrash } from "../actions";

const Sidebar = ({data}) =>{

    const [showFolders, setShowFolders] = useState (false);
    const [isOpen,setIsOpen] = useState(false);
    const dispatch = useDispatch();

    function handleClick () {
       setIsOpen((prevIsOpen) => !prevIsOpen);
    }
    function handleDriveOpen (){
        setIsOpen(false);
        dispatch(showTrash(isOpen));
    }

    useEffect(() => {
        dispatch(showTrash(isOpen));
        console.log("hello:", isOpen);
    }, [isOpen, dispatch]);

    return(
        <>
        <div className="container">
            <div onClick={()=>{setShowFolders(!showFolders); handleDriveOpen()}} className="driveWrapper">
                <img  src={folder} width={22} />
                <span style={{marginLeft:"5px"}}>My Drive</span>
            </div>
            {showFolders && 
              <div style={{margin:"10px 0px 0px 25px"}} >
                 <NestedSideBar data={data} parent="nil" handleDriveOpen={handleDriveOpen} />
              </div> 
            } 
            <div style={{borderBottom:"1px solid grey", marginTop:"20px"}}></div>
            <div className="trashContainer">
                <img src={trash} height={20} />
                <span onClick={handleClick} style={{marginLeft:"5px"}}>Trash</span>
            </div> 
        </div>
        
        </>
    )
}

export default Sidebar;