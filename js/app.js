/* js/app.js - Cleaned */
(() => {
  // === CONFIG ===
  const CONFIG = {
    WEBHOOK_URL:
      "https://script.google.com/macros/s/AKfycbyAw6uf4PRUtBDnqF9cIIxDu1_JSR7SrbXBpjfZ-4Q6XuB5R6hVeh2bBUHxorYlr_3S/exec",
    REDIRECT_URL: "thanks.html",
  };

  const t = (key) => (window.I18N && window.I18N.t ? window.I18N.t(key) : key);
  const getParam = (name) =>
    new URLSearchParams(window.location.search).get(name) || "";

  // === QUIZ DATA (Твой список вопросов) ===
  const steps = [
    {
      id: "age",
      titleKey: "q_age_t",
      type: "radio",
      required: true,
      options: [
        { value: "18", labelKey: "q_age_18" },
        { value: "19-20", labelKey: "q_age_1920" },
        { value: "21-23", labelKey: "q_age_2123" },
        { value: "24-25", labelKey: "q_age_2425" },
        { value: "other", labelKey: "q_age_oth" },
      ],
    },
    {
      id: "city",
      titleKey: "q_city_t",
      type: "radio",
      required: true,
      options: [
        { value: "kyiv", labelKey: "q_city_kyiv" },
        { value: "lviv", labelKey: "q_city_lviv" },
        { value: "ivano-frankivsk", labelKey: "q_city_if" },
        { value: "other", labelKey: "q_city_oth" },
      ],
    },
    {
      id: "experience",
      titleKey: "q_exp_t",
      type: "radio",
      required: true,
      options: [
        { value: "no_exp", labelKey: "q_exp_0" },
        { value: "sales", labelKey: "q_exp_sales" },
        { value: "chat", labelKey: "q_exp_chat" },
        { value: "social", labelKey: "q_exp_social" },
        { value: "callcenter", labelKey: "q_exp_cc" },
      ],
    },
    {
      id: "confidence",
      titleKey: "q_conf_t",
      type: "radio",
      required: true,
      options: [
        { value: "easy_start", labelKey: "q_conf_1" },
        { value: "normal", labelKey: "q_conf_2" },
        { value: "script", labelKey: "q_conf_3" },
        { value: "can_close", labelKey: "q_conf_4" },
      ],
    },
    {
      id: "platform",
      titleKey: "q_platform_t",
      type: "radio",
      required: true,
      options: [
        { value: "telegram", labelKey: "q_platform_tg" },
        { value: "instagram", labelKey: "q_platform_ig" },
        { value: "tiktok", labelKey: "q_platform_tt" },
        { value: "multi", labelKey: "q_platform_multi" },
        { value: "other", labelKey: "q_platform_oth" },
      ],
    },
    {
      id: "motivation",
      titleKey: "q_why_t",
      type: "radio",
      required: true,
      options: [
        { value: "income", labelKey: "q_why_income" },
        { value: "learn_sales", labelKey: "q_why_sales" },
        { value: "like_chat", labelKey: "q_why_chat" },
        { value: "growth", labelKey: "q_why_growth" },
        { value: "no_calls", labelKey: "q_why_nocalls" },
      ],
    },
    {
      id: "contact_name",
      titleKey: "q_name_t",
      type: "text",
      required: true,
      placeholderKey: "q_name_ph",
    },
    {
      id: "contact_tg",
      titleKey: "q_tg_t",
      type: "text",
      required: true,
      placeholder: "@username",
      hintKey: "q_tg_hint",
    },
  ];

  function scoreLead(a) {
    let score = 0;
    if (a.role === "media_buyer") score += 10;
    if (a.role === "team_lead") score += 14;
    const expMap = { "0-3m": 2, "3-12m": 5, "1-2y": 8, "2y+": 12 };
    score += expMap[a.experience] || 0;
    const spendMap = {
      "10-50k": 6,
      "50-200k": 8,
      "200-500k": 10,
      "500k-1m": 12,
      "1-2m": 13,
      "2-5m": 14,
    };
    score += spendMap[a.spend] || 0;
    if (a.source === "facebook") score += 3;
    if (a.source === "google") score += 3;
    if (a.role === "team_lead") {
      const teamMap = { solo: 0, "2-4": 4, "5-9": 7, "10+": 10 };
      score += teamMap[a.team_size] || 0;
    }
    const grade = score >= 28 ? "A" : score >= 18 ? "B" : "C";
    return { score, grade };
  }

  let currentStep = 0;
  let answers = {};
  const modal = document.getElementById("quizModal");
  const form = document.getElementById("quizForm");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const progressBar = document.getElementById("progressFill");
  const stepCounter = document.getElementById("stepCounter");

  function getActiveSteps() {
    return steps.filter((s) => !s.conditional || s.conditional(answers));
  }

  function renderStep() {
    const activeSteps = getActiveSteps();
    if (currentStep >= activeSteps.length) currentStep = activeSteps.length - 1;
    const step = activeSteps[currentStep];
    form.innerHTML = "";

    const progress = ((currentStep + 1) / activeSteps.length) * 100;
    progressBar.style.width = `${progress}%`;
    stepCounter.innerText = t("step_count")
      .replace("{x}", currentStep + 1)
      .replace("{y}", activeSteps.length);

    const wrapper = document.createElement("div");
    const title = document.createElement("h3");
    title.className = "q-title";
    title.style.marginBottom = "20px";
    title.innerText = t(step.titleKey);
    wrapper.appendChild(title);

    if (step.type === "radio") {
      step.options.forEach((opt) => {
        const label = document.createElement("label");
        label.className = "quiz-option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = step.id;
        input.value = opt.value;
        if (answers[step.id] === opt.value) input.checked = true;
        input.addEventListener("change", () => {
          answers[step.id] = opt.value;
          setTimeout(goNext, 250);
        });
        const inner = document.createElement("div");
        inner.className = "quiz-option__inner";
        inner.innerText = opt.labelKey ? t(opt.labelKey) : opt.label;
        label.appendChild(input);
        label.appendChild(inner);
        wrapper.appendChild(label);
      });
    } else if (step.type === "select") {
      const select = document.createElement("select");
      select.className = "glass-panel";
      select.style.width = "100%";
      select.style.padding = "14px";
      step.options.forEach((opt) => {
        const option = document.createElement("option");
        option.value = opt.value;
        option.innerText = opt.labelKey ? t(opt.labelKey) : opt.label;
        select.appendChild(option);
      });
      select.value = answers[step.id] || "";
      select.addEventListener("change", (e) => {
        answers[step.id] = e.target.value;
      });
      wrapper.appendChild(select);
    } else if (step.type === "text") {
      const input = document.createElement("input");
      input.type = "text";
      input.className = "glass-panel";
      input.style.width = "100%";
      input.style.padding = "16px";
      if (step.placeholderKey) input.placeholder = t(step.placeholderKey);
      input.value = answers[step.id] || "";
      input.addEventListener("input", (e) => {
        answers[step.id] = e.target.value;
      });
      wrapper.appendChild(input);
    }

    if (step.hintKey) {
      const hint = document.createElement("div");
      hint.style.fontSize = "12px";
      hint.style.color = "#8b92a5";
      hint.style.marginTop = "10px";
      hint.innerText = t(step.hintKey);
      wrapper.appendChild(hint);
    }
    const err = document.createElement("div");
    err.id = "stepErr";
    err.style.color = "#ff6b6b";
    err.style.fontSize = "13px";
    err.style.marginTop = "10px";
    err.style.display = "none";
    wrapper.appendChild(err);
    form.appendChild(wrapper);

    prevBtn.disabled = currentStep === 0;
    prevBtn.innerText = t("btn_back");
    nextBtn.innerText =
      currentStep === activeSteps.length - 1 ? t("btn_submit") : t("btn_next");
  }

  function goNext() {
    const activeSteps = getActiveSteps();
    const step = activeSteps[currentStep];
    const val = answers[step.id];
    const errEl = document.getElementById("stepErr");
    let isValid = true;
    if (step.required && (!val || val.length < 1)) isValid = false;
    if (isValid && step.id === "contact_tg") {
      if (val.length < 2) isValid = false;
      if (isValid && !val.startsWith("@")) answers[step.id] = "@" + val;
    }
    if (!isValid) {
      errEl.innerText = step.id === "contact_tg" ? t("err_tg") : t("err_fill");
      errEl.style.display = "block";
      return;
    } else {
      errEl.style.display = "none";
    }

    if (currentStep < activeSteps.length - 1) {
      currentStep++;
      renderStep();
    } else {
      submitQuiz();
    }
  }
  function goPrev() {
    if (currentStep > 0) {
      currentStep--;
      renderStep();
    }
  }

  // === SUBMIT (ПРОСТОЙ ВАРИАНТ) ===
  async function submitQuiz() {
    nextBtn.disabled = true;
    nextBtn.innerText = "Wait...";

    const { score, grade } = scoreLead(answers);

    // Данные для Google (тут subid берется из URL, если есть, это для таблицы)
    const payload = {
      ...answers,
      lead_id: Date.now().toString(36),
      pixel: getParam("pixel"),
      subid: getParam("subid"),
      score: score,
      grade: grade,
      lang: (window.I18N && window.I18N.current) || "ru",
    };

    try {
      sessionStorage.setItem("lastLead", JSON.stringify(payload));
    } catch (e) {}

    // 1. Отправляем в Google (фоном)
    const googleReq = fetch(CONFIG.WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).catch((err) => console.error(err));

    // 2. ОТСТУК В КЕЙТАРО
    // Вызываем функцию, которая лежит в HTML
    if (typeof window.trigger_lead_data === "function") {
      try {
        // Ждем пока выполнится
        await window.trigger_lead_data();
      } catch (e) {
        console.error("Tracking error:", e);
      }
    }

    // 3. Ждем Гугл и редиректим
    try {
      await googleReq;
    } catch (e) {}
    window.location.href = CONFIG.REDIRECT_URL;
  }

  nextBtn.addEventListener("click", goNext);
  prevBtn.addEventListener("click", goPrev);
  document.querySelectorAll("[data-open-quiz]").forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.add("is-open");
      currentStep = 0;
      renderStep();
    });
  });
  document.querySelectorAll("[data-close-quiz]").forEach((btn) => {
    btn.addEventListener("click", () => {
      modal.classList.remove("is-open");
    });
  });
  document.querySelectorAll(".lang-item").forEach((item) => {
    item.addEventListener("click", () => {
      setTimeout(renderStep, 50);
    });
  });
})();
