var div= document.getElementsByClassName('doctor');
var display=0;

function show()
{
    if (display == 1)
    {
        div.style.display ='block';
        display = 0;
    }
    else
    {
        div.style.display ='none';
        display = 1;
    }
}