import { Request, Response } from "express";
import axios, { AxiosInstance } from 'axios';
import https from 'https';

class Loteria {


    public async mega(req: Request, res: Response): Promise<Response> {
        const api: AxiosInstance = axios.create({
            baseURL: "https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados",
            headers: {
                'Content-Type': 'application/json'
            },


            httpsAgent: new https.Agent({ rejectUnauthorized: false })
        });
        const { data } = await api.get("/")
        return res.json(data);


    }

    public async quina(req: Request, res: Response): Promise<Response> {
        const api: AxiosInstance = axios.create({
            baseURL: "https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados",
            headers: {
                'Content-Type': 'application/json'
            },


            httpsAgent: new https.Agent({ rejectUnauthorized: false })
        });

        const { data } = await api.get("/");
        return res.send(data);
    }




}

export default new Loteria()