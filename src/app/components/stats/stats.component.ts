import { Component, OnInit } from '@angular/core';
import {EventDrivenServices} from "../../services/event.driven.services";
import {ActionModifyEvent, ActionQueryEvent} from "../../state/product.state";

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  counterQuery:number=0;
  counterModify:number=0;
  constructor( private eds: EventDrivenServices) { }

  ngOnInit(): void {
    this.eds.sourceQueryEventSubjectObservable.subscribe((actionEvent:ActionQueryEvent)=>{
      ++this.counterQuery;
    });
    this.eds.sourceModifyEventSubjectObservable.subscribe((actionEvent:ActionModifyEvent)=>{
      ++this.counterModify;
    });
  }

}
