import {Component, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-add-audiobook',
  templateUrl: './add-audiobook.component.html',
  styleUrls: ['./add-audiobook.component.scss']
})
export class AddAudiobookComponent implements OnInit {

  form: FormGroup | any;

  ngOnInit(): void {
  }

}
