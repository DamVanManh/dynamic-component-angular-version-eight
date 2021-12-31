import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DialogDemoService {
  constructor() {}
  dataReceive() {
    console.log("nhận được");
  }
}
