var bg = "normal";
// set from local storage later

console.log("Fiddling under the hood, eh buddy? We've probably got a lot in common. You should check out my GitHub (https://github.com/cassidoo)!");

function init()
{
    document.getElementById("intro").style.display = "none";
    
    var minsnum = document.getElementById("minsnum").value;
    
    if(minsnum <= 0)
    {
        console.log("Psh gurl whatchu doin");
    }

    var countdown = new Countdown(
    {
        seconds : minsnum * 60,
        onUpdateStatus : function(sec)
        {
            var minute = Math.floor(sec / 60);
            var second = (sec % 60);
            if(second < 10)
            {
                second = "0" + second;
            }
            document.getElementById("timer").innerHTML = minute + ":" + second;
        },
        onCounterEnd : function()
        {
            alert('Document ended!');
        }
    });

    countdown.start();
}

function Countdown(options)
{
    var timer;
    var instance = this;
    var seconds = options.seconds || 10;
    var updateStatus = options.onUpdateStatus || function(){};
    var counterEnd = options.onCounterEnd || function(){};

    function decrementCounter()
    {
        updateStatus(seconds);
        if(seconds === 0)
        {
            counterEnd();
            instance.stop();
        }
        seconds--;
    }


    this.start = function()
    {
        clearInterval(timer);
        timer = 0;
        seconds = options.seconds;
        timer = setInterval(decrementCounter, 1000);
    };

    this.stop = function()
    {
        clearInterval(timer);
    };
}

function WordCount(options)
{
    
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
