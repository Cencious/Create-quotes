export class Quote {
    showDetails: boolean;
    showInfo:any
    constructor(public id:number, public author:string, public owner:string, public quote:string, public datePosted: Date, public likes:number, public dislikes:number) {
        this.showDetails=false;
    }
}
