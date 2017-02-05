/* global  $ */


let currentImage;
const imageContainer = document.getElementById("imagecontainer");

document.getElementById("nextbutton").addEventListener('click', nextClick);

function nextClick (value)
{
    let x = 0;
    $('#imagecontainer').children().each(function(element)
    {
        console.log($('#imagecontainer').children()[x]);
        console.log(currentImage);
        x++;
    });
}

addImage("1.png");
addImage("1.png");

function addImage(urli)
{
    var element = $('<img>');
    element.text('First image');

    $(element).appendTo("#imagecontainer");
    $(element).attr(
    {
        src: urli
    });

    if(element.is(':first-child'))
    {
        currentImage = element;
    }
    else
    {
        element.hide();
    }
}

function showImage(imgObject)
{
    if(imageContainer.has(imgObject).length > 0)
    {
        currentImage.hide();
        currentImage = imgObject;
        currentImage.show();
    }
    else
    {
        console.log("There are no such objects!");
    }
}