import { Component, OnInit } from '@angular/core';
import { GameDto } from '../dto/gameDto';
import { TagDto } from '../dto/tagDto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //all game list
  gamesDto: GameDto[] = [];

  constructor() { }

  ngOnInit(): void {
    //tmp
    this.gamesDto =  [];
  }

}
