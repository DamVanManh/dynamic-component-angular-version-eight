import {
  Component,
  Input,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from "@angular/core";

@Component({
  selector: "lib-dialog-demo",
  templateUrl: "./dialog-demo.component.html",
  styles: [],
})
export class DialogDemoComponent implements OnInit {
  @Input() input: any;
  @ViewChild("dynamicComponent", { read: ViewContainerRef, static: true })
  containerRef: ViewContainerRef;
  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {
    console.log("input ", this.input);

    const componentFactory = this.cfr.resolveComponentFactory(this.input);
    console.log("componentFactory ", componentFactory);

    const componentRef = this.containerRef.createComponent(componentFactory);
  }

  addDynamicCompOne() {}
}
