import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Cart } from '../serice/cart.model';

@Component({
  selector: 'app-highlightm1',
  templateUrl: './highlightm1.component.html',
  styleUrls: ['./highlightm1.component.scss']
})
export class Highlightm1Component implements OnInit {
  
  @Input() cart!: Cart

  @Output() deleteClicks: EventEmitter<void> = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  deleteClick(){
    this.deleteClicks.emit()
  }


}
