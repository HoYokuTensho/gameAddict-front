import { Component, OnInit, Input } from '@angular/core';
import { GameDto } from '../dto/gameDto';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  //game
  @Input() gameDto : any;

  constructor() { }

  ngOnInit(): void {
  }

}
