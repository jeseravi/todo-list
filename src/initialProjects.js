import{generateElement} from "./generateElement.js";

//generate divs from local Storage
export function initialProjects(){

    //array of each project
    //myProjects should match local storage
    let myProjects=[]
    if(window.localStorage.getItem("myProjects")==null){
        window.localStorage.setItem("myProjects",JSON.stringify(myProjects));
    }
    else{
        myProjects=JSON.parse(window.localStorage.getItem("myProjects"))
    }

    if(myProjects!=[]){
        for(let i=0;i<myProjects.length;i++){

            let myProjectsCopy = [];
            for(let i=0;i<myProjects.length;i++){

                myProjectsCopy[i]=myProjects[i]

            }

            for(i=0;i<myProjectsCopy.length;i++){

                let project = myProjectsCopy[i];

                //generate a div for each project in local storage            
                generateElement("div","formContainer",project,"sidebarProjects",project+"Id","project hover");

            }

        }
    }
}
