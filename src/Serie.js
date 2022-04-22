"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Serie = void 0;
class Serie {
    constructor(id, name, channel, seasons, description, link, photo) {
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.link = link;
        this.photo = photo;
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
exports.Serie = Serie;
