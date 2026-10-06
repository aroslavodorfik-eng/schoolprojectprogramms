// ВСТАВЬ СЮДА СВОЮ ССЫЛКУ ИЗ GOOGLE APPS SCRIPT
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbw8Xzaih8CvjN9HY1sAYRZKgps20PUzCBEY6iXw5IhXdzUGtW6zrKH7Z8rMfJTGxqJ1/exec";

// Список школ города Семей
const semeySchools = [
  "Средняя общеобразовательная школа №1",
  "Средняя общеобразовательная школа №2",
  "Средняя общеобразовательная школа №3",
  "Средняя общеобразовательная школа №4",
  "Средняя общеобразовательная школа №5",
  "Средняя общеобразовательная школа №6",
  "Средняя общеобразовательная школа №7",
  "Средняя общеобразовательная школа №8",
  "Средняя общеобразовательная школа №9",
  "Средняя общеобразовательная школа №10",
  "Средняя общеобразовательная школа №11",
  "Средняя общеобразовательная школа №12",
  "Средняя общеобразовательная школа №13",
  "Средняя общеобразовательная школа №14",
  "Средняя общеобразовательная школа №15",
  "Средняя общеобразовательная школа №16",
  "Средняя общеобразовательная школа №17",
  "Средняя общеобразовательная школа №18",
  "Средняя общеобразовательная школа №19",
  "Средняя общеобразовательная школа №20",
  "Средняя общеобразовательная школа №21",
  "Средняя общеобразовательная школа №22",
  "Средняя общеобразовательная школа №23",
  "Средняя общеобразовательная школа №24",
  "Средняя общеобразовательная школа №25",
  "Средняя общеобразовательная школа №26",
  "Средняя общеобразовательная школа №27",
  "Средняя общеобразовательная школа №28",
  "Средняя общеобразовательная школа №29",
  "Средняя общеобразовательная школа №30",
  "Средняя общеобразовательная школа №31",
  "Средняя общеобразовательная школа №32",
  "Средняя общеобразовательная школа №33",
  "Средняя общеобразовательная школа №34",
  "Средняя общеобразовательная школа №35",
  "Средняя общеобразовательная школа №36",
  "Средняя общеобразовательная школа №37",
  "Средняя общеобразовательная школа №38",
  "Средняя общеобразовательная школа №39",
  "Средняя общеобразовательная школа №40",
  "Средняя общеобразовательная школа №41",
  "Средняя общеобразовательная школа №42",
  "Средняя общеобразовательная школа №43",
  "Средняя общеобразовательная школа №44",
  "Средняя общеобразовательная школа №45",
  "Средняя общеобразовательная школа №46",
  "Средняя общеобразовательная школа №47",
  "Средняя общеобразовательная школа №48",
  "Средняя общеобразовательная школа №49",
  "Назарбаев Интеллектуальная Школа (НИШ) г. Семей",
  "Областной специализированный лицей-интернат «БІЛІМ-ИННОВАЦИЯ» для одаренных детей",
  "Областной специализированный лицей №39 для одаренных детей",
  "Экономический лицей",
  "Гимназия №6",
  "Частная школа «Жас Улан»",
  "Другая школа / Колледж"
];

// Данные формы и состояния теста
const state = {
  user: {
    fullName: "",
    birthDate: "",
    age: "",
    school: "",
    grade: "",
    interests: ""
  },
  currentQuestion: 0,
  scores: {
    Realistic: 0,
    Investigative: 0,
    Artistic: 0,
    Social: 0,
    Enterprising: 0,
    Conventional: 0
  }
};

