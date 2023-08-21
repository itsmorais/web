import { Request, Response } from "express";
import axios, { AxiosInstance } from 'axios';
import https from 'https';

const api: AxiosInstance = axios.create({
    baseURL: "https://servicebus2.caixa.gov.br/portaldeloterias/api/home/ultimos-resultados",
    headers: {
        'Content-Type': 'application/json'
    },


    httpsAgent: new https.Agent({ rejectUnauthorized: false })
});



class Loteria {
    api: AxiosInstance;

    constructor(api: AxiosInstance) {
        this.api = api
    }


    public async mega(req: Request, res: Response): Promise<Response> {
        const { data: { megasena } } = await api.get("/")
        return res.status(200).json({ megasena });


    }

    public async quina(req: Request, res: Response): Promise<Response> {
        const { data: { quina } } = await api.get("/");
        return res.status(200).json({ quina });
    }




}

export default new Loteria(api);