import { Component, OnInit } from '@angular/core';
import { GameDto } from '../dto/gameDto';
import { TagDto } from '../dto/tagDto';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //all game list
  gamesDto: GameDto[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    //tmp
    this.http.get("http://localhost:8082/gameaddict/api/v1/jeux/jeux").subscribe( data => {
      const json = JSON.parse(JSON.stringify(data));
      json.forEach(element => {
        const listTag : TagDto[] = [];
        this.http.get("http://localhost:8082/gameaddict/api/v1/jeux/tags/" + element.id).subscribe( data2 => {
         const tags = JSON.parse(JSON.stringify(data2));
         tags.forEach(element2 => listTag.push(new TagDto(element2.id, element2.name)));
        });
        this.gamesDto.push(new GameDto(element.id, element.name, element.description, element.date, element.player, element.grade, listTag))
      });
    });
  }

}
