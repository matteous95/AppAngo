import { Injectable } from '@angular/core';


@Injectable()

export class UserService {
  utenti  = [
    {
      nome: 'MATTEO',
      cognome: 'CALVARESI',
      codfisc: 'calsfisdaokifhos',
      provincia: 'ascoli piceno',
      email: 'aaaa@aaa.com',
      telefono: '213214312414'
    },
    {
      nome: 'MARCO',
      cognome: 'BRUNI',
      codfisc: 'calsfisdaokifhos',
      provincia: 'ascoli piceno',
      email: 'aaaa@aaa.com',
      telefono: '213214312414'
    },
    {
      nome: 'LUCA',
      cognome: 'ALLADIN',
      codfisc: 'calsfisdaokifhos',
      provincia: 'ascoli piceno',
      email: 'aaaa@aaa.com',
      telefono: '213214312414'
    },
    {
      nome: 'VINCENZO',
      cognome: 'OETTAM',
      codfisc: 'calsfisdaokifhos',
      provincia: 'ascoli piceno',
      email: 'aaaa@aaa.com',
      telefono: '213214312414'
    },
    {
      nome: 'ALFREDO',
      cognome: 'CARACA',
      codfisc: 'calsfisdaokifhos',
      provincia: 'ascoli piceno',
      email: 'aaaa@aaa.com',
      telefono: '213214312414'
    }
  ];

  constructor() {}

  getUtenti() {
    return this.utenti;
  }

  deleteUtente (utente) {
    let index = this.utenti.indexOf(utente)
    if (index>=0) {
      this.utenti.splice(index,1);
    }


  }
}
