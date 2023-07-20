import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AudiobooksService } from '../../shared/audiobooks.service';
import { switchMap } from 'rxjs/operators';
import { Post } from '../../shared/interfaces';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.scss'],
})
export class EditPageComponent implements OnInit, OnDestroy {
  form: FormGroup | any;
  audiobook: Post | any;
  submitted = false;
  audiobookSub: Subscription = new Subscription();

  constructor(
    private route: ActivatedRoute,
    private audiobooksService: AudiobooksService
  ) {}

  ngOnInit() {
    this.route.params
      .pipe(
        switchMap((params: Params) => {
          return this.audiobooksService.getById(params['id']);
        })
      )
      .subscribe((audiobook: Post) => {
        this.audiobook = audiobook;
        this.form = new FormGroup<any>({
          title: new FormControl(audiobook.title, Validators.required),
          text: new FormControl(audiobook.text, Validators.required),
          narrator: new FormControl(audiobook.narrator, Validators.required),
        });
      });
  }

  ngOnDestroy() {
    if (this.audiobookSub) {
      this.audiobookSub.unsubscribe();
    }
  }

  submit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.audiobookSub = this.audiobooksService
      .update({
        ...this.form.value,
        id: this.route.snapshot.params['id'],
      })
      .subscribe(() => {
        console.log('Post was updated');
        this.submitted = false;
      });
  }
}
