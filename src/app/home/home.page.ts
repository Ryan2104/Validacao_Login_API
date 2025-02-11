import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular'; 
import { ValidarService } from '../api/validar.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private mensagemAlerta: AlertController, private LoginService:ValidarService ) {}
  usuarionome :any ='';
  usuariosenha : any = '';
  

   Entrar(){

        this.LoginService.getUsers().subscribe((data) => {
            console.log(data);

        });

        this.LoginService.ValidarLogin(this.usuarionome,this.usuariosenha).subscribe((data) => {
          console.log(data); 
          
        });

          
        
        //TODO: Terminar de implementar o alerta.
        // const alerta = await this.mensagemAlerta.create({
        //   header: 'MEU TCC - LOGIN',
        //   subHeader: 'Acesso Inválido',
        //   message: 'Usuário ou Senha Incorretos, Tente outra vez !!  ',
        //   buttons: ['Fechar'],
        // });
    
        // await alerta.present();
            
  }
 
  }



