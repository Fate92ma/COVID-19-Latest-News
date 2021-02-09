// Dom Variables
let main = document.getElementById("main"),

    // Data Variables
    myRequest,

    myData,

    arrOfData;

// Events

window.addEventListener("load", getARData);

/**************************************************************************************************/

// function to display data in html
function displayDataInDom(array, whereToDisplay, title) {

    whereToDisplay.innerHTML = "";

    array.forEach((item) => {

        whereToDisplay.innerHTML +=

            `<div>
            <h3>${item.title}</h3>
            <img src="${item.image_url}">
            <p>${item.description} <a href="${item.article_url}" target="_blank">${title}</a></p>
            </div>
            <hr>`

    })

}

/////////////////////////////////////////////////////////////////////////////////

// function to get all coronavirus news in arabic
function getARData() {

    myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            myData = JSON.parse(this.responseText);

            arrOfData = myData["articles"];

            displayDataInDom(arrOfData, main, "مزيد من التفاصيل")
        }
    }

    myRequest.onerror = function () {
        throw 'Request failed.'
    }

    myRequest.open("GET", "https://gnewsapi.net/api/search?q=covid-19&language=ar&api_token=v0SbVgMI3bKWayGMsnizYD2F336DQrcIuDbIOJeHYiE9Ue2aCjnoqyAncbWI", true)

    myRequest.send();

}

/**************************************************************************************************/

// function to get all coronavirus news in english
function getENData() {

    myRequest = new XMLHttpRequest();

    myRequest.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {

            myData = JSON.parse(this.responseText);

            arrOfData = myData["articles"];

            displayDataInDom(arrOfData, main, "more details")
        }
    }

    myRequest.onerror = function () {
        throw 'Request failed.'
    }

    myRequest.open("GET", "https://gnewsapi.net/api/search?q=covid-19&language=en&api_token=v0SbVgMI3bKWayGMsnizYD2F336DQrcIuDbIOJeHYiE9Ue2aCjnoqyAncbWI", true)

    myRequest.send();

}

/**************************************************************************************************/