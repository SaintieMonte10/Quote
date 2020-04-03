export class Quote {
  public showDescription: boolean;
  constructor(public id: number,public name: string,public description: any,public author:string,public now: Date){
    this.showDescription=false;
  }
}
