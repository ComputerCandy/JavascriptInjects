/*****************************************\
| Site: http://www.earth-picker.com/      |
| How To use: Open Inspect element and    |
| paste in the code                       |
| Author: Thomas Hobson (ComputerCandy)   |
\*****************************************/
$draw.marker($epicker.options.streetview.position);$epicker.find_distance($epicker.options.streetview.position);$jQ("#play").removeClass("go_dbtn");$jQ("#play").addClass("go_btn");
