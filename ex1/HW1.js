
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
	if (q*1 > w*1)
	{
		r = q - w
	}
	else if (q == w)
	{
		r = "числа рівні"
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
	q = document.getElementById ("norman").value
	c = dia (a,q,b)
	dia ()
	document.getElementById ("result").value = c

}
function dia (z,dd,n)
{
	if (dd == "-")
	{
		r = z - n
	}	
	else if (dd == "+")
	{
		r = z + n
	}	
	else if (dd == "*")
	{
		r = z * n
	}	
	else if (dd == "/")
	{
		r = z / n
	}	
	else if (dd == "and")
	{
		r = z & n
	}	
	else if (dd == "or")
	{
		r = z | n
	}	
	else if (dd == "%")
	{
		r = z % n
	}	
	return r
}

function test1 ()
{
	var x = 1;
    var z;
	for(z = 6; z >= 2; z--)
		x = x + z;
	
	alert ("x =" + x);
	alert ("z =" + z);
}

function test2 ()
{
	var x = 0
	var z = 5
	while (z > 1 )
	{
	x = x + ~~ (1 / z);
	z = z - 1;
	}
	alert("x =" + x);
	alert("z =" + z);
}

