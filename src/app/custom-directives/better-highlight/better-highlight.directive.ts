import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  Input
} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  /**
   * Para poder definir el color por defecto y del highlight creamos dos variables
   * que podrán ser sobreescritas en el HTML gracias a @Input.
   */
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'yellow';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  /**
   * Hacemos lo mismo que en la basic-highlight.directive, pero en esta ocasión
   * utilizamos Renderer2. Acceder a los elementos de forma directa está desaconsejado,
   * es más recomendable usar Renderer.
   */
  ngOnInit(): void {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.bgColor = this.defaultColor;
  }

  /**
   * Esta es una forma más sencilla (e igualmente recomendable) de hacer lo mismo 
   * sin utilizar el Renderer. Especificamos el color que queremos que se muestre
   * ante los eventos especificados en los métodos con @HostListener y en @HostBinding
   * especificamos el atributo a cambiar y le damos un valor inicial 'transparent'.
   */
  @HostBinding('style.backgroundColor') bgColor!: string;

  /**
   * Para darle algo de interactividad, podemos usar @HostListener() para reaccionar
   * a eventos que ocurran sobre el elemento al que se aplica la directiva.
   * @param mouseenter Se especifica el evento que activa este método
   * @param eventData Recibimos la información del evento */
  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
    this.bgColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.bgColor = this.defaultColor;
  }

}
