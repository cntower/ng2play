import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complite',
  host: {
    '(document:click)': 'handleClick($event)',
  },
  templateUrl: './auto-complite.component.html',
  styleUrls: ['./auto-complite.component.scss']
})
export class AutoCompliteComponent {
  public query = '';

  private _data = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus",
    "Belgium", "Bosnia & Herzegovina", "Bulgaria", "Croatia", "Cyprus",
    "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
    "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
    "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta",
    "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland",
    "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia",
    "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];
  private _filteredList = [];
  public filteredTable = [];

  public elementRef;

  set filteredList(arr) {
    this._filteredList = arr;
    this.getFilteredTable();
  }
  get filteredList() {
    return this._filteredList;
  }

  set data(arr) {
    this._data = arr;
  }

  @Input() get data() {
    return this._data;
  }

  constructor(myElement: ElementRef) {
    this.elementRef = myElement;
  }

  keyEvent(event: KeyboardEvent, row?: number, col?: number) {
    let key = event.which || event.keyCode;
    let el: HTMLElement;


    if (row !== undefined) {
      switch (key) {
        case 9:
          this.filteredList = [];
          break;
        case 37:
          el = this.getCel(row, col - 1)
          if (el && el.textContent) { el.focus(); }
          break;
        case 38:
          el = this.getCel(row - 1, col)
          if (el && el.textContent) {
            el.focus();
          } else {
            this.elementRef.nativeElement.getElementsByTagName('input')[0].focus();
          }
          break;
        case 39:
          el = this.getCel(row, col + 1)
          if (el && el.textContent) { el.focus(); }
          break;
        case 40:
          el = this.getCel(row + 1, col)
          if (el && el.textContent) {
            el.focus();
          }
          break;
        case 27:
          this.filteredList = [];
          break;
      }
    } else {
      switch (key) {
        case 16:
          break;
        case 37:
          break;
        case 38:
          break;
        case 39:
          break;
        case 40:
          el = this.getCel(0, 0)
          if (el && el.textContent) {
            el.focus();
          }
          break;
        case 27:
          this.filteredList = [];
          break;
        default:
          this.filter();
      }
    }



  }

  focusEvent() {
    this.filter();
  }

  focusoutEvent(event) {
    if (event.relatedTarget === null || !this.isInside(event.relatedTarget)) {
      this.filteredList = [];
    }
  }

  getCel(row: number, col: number) {
    return this.elementRef.nativeElement.querySelector(`[data-col='${col}'][data-row='${row}']`);
  }

  filter() {

    if (this.query !== "") {
      this.filteredList = this._data.filter(function (el) {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }

  select(item) {
    this.query = item;
    this.filteredList = [];
  }

  isInside(target): boolean {
    var inside = false;
    do {
      if (target === this.elementRef.nativeElement) {
        inside = true;
      }
      target = target.parentNode;
    } while (target);
    return inside;
  }

  handleClick(event) {
    if (!this.isInside(event.target)) {
      this.filteredList = [];
    }
  }

  getFilteredTable() {

    this.filteredTable = [];

    let itemCount = this.filteredList.length;
    if (itemCount === 0) {
      return this.filteredTable;
    }
    let columnCount = 2;
    let rowCount = Math.ceil(itemCount / columnCount);
    for (let i = 0; i < rowCount; i++) {
      let row = [];
      for (let j = 0; j < columnCount; j++) {
        row.push(this.filteredList[i + j * rowCount]);
      }
      this.filteredTable.push(row);
    }
  }

}
