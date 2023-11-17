import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-suite6',
  templateUrl: './suite6.page.html',
  styleUrls: ['./suite6.page.scss'],
})
export class Suite6Page implements OnInit {

  quartos: any = [{
    nome: null, 
    diaria: null,
    fotos: [{
      url: null
    }],
    itens: []
  }];

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService
  ) { }

  ngOnInit() {
    this._crudService.fetchAll('quartos')
    .then(lista_de_quartos => {
      this.quartos = lista_de_quartos;
      console.log(this.quartos)
    })
  }

}
