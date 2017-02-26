/*****************************************\
| Site: http://maths.prototec.co.nz/      |
| How To use: Open Inspect element and    |
| paste in the code                       |
| Author: Thomas Hobson (ComputerCandy)   |
\*****************************************/
q = document.getElementsByTagName('tr');for(var i=2; i < q.length;i++){tr = q[i].children;q1 = tr[0].innerText;op = tr[1].innerText.replace("×","*").replace("÷","/");q2 = tr[2].innerText;a = tr[4].innerText;var ou;var eq = "";if(q2 == ""){ou = tr[2];if(op == "-"){eq = q1 + "-" + a;}else if(op == "+"){eq = a + "-" + q1;}else if(op == "/"){eq = q1 + " / " + a;}else if(op == "*"){eq = a + " / " + q1;}}else if(q1 == ""){ou = tr[0];if(op == "/"){eq = q2 + "*" + a;}}else{ou = tr[4];eq = q1 + "" + op + q2;}var an = eval(eq);console.log(eq + " = " + an);ou.children[0].value = an;}document.getElementsByTagName("p")[0].children[0].click();
