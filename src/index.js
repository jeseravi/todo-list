import{generateElement} from "./generateElement.js";
import{addTextContainer} from"./addTextContainer.js";
import{initialProjects} from "./initialProjects.js";

generateElement("div","header","","content","header","")
generateElement("div","headerContent","Todo List","header","headerContent","")
generateElement("div","centerContainer","","content","centerContainer","")
generateElement("div","sidebarContainer","","centerContainer","sidebarContainer","")
generateElement("div","sidebarTitle","Projects","sidebarContainer","sidebarTitle","")
generateElement("div","sidebarProjects","","sidebarContainer","sidebarProjects","")
generateElement("div","addProjectContainer","","sidebarProjects","addProjectContainer","")
generateElement("div","mainContentContainer","main content","centerContainer","mainContentContainer","")
generateElement("div","mainContent","","mainContentContainer","mainContent","")
generateElement("div","footer","Either you run the day or the day runs you. — Jim Rohn","content","footer","")

initialProjects();
addTextContainer();

