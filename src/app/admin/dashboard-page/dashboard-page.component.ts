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
  deleteAudiobookSub: Subscription = new Subscription();
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

  //  проверяваме дали има id и ако има го премахваме от DB като използваме филтър
  remove(id: string | undefined) {
    if (id !== undefined) {
     this.deleteAudiobookSub = this.audiobooksService.remove(id).subscribe(() => {
        this.audiobooks = this.audiobooks.filter(audiobook => audiobook.id !== id)
      });
    }
  }

  ngOnDestroy() {
    if (this.audiobookSub) {
      this.audiobookSub.unsubscribe();
    }
    if (this.deleteAudiobookSub) {
      this.deleteAudiobookSub.unsubscribe();
    }

  }
}
