import { Compiler, Injectable, Injector, Type, ViewContainerRef } from '@angular/core';
import { MeuComponentComponent } from './modulo-lazy/meu-component/meu-component.component';


@Injectable({
  providedIn: 'root'
})
export class ModuloLazyService {

  constructor(
    private compiler: Compiler,
    private injector: Injector
  ) { }

  async initModule(modulePath: any, vcRef: ViewContainerRef) {
    const moduleFactory = await this.compiler.compileModuleAsync(modulePath)
    const moduleRef = moduleFactory.create(this.injector);
    const componentFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(MeuComponentComponent);
    vcRef.clear();
    vcRef.createComponent(componentFactory)
  }
}
