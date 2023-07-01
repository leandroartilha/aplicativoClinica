import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Share } from '@capacitor/share';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
  ) {}
  //homeForm : FormGroup;
  async basicShare(){
    await Share.share({
      title: 'App',
      text:'teste',
      url:'www.consultasTeste',
    });
}

buscaCep(){
  //const cepValue = this.homeForm.controls['cep'].value;
  //const isValid = this.homeForm.controls['cep'].valid;

  //if(isValid){
    //this.http.get(`https://viacep.com.br/ws/${cepValue}/json/`)
    //.map(res => res.json())
 // }
}
  agendar(){
    this.router.navigate(['medicos']);
  }

}
