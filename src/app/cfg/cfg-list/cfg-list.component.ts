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

  currentPage = 1
  constructor(private cfgService: CfgService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.cfgs$ = this.route.paramMap.pipe(
      switchMap(params => {
        let page = params.get('page') || 1
        this.currentPage = Number.parseInt(params.get('page') || '1');
        window && window.scrollTo(0, 0);
        return this.cfgService.getCfgList({ page: page })
      })
    )
    this.cfgCount$ = this.route.paramMap.pipe(
      switchMap(params => {
        let page = params.get('page') || 1
        return this.cfgService.getCfgCount({ page: page })
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
}
