import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {ActionEvent} from "../state/product.state";

@Injectable({providedIn:"root"})
export class EventDrivenServices {
  sourceEventSubject: Subject<ActionEvent>=new Subject<ActionEvent>();
  sourceEventSubjectObservable=this.sourceEventSubject.asObservable();

  sourceEventSubject2: Subject<ActionEvent>=new Subject<ActionEvent>();
  sourceEventSubjectObservable2=this.sourceEventSubject.asObservable();

  publishEvent(event:ActionEvent){
    this.sourceEventSubject.next(event);
  }
}
