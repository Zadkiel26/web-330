//Set the default theme (Light-mode)
function setDefaultTheme()
{
    const theme = localStorage.getItem("mode") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}

//Set the HTML body to the theme that is selected. If no theme has been selected, then it defaults to the light theme
function setSelectedTheme()
{
    document.body.classList.value = localStorage.getItem("mode") || "light-theme";
}

//Set the default theme (Light mode) 
setDefaultTheme();

//Function to toggle between both light and dark mode
function toggleMode(x)
{  
    //Get the color theme from the body class list
    let colorTheme = document.body.classList;
    //Get the current class assign to the toggle button
    let iconMode = x.classList; 
    
    //Check if the color class is light theme, then we will set it to dark theme
    if (colorTheme.value === "light-theme")
    {
        localStorage.clear();
        localStorage.setItem("mode", "dark-theme");
        localStorage.setItem("iconMode", "fa-toggle-on");
        localStorage.setItem("iconText", "Dark Mode");
    }
    //If the color class is dark theme, then we will set it to light theme
    else
    {
        localStorage.clear();
        localStorage.setItem("mode", "light-theme");
        localStorage.setItem("iconMode", "fa-toggle-off");
        localStorage.setItem("iconText", "Light Mode");
    }

    //Update the HTML elements
    colorTheme.value = localStorage.getItem("mode");
    iconMode.value = `fa ${localStorage.getItem("iconMode")} pull-right`;
    document.getElementById("icon-text").innerHTML = localStorage.getItem("iconText");
}