export class Serie {
    constructor(private id: number, private name: string, private channel: string, 
                    private seasons: number,private description: string, 
                    private link: string, private photo: string) {
    }
    darSerie() {
        let elements = [];
        elements.push(this.id);
        elements.push(this.name);
        elements.push(this.channel);
        elements.push(this.seasons);
        elements.push(this.description);
        elements.push(this.link);
        elements.push(this.photo);
        return elements;
    }
}