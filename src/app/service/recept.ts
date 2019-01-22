export class Recept {

    constructor(
        public receptNaam: string,
        public calorien: string,
        public ingredienten: string,
        public tijd: string
    ) { }

    toForm(): string {
        return `naam=${this.receptNaam}&calorien=${this.calorien}&ingredienten=${this.ingredienten}&tijd=${this.tijd}`;
    }
}