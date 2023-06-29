import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudiobookComponent } from './audiobook.component';

describe('AudiobookComponent', () => {
  let component: AudiobookComponent;
  let fixture: ComponentFixture<AudiobookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AudiobookComponent]
    });
    fixture = TestBed.createComponent(AudiobookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
