import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiobookPageComponent } from './audiobook-page.component';

describe('AudiobookPageComponent', () => {
  let component: AudiobookPageComponent;
  let fixture: ComponentFixture<AudiobookPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudiobookPageComponent]
    });
    fixture = TestBed.createComponent(AudiobookPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
