import{generateElement} from "./generateElement.js";
import{addProject} from "./addProject.js";

export function addTextContainer(){

    generateElement("div","addTextContainer","","sidebarProjects","addTextContainer","hover")
    generateElement("div","addIcon","+","addTextContainer","addIcon","")
    generateElement("div","addText","Add Project","addTextContainer","addText","")

    document.getElementById("addTextContainer").addEventListener("click",function(event){

        addProject();

    })
}