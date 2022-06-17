import React , {useEffect , useState , useRef} from 'react';
import "./DragableFile.css";

//images
import backgroundDragableImg from "../../sources/backgroundDragable.webp"

// backgroundDragable.webp

const DragableFile = () => {

    const [fileDrag , setFileDrag] = useState(null);

    const [isDragOver , setIsDragOver] = useState(false)

    const refDragable = useRef(null)

    useEffect(() => {
        
        refDragable.current.addEventListener('dragleave', setIsDragOver(false));
        refDragable.current.addEventListener('dragenter', setIsDragOver(true));
      
        return () => {
            refDragable.current.addEventListener('dragleave', setIsDragOver(false));
            refDragable.current.addEventListener('dragenter', setIsDragOver(true));
        };
      }, []);


      useEffect(()=> {
        console.log("isDragOver->" ,isDragOver)
    } , [isDragOver])

    useEffect(()=> {
        console.log("fileDrag->" ,fileDrag)
    } , [fileDrag])

    const getFileToIUnput = async(event) => {
        
        const file = event.target.files[0];


        setFileDrag(file)
    }

    const createFormData = (file) => {
        const formData = new FormData();
        formData.append("name", file.name);
		formData.append('File', file);

        return formData;
    }

    

    return (
    <div style={{width : "100%" , heigth : "100%" , display: "flex", flexDirection: "column"}}>
        <div className='DragableFile-parent'>
            <input ref={refDragable} type={"file"} className="" onChange={getFileToIUnput}></input>
            <p>ARASTRA TUS ARCHIVOS AQUÍ</p>
        </div>
        <button className='DragableFile-button'>
            <p>Subir archivos</p>
        </button>
    </div>

    )
}

export default DragableFile