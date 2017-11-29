import { Component, OnInit } from '@angular/core';
import { UserService} from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {
    title = 'UTENTI';
    utenti = [];

    constructor(private service: UserService) {
    }

    ngOnInit() {
      this.utenti = this.service.getUtenti();
    }

    onDeleteUtente(utente) {
      this.service.deleteUtente(utente);
    }
  }
