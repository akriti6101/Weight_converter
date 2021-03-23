function convt()
{
    var num=document.getElementById("input").value

    var i=document.getElementById("w").value

    var c=document.getElementById("c").value
 
    if(isNaN(num))
      { alert("Enter valid weight");
      document.getElementById("res").value="";
      document.getElementById("w").value="None";
      document.getElementById("input").value="";
      document.getElementById("c").value="None";}
    if (i=="None" || c=="None")
      {
          alert("chose weight units")

      }
if(!(isNaN(num)) && i!="None" && c!="None")
{

   if(i=="kg")
     {  if(c=="kg")
                 {
                          document.getElementById("res").value=num +" kg";
                 }
                 else if(c=="gm")
                 {
                    document.getElementById("res").value=num*1000+" gms";
                 }
                 else{
                    document.getElementById("res").value=num*2.20462 +" pounds";
                 }
     }

     else if(i=="gm")
     {  if(c=="kg")
                 {
                          document.getElementById("res").value=num*0.001+" kg";
                 }
                 else if(c=="gm")
                 {
                    document.getElementById("res").value=num+" gm";
                 }
                 else{
                    document.getElementById("res").value=num*2.20462*0.001+" pounds";
                 }
     }

     if(i=="pound")
     {  if(c=="kg")
                 {
                          document.getElementById("res").value=num/2.20462 +" kg";
                 }
                 else if(c=="gm")
                 {
                    document.getElementById("res").value=(num/2.20462)*1000+" gms";
                 }
                 else{
                    document.getElementById("res").value=num+" pounds";
                 }
     }

    }

}
function refresh()
{ document.getElementById("res").value="";
document.getElementById("w").value="None";
document.getElementById("input").value="";
document.getElementById("c").value="None";


}