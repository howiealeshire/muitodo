import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

export class TodoItem implements OnInit {
  character = "\ue313";
  title = 'material2-project';
  
@ViewChild('draggable', { read: ElementRef}) draggable:ElementRef | undefined;
  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
    constructor () {}

    ngOnInit(){
    }
  remove(){
    this.draggable?.nativeElement.remove();

  }
}
