import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Item } from "../../types/Item";

@Component({
  selector: 'data-form',
  templateUrl: './dataForm.component.html',
  styleUrls: ['./dataForm.component.scss']
})
export class DataForm implements OnInit {
  @Output() onItemAdded: EventEmitter<Item> = new EventEmitter<Item>();

  name: string = '';
  genre: string = '';
  creator: string = '';
  type: string = 'Book';
  totalTime: number | null = null;

  ngOnInit() {}

  addItem() {
    if (!this.name || !this.genre || !this.creator || !this.type) return;

    const newItem: Item = {
      name: this.name,
      genre: this.genre,
      creator: this.creator,
      type: this.type
    };

    if (this.type === 'Song') {
      newItem.totalTime = this.totalTime || 0;
    }

    this.onItemAdded.emit(newItem);

    // Reset fields
    this.name = '';
    this.genre = '';
    this.creator = '';
    this.type = '';
    this.totalTime = undefined;
  }
}
