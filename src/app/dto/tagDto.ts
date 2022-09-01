//DTO game tag
export class TagDto{
   //tag id
   id: number;
   //tag name
   name: string;

  constructor(id: number, name : string) {
    this.id = id;
    this.name = name;
  }
}
