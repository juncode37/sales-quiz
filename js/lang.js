/* js/lang.js */
window.I18N = (() => {
  const translations = {
    ru: {
      // --- UI ---
      btn_write_hr: "Написать HR",
      hero_btn: "Заполнить анкету",
      hiring_now: "Набор открыт",
      hiring_now_2: `Новички + <span class="text-grad">кандидаты 
             с опытом</span>`,
      hero_title: `<span class="text-grad">Менеджер по работе с клиентами.</span> 
            <br>
            Работа в <span class="text-grad">переписке и звонки.</span>
            `,
      hero_sub: `Ищем активных ребят 18–25 лет из <span class="text-glow">Киева и Ивано-Франковска</span>. Обучаем, даём готовые скрипты и помогаем выйти на хороший доход.`,
      bonus_buyer: "Sign-on бонус (Buyer)",
      bonus_lead: "Для Team Lead + Команда",
      hero_cta: "Начать квиз",
      hero_note: "Без лишних созвонов. Ответ в течение дня.",
      how_it_works: "Как это работает",
      step1_t: "Анкета",
      step1_d: "90 секунд на ответы",
      step2_t: "Оффер",
      step2_d: "Мы оценим опыт и стек",
      step3_t: "Бонус",
      step3_d: "Выплата после выхода",

      sec_roles_title: "Кого ищем",
      sec_roles_sub:
        "Ищем мотивированных, амбициозных ребят и тех, кто уже разбирается в продажах.",
      role_buy_t: "Мотивированые новички",
      role_buy_d:
        "Связаться с клиентом, корректно зафиксировать данные в CRM и передать контакт старшему менеджеру для дальнейшего сопровождения. Процесс простой, без сложных продаж.",
      role_lead_t: "Амбициозные ребята 18–25",
      role_lead_d:
        "Парни и девушки, которые хотят зарабатывать, прокачать коммуникацию и собрять сильный скилл на будущее: продажи, переговоры, работа с клиентом, дисциплина и ответственность.",
      role_team_t: "С опытом в переписке / продажах",
      role_team_d:
        "Если ты уже общался(ась) с лидами в Telegram/Instagram, продавал(а) в чатах, работал(а) в поддержке или customer success — будет преимуществом. Быстрее адаптируешься и быстрее выйдешь на высокий результат.",
      role_buy_t_2: "Звонки",
      role_buy_d_2:
        "Хочешь войти в продажи без «холодных звонков» и научиться вести клиента в переписке. Дадим обучение, скрипты и поддержку — важно желание развиваться и результат.",
      role_lead_t_2: "Переписка",
      role_lead_d_2:
        "Продажи в чате <br> Формат переписки в Telegram / Instagram: выстраиваешь диалог, держишь темп и аккуратно ведёшь клиента по шагам.",
      role_team_t_2: "Фикс + бонусы",
      role_team_d_2:
        "Доход, который растёт вместе с тобой <br> Стабильная база + бонусная часть за результат. Чем сильнее показатели — тем выше итог, прозрачно и честно.",
      role_team_t_3: "Обучение внутри",
      role_team_d_3:
        "Погружаем в процесс: даём структуру, примеры, разборы и понятные шаги — чтобы быстро стать уверенным(ой) в работе. Новичкам на период обучения предусмотрена финансовая поддержка до выхода на стабильный доход.",
      role_team_t_4: "Поддержка",
      role_team_d_4:
        "Готовая методология общения и помощь команды: ты работаешь не «наугад», а по понятной схеме — с подсказками и обратной связью.",

      section_roles_b: "Свяжемся с тобой в течении дня",
      section_roles_b_2:
        "Ищем тех, кто хочет не «просто работу», а навыки и рост.",
      section_roles_b_3:
        "Формат - переписка, звонки, системная работа и понятные процессы",

      result_ok_t: "Заявка отправлена!",
      result_ok_d: "Мы свяжемся с вами в Telegram в течение дня.",
      result_err_t: "Что-то пошло не так",
      result_err_d: "Попробуйте ещё раз или напишите нам напрямую.",

      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      cookie_text: "Мы используем cookie для улучшения работы сайта.",
      tg_message:
        "Добрый день! Интересует вакансия менеджера по работе с клиентами.",
      // --- QUIZ UI ---
      quiz_title: "Анкета кандидата",
      btn_back: "Назад",
      btn_next: "Далее",
      btn_submit: "Отправить",
      btn_close: "Закрыть",
      err_fill: "Пожалуйста, заполните поле.",
      err_tg: "Укажите Telegram username (например: @username).",
      step_count: "Шаг {x} из {y}",

      // --- QUIZ QUESTIONS ---
      q_age_t: "Сколько вам лет?",
      q_age_18: "18",
      q_age_1920: "19–20",
      q_age_2123: "21–23",
      q_age_2425: "24–25",
      q_age_oth: "Другое",

      q_city_t: "Из какого вы города?",
      q_city_kyiv: "Киев",
      q_city_lviv: "Львов",
      q_city_if: "Ивано-Франковск",
      q_city_oth: "Другой город",

      q_exp_t: "Какой у вас опыт работы?",
      q_exp_0: "Без опыта, но быстро учусь",
      q_exp_sales: "Был опыт в продажах",
      q_exp_chat: "Работал(а) в переписке / чатах",
      q_exp_social: "Работал(а) с клиентами в соцсетях",
      q_exp_cc: "Есть опыт в call-центре / support / lead processing",

      q_conf_t: "Насколько уверенно вы чувствуете себя в переписке?",
      q_conf_1: "Легко начинаю диалог",
      q_conf_2: "Нормально общаюсь, но хочу прокачаться",
      q_conf_3: "Могу вести клиента по скрипту",
      q_conf_4: "Уже умею закрывать в переписке",

      q_platform_t: "Какими платформами пользуетесь лучше всего?",
      q_platform_tg: "Telegram",
      q_platform_ig: "Instagram",
      q_platform_tt: "TikTok / Direct",
      q_platform_multi: "Несколько сразу",
      q_platform_oth: "Другое",

      q_why_t: "Почему вам интересна эта вакансия?",
      q_why_income: "Хочу стабильный доход",
      q_why_sales: "Хочу освоить продажи",
      q_why_chat: "Нравится работа в переписке",
      q_why_growth: "Ищу рост и развитие",
      q_why_nocalls: "Подходит формат без звонков",

      q_name_t: "Как к вам обращаться?",
      q_name_ph: "Имя",

      q_phone_t: "Ваш номер телефона",
      q_phone_ph: "+380XXXXXXXXX",
      err_phone: "Укажите корректный номер телефона",

      q_tg_t: "Telegram для связи",
      q_tg_hint: "Мы напишем только по вашей заявке.",
      q_tg_submit: "Отправить анкету",

      // --- THANKS ---
      home_btn: "На главную",
      status_ok: "Заявка принята",
      thx_title: "Спасибо! Мы получили вашу анкету",
      thx_desc:
        "Мы свяжемся с вами в Telegram. Если вы тимлид — подготовьте кратко: состав команды, роли, спенд и гео.",
      mini_step: "Следующий шаг",
      mini_step_v: "сообщение в TG",
      mini_time: "Срок",
      mini_time_v: "в ближайшее время",
      res_title: "Подпишитесь на наши ресурсы",
      res_fb_t: "Канал про Facebook-трафик",
      res_fb_d: "Кейсы, связки, модерация, креативы и масштабирование в Meta.",
      res_google_t: "Канал про Google-трафик",
      res_google_d:
        "Стратегии, PMax/поиск, модерация, оптимизация и масштабирование.",
      res_inapp_t: "Канал про In-App",
      res_inapp_d:
        "In-app сети, креативы, аналитика и масштабирование мобильного трафика.",
      res_primax_t: "Агентство PRIMAX",
      res_primax_d:
        "Аренда аккаунтов Google / Facebook / Moloco и сопровождение запусков.",
      res_white_t: "White.Expert — генератор вайтов",
      res_white_d:
        "Генерация white-page под модерацию. Быстро, удобно, под разные форматы.",
      btn_open: "Открыть",
      thx_footer:
        "Если хотите ускорить процесс — напишите сразу: ваш источник, спенд, вертикаль и гео.",
    },

    ua: {
      // --- UI ---
      btn_write_hr: "Написати HR",
      hero_btn: "Заповнити анкету",
      hiring_now: "Набір відкрито",
      hiring_now_2: `Новачки + <span class="text-grad">кандидати 
             з досвідом</span>`,
      hero_title: `<span class="text-grad">Менеджер з роботи з клієнтами</span> 
            <br>
            Робота в <span class="text-grad">переписці та дзвінки.</span>
            `,
      hero_sub: `Шукаємо активних хлопців і дівчат 18–25 років з <span class="text-glow">Києва та Івано-Франківська</span>. Навчаємо, даємо готові скрипти та допомагаємо вийти на хороший дохід.`,
      bonus_buyer: "Sign-on бонус (Buyer)",
      bonus_lead: "Для Team Lead + Команда",
      hero_cta: "Почати квіз",
      hero_note: "Без зайвих дзвінків. Відповідь протягом дня.",
      how_it_works: "Як це працює",
      step1_t: "Анкета",
      step1_d: "90 секунд на відповіді",
      step2_t: "Офер",
      step2_d: "Ми оцінимо досвід і стек",
      step3_t: "Бонус",
      step3_d: "Виплата після виходу",

      sec_roles_title: "Кого шукаємо",
      sec_roles_sub:
        "Шукаємо мотивованих, амбітних хлопців і дівчат та тих, хто вже розбирається в продажах.",
      role_buy_t: "Мотивовані новачки",
      role_buy_d:
        "Зв'язатися з клієнтом, коректно зафіксувати дані в CRM і передати контакт старшому менеджеру для подальшого супроводу. Процес простий, без складних продажів.",
      role_lead_t: "Амбітні хлопці та дівчата 18–25",
      role_lead_d:
        "Ті, хто хоче заробляти, прокачати комунікацію і зібрати сильний скіл на майбутнє: продажі, переговори, робота з клієнтом, дисципліна та відповідальність.",
      role_team_t: "З досвідом у переписці / продажах",
      role_team_d:
        "Якщо ти вже спілкувався(лась) з лідами в Telegram/Instagram, продавав(ла) у чатах, працював(ла) у підтримці або customer success — це буде перевагою. Швидше адаптуєшся і швидше вийдеш на високий результат.",
      role_buy_t_2: "Дзвінки",
      role_buy_d_2:
        "Хочеш увійти в продажі без «холодних дзвінків» і навчитися вести клієнта в переписці. Дамо навчання, скрипти та підтримку — головне бажання розвиватися і результат.",
      role_lead_t_2: "Переписка",
      role_lead_d_2:
        "Продажі в чаті <br> Формат переписки в Telegram / Instagram: вибудовуєш діалог, тримаєш темп і акуратно ведеш клієнта по кроках.",
      role_team_t_2: "Фікс + бонуси",
      role_team_d_2:
        "Дохід, який росте разом з тобою <br> Стабільна база + бонусна частина за результат. Чим сильніші показники — тим вищий підсумок, прозоро і чесно.",
      role_team_t_3: "Навчання всередині",
      role_team_d_3:
        "Занурюємо в процес: даємо структуру, приклади, розбори і зрозумілі кроки — щоб швидко стати впевненим(ою) в роботі. Новачкам на період навчання передбачена фінансова підтримка до виходу на стабільний дохід.",
      role_team_t_4: "Підтримка",
      role_team_d_4:
        "Готова методологія спілкування та допомога команди: ти працюєш не «навмання», а за зрозумілою схемою — з підказками та зворотним зв'язком.",

      section_roles_b: "Зв'яжемося з тобою протягом дня",
      section_roles_b_2:
        "Шукаємо тих, хто хоче не «просто роботу», а навички та зріст.",
      section_roles_b_3:
        "Формат — переписка, дзвінки, системна робота і зрозумілі процеси",

      privacy: "Політика конфіденційності",
      terms: "Умови використання",
      cookie_text: "Ми використовуємо cookie для покращення роботи сайту.",

      tg_message:
        "Добрий день! Цікавить вакансія менеджера з роботи з клієнтами.",

      result_ok_t: "Заявку надіслано!",
      result_ok_d: "Ми зв'яжемося з вами в Telegram протягом дня.",
      result_err_t: "Щось пішло не так",
      result_err_d: "Спробуйте ще раз або напишіть нам напряму.",

      // --- QUIZ UI ---
      quiz_title: "Анкета кандидата",
      btn_back: "Назад",
      btn_next: "Далі",
      btn_submit: "Надіслати",
      btn_close: "Закрити",
      err_fill: "Будь ласка, заповніть поле.",
      err_tg: "Вкажіть Telegram username (наприклад: @username).",
      step_count: "Крок {x} з {y}",

      // --- QUIZ QUESTIONS ---
      q_age_t: "Скільки вам років?",
      q_age_18: "18",
      q_age_1920: "19–20",
      q_age_2123: "21–23",
      q_age_2425: "24–25",
      q_age_oth: "Інше",

      q_city_t: "З якого ви міста?",
      q_city_kyiv: "Київ",
      q_city_lviv: "Львів",
      q_city_if: "Івано-Франківськ",
      q_city_oth: "Інше місто",

      q_exp_t: "Який у вас досвід роботи?",
      q_exp_0: "Без досвіду, але швидко навчаюсь",
      q_exp_sales: "Був досвід у продажах",
      q_exp_chat: "Працював(ла) у листуванні / чатах",
      q_exp_social: "Працював(ла) з клієнтами в соцмережах",
      q_exp_cc: "Є досвід у call-центрі / support / lead processing",

      q_conf_t: "Наскільки впевнено ви почуваєтесь у листуванні?",
      q_conf_1: "Легко починаю діалог",
      q_conf_2: "Нормально спілкуюсь, але хочу прокачатись",
      q_conf_3: "Можу вести клієнта за скриптом",
      q_conf_4: "Вже вмію закривати у листуванні",

      q_platform_t: "Якими платформами користуєтесь найкраще?",
      q_platform_tg: "Telegram",
      q_platform_ig: "Instagram",
      q_platform_tt: "TikTok / Direct",
      q_platform_multi: "Кількома одразу",
      q_platform_oth: "Інше",

      q_why_t: "Чому вам цікава ця вакансія?",
      q_why_income: "Хочу стабільний дохід",
      q_why_sales: "Хочу освоїти продажі",
      q_why_chat: "Подобається робота в листуванні",
      q_why_growth: "Шукаю зростання та розвиток",
      q_why_nocalls: "Підходить формат без дзвінків",

      q_name_t: "Як до вас звертатися?",
      q_name_ph: "Ім'я",

      q_phone_t: "Ваш номер телефону",
      q_phone_ph: "+380XXXXXXXXX",
      err_phone: "Вкажіть коректний номер телефону",

      q_tg_t: "Telegram для зв'язку",
      q_tg_hint: "Ми напишемо тільки за вашою заявкою.",
      q_tg_submit: "Надіслати анкету",

      // --- THANKS ---
      home_btn: "На головну",
      status_ok: "Заявка прийнята",
      thx_title: "Дякуємо! Ми отримали вашу анкету",
      thx_desc:
        "Ми зв'яжемося з вами в Telegram. Якщо ви тімлід — підготуйте коротко: склад команди, ролі, спенд і гео.",
      mini_step: "Наступний крок",
      mini_step_v: "повідомлення в TG",
      mini_time: "Термін",
      mini_time_v: "найближчим часом",
      res_title: "Підпишіться на наші ресурси",
      res_fb_t: "Канал про Facebook-трафік",
      res_fb_d: "Кейси, зв'язки, модерація, креативи та масштабування в Meta.",
      res_google_t: "Канал про Google-трафік",
      res_google_d:
        "Стратегії, PMax/пошук, модерація, оптимізація та масштабування.",
      res_inapp_t: "Канал про In-App",
      res_inapp_d:
        "In-app мережі, креативи, аналітика та масштабування мобільного трафіку.",
      res_primax_t: "Агентство PRIMAX",
      res_primax_d:
        "Оренда акаунтів Google / Facebook / Moloco та супровід запусків.",
      res_white_t: "White.Expert — генератор вайтів",
      res_white_d:
        "Генерація white-page під модерацію. Швидко, зручно, під різні формати.",
      btn_open: "Відкрити",
      thx_footer:
        "Якщо хочете прискорити процес — напишіть відразу: ваше джерело, спенд, вертикаль і гео.",
    },
    // en: {
    //     // --- UI ---
    //     hero_btn: "Take Quiz",
    //     hiring_now: "Hiring Now",
    //     hero_title: `Affiliate Marketing Jobs.<br><span class="text-grad">Sign-on Bonus</span> included.`,
    //     hero_sub: "Looking for Media Buyers and Team Leads. Take a 1-minute scoring quiz and get a personal offer.",
    //     bonus_buyer: "Sign-on Bonus (Buyer)",
    //     bonus_lead: "For Team Lead + Team",
    //     hero_cta: "Start Quiz",
    //     hero_note: "No unnecessary calls. Feedback within 24h.",
    //     how_it_works: "How it works",
    //     step1_t: "Quiz",
    //     step1_d: "90 seconds to complete",
    //     step2_t: "Offer",
    //     step2_d: "We evaluate stack & exp",
    //     step3_t: "Bonus",
    //     step3_d: "Paid after probation",
    //     sec_roles_title: "Who we are looking for",
    //     role_buy_t: "Media Buyers",
    //     role_buy_d: "Exp in FB/Google/TikTok/UAC, tracking knowledge, creative testing, discipline in metrics.",
    //     role_lead_t: "Team Leads",
    //     role_lead_d: "Team management, processes, P&L responsibility, scaling skills and ROI maintenance.",
    //     role_team_t: "Teams",
    //     role_team_d: "Ready-made roles (designer/farm/analytics), own infrastructure or ready to build fast.",
    //     privacy: "Privacy Policy",
    //     terms: "Terms of Use",
    //     cookie_text: "We use cookies to improve your experience.",

    //     // --- QUIZ UI ---
    //     quiz_title: "Candidate Application",
    //     btn_back: "Back",
    //     btn_next: "Next",
    //     btn_submit: "Submit",
    //     btn_close: "Close",
    //     err_fill: "Please fill out this field.",
    //     err_tg: "Please enter a valid Telegram username (@username).",
    //     step_count: "Step {x} of {y}",

    //     // --- QUIZ QUESTIONS ---
    //     q_role_t: "Who are you?",
    //     q_role_buy: "Media Buyer",
    //     q_role_lead: "Team Lead (w/ team)",
    //     q_src_t: "Primary Traffic Source",
    //     q_src_fb: "Facebook / Meta",
    //     q_src_gg: "Google Ads",
    //     q_src_tt: "TikTok Ads",
    //     q_src_uac: "UAC / App",
    //     q_src_oth: "Other",
    //     q_exp_t: "Affiliate Experience",
    //     q_exp_03: "0–3 months",
    //     q_exp_312: "3–12 months",
    //     q_exp_12: "1–2 years",
    //     q_exp_2p: "2+ years",
    //     q_spend_t: "Average Monthly Spend",
    //     q_vert_t: "Primary Vertical",
    //     q_vert_gamb: "Gambling",
    //     q_vert_nutra: "Nutra",
    //     q_vert_crypto: "Crypto/Forex",
    //     q_vert_date: "Dating",
    //     q_vert_sweep: "Sweepstakes",
    //     q_vert_oth: "Other",
    //     q_geo_t: "Primary Geo",
    //     q_geo_sel: "Select...",
    //     q_geo_mix: "Mix",
    //     q_geo_hint: "If complex, select 'Mix', we'll discuss on call.",
    //     q_team_t: "Team Size",
    //     q_team_solo: "Solo (building now)",
    //     q_team_24: "2–4 people",
    //     q_team_59: "5–9 people",
    //     q_team_10: "10+ people",
    //     q_name_t: "What should we call you?",
    //     q_name_ph: "Name or Nickname",
    //     q_tg_t: "Telegram Contact",
    //     q_tg_hint: "Use @username format. We contact only for this offer.",

    //     // --- THANKS ---
    //     home_btn: "Back Home",
    //     status_ok: "Application Received",
    //     thx_title: "Thanks! We received your application",
    //     thx_desc: "We will contact you on Telegram. If you are a Team Lead, please prepare briefly: team structure, roles, spend, and geo.",
    //     mini_step: "Next step",
    //     mini_step_v: "TG message",
    //     mini_time: "Timeframe",
    //     mini_time_v: "shortly",
    //     res_title: "Subscribe to our resources",
    //     res_fb_t: "Facebook Traffic Channel",
    //     res_fb_d: "Cases, funnels, moderation, creatives, and scaling in Meta.",
    //     res_google_t: "Google Traffic Channel",
    //     res_google_d: "Strategies, PMax/Search, moderation, optimization, and scaling.",
    //     res_inapp_t: "In-App Channel",
    //     res_inapp_d: "In-app networks, creatives, analytics, and mobile traffic scaling.",
    //     res_primax_t: "PRIMAX Agency",
    //     res_primax_d: "Google / Facebook / Moloco account rental and launch support.",
    //     res_white_t: "White.Expert — White Page Gen",
    //     res_white_d: "White-page generation for moderation. Fast, convenient, various formats.",
    //     btn_open: "Open",
    //     thx_footer: "To speed up the process, write to us immediately: your source, spend, vertical, and geo."
    // }
  };

  const getBrowserLang = () => {
    // 1. URL Param (Highest priority)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("lang")) return urlParams.get("lang");

    // 2. Local Storage (Saved choice)
    const saved = localStorage.getItem("site_lang");
    if (saved && translations[saved]) return saved;

    // 3. Browser System (Default)
    const navLang = navigator.language || navigator.userLanguage;
    if (navLang.includes("ru")) return "ru";
    if (navLang.includes("uk") || navLang.includes("ua")) return "ua";
    return "en";
  };

  const setLang = (lang) => {
    if (!translations[lang]) lang = "en";

    // Save choice
    localStorage.setItem("site_lang", lang);
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    const curLangEl = document.getElementById("curLang");
    if (curLangEl) curLangEl.innerText = lang.toUpperCase();

    document.querySelectorAll(".lang-item").forEach((item) => {
      item.classList.remove("active");
      if (item.dataset.val === lang) item.classList.add("active");
    });
  };

  const t = (key) => {
    const lang = document.documentElement.lang || "en";
    if (translations[lang] && translations[lang][key]) {
      return translations[lang][key];
    }
    return key;
  };

  const initDropdown = () => {
    const btn = document.getElementById("langToggle");
    const menu = document.getElementById("langMenu");

    if (!btn || !menu) return;

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      menu.classList.toggle("show");
    });

    document.addEventListener("click", () => {
      menu.classList.remove("show");
    });

    document.querySelectorAll(".lang-item").forEach((item) => {
      item.addEventListener("click", () => {
        setLang(item.dataset.val);
      });
    });
  };

  const currentLang = getBrowserLang();
  setLang(currentLang);
  document.addEventListener("DOMContentLoaded", initDropdown);

  return {
    current: currentLang,
    t: t,
  };
})();
