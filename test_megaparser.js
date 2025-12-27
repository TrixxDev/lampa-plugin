(function() {
    var version = '1.0.0';

    console.log('MegaParser v' + version + ' успешно загружен!');

    // Регистрация компонента (обязательно!)
    Lampa.Component.add('megaparser', function(object) {
        return {
            create: function() {
                var html = $('<div>Тестовый MegaParser работает! Версия: ' + version + '</div>');
                return html;
            }
        };
    });

    // Регистрация в манифесте (чтобы отображалось в списке плагинов)
    Lampa.Manifest.plugins = {
        type: 'video',
        version: version,
        name: 'MegaParser',
        description: 'Мой тестовый парсер — работает!',
        component: 'megaparser'
    };
})();