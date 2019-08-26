import { Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(private templateref:TemplateRef<any>, private vwref:ViewContainerRef) { }
@Input() set appCustomdirective(condition){
  condition?this.vwref.createEmbeddedView(this.templateref):this.vwref.clear();
}
}
