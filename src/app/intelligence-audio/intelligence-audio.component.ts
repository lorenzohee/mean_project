import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IntelligenceService } from './intelligence.service';

@Component({
  selector: 'app-intelligence-audio',
  templateUrl: './intelligence-audio.component.html',
  styleUrls: ['./intelligence-audio.component.scss']
})
export class IntelligenceAudioComponent implements OnInit {

  textForm = this.fb.group({
    body: ['', Validators.required]
  })
  constructor(private fb: FormBuilder, private intelligenceService: IntelligenceService, private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    this.intelligenceService.postText(this.textForm.value).subscribe(res => {
      this.router.navigate([`/cfgs/`]);
    })
  }
}
