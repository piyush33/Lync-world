import {useEffect, useState} from "react";
import folder from "../assets/folder.png";
import file from "../assets/file.png";
import { useSelector} from "react-redux";
import Sidebar from "../sidebar/Sidebar";
import CreatePopup from "./CreatePopup";
import add from "../assets/add.png";
import dots from "../assets/dots.png";
import "./RightPopup.css";






const Display = ({data}) => {

    const [currentItems, setCurrentItems] = useState(data);
    const [trashItems, setTrashItems] = useState([]);
    const [dataItems, setDataItems] = useState (data);
    const [currentData, setCurrentData] = useState(data);
    const [current, setCurrent] = useState("nil");
    const [name,setName] = useState("");
    const [renameItem, setRenameItem] = useState("");
    const [type, setType] = useState("");
    const [showCreate, setShowCreate] = useState (false);
    const [popupStates, setPopupStates] = useState({});
    const toggleSelect = useSelector((state) => state.toggle.toggleData);
    const showTrash = useSelector((state) => state.trash.showTrash)


    function handleCreate(){

        let duplicate = dataItems.filter((item)=>{
            return( item.name === name && item.type === type)
        })

        if(duplicate.length === 0){
            let item = { name: name,
                parent: current,
                type: type,
                trash: "no",
                submenu:"no"
              }
           let temp = [...dataItems, item];
           setCurrentData(temp);
           setDataItems(temp);
        }
        else{
            alert("File/Folder already exists");
        }
        

        setName("");
        setType("");         
    }

    function handleRename(name, newName){
         let temp = dataItems.map((item)=>{
            return(
                item.name === name ? {...item, name: newName} : item
            )
         })

         setDataItems(temp);
         setCurrentData(temp);

         console.log("dataItms:", dataItems);
         console.log("name:",name);
    }

    function handleTrash(name){
        let temp = dataItems.map((item)=>{
            return(
                item.name === name ? {...item, trash: "yes"} : item
            )
         })

         setDataItems(temp);
         let CurrentTemp = [...temp]
         setCurrentData(CurrentTemp);
    }

    function handleBack(){
        let item = data.filter((item)=>{
            return(item.name === current)
        })

        let temp =  item[0].parent;
        setCurrent(temp);

    }

    useEffect(()=>{
        if(toggleSelect){
            setCurrent(toggleSelect)
        }

    },[toggleSelect])

    useEffect(()=>{
        

        let items = dataItems.filter((item)=>{
            return(item.parent === current)
        })
        setCurrentItems(items);

    },[current,dataItems])

    useEffect(()=>{
        let items = dataItems.filter((item)=>{
            return(item.trash === "yes")
        })
       setTrashItems(items);

       console.log("trash",trashItems)

    },[dataItems])

    const togglePopup = () => {
        setShowCreate(!showCreate);
      };
    
    const toggleItemPopup = (itemName) => {
        setPopupStates(prevStates => ({
            ...prevStates,
            [itemName]: !prevStates[itemName]
        }));
    };
    
    const closeAllPopups = () => {
        setPopupStates({});
    };

    

    return(
        <>
        <div style={{display:"flex"}}>
         <Sidebar data={currentData} /> 
         { !showTrash && 
         <div style={{width:"85%"}}>
            <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
            <div style={{margin: "10px 0px 0px 15px"}} onClick={togglePopup}>
                <img src={add} height={25} />
            </div>
            {current !== "nil" &&
                <div>
                    <button style={{padding:"5px 20px"}} onClick={handleBack}>Back</button>
                </div>
                
            }    
            
            </div>
            <CreatePopup show={showCreate} handleClose={togglePopup} handleCreate={handleCreate} name={name} setName={setName} type={type} setType={setType}/>
            <div style={{display:"flex", flexWrap:"wrap"}}>
                
            {currentItems.map((item)=>{
                return(<>
                       {item.type === "folder"  && item.submenu ==="yes" && item.trash==="no" &&
                        <div style={{display:"flex",flexDirection:"column", alignItems:"end", padding:"10px", borderRadius:"10px", backgroundColor:"rgba(0, 0, 0, 0.05)", margin:"10px" }}>
                        <img onClick={() => toggleItemPopup(item.name)} src={dots} height={20} />   
                        <div>
                         <div onClick={()=>{setCurrent(item.name)}} style={{display:"flex", flexDirection:"column", alignItems:"center", cursor:"pointer"}}>
                           <img src={folder} width={150} />
                           <div>{item.name}</div>
                         </div>
                          <div className={popupStates[item.name] ? "menu-container display-block": "menu-container display-none"}>
                            <div className="menuWrapper">  
                              <input onChange={(e)=>setRenameItem(e.target.value)} className="input-field" />
                              <button className="btn-rename" onClick={()=>handleRename(item.name, renameItem)}>Rename</button>
                              <div className="trashWrapper">
                              <button className="btn-secondary" onClick={()=>handleTrash(item.name)}>Move to trash</button>
                              <button className="btn-secondary" onClick={closeAllPopups}>close</button>
                              </div>
                            </div>
                          </div>
                         </div> 
                        </div>
                       }
                       {item.type === "folder"  && item.submenu ==="no" && item.trash==="no" &&
                        <div>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"end", padding:"10px", borderRadius:"10px", backgroundColor:"rgba(0, 0, 0, 0.05)", margin:"10px"}}>
                         <img onClick={() => toggleItemPopup(item.name)} src={dots} height={20} />
                         <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                           <img src={folder} width={150} />
                           <div>{item.name}</div>
                         </div>
                        </div>
                        <div className={popupStates[item.name] ? "menu-container display-block": "menu-container display-none"}>
                        <div className="menuWrapper">  
                              <input onChange={(e)=>setRenameItem(e.target.value)} className="input-field" />
                              <button className="btn-rename" onClick={()=>handleRename(item.name, renameItem)}>Rename</button>
                              <div className="trashWrapper">
                              <button className="btn-secondary" onClick={()=>handleTrash(item.name)}>Move to trash</button>
                              <button className="btn-secondary" onClick={closeAllPopups}>close</button>
                              </div>
                            </div>
                        </div>
                        </div>
                       }
                       {item.type === "file" && item.trash==="no" &&
                        <div>
                        <div style={{display:"flex", flexDirection:"column", alignItems:"end" , padding:"10px", borderRadius:"10px", backgroundColor:"rgba(0, 0, 0, 0.05)", margin:"10px"}}>
                         <img onClick={() => toggleItemPopup(item.name)} src={dots} height={20} />
                         <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                          <img src={file} width={150} /> 
                          <div>{item.name}</div>
                         </div>
                        </div>
                        <div className={popupStates[item.name] ? "menu-container display-block": "menu-container display-none"}>
                           <div className="menuWrapper">  
                              <input onChange={(e)=>setRenameItem(e.target.value)} className="input-field" />
                              <button className="btn-rename" onClick={()=>handleRename(item.name, renameItem)}>Rename</button>
                              <div className="trashWrapper">
                              <button className="btn-secondary" onClick={()=>handleTrash(item.name)}>Move to trash</button>
                              <button className="btn-secondary" onClick={closeAllPopups}>close</button>
                              </div>
                            </div>
                        </div>
                        </div>
                       }
                       </>
                )
            })}
            </div>
         </div>
         }
         {showTrash &&
         <>
         {trashItems.map((item)=>{
                return(<>
                       {item.type === "folder"  && item.submenu ==="yes" &&  
                         <div onClick={()=>{setCurrent(item.name)}} style={{display:"flex", flexDirection:"column", alignItems:"center", cursor:"pointer"}}>
                           <img src={folder} width={150} />
                           <div>{item.name}</div>
                         </div> 
                       }
                       {item.type === "folder"  && item.submenu ==="no" &&
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                         <img src={folder} width={150} />
                         <div>{item.name}</div>
                        </div>
                       }
                       {item.type === "file" &&
                        <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                         <img src={file} width={150} /> 
                         <div>{item.name}</div>
                        </div>
                       }
                       </>
                )
            })}
         </>

         }
        </div>
        </>
    )

}

export default Display;