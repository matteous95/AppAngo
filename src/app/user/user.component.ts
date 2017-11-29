import { Component,Input,Output, OnInit,EventEmitter } from '@angular/core';
import { UserService } from '../services/user.service';


@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input ('utente-data') utente

  @Output ('onDeleteUtente') utenteDeleted = new EventEmitter();

  constructor(private userService:UserService) { }

  ngOnInit() {
  }

  deleteUtente() {
    this.utenteDeleted.emit(this.utente);
    //this.userService.deleteUtente(this.utente)
  }


}
