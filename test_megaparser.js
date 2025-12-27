(function() {
    'use strict';
  
    // ───────────────────────────────────────────────────────────────
    // ТВОИ НАСТРОЙКИ
    // ───────────────────────────────────────────────────────────────
  
    // 1. Твой любимый балансер (название из списка в BwaRC)
    const MY_FAVORITE_BALANSER = "rezka"; // rezka, kodik, filmix, alloha, collaps, hdvb, etc.
  
    // 2. Твой email (если есть премиум-аккаунт в Lampac)
    const MY_EMAIL = "ваш@email.com"; // или "" если не нужен
  
    // 3. Хочешь убрать некоторые балансеры? Добавь их сюда
    const BLACKLIST_BALANSERS = ["anilibria", "animego", "vokino"]; // пример
  
    // 4. Изменить текст кнопки в карточке фильма
    const CUSTOM_BUTTON_TEXT = "Смотреть у меня"; // или "Мой онлайн"
  
    // ───────────────────────────────────────────────────────────────
    // НЕ ТРОГАЙ НИЖЕ, ЕСЛИ НЕ ПОНИМАЕШЬ
    // ───────────────────────────────────────────────────────────────
  
    // Сохраняем оригинальную функцию startPlugin
    const originalStartPlugin = window.startPlugin || function() {};
  
    window.startPlugin = function() {
      originalStartPlugin();
  
      // Если есть email — сразу подставляем его
      if (MY_EMAIL && MY_EMAIL.trim() !== "") {
        Lampa.Storage.set('account_email', MY_EMAIL);
      }
  
      // Принудительно выбираем любимый балансер при запуске
      Lampa.Storage.set('online_balanser', MY_FAVORITE_BALANSER);
  
      // Убираем ненужные балансеры (если они есть в списке)
      if (window.bwarch_plugin) {
        Lampa.Listener.follow('bwarch_ready', function() {
          const sources = Lampa.Storage.get('online_sources', {});
          BLACKLIST_BALANSERS.forEach(b => {
            if (sources[b]) {
              sources[b].show = false;
            }
          });
          Lampa.Storage.set('online_sources', sources);
        });
      }
  
      // Меняем текст кнопки в карточке
      Lampa.Listener.follow('full', function(e) {
        if (e.type === 'complite') {
          const btn = e.object.activity.render().find('.lampac--button');
          if (btn.length) {
            btn.find('span').text(CUSTOM_BUTTON_TEXT);
          }
        }
      });
    };
  
    // Запускаем сразу, если плагин уже загрузился
    if (window.bwarch_plugin) {
      window.startPlugin();
    }
  })();