import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModuloLazyService } from './modulo-lazy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('viewContainer', {read: ViewContainerRef, static: true}) containerRef!: ViewContainerRef;

  title = 'testeLazyModule';
  
  constructor(private service: ModuloLazyService) {

  }

  async loadModule() {  
    console.log('load module')
    const module = await import('./modulo-lazy/modulo-lazy.module');
    console.log('module', module.ModuloLazyModule)
    
    this.service.initModule(
      module.ModuloLazyModule, 
      this.containerRef
    )
  }
}
