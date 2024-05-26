import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appFullName]',
})
export class FullNameDirective {
  private context: any = {};

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input() set appFullName(value: { fullName: string }) {
    this.context.$implicit = `${value.fullName}`;
    this.updateView();
  }

  private updateView() {
    this.viewContainer.clear();
    this.viewContainer.createEmbeddedView(this.templateRef, this.context);
  }
}
