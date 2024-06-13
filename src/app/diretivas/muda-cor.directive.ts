import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[mudaCor]'
})
export class MudaCorDirective {
  @HostBinding('style.fontSize') tamanho = '23px';
  @HostBinding('style.transition') transition = 'font-size 0.3s ease, color 0.3s ease';
  @HostBinding('stule.color') cor = '#333';

  @HostListener('mouseover') aumentaFonte(){
    this.tamanho = '28px';
    this.cor = '#007bff';
  }
  
  @HostListener('mouseleave') diminuiFonte(){
    this.tamanho = '23px';
    this.cor = '#333';
  }

  constructor() {}

}