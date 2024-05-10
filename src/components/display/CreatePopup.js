import "./CreatePopup.css";

const CreatePopup =({show, handleClose, handleCreate, name, setName, type, setType}) =>{

    const overlayClassName = show ? "overlay display-block" : "overlay display-none";

    function handleCreateItem (){
        handleCreate();
        handleClose();
    }

  return (
    <div className={overlayClassName}>
      <div className="overlay-content">
        <div style={{display:"flex", flexDirection:"column"}}>
          <input value={name} placeholder="name" className="input-field" id="name" onChange={(e)=>setName(e.target.value)}/>
          <input value={type} placeholder="type" className="input-field" id="type" onChange={(e)=>setType(e.target.value)}/>
        </div>
        <button className="btn-primary" style={{margin:"10px 10px 0px 0px"}} onClick={handleCreateItem}>create</button>
        <button className="btn-primary" onClick={handleClose}>close</button>
      </div>
    </div>
  );
}

export default CreatePopup;