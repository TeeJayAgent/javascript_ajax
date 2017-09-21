var ajax = {
    get: function (url, successfn) {
        var xml = new XMLHttpRequest();
        xml.open('GET', url, true);
        xml.onreadystatechange = function () {
            if (xml.readyState === 4 && xml.status === 200 || xml.status === 304) {
                successfn.call(this, xml.responseText);
            }
        };
        xml.send();
    },
    post: function (url, headers, data, successfn) {
        var xml = new XMLHttpRequest();
        xml.open('POST', url, true);
        if (headers) {
            for (var x in headers) {
                xml.setRequestHeader(x, headers[x]);
            }
        } else {
            xml.setRequestHeader("Content-type", "Application/json;charset=utf-8");
        }

        xml.onreadystatechange = function () {
            if (xml.readyState === 4 && xml.status === 200 || xml.status === 304) {
                successfn.call(this, JSON.parse(xml.responseText));
            }
        }
        xml.send(JSON.stringify(data));
    }
}