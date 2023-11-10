import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  private _router: any;

  constructor(
    public _authenticate: AuthenticateService,
    private _crudService: CrudService,
    public storage: Storage,
    private _message: MessageService
  ) { }

  ngOnInit() {
  }
  criarConta(dados: any){
    this._authenticate.register(dados.email, dados.password)
    setTimeout(() => {
      this._router.navigate(['/home'])
    }, 1000);
  }
}
