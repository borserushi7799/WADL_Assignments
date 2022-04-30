function myFunc() {

    console.log('Clicked on Button');
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "sample.txt", true);
    xhr.send();
    xhr.onreadystatechange = function () {
        var p = document.querySelector('.text');
        p.innerHTML = xhr.responseText;
    }
}


function func() {
    console.log('Fetching JSON Data');
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "sample.json", true);
    xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var p = document.querySelector('.jas');
            var parsed = JSON.parse(xhr.responseText)

            parsed = parsed.employees
            var data = "";
            for (var i = 0; i < parsed.length; i++) {
                data += parsed[i].firstName + " "+ parsed[i].lastName+"<br> ";
            }
            p.innerHTML = data

        }

    }
}