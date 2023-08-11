import axios from "axios";

interface Regiao {
    id: number,
    sigla: string,
    nome: string;
};

class Ibge {
    static async regioes(): Promise<Regiao[]> {

        const url = "http://servicodados.ibge.gov.br/api/v1/localidades/regioes";


        try {
            const { data } = await axios.get(url);
            return data;

        }
        catch (erro: any) {
            console.log(erro.message);
            return [];
        }

    }

}

Ibge.regioes().then((res)=> console.log(res))


