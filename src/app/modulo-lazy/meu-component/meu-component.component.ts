import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-component',
  templateUrl: './meu-component.component.html',
  styleUrls: ['./meu-component.component.scss']
})
export class MeuComponentComponent {
  constructor() {
    console.log('meu component')
  }
}
