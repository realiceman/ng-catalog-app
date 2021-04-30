import {Injectable} from "@angular/core";
import {Subject} from "rxjs";
import {ActionModifyEvent, ActionQueryEvent} from "../state/product.state";

@Injectable({providedIn:"root"})
export class EventDrivenServices {
  sourceModifyEventSubject: Subject<ActionModifyEvent>=new Subject<ActionModifyEvent>();
  sourceModifyEventSubjectObservable=this.sourceModifyEventSubject.asObservable();

  sourceQueryEventSubject: Subject<ActionQueryEvent>=new Subject<ActionQueryEvent>();
  sourceQueryEventSubjectObservable=this.sourceQueryEventSubject.asObservable();

  publishModifyEvent(event:ActionModifyEvent){
    this.sourceModifyEventSubject.next(event);
  }

  publishQueryEvent(event:ActionQueryEvent){
    this.sourceQueryEventSubject.next(event);
  }
}