// Полный массив из 30 вопросов RIASEC (методика Холланда)
const questions = [
  // Realistic (1-5)
  { text: "Вам нравится собирать, разбирать или чинить механизмы и бытовую технику?", type: "Realistic" },
  { text: "Вам интереснее работать своими руками, чем сидеть за бумагами и отчетами?", type: "Realistic" },
  { text: "Вы бы хотели научиться управлять профессиональным оборудованием или станком?", type: "Realistic" },
  { text: "Вам комфортно заниматься физическим трудом или работой на свежем воздухе?", type: "Realistic" },
  { text: "Вам нравится чертить схемы, собирать конструкторы или работать с инструментами?", type: "Realistic" },

  // Investigative (6-10)
  { text: "Вам нравится решать сложные логические задачи и математические головоломки?", type: "Investigative" },
  { text: "Вам интересно проводить научные эксперименты или лабораторные исследования?", type: "Investigative" },
  { text: "Вы любите докапываться до сути вещей и изучать, как работают программы или природные явления?", type: "Investigative" },
  { text: "Вам нравится читать научно-популярную литературу или статьи о новых технологиях?", type: "Investigative" },
  { text: "Вы предпочитаете сначала все тщательно проанализировать перед принятием решения?", type: "Investigative" },

  // Artistic (11-15)
  { text: "Вы увлекаетесь рисованием, графическим дизайном, фото или видеосъемкой?", type: "Artistic" },
  { text: "Вам важно выражать свои мысли и чувства через творчество и визуальные образы?", type: "Artistic" },
  { text: "Вам тяжело работать по жестким правилам и инструкциям, хочется свободы идей?", type: "Artistic" },
  { text: "Вы любите сочинять тексты, музыку или придумывать оригинальные концепты?", type: "Artistic" },
  { text: "Вам нравится оформлять пространства, создавать эстетичные презентации или сайты?", type: "Artistic" },

  // Social (16-20)
  { text: "Вам нравится помогать другим людям решением их проблем и давать советы?", type: "Social" },
  { text: "Вы легко находите общий язык с детьми и любите что-то объяснять или обучать?", type: "Social" },
  { text: "Вам интересна медицина, психология или волонтерская деятельность?", type: "Social" },
  { text: "Вы предпочитаете работать в большом и дружном коллективе, а не в одиночку?", type: "Social" },
  { text: "Вам легко сопереживать окружающим и поддерживать их в сложных ситуациях?", type: "Social" },

  // Enterprising (21-25)
  { text: "Вам нравится организовывать людей, быть лидером и вести за собой команду?", type: "Enterprising" },
  { text: "Вы мечтали бы открыть свой собственный бизнес или стартап?", type: "Enterprising" },
  { text: "Вам легко убеждать других людей в своей правоте и вести переговоры?", type: "Enterprising" },
  { text: "Вы не боитесь брать на себя ответственность и рисковать ради успеха?", type: "Enterprising" },
  { text: "Вам интересно заниматься продажами, маркетингом и продвижением товаров или услуг?", type: "Enterprising" },

  // Conventional (26-30)
  { text: "Вам нравится порядок во всем: четкие таблицы, структурированные файлы и списки?", type: "Conventional" },
  { text: "Вы внимательны к мелочам и легко находите ошибки в текстах или расчетах?", type: "Conventional" },
  { text: "Вам комфортно работать по готовым инструкциям, стандартам и регламентам?", type: "Conventional" },
  { text: "Вам интересна работа с финансами, бухгалтерией или документами?", type: "Conventional" },
  { text: "Вы цените стабильность, предсказуемость и четкий график работы?", type: "Conventional" }
];

const appContainer = document.getElementById("app");

// Инициализация при загрузке страницы
document.addEventListener("DOMContentLoaded", () => {
  renderRegistration();
});

// Функция расчета возраста по дате рождения
function calculateAge(birthDateString) {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

// 1. Экран регистрации
function renderRegistration() {
  const schoolOptions = semeySchools
    .map(school => `<option value="${school}">${school}</option>`)
    .join("");

  appContainer.innerHTML = `
    <h1 class="card-title">Тест на профориентацию</h1>
    <p class="card-subtitle">Ответьте на 30 вопросов для точного подбора специальностей и колледжей г. Семей.</p>
    
    <form id="regForm">
      <div class="form-group">
        <label>Имя и Фамилия</label>
        <input type="text" class="form-control" id="fullName" placeholder="Например: Иван Иванов" required>
      </div>

      <div class="form-group">
        <label>Дата рождения (Календарь)</label>
        <input type="date" class="form-control" id="birthDate" required>
      </div>

      <div class="form-group">
        <label>Класс / Курс</label>
        <input type="text" class="form-control" id="grade" placeholder="Например: 9 класс" required>
      </div>

      <div class="form-group">
        <label>Школа / Учебное заведение (г. Семей)</label>
        <select class="form-control" id="school" required style="width: 100%; padding: 0.75rem; border-radius: 8px; border: 1px solid var(--border-color); background: var(--bg-card); color: var(--text-main);">
          <option value="" disabled selected>Выберите школу из списка...</option>
          ${schoolOptions}
        </select>
      </div>

      <div class="form-group">
        <label>Ваши хобби и интересы</label>
        <input type="text" class="form-control" id="interests" placeholder="Например: компьютеры, спорт, рисование" required>
      </div>

      <button type="submit" class="btn-primary">Начать тестирование (30 вопросов) &rarr;</button>
    </form>
  `;

  document.getElementById("regForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const birthDateVal = document.getElementById("birthDate").value;
    
    state.user.fullName = document.getElementById("fullName").value;
    state.user.birthDate = birthDateVal;
    state.user.age = calculateAge(birthDateVal); // Вычисляем возраст по календарю
    state.user.grade = document.getElementById("grade").value;
    state.user.school = document.getElementById("school").value;
    state.user.interests = document.getElementById("interests").value;

    renderQuestion();
  });
}

