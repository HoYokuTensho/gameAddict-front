import { TagDto } from '../dto/tagDto';

//DTO game
export class GameDto{
  //game id
   id: number ;
   // game name
   name: string;
   //game description
   description: string;
   //game released date
   date: string;
   //game players number
   player : number;
   //game grade
   grade: number;
   //game tags
   tags: TagDto[];

   constructor(id: number, name: string, description: string, date: string, player : number, grade: number, tags: TagDto[]) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.date = date;
    this.player = player;
    this.grade = grade;
    this.tags = tags;
   }
}
