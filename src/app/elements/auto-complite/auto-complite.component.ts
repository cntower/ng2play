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
  
  //строка запроса
  public query = '';

  //данные и данные по умолчанию
  private _data = ["Albania", "Andorra", "Armenia", "Austria", "Azerbaijan", "Belarus",
    "Belgium", "Bosnia & Herzegovina", "Bulgaria", "Croatia", "Cyprus",
    "Czech Republic", "Denmark", "Estonia", "Finland", "France", "Georgia",
    "Germany", "Greece", "Hungary", "Iceland", "Ireland", "Italy", "Kosovo",
    "Latvia", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia", "Malta",
    "Moldova", "Monaco", "Montenegro", "Netherlands", "Norway", "Poland",
    "Portugal", "Romania", "Russia", "San Marino", "Serbia", "Slovakia", "Slovenia",
    "Spain", "Sweden", "Switzerland", "Turkey", "Ukraine", "United Kingdom", "Vatican City"];

  //варианты заполнения
  private _filteredList = [];

  //варианты заполнения форматированные таблично
  public filteredTable = [];

  //ссылка на дом элемент этого компонента
  public elementRef;

  //установка вариантов заполнения
  set filteredList(arr) {
    this._filteredList = arr;
    this.getFilteredTable();
  }

  //получение вариантов заполнения
  get filteredList() {
    return this._filteredList;
  }

  //установка исходных данных
  set data(arr) {
    this._data = arr;
  }

  //получение исходных данных @Input()-позволяет получение из родителя
  @Input() get data() {
    return this._data;
  }

  constructor(myElement: ElementRef) {
    //ссылка на элемент
    this.elementRef = myElement;
  }

  // keyEvent элементов компонента
  keyEvent(event: KeyboardEvent, row?: number, col?: number) {
    let key = event.which || event.keyCode;
    let el: HTMLElement;

    
    if (row !== undefined) { // это кнопка
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
    } else { // это инпут
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

  //в поле приходит фокус
  focusEvent() {
    this.filter();
  }

  //потеря фокуса => убрать варианты заполнения если фокус перешел к чужому элементу
  focusoutEvent(event) {
    if (event.relatedTarget === null || !this.isInside(event.relatedTarget)) {
      this.filteredList = [];
    }
  }

  //получить элемент ДОМ по строке/столбцу
  getCel(row: number, col: number) {
    return this.elementRef.nativeElement.querySelector(`[data-col='${col}'][data-row='${row}']`);
  }

  //отбор вариантов
  filter() {

    if (this.query !== "") {
      this.filteredList = this._data.filter(function (el) {
        return el.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
      }.bind(this));
    } else {
      this.filteredList = [];
    }
  }

  //подстановка выбранного варианта
  select(item) {
    this.query = item;
    this.filteredList = [];
  }

  //проверка принадлежности элемента к компоненту
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

  //скрывает список вариантов при клике с наружи
  handleClick(event) {
    if (!this.isInside(event.target)) {
      this.filteredList = [];
    }
  }

  //табличное представление списка
  getFilteredTable() {

    this.filteredTable = [];

    let itemCount = this.filteredList.length;
    if (itemCount === 0) {
      return this.filteredTable;
    }

    //число колонок
    let columnCount = 2;
    //число строк
    let rowCount = Math.ceil(itemCount / columnCount);
    for (let i = 0; i < rowCount; i++) {
      let row = [];
      for (let j = 0; j < columnCount; j++) {
        //ячейки в строку
        row.push(this.filteredList[i + j * rowCount]);
      }
      //добавляет строки в таблицу
      this.filteredTable.push(row);
    }
  }

}
