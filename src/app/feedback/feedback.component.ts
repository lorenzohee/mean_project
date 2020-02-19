import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Feedback } from './feedback';
import { FeedbackService } from './feedback.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {

  feedback$: Observable<Feedback[]>

  public user: any;

  constructor(private authService: AuthService, private feedBackService: FeedbackService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.feedback$ = this.route.paramMap.pipe(
      switchMap(params => {
        return this.feedBackService.getFeedBack(params)
      })
    )
  }

  deleteFeedBack(id) {
    if (confirm('确认要删除此内容吗？')) {
      this.feedBackService.deleteFeedbackById(id).subscribe(res => {
        this.router.navigated = false;
        this.router.navigate([this.router.url]);
      })
    }
  }

}
