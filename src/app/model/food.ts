export class Food{
    constructor(
        public id : number,
        public foodName : string,
        public foodImage : string,
        public foodPrice : number,
        public foodDescription : string,
        public isCarted : boolean,
        public isFavourite : boolean
    ){}
}