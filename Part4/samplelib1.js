function explainInHTML(divId,title,text)
{
  document.getElementById(divId).innerHTML="<h2>"+title+"</h2>"+text;
}

function getRndInteger(min, max)
{
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}