import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-cadastro-quartos',
  templateUrl: './cadastro-quartos.page.html',
  styleUrls: ['./cadastro-quartos.page.scss'],
})
export class CadastroQuartosPage implements OnInit {

  quarto:any = {
    nome: null, 
    diaria: null,
    tipo: null,
    fotos: [{
      url: null
    }],
    itens: []
  }

  quartos: any = [{
    nome: null, 
    diaria: null,
    tipo: null,
    fotos: [{
      url: null
    }],
    itens: []
  }];

  item: any = {
    nome: null
  }

  foto: any = {
    url: null
  };

  public file: any = {};

  isLoading: boolean = false;

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



  AddItem() {
    this.quarto.itens.push(this.item)
    console.log(this.quarto)
  }

  AddQuarto() {
    this._crudService.insert(this.quarto, "quartos")
  }


  memorizarArquivo(event: any) {
    this.isLoading = true;
    this.file = event.target.files[0];
    this.fazerUpload()
  }

  fazerUpload() {
    if (!this.file.name) {
      this._message.show('Favor selecionar o arquivo a ser enviado', 5000);
      return;
    }

    // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(this.storage, this.file.name);
      const uploadTask = uploadBytesResumable(storageRef, this.file);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on('state_changed',
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log('Upload is ' + progress + '% done');

          switch (snapshot.state) {
            case 'paused':
              console.log('Envio pausado');
              break;
            case 'running':
              console.log('Carregando arquivo');
              this._message.show('Carregando arquivo, favor aguardar!', 2000);
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              console.log('Não enviado! Usuário sem permissão');
              this._message.show('Não enviado! Usuário sem permissão!');
              break;
            case 'storage/canceled':
              // User canceled the upload
              console.log('Não enviado: upload cancelado');
              this._message.show('Erro: Upload cancelado!');
              break;
            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              console.log('Não enviado. Ocorreu um erro desconhecido!');
              this._message.show('Oops! Ocorreu um erro desconhecido!');
              break;
          }

          console.log('Arquivo enviado');
          this._message.show('Arquivo enviado com sucesso!');
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('Url do arquivo é ' + downloadURL)
            this.foto.url = downloadURL;
            this.isLoading = false;
          });
        }
      );
  }

  salvarFoto(){
    this.quarto.fotos.splice(0, 1);
    this.quarto.fotos.push({...this.foto});
    this._message.show('Foto registrada com sucesso');
  }


}
