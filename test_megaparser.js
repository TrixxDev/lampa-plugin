(function() {
    var mod_version = '1.0.0 (27.12.2025)';

    console.log('MegaParser v' + mod_version + ' загружен');

    Lampa.Component.add('megaparser', function(object) {
        return {
            create: function() {
                var html = $('<div>Тестовый MegaParser работает!</div>');
                return html;
            }
        };
    });

    Lampa.Manifest.plugins = {
        type: 'video',
        version: mod_version,
        name: 'MegaParser',
        description: 'Мой парсер — работает!',
        component: 'megaparser'
    };
})();