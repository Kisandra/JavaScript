
/*for (a = 0; a < 3; a=a+1)
{ 
  alert (a +" hello "+ (a + 1));
}*/
function add ()
{
	a = document.getElementById ("data").value  
	b = document.getElementById ("data2").value
	c = a*1+b*1 
	document.getElementById ("result").value = c
}

function delta (q,w)
{
	if (q*1>w*1)
	{
		r = q - w
	}
	else
	{
		r = w - q
	}
	return r;
}	

function action ()
{
	a = document.getElementById ("data").value  
	b = document.getElementById ("data2").value
	c = delta (a,b)
	document.getElementById ("result").value = c
}