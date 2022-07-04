export function generateElement(whatIsIt,entryName,innerHTML,whereToPut,id,chosenClass){

    entryName = document.createElement(whatIsIt);
    entryName.setAttribute("id",id);
    entryName.setAttribute("class",chosenClass);
    entryName.innerHTML=innerHTML;
    document.getElementById(whereToPut).appendChild(entryName);
}