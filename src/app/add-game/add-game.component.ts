import { Component, OnInit } from '@angular/core';
import { TagDto } from '../dto/tagDto';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  //List of all game tag
  tagsDto : TagDto[] = [];

   constructor() { }

  ngOnInit(): void {
  }

}
