var KEY_UP = 'KeyW',
    KEY_DOWN = 'KeyS',
    KEY_LEFT = 'KeyA',
    KEY_RIGHT = 'KeyD',
    xStep = 3;

var pos_x = function(character) {
    var xPos = character.css('margin-left');
    return parseInt(xPos.substring(0, xPos.length - 2));
};

var move_x = function(character, amount) {
    var xPos = pos_x(character);
    character.css('margin-left', (xPos + amount) + 'px');
};

var move_right = function(character) {
    if (pos_x(character) < 450) {
        move_x(character, xStep);
    } else {
        move_x($('#scenario'), -xStep);
    }
};

var move_left = function(character) {
    if (pos_x(character) >= xStep) {
        move_x(character, -xStep);
    }
};

$(function() {
    $('body').keypress(function(e) {
        switch(e.originalEvent.code) {
            case KEY_UP:
                break;
            case KEY_DOWN:
                break;
            case KEY_LEFT:
                move_left($('#mario'));
                break;
            case KEY_RIGHT:
                move_right($('#mario'));
                break;
        }
    });
});
