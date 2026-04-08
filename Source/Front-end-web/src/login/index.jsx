import { useNavigate } from 'react-router-dom';
import SeletorTipo from "../components/selecionar-tipo";
import { useState } from "react";
  
export default function Login(){
    const [selectedType, setSelectedType] = useState("professor");

    return (
        <div>
            <h1>Login</h1>

            <SeletorTipo
            option={selectedType}
            onSelect={setSelectedType}
            />

            <h1>{selectedType}</h1>
        </div>
        
    )
}