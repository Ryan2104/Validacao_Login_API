import { Injectable } from '@angular/core';
//Adicionar a importação do HttpClient
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn:'root'
})
export class ValidarService {

//Vamos injetar o cliente HTTP no construtor de nossa classe
constructor(private httpClient : HttpClient) { }

//Endpoint do Serviço - API 
private apiEndpoint : string = 'http://localhost:8888/';

public getUsers(){
    const fnUser = 'users';
    return this.httpClient.get(`${this.apiEndpoint}${fnUser}`)
}


public  ValidarLogin(p_nomeusuario:string,p_senhausuario:string){
  
  const fnUser = 'validarlogin';
  const formData = new FormData();
  formData.append('nomeusuario',p_nomeusuario);
  formData.append('senhausuario',p_senhausuario);
  const data = { p_nomeusuario,p_senhausuario }; 
return this.httpClient.post(`${this.apiEndpoint}${fnUser}`,formData);
}

}
