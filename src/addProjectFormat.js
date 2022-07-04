import { addTextContainer } from "./addTextContainer.js";
import{clearContent} from "./clearContent.js";
import{generateElement} from "./generateElement.js";
import{generateForm} from "./generateForm.js";
import{generateFormInputType} from "./generateForm.js";
import{pushProject} from "./pushProject.js";

export function addProjectFormat(){

    //get rid of add project stuff
    clearContent("addTextContainer");

    //create a form container and form
    generateElement("div","formContainer","","sidebarProjects","formContainer","formContainer");
    generateForm("form","Form","formContainer","formid","formclass","#","get");
    generateFormInputType("input","formInput","","formid","inputID","inputClass","text","Build a Shed","inputName","Yes");

    //container for buttons
    generateElement("div","buttonContainer","","formid","buttonContainer","buttonContainer");

    //Add project button. 
    //need to save the submission to local storage
    //retrieve data and generate a new project in project list
    generateElement("input","addButton","","buttonContainer","addButton","formButton")
    document.getElementById("addButton").setAttribute("value","Add");
    document.getElementById("addButton").setAttribute("type","submit");
   
    //on form submit, run pushProject function
    const form = document.querySelector('form');
    form.onsubmit = (e) => {
        e.preventDefault();
        pushProject();
    }    
    
    //delete button clearContent and recreate addTextContainer
    generateElement("button","cancelButton","Cancel","buttonContainer","cancelButton","formButton");
    document.getElementById("cancelButton").addEventListener("click",function(event){

        clearContent("formContainer");
        addTextContainer();

    })

    
   
    
}

