import folder from "../assets/folder-1.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleData } from "../actions";
import file from "../assets/file.png";


const NestedSideBar = ({data, parent, handleDriveOpen}) =>{

    const [currentItems, setCurrentItems] = useState([]);
    const dispatch = useDispatch();

    useEffect(()=>{

        let items = data.filter((item)=>{
            return(item.parent === parent)
        })
        setCurrentItems(items);
    },[data])

    function toggleSubMenu (e) {
         e.stopPropagation();

         let submenu = e.currentTarget.childNodes[1];

         if(!submenu) return;

         if(submenu.style.display === "none" || !submenu.style.display){
            submenu.style.display = "block";
         }
         else{
            submenu.style.display = "none";
         }
    }

    function handleClick (parent){
        dispatch(toggleData(parent));
    }

    console.log("currentI",currentItems);

    return(
        <>
        {
            currentItems?.map((item)=>{
                return(
                <>
                {item.trash === "no" &&    
                <div onClick={toggleSubMenu} style={{cursor:"pointer"}}>
                    <div onClick={()=>{handleClick(item.parent); handleDriveOpen()}} style={{display:"flex", alignItems:"center", margin:"10px 0px 0px 10px"}}>
                      {item.type === "folder" ?
                        <img  src={folder} width={22} /> :
                        <img  src={file} width={22} />}
                      <span style={{marginLeft:"5px"}}>{item.name}</span>
                    </div>
                    <div style={{margin:"10px 0px 0px 10px", display:"none", cursor:"pointer"}}>
                      <NestedSideBar data={data} parent={item.name}/>
                    </div>
                </div> }
                </>
                )})
        }
        </>
    )
}


export default NestedSideBar;