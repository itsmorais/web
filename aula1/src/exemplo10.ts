import axios from "axios"

interface Regiao {
    id: number,
    sigla: string,
    nome: string,
    regiao: { id: number, sigla: string, nome: string };
};


const estados = async (): Promise<Regiao[]> => {
    try {
        let { data } = await axios.get("http://servicodados.ibge.gov.br/api/v1/localidades/estados")
        return data
    } catch (error: any) {
        console.log(error.message)
        return []
    };


}

estados().then((res) => res.forEach((regiao) => console.log(`${regiao.nome} - ${regiao.sigla}`)));
