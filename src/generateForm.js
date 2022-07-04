export function generateForm(whatIsIt,entryName,whereToPut,id,chosenClass,
    action,method){

        entryName = document.createElement(whatIsIt);
        entryName.setAttribute("id",id);
        entryName.setAttribute("class",chosenClass);
        entryName.setAttribute("action",action);
        entryName.setAttribute("method",method);
        document.getElementById(whereToPut).appendChild(entryName);

}

export function generateFormInputType(whatIsIt,entryName,innerHTML,whereToPut,id,chosenClass,type,
    placeholder,name,requiredYesNo){

        entryName = document.createElement(whatIsIt);
        entryName.setAttribute("id",id);
        entryName.setAttribute("class",chosenClass);
        entryName.setAttribute("type",type);
        entryName.setAttribute("placeholder",placeholder);
        entryName.setAttribute("name",name);
        entryName.innerHTML=innerHTML;
        document.getElementById(whereToPut).appendChild(entryName);

        if(requiredYesNo="Yes"){
            entryName.setAttribute('required','');
        }

}

