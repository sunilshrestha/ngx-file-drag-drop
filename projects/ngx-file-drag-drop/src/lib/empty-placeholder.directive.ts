import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[emptyPlaceholder]',
  standalone: true,
})
export class EmptyPlaceholderDirective {
  constructor(public readonly template: TemplateRef<any>) { }
}