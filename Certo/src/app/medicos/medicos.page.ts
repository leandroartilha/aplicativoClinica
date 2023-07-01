import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMedico } from '../models/IMedico.model';
import { AgendasService } from '../services/agendas.service';

@Component({
  selector: 'app-medicos',
  templateUrl: './medicos.page.html',
  styleUrls: ['./medicos.page.scss'],
})
export class MedicosPage implements OnInit {


  listaMedicos: IMedico [] = [
    {
      nome: 'Doutor Fulana da Silva',
      especialidade: 'Médico Pediatra',
      // eslint-disable-next-line max-len
      foto: 'https://st2.depositphotos.com/3889193/8015/i/950/depositphotos_80150956-stock-photo-confident-female-doctor-at-office.jpg?forcejpeg=true',
      pagina: ''
    },

    {
      nome: 'Doutor Ciclano de Oliveira',
      especialidade: 'Médico Cirurgião',
      // eslint-disable-next-line max-len
      foto: 'https://rafaelshama.com.br/wp-content/uploads/2020/05/Medico-Assistente-2-Dr.-Rafael-Shama.jpg',
      pagina: ''
    },

    {
      nome: 'Doutor Beltrano Santos',
      especialidade: 'Médico Clinico',
      // eslint-disable-next-line max-len
      foto: 'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/10/medico-duvidas2.jpg?quality=70&strip=all',
      pagina: ''
    }
  ];

  constructor(
    private router: Router,
    private agendasService: AgendasService) { }

  exibirmedico(medico: IMedico){
    this.agendasService.guardarAgendas('medico', medico);
    this.router.navigateByUrl('/agenda-medico');
  }

  ngOnInit() {
  }

  sair(){
    this.router.navigate(['home']);
  }

}
