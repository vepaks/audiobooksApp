import { Component, OnInit } from '@angular/core';
import { AudiobooksService } from '../shared/audiobooks.service';
import { Post } from '../shared/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  audiobook$: Observable<Post[]> = new Observable<Post[]>();
  constructor(
    private audiobookService: AudiobooksService,
  ) {}

/**
 * Initializes the component.
 */
ngOnInit() {
  // Fetches all audiobooks from the service
  this.audiobook$ = this.audiobookService.getAll();
}
}
