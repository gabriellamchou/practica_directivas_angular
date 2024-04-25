import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
    /**
     * El selector debe ser único
     * Debemos incluir los [] en el selector para poder usarlo después como
     * atributo de un elemento HTML
     */
    selector: '[appBasicHighlight]'
})

/**
 * Al implementar OnInit podemos usar su función para ejecutar el código que
 * queramos tras instanciarse el componente del elemento en el que usamos la
 * directiva y justo después de haber recogido dicho elemento en el constructor.
 */
export class BasicHighlightDirective implements OnInit {

    /**
     * En elementRef almacenaremos el elemento al que aplicamos la directiva
     * Al usar el modificador "private" hacemos que elementRef sea un atributo 
     * de esta directiva y que se le asigne su valor automáticamente. Es decir,
     * al utilizar la directiva sobre un elemento, se le asignara la referencia
     * de ese elemento como valor
    */
    constructor(private elementRef: ElementRef) {
        
    }

    ngOnInit(): void {
        this.elementRef.nativeElement.style.backgroundColor = 'black';
        this.elementRef.nativeElement.style.color = 'white';
    }

}

// Para usar esta directiva debemos declararla en app.module.ts