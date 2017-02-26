/*****************************************\
| Site: https://quizlet.com/              |
| How To use: Open Inspect element and    |
| paste in the code                       |
| Author: Thomas Hobson (ComputerCandy)   |
\*****************************************/
var cells = $('div#cells.started').children();for(var x=0; x<cells.length;x++){for(var y=0; y<cells.length;y++){cells[x].click()cells[y].click()}}
