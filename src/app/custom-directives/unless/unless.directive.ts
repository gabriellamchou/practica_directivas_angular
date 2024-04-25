import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

/**
 * El selector debe tener el mismo nombre que el atributo que después uniremos
 * al DOM con property binding (en la etiqueta <ng-template>)
 */
@Directive({
  selector: '[unless]'
})
export class UnlessDirective {

  /**
   * Con set hacemos que cada vez que cambie el atributo unless, se ejecute
   * un código. Esto sigue siendo una declaración de un atributo, pero con un
   * setter incluido. Utilizamos @Input para poder acceder a este atributo
   * desde fuera. El atributo almacena una condición booleana
   */
  @Input() set unless(condition: boolean) {
    if (!condition) {
      /**
       * createEmbeddedView crea el lugar donde se creará el elemento en el DOM
       * templateRef es lo que se mostrará en dicho lugar
       */
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      /**
       * Si no se cumple la condición, se elimina aquello que se hubiera creado
       */
      this.vcRef.clear();
    }
  }

  constructor(
    /**
     * Esto permite generar la etiqueta ng-template que Angular utiliza para
     * renderizar el resultado de una directiva estructural. (what)
     */
    private templateRef: TemplateRef<any>, 
    /**
     * ViewContainerRef permite ubicar la ng-template en el DOM. (where)
     */
    private vcRef: ViewContainerRef) {}

}