// 2. Отображение вопроса с кнопками «Да / Скорее да / Нет»
function renderQuestion() {
  const q = questions[state.currentQuestion];
  const progressPercent = Math.round(((state.currentQuestion + 1) / questions.length) * 100);
  
  appContainer.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
      <span style="font-size: 0.8125rem; font-weight: 700; color: var(--accent); text-transform: uppercase;">
        Вопрос ${state.currentQuestion + 1} из ${questions.length}
      </span>
      <span style="font-size: 0.8125rem; font-weight: 600; color: var(--text-muted);">
        ${progressPercent}%
      </span>
    </div>

    <!-- Индикатор прогресса -->
    <div style="width: 100%; background: var(--border-color); height: 6px; border-radius: 999px; margin-bottom: 2rem; overflow: hidden;">
      <div style="width: ${progressPercent}%; background: var(--accent); height: 100%; transition: width 0.3s ease;"></div>
    </div>

    <div class="question-block">
      <div class="question-text" style="font-size: 1.25rem; font-weight: 600; line-height: 1.4; margin-bottom: 2rem;">
        ${q.text}
      </div>
      
      <div class="options-grid">
        <button class="option-btn" onclick="selectAnswer('${q.type}', 2)">
          <span>Полностью согласен(на)</span>
          <span style="color: var(--accent); font-weight: 700;">+2</span>
        </button>
        <button class="option-btn" onclick="selectAnswer('${q.type}', 1)">
          <span>Скорее да, чем нет</span>
          <span style="color: var(--text-muted);">+1</span>
        </button>
        <button class="option-btn" onclick="selectAnswer('${q.type}', 0)">
          <span>Совсем не про меня</span>
          <span style="color: var(--text-muted);">0</span>
        </button>
      </div>
    </div>
  `;
}

// Выбор ответа и начисление баллов
window.selectAnswer = function(type, points) {
  state.scores[type] = (state.scores[type] || 0) + points;
  state.currentQuestion++;

  if (state.currentQuestion < questions.length) {
    renderQuestion();
  } else {
    submitData();
  }
};

// 3. Отправка и индикатор загрузки
function submitData() {
  appContainer.innerHTML = `
    <div class="loader-container">
      <div class="spinner"></div>
      <h2 class="card-title">Обработка ответов...</h2>
      <p class="card-subtitle">Формируем индивидуальный RIASEC-профиль и подбираем колледжи г. Семей.</p>
    </div>
  `;

  const sortedTypes = Object.keys(state.scores).sort((a, b) => state.scores[b] - state.scores[a]);
  const topTypes = sortedTypes.slice(0, 2);

  const payload = {
    action: "submitTest",
    payload: {
      user: state.user,
      scores: state.scores,
      riasecTypes: topTypes
    }
  };

  // Отправляем как x-www-form-urlencoded — это обходит блокировки CORS в браузерах
  fetch(SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "postData=" + encodeURIComponent(JSON.stringify(payload))
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      renderResults(data.result);
    } else {
      alert("Ошибка скрипта: " + data.error);
    }
  })
  .catch(err => {
    alert("Ошибка соединения: " + err.message);
    console.error(err);
  });
}

// 4. Финальный экран с рекомендациями
function renderResults(result) {
  let html = `
    <h1 class="card-title">Ваши результаты</h1>
    <div class="result-header">
      <h3>Аналитический профиль</h3>
      <p>${result.summary}</p>
    </div>
    <h2 style="font-size: 1.125rem; font-weight: 700; margin-bottom: 1rem;">Рекомендуемые профессии и колледжи:</h2>
  `;

  result.professions.forEach(prof => {
    html += `
      <div class="profession-card">
        <div class="profession-title">${prof.title}</div>
        <div class="profession-desc">${prof.description}</div>
        <div class="college-list">
          <div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; margin-bottom: 0.5rem;">
            Где учиться в Семее:
          </div>
          ${prof.recommended_colleges.map(col => `
            <div class="college-item">
              <div>
                <div class="college-name">${col.name}</div>
                <div class="college-spec">Специальность: ${col.specialty}</div>
              </div>
              ${col.website ? `<a href="${col.website}" target="_blank" class="college-link">Сайт &rarr;</a>` : ''}
            </div>
          `).join('')}
        </div>
      </div>
    `;
  });

  html += `
    <button class="btn-primary" onclick="location.reload()" style="margin-top: 1.5rem;">
      Пройти тест заново
    </button>
  `;

  appContainer.innerHTML = html;
}