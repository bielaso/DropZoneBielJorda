import React , {useEffect , useState , useRef , createRef} from 'react';
import "./DragableFile.css";

//hooks
import UseUserGoogle from '../../hooks/UseUserGoogle';




// refresh token



const DragableFile = () => {

    const [fileDrag , setFileDrag] = useState(null);

    const [isDragOver , setIsDragOver] = useState(false);

    const {isLogged} = UseUserGoogle()





    useEffect(() => {
        const drafFileId = document.getElementById("dragFileId");

        drafFileId.addEventListener("dragover", function () {
            setIsDragOver(true)
        });

        drafFileId.addEventListener("dragleave", function () {
            setIsDragOver(false)
         });
         

      }, []);

      

      
    const getFileToIUnput = (event) => {

        if(event.target.files[0] == null) {
            return;
        }
        
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
        <div  id="dragFileId" className='DragableFile-parent' 
        style={{boxShadow : isDragOver ?  '0px 0px 31px 29px rgb(106 185 114 / 90%)' : '0px 0px 31px 21px rgb(106 185 114 / 79%)'}}>
            <input  type={"file"} className="" onChange={getFileToIUnput}></input>
            {fileDrag ? 
            <div>
                <p>ARASTRA OTRO ARCHIVO</p>
                <p>PARA CAMIBIAR</p>
                <p>{fileDrag.name}</p>
            </div>
            :
                <p>ARASTRA TUS ARCHIVOS AQUÍ</p>
        }
            
        </div>
        <button 
            className='DragableFile-button'
            style={{background : isLogged ? '#569B51' : 'rgba(86, 155, 81, 0.7)'}}
        >
            <p>Subir archivos</p>
        </button>
    </div>

    )
}

export default DragableFile