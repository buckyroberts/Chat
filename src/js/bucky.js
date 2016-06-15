function updateBuddyList() {
    var buddies = [
        {"name": "John", "status": "online"},
        {"name": "Anna", "status": "online"},
        {"name": "Peter", "status": "offline"}
    ];

    var $list = $('<ul>');

    $.each(buddies, function (index, item) {
        console.log(index);
        console.log(item.name, item.status);
        $list.append($('<li>').html('<h1>'  + item.name +  '</h1>'));
    });

    $('.main-area').html($list);
}

function displayChatWindow() {
    $.get('component/chat-window.html', function (data) {
        $('.main-area').html(data);
        $chatHeight = $(document).height() - $('.top-nav').height() - $('.bottom').height();
        $('.chat-window').css('height', $chatHeight);
    });
}
