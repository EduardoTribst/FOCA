import { useNavigate } from 'react-router-dom';
import "./teste-video.css";
import DropzoneUploadVideo from "../components/dropzone-upload-video";

export default function TesteVideo(){




    return (
        <div className="teste-video-container">
            <h1>Teste Video</h1>

            <DropzoneUploadVideo />     
        </div>
        


    )
}