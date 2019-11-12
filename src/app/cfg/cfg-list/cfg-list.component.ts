import { Component, OnInit } from '@angular/core';
import { CfgService } from '../cfg.service';
import { Cfg } from '../cfg';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cfg-list',
  templateUrl: './cfg-list.component.html',
  styleUrls: ['./cfg-list.component.scss']
})
export class CfgListComponent implements OnInit {

  cfgs$: Observable<Cfg[]>

  cfgCount$: Observable<string>

  constructor(private cfgService: CfgService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.cfgs$ = this.route.queryParamMap.pipe(
      switchMap(params => {
        return this.cfgService.getCfgList(params)
      })
    )
    this.cfgCount$ = this.route.queryParamMap.pipe(
      switchMap(params => {
        return this.cfgService.getCfgCount(params)
      })
    )
  }

  deleteCfg(id) {
    if (confirm('确认要删除此cfg吗？')) {
      this.cfgService.deleteCfgById(id).subscribe(res => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      })
    }
  }

  changePage(num: number) {
    let params = Object.assign({}, this.route.snapshot.queryParams);
    params.page = num;
    this.router.navigate(['/cfgs'], {
      queryParams: params
    });
  }

}
