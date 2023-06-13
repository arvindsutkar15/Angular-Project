import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
   SearchValue:string="";
   @Output()CustomEvent:EventEmitter<string>=new EventEmitter();
   Emit(){
    this.CustomEvent.emit(this.SearchValue);
   }
}
