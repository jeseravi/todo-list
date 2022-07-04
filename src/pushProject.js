
import{generateElement} from "./generateElement.js";
import{addTextContainer} from "./addTextContainer.js";

export function pushProject(){

    let myProjects=[]
    if(window.localStorage.getItem("myProjects")==null){
        window.localStorage.setItem("myProjects",JSON.stringify(myProjects));
    }
    else{
        myProjects=JSON.parse(window.localStorage.getItem("myProjects"))
    }

    //if(document.getElementById("inputID").value ==""){
        //alert("Your project name must contain at least 1 character")
        //return;

    //} 
    
    //terminates function and throws error if project title has already been added
    for(let i=0;i<myProjects.length;i++){
        if(myProjects[i]==document.getElementById("inputID").value){
            alert("Your project name must be unique");

            document.getElementById('formid').reset();

            return;

        }
    }

    let project;
    project=[document.getElementById("inputID").value];

    //push project to myProjects array
    myProjects.push(project);
    window.localStorage.setItem("myProjects",JSON.stringify(myProjects));

    //generate a div        
    generateElement("div","formContainer",project,"sidebarProjects",project+"Id","project hover");
    //event listener
    document.getElementById(project+"Id").addEventListener("click",function(event){

        console.log("hi");

    })

    //remove the form and recreate the add project divs
    document.getElementById("formContainer").remove();
    addTextContainer();

    

}


