import { Component, OnInit, Output, EventEmitter, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  private _total: number;
  private _num: number;
  private pageList = [];

  @Input()
  set total(total: number) {
    this._total = total || 0
  }

  get total() {
    return this._total;
  }

  @Input()
  size: number = 10;
  @Input()
  icur: number = 1;
  @Output()
  OnChange: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() { }
  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this._num = Math.ceil(this.total / this.size)
    this.getPageList()
  }

  getPageList() {
    //console.log(this.pageParams)
    if (this._num <= 5 || this.icur <= 3) {
      if (this._num > 5) {
        this.pageList = [1, 2, 3, 4, 5]
      } else {
        for (let i = 0; i < this._num; i++) {
          this.pageList.push(i + 1)
        }
      }
    } else if ((this._num - this.icur) < 3) {
      this.pageList = [this._num - 4, this._num - 3, this._num - 2, this._num - 1, this._num]
    } else {
      this.pageList = [this.icur - 2, this.icur - 1, this.icur, this.icur + 1, this.icur + 2]
    }
  }

  pageChange(value: number) {
    this.OnChange.emit(value)
    this.icur = value;
  }

  pageListToFirst() {
    this.OnChange.emit(1)
    this.icur = 1;
    if (this._num > 5) {
      this.pageList = [1, 2, 3, 4, 5]
    } else {
      this.pageList = []
      for (let i = 0; i < this._num; i++) {
        this.pageList.push(i + 1)
      }
    }
  }

  pageListToAbove() {
    if (this.pageList[0] - 5 < 1) {
      this.pageList = []
      if (this._num > 5) {
        this.pageList = [1, 2, 3, 4, 5]
      } else {
        this.pageList = []
        for (let i = 0; i < this._num; i++) {
          this.pageList.push(i + 1)
        }
      }
    } else {
      this.pageList = this.pageList.map((value, index) => {
        return value -= 5
      })
    }
  }

  pageListToNext() {
    if (this.pageList[4] + 5 > this._num) {
      this.pageList = []
      if (this._num > 5) {
        this.pageList = [this._num - 4, this._num - 3, this._num - 2, this._num - 1, this._num]
      } else {
        this.pageList = []
        for (let i = this._num; i > 0; i--) {
          this.pageList.push(i)
        }
        this.pageList.reverse();
      }
    } else {
      this.pageList = this.pageList.map((value, index) => {
        return value += 5
      })
    }
  }

  pageListToLast() {
    this.OnChange.emit(this._num)
    this.icur = this._num;
    if (this._num > 5) {
      this.pageList = [this._num - 4, this._num - 3, this._num - 2, this._num - 1, this._num]
    } else {
      this.pageList = []
      for (let i = this._num; i > 0; i--) {
        this.pageList.push(i)
      }
      this.pageList.reverse();
    }
  }
}
