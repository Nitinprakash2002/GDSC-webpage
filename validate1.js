function validate()
{
    var get1=document.getElementById("inp1").value;
    var get2=document.getElementById("inp2").value;
    if(get1=="" || get2=="")
    {
        alert("Any one of the fields are Empty\nPlease Fill them immediately");
    }
    else if(get1=="gdsc1234@gmail.com" && get2=="nitin")
    {
        alert("You have Entered Correct Credential\n Logged In.");
    }
}