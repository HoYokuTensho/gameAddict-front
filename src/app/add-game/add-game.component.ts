import {FormBuilder,FormGroup,FormArray,FormControl} from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { TagDto } from '../dto/tagDto';
import { GameDto } from '../dto/gameDto';
import {HttpClient} from '@angular/common/http';

export interface GameDtoInt {
   id: number ;
   name: string;
   description: string;
   date: string;
   player : number;
   grade: number;
}

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit {

  //game form value
  name = new FormControl();
  date = new FormControl();
  player = new FormControl();
  description = new FormControl();
  tags = new FormControl();

  //tag list use to create tags in form
  tagList: TagDto[] = [];

  //List of all game tag
  tagsDto : TagDto[] = []

  //new game to add
  gameObject : any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:8082/gameaddict/api/v1/tags/tags").subscribe( data => {
      const json = JSON.parse(JSON.stringify(data));
      json.forEach(element => this.tagsDto.push(new TagDto(element.id, element.name)));
    });


  }

  //detect tag add or remove from tag check box
  changeTag(tag: TagDto): void {
    if (this.tagList.includes(tag)) {
      const index = this.tagsDto.indexOf(tag, 0);
      if (index > -1) {
         this.tagList.splice(index, 1);
      }
    } else {
      this.tagList.push(tag);
    }
    this.tags = new FormControl(this.tagList);
  }

  //implements game object from form data
  submitGame(): void {
      this.gameObject = new GameDto(
      -1,
      this.name.value,
      this.description.value,
      this.date.value,
      this.player.value,
      0,
      this.tags.value,
    );
    console.log(JSON.stringify(this.gameObject))

    this.http.post("http://localhost:8082/gameaddict/api/v1/jeux/jeu", this.gameObject).subscribe(data => {
    console.log(data)});
  }
}
