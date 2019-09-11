function numberBtnHandler(number)
{
	if(glovalReset == true)
		setText("");
	setText(getText() + number);
	glovalReset = false;
}

function setText(text)
{
	document.getElementById("textBox").value = text;	
}

function getText()
{
	return document.getElementById("textBox").value;
}

function reset()
{
	setText("");
	num_1 = 0;
	result = 0;
	oper = "";
	sign = 1;
	a = ""
}

// 수정
glovalReset = false;
num_1 = 0;
oper = "";
result = 0;
sign = 1
a = ""

function point()
{
	if(glovalReset == true)
		setText("");

	if (getText().indexOf(".") != -1)
	{
		alert("error");
	}
	else if (getText() == "")
	{
		setText("0.");
		glovalReset = false;
	}
	else
	{
		setText(getText() + ".");
		glovalReset = false;
	}
}

function operBtnHandler(op)
{
	if (oper.indexOf(op) == -1 && oper == "")
	{
		num_1 = parseFloat(getText());
		oper = op;
		a += num_1+oper;
	}
	else if (op == "-")
	{
		if  (glovalReset == true)
		{		
			sign = -1;
			a += num_1+oper;
		}
		else
		{
			a += num_1 + oper;
			num_1 = calculate();
			oper = op;
		}
	}
	else if (glovalReset == true && oper.indexOf(op) != -1)
	{
		alert(a+op);
	}
	else if (glovalReset == true)
	{
		oper = op;
		a += oper;
	}
	else
	{
		a += num_1+oper;
		num_1 = calculate();
		oper = op;
	}
	glovalReset = true;
}

function calculate()
{
	var num_2 = parseFloat(getText());

	if(oper == '+')
		result = num_1 + (sign*num_2);
	else if(oper == "*")
		result = num_1 * (sign*num_2);
	else if(oper == "-")
		result = num_1 - (sign*num_2);
	else if(oper == "/")
		if (num_2 == 0)
		{
			alert("can't divde zero");
			result = "Error";
		}
		else
		{
			result = num_1 / (sign*num_2);
		}
	setText(result);
	oper = "";
	num_1 = 0;
	sign = 1;
	glovalReset = true;

	return result
}