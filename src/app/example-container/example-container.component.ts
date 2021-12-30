import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
} from "@angular/core";
import { DynamicContentOneComponent } from "../dynamic-content-one/dynamic-content-one.component";
import { DynamicContentTwoComponent } from "../dynamic-content-two/dynamic-content-two.component";

@Component({
  selector: "app-example-container",
  templateUrl: "./example-container.component.html",
  styleUrls: ["./example-container.component.css"],
})
export class ExampleContainerComponent implements OnInit {
  @ViewChild("dynamicComponent", { read: ViewContainerRef, static: true })
  // containerRef: ViewContainerRef;
  containerRef: any;
  componentRefOne: ComponentRef<any>;
  componentRefTwo: ComponentRef<any>;
  // componentFactory: any;
  constructor(private cfr: ComponentFactoryResolver) {}

  ngOnInit() {}

  addDynamicCompOne() {
    this.containerRef.clear();
    const componentFactory = this.cfr.resolveComponentFactory(
      DynamicContentOneComponent
    );
    this.componentRefOne = this.containerRef.createComponent(componentFactory);
    this.componentRefOne.instance.data = "INPUT DATA 1";
  }

  addDynamicCompTwo() {
    this.containerRef.clear();
    const componentFactory = this.cfr.resolveComponentFactory(
      DynamicContentTwoComponent
    );

    this.componentRefTwo = this.containerRef.createComponent(componentFactory);
    this.componentRefTwo.instance.data = "INPUT DATA 2";
  }
  clearDynamicComp() {
    this.containerRef.clear();
  }
  moreData() {
    this.componentRefTwo.instance.data = "NEW DATA 2";
  }
  move0to2() {
    this.containerRef.move(this.containerRef.get(0), 1);
  }
  replace() {
    const ViewRef = this.containerRef.get(0);
    this.containerRef.remove(0);
    this.containerRef.insert(ViewRef, 0);
    // this.containerRef.();
    // this.componentRefTwo.
  }
}
