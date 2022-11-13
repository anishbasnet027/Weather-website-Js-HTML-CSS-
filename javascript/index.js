

function getData() {
    url = "https://www.7timer.info/bin/astro.php?lon=113.2&lat=23.1&ac=0&unit=metric&output=json&tzshift=0";
    fetch(url).then((response) => {
        return response.text();
    }).then((data) => {
        console.log(data)
    })
}

console.log("hi")
getData()