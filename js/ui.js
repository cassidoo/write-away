var bg = "normal";
// set from local storage later

function init()
{
    console.log("Fiddling under the hood, eh buddy? We've probably got a lot in common. You should check out my GitHub (https://github.com/cassidoo)!");
}

function toggleColors()
{
    if(bg === "normal")
    {
        document.body.className = "inverse";
        bg = "inverse";
    }
    else
    {
        document.body.className = "normal";
        bg = "normal";
    }
}

/*
 Editing text stuff
 */

function editDialog()
{

}

function formatText(type)
{

}

/*
 Local Storage stuff... I need to learn how to do this.
 */
function supportsHtmlStorage()
{
    try
    {
        return 'localStorage' in window && window['localStorage'] !== null;
    }
    catch (e)
    {
        return false;
    }
}

function loadState()
{

}

function saveState()// Maybe also save to Dropbox?
{

}

/*
 Full Screen stuff... I should also learn how to do this.
 */

function enterFullScreen()
{

}

/*
 Word count stuff
 */

function wordCount()
{

}
