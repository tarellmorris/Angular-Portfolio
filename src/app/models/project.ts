export class Project {
    projectName: string;
    projectDesc: string;
    projectImage: string;
    projectLink: string;

    constructor(name: string, desc: string, image: string, link: string) {
        this.projectName = name;
        this.projectDesc = desc;
        this.projectImage = image;
        this.projectLink = link;
    }

}
