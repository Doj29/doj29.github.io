// A prompt box is used to prompt users to input a value before entering a page.
//
//user_name = window.prompt("Please enter your name", "Type your name here");
//document.write("<h1>Hello, welcome " + user_name + "!</h1>");
var webmaps =
[
  ["Oil Spill Toolkit", "https://www.glo.texas.gov", "The oil spill toolkit developed by Enterprise Technology Solutions of The Texas  General Land Office is a decision-support resources. This is where I would write my second sentence about the oil Spill Toolkit. This is where I would write my third sentence a bout the Oil spill Toolkit. This is where I would write my fourth sentence about the Oil Spill Toolkit."],
  ["Texas Ecosystems Analytical Mapper", "http://tpwd.texas.gov/gis/team/", "The Texas Parks and Wildlife's Landscape Ecology program is great."]
];

function welcome()
{
    let a = "Please enter your name.";
    let b = "Type your name here.";
// A prompt box is used to prompt users to input a value before entering a page.
    user_name = window.prompt(a, b);
    message = "<h1>Hello, welcome to my webpage, " + user_name + "!</h1>"
    return message
}



function webmap_table()
{
  document.write("<table width=100%>");
    for (var row=0; row < webmaps.length; row++)
    {
      document.write("<tr>");
      for (var column=0; column < webmaps[0].length; column++)
      {
        document.write("<td>" + webmaps[row][column] + "</td>");
      }
      document.write("</tr>");
    }
    document.write("</table>");
    return "";
}
