import { Component, OnInit } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-suitefm',
  templateUrl: './suitefm.page.html',
  styleUrls: ['./suitefm.page.scss'],
})
export class SuitefmPage implements OnInit {

  constructor(
    private message: MessageService
  ) { }

  ngOnInit() {
  }

  setReserva() {
    this.message.show('Reserva feita!')
  }
}
