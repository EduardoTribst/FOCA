import "./selecionar-tipo.css";

export default function SelecionarTipo({option, onSelect}){
    return(
        <div className="selector">
            <button
            className={`selector-field left ${
                option === "professor" ? "active" : "" // if the selected option is professor add active class to the button name if not add empty string
            }`}
            onClick={() => onSelect("professor")}
            >
                Professor
            </button>

            <button
            className={`selector-field right ${
                option === "instituicao" ? "active" : "" // if the selected option is institution add active class to the button name if not add empty string
            }`}
            onClick={() => onSelect("instituicao")}
            >
                Instituição
            </button>
        </div>
    )
}