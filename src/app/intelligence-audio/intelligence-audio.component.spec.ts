import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntelligenceAudioComponent } from './intelligence-audio.component';

describe('IntelligenceAudioComponent', () => {
  let component: IntelligenceAudioComponent;
  let fixture: ComponentFixture<IntelligenceAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntelligenceAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntelligenceAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
