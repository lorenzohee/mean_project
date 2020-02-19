import { Component, OnInit, Output, EventEmitter, Input, SimpleChange } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  private _total: number;
  public _num: number;
  public pageList = [];
  public url = ''

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

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.url = this.router.url;
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this._num = Math.ceil(this.total / this.size)
    this.url = this.router.url;
    this.getPageList()
  }

  getPgUrl(index) {
    let url_array = this.url.split(';')
    let url_root = url_array[0];
    let params = {}
    if (url_array.length > 1) {
      let url_params = url_array[1].split('&');
      url_params.forEach(element => {
        let tmp = element.split('=');
        params[tmp[0]] = tmp[1];
      });
    }
    params['page'] = index
    return [url_root, params]
  }

  getPageList() {
    //console.log(this.pageParams)
    if (this._num <= 5 || this.icur <= 3) {
      if (this._num > 5) {
        this.pageList = [1, 2, 3, 4, 5]
      } else {
        this.pageList = []
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
}
