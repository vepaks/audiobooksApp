import {Component, Input ,OnInit} from '@angular/core';
import {Post} from "../../interfaces";

@Component({
  selector: 'app-audiobook',
  templateUrl: './audiobook.component.html',
  styleUrls: ['./audiobook.component.scss']
})
export class AudiobookComponent implements OnInit{

  @Input() audiobook: Post;
  constructor(
  ) {
    this.audiobook = {date: new Date(), narrator: "", text: "", title: ""}
  }

  ngOnInit() {
  }

}
