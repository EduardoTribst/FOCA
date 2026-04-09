import Header from '../components/header';

export default function Inicial(){

    return(
        <div>
            <Header
            login={true}
            routes={[
                { textButton: "Início", routeButton: "/" },
                { textButton: "Sobre o Projeto", routeButton: "/" },
                { textButton: "Login", routeButton: "/login" },
            ]}
            />
            <h1>Tela Inicial</h1>
        </div>
        
    )
}