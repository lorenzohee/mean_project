import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { TokenStorage } from '../token.storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../auth.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  email: string;
  password: string;
  storage: TokenStorage

  ngOnInit() {
    this.storage = new TokenStorage();
  }

  login(): void {
    let that = this;
    this.authService.login(this.email, this.password)
      .subscribe(data => {
        that.storage.saveStorage('user', JSON.stringify(data.user));
        this.router.navigate(['']);
      })
  }

}
