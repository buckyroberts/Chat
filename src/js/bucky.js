function changeContent() {
    var sampleJson = {
        "name": "Tommy",
        "age": 72,
        "colors": ["blue", "yellow"]
    };
    console.log(sampleJson.name);
    $('.main-area').html('<h1>' + sampleJson.name + '</h1>');
}

function displayChatWindow() {
    $.get('component/chat-window.html', function (data) {
        console.log(data);
        $('.main-area').html(data);
        $chatHeight = $(document).height() - $('.top-nav').height() - $('.bottom').height();
        $('.chat-window').css('height', $chatHeight);
    });
}
