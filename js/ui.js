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

// Checks if there's a selection in the document
function hasSelection()
{
    var selection = window.getSelection();

    // changed editing area to <article> so it's easily distinguishable
    if(selection.isCollapsed === false && hasMatchingNode(parentNodes(selection.focusNode), 'article'))
    {
        // now that we have a selection, we have to add the editing box
    }
}

function parentNodes(element)
{
    var nodeNames = [];

    while(element.parentNode)
    {
        nodeNames.push(element.nodeName);
        element = element.parentNode;
    }

    return nodeNames;
}

function hasMatchingNode(nodeNames, name)
{
    for(var i = 0; i < nodeNames.length; i++)
    {
        if(nodeNames[i] === name)
        {
            return true;
        }
    }
    return false;
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
    catch(e)
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
 Full Screen stuff
 This is how it's called: enterFullScreen(document.documentElement); then later, exitFullScreen();
 */

function enterFullScreen(element)
{
    if(element.requestFullscreen)
    {
        element.requestFullscreen();
    }
    else if(element.mozRequestFullScreen)
    {
        element.mozRequestFullScreen();
    }
    else if(element.webkitRequestFullscreen)
    {
        element.webkitRequestFullscreen();
    }
    else if(element.msRequestFullscreen)
    {
        element.msRequestFullscreen();
    }
}

function exitFullScreen()
{
    if(document.exitFullscreen)
    {
        document.exitFullscreen();
    }
    else if(document.mozCancelFullScreen)
    {
        document.mozCancelFullScreen();
    }
    else if(document.webkitExitFullscreen)
    {
        document.webkitExitFullscreen();
    }
}

// This shouldn't be a problem... but just in case.
function isFullScreen()
{
    var fullScreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
    if(fullScreenEnabled)
    {
        console.log("Already in Full Screen Mode!");
    }
}

/*
 Word count stuff... keep jQuery?
 */

function wordCount()
{
    $("#editor").on('input', function()
    {
        var char = $('#editor').text().length;
        $("#wordcount").html("you've typed " + char + " things.");
    });
}
