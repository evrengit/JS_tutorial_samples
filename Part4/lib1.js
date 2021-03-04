//events

function ButtonAClick()
{
    
   // The toFixed() Method

        var x = 9.656;
        document.getElementById("demo1div").innerHTML =
        "toFixed sample"+
        " raw: "+x+"<br>"  +
        x.toFixed(0) + "<br>" +
        x.toFixed(0) + "<br>" +
        x.toFixed(2) + "<br>" +
        x.toFixed(4) + "<br>" +
        x.toFixed(6);


        var y = 9.656;
        document.getElementById("demo2div").innerHTML = 
        "toPrecision sample"+
        " raw: "+y+"<br>"  +
        y.toPrecision() + "<br>" +
        y.toPrecision(2) + "<br>" +
        y.toPrecision(4) + "<br>" +
        y.toPrecision(6);  


        var a= Infinity/ Infinity;



        if  (Number.isNaN(a))
        {
            console.log(a);
            console.log("yes");

        }else   
        {
            console.log(a);
        console.log("no");
        }


    

}
 
