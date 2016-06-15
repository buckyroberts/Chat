function changeContent() {
    var sampleJson = {
        "name": "Tommy",
        "age": 72,
        "colors": ["blue", "yellow"]
    };
    $('.main-area').html('<h1>' + sampleJson.name + '</h1>');
}

function displayChatWindow() {
    $.get('component/chat-window.html', function (data) {
        $('.main-area').html(data);
        $chatHeight = $(document).height() - $('.top-nav').height() - $('.bottom').height();
        $('.chat-window').css('height', $chatHeight);
    });
}
