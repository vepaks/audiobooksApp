import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {AudiobooksService} from "../shared/audiobooks.service";
import {Observable} from "rxjs";
import {Post} from "../shared/interfaces";
import {switchMap} from "rxjs/operators";

@Component({
  selector: 'app-audiobook-page',
  templateUrl: './audiobook-page.component.html',
  styleUrls: ['./audiobook-page.component.scss']
})
export class AudiobookPageComponent implements OnInit{

  audiobook$: Observable<Post> = new Observable<Post>();

  constructor(
    private route: ActivatedRoute,
    private audiobookService: AudiobooksService
  ) {
  }

  // Оператор switchMap помага да променим стрйма от параметрите към нужният ни стрийм
  ngOnInit(): void {
    this.audiobook$ = this.route.params
      .pipe(switchMap((params: Params ) => {
        return this.audiobookService.getById(params['id'])
      }))
  }

}
