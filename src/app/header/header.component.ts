import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { AuthService } from '../auth/auth.service';
import { CfgService } from '../cfg/cfg.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  url: string = ""
  @Input() user: any = {};

  blogTypes: any;

  constructor(
    private authService: AuthService,
    private router: Router,
    private cfgService: CfgService
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    })
  }

  ngOnInit() {
    this.getBlogType();
  }

  getBlogType() {
    this.cfgService.getCfgList({ page: 1, key: 'ARTICLE_TYPE' }).subscribe(res => {
      this.blogTypes = JSON.parse(res[0].valu)
    })
  }
  logout(): void {
    this.authService.signOut();
    this.navigate('/auth/login');
  }

  navigate(link): void {
    this.router.navigate([link]);
  }

}
