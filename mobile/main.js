'use strict';

var swipeBody = new Hammer.Manager(document.body, {}),
    swipeTopbar = new Hammer.Manager(document.getElementById('topbar'), {
        touchAction: 'auto',
        inputClass: Hammer.SUPPORT_POINTER_EVENTS ? Hammer.PointerEventInput : Hammer.TouchInput,
        recognizers: [
            [Hammer.Swipe, {
                direction: Hammer.DIRECTION_HORIZONTAL
            }]
        ]
    });

swipeBody.add( new Hammer.Pan({ direction: Hammer.DIRECTION_ALL, threshold: 0}) );
swipeTopbar.add( new Hammer.Pan({ direction: Hammer.DIRECTION_HORIZONTAL, threshold: 0}) );

swipeBody.on('panend', function(e) {
    if (e.additionalEvent === 'panright') {
        $('.topbar').animate({
            position: 'static',
            left: '0'
        }, 200);
    }
});

swipeTopbar.on('panend', function (e) {
    console.log(e)
    if (e.additionalEvent === 'panleft') {
        $('.topbar').animate({
            position: 'absolute',
            left: '-100%'
        }, 200);
    }
});

var menuJSON = {
    dashboard: {
        name: 'Дашборд'
    },
    billing: {
        name: 'Биллинг',
        content: {
            service: {
                name: 'Услуги'
            },
            stats: {
                name: 'Статистика'
            },
            bills: {
                name: 'Счета и платежи'
            },
            docs: {
                name: 'Документы'
            },
            feedback: {
                name: 'Обратная связь'
            }
        }
    },
    settings: {
        name: 'Телефония'
    },
    vats: {
        name: 'ВАТС'
    }
};