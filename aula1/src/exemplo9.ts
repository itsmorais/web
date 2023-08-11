import axios from "axios";

interface Regiao {
    id: number,
    sigla: string,
    nome: string,
    regiao: { id: number, sigla: string, nome: string };
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

    static async estados(id: number): Promise<Regiao[]> {

        const url = `http://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`

        try {
            const { data } = await axios.get(url);
            return data
        } catch (error: any) { console.log(error.message) }
        return [];
    }

}

Ibge.estados(3).then((res)=> console.log(res));

