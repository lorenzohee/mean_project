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
    body: ['', [Validators.required, Validators.maxLength(500)]],
    spd: [5, [Validators.required, Validators.max(15), Validators.min(0)]],
    pit: [5, [Validators.required, Validators.max(15), Validators.min(0)]],
    vol: [5, [Validators.required, Validators.max(15), Validators.min(0)]],
    per: [0, [Validators.required, Validators.max(3), Validators.min(0)]],
  })
  downloadLink: String = ''
  constructor(private fb: FormBuilder, private intelligenceService: IntelligenceService, private router: Router) { }

  ngOnInit() { }

  onSubmit() {
    this.intelligenceService.postText(this.textForm.value).subscribe(res => {
      this.downloadLink = `${res}`;
    })
  }

  downloadAudioFile() {
    window.open(`/${this.downloadLink}`);
  }
}
