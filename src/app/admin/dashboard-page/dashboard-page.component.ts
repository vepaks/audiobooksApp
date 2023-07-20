import { Component, OnDestroy, OnInit } from '@angular/core';
import { AudiobooksService } from '../../shared/audiobooks.service';
import { Post } from '../../shared/interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss'],
})
export class DashboardPageComponent implements OnInit, OnDestroy {
  audiobooks: Post[] = [];
  audiobookSub: Subscription = new Subscription();
  search: string = '';
  constructor(private audiobooksService: AudiobooksService) {
    this.audiobookSub = new Subscription();
  }

  ngOnInit() {
    this.audiobookSub = this.audiobooksService
      .getAll()
      .subscribe((audiobooks) => {
        this.audiobooks = audiobooks;
      });
  }

  remove(id?: string) {}

  ngOnDestroy() {
    if (this.audiobookSub) {
      this.audiobookSub.unsubscribe();
    }
  }
}
