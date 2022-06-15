import React , {useEffect , useState} from 'react';
import "./DragableFile.css";

//images
import backgroundDragableImg from "../../sources/backgroundDragable.webp"

// backgroundDragable.webp

const DragableFile = () => {

    const [fileDrag , setFileDrag] = useState(null);

    useEffect(()=> {
        console.log("fileDrag->" ,fileDrag)
    } , fileDrag)

    return (
    <div style={{width : "100%" , heigth : "100%" , display: "flex", flexDirection: "column"}}>
        <div className='DragableFile-parent'>
            <input type={"file"} className=""></input>
            {fileDrag}<p>ARASTRA TUS ARCHIVOS AQUÍ</p>
        </div>
        <button className='DragableFile-button'>
            <p>Subir archivos</p>
        </button>
    </div>

    )
}

export default DragableFile