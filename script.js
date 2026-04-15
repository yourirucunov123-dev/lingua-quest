const STORAGE_KEY = "linguaquest_profile_v2";
const LESSON_COUNT = 50;
const TASKS_PER_LESSON = 4;

const THEME_ZONES = [
  { title: "Глава 1 - Первые слова", colorClass: "zone-0" },
  { title: "Глава 2 - Школа и дом", colorClass: "zone-1" },
  { title: "Глава 3 - Повседневная жизнь", colorClass: "zone-2" },
  { title: "Глава 4 - Путешествия и диалоги", colorClass: "zone-3" },
  { title: "Глава 5 - Уверенный разговор", colorClass: "zone-4" }
];

const BEGINNER_WORDS = [
  ["яблоко", "apple"], ["школа", "school"], ["кот", "cat"], ["собака", "dog"],
  ["книга", "book"], ["вода", "water"], ["друг", "friend"], ["дом", "house"],
  ["учитель", "teacher"], ["ручка", "pen"], ["молоко", "milk"], ["солнце", "sun"],
  ["машина", "car"], ["дерево", "tree"], ["город", "city"], ["телефон", "phone"],
  ["хлеб", "bread"], ["семья", "family"], ["дверь", "door"], ["окно", "window"]
];

const BASIC_SENTENCES = [
  ["Я люблю английский", "I love English"],
  ["Она читает книгу", "She reads a book"],
  ["Мы играем после школы", "We play after school"],
  ["Он пьет воду", "He drinks water"],
  ["Мой брат дома", "My brother is at home"],
  ["Я делаю домашнюю работу", "I do my homework"],
  ["Они смотрят фильм вечером", "They watch a movie in the evening"],
  ["Мы завтракаем утром", "We have breakfast in the morning"],
  ["У меня есть хороший друг", "I have a good friend"],
  ["Она говорит по-английски", "She speaks English"]
];

const DIALOG_SENTENCES = [
  ["Где находится автобусная остановка?", "Where is the bus stop?"],
  ["Я хотел бы заказать чай", "I would like to order tea"],
  ["Во сколько начинается урок?", "What time does the lesson start?"],
  ["Можно мне помочь?", "Can you help me?"],
  ["Сегодня прекрасная погода", "The weather is wonderful today"],
  ["Как пройти до музея?", "How can I get to the museum?"],
  ["Можно мне меню, пожалуйста?", "Can I have the menu, please?"],
  ["Я немного понимаю английский", "I understand English a little"],
  ["Вы говорите медленнее, пожалуйста", "Could you speak more slowly, please?"]
];

const ADVANCED_SENTENCES = [
  ["Если завтра будет дождь, мы останемся дома", "If it rains tomorrow, we will stay at home"],
  ["Я уже сделал домашнее задание", "I have already done my homework"],
  ["Когда я пришел, они обсуждали проект", "When I arrived, they were discussing the project"],
  ["Мне нужно улучшить разговорную практику", "I need to improve my speaking practice"],
  ["Чем больше я читаю, тем лучше понимаю язык", "The more I read, the better I understand the language"],
  ["Если бы у меня было больше времени, я бы учился каждый день", "If I had more time, I would study every day"],
  ["Она сказала, что придет после того, как закончит работу", "She said she would come after she finished work"],
  ["К тому времени, как мы приехали, поезд уже ушел", "By the time we arrived, the train had already left"],
  ["Я стараюсь думать на английском, чтобы говорить свободнее", "I try to think in English to speak more fluently"]
];

const ZONE_SUBTOPICS = [
  ["Приветствия", "Семья", "Школа", "Еда", "Дом", "Животные", "Погода", "Город", "Покупки", "Транспорт"],
  ["Класс", "Предметы", "Расписание", "Домашнее задание", "Комнаты", "Мебель", "Быт", "Двор", "Режим дня", "Учеба дома"],
  ["Утро", "Рабочий день", "Встречи", "Звонки", "Хобби", "Спорт", "Покупки", "Еда вне дома", "Выходной", "Планы"],
  ["Путешествия", "Ресторан", "Отель", "Город", "Покупки в поездке", "Работа", "Вопросы", "Погода", "Транспорт", "Общение"],
  ["Уверенное общение", "Аргументы", "Истории", "Мнения", "Сложные покупки", "Работа и карьера", "Переговоры", "Новости", "Свободный разговор", "Финальный диалог"]
];

const TOPIC_WORD_BANK = {
  "Приветствия": [["привет", "hello"], ["до свидания", "goodbye"], ["спасибо", "thank you"], ["пожалуйста", "please"]],
  "Семья": [["семья", "family"], ["мама", "mother"], ["папа", "father"], ["брат", "brother"]],
  "Школа": [["школа", "school"], ["учитель", "teacher"], ["книга", "book"], ["ручка", "pen"]],
  "Еда": [["яблоко", "apple"], ["хлеб", "bread"], ["вода", "water"], ["молоко", "milk"]],
  "Дом": [["дом", "house"], ["дверь", "door"], ["окно", "window"], ["комната", "room"]],
  "Животные": [["кот", "cat"], ["собака", "dog"], ["птица", "bird"], ["рыба", "fish"]],
  "Погода": [["солнце", "sun"], ["дождь", "rain"], ["ветер", "wind"], ["снег", "snow"]],
  "Город": [["город", "city"], ["улица", "street"], ["парк", "park"], ["музей", "museum"]],
  "Покупки": [["магазин", "shop"], ["цена", "price"], ["деньги", "money"], ["сумка", "bag"]],
  "Транспорт": [["машина", "car"], ["автобус", "bus"], ["поезд", "train"], ["билет", "ticket"]],
  "Путешествия": [["поездка", "trip"], ["аэропорт", "airport"], ["паспорт", "passport"], ["карта", "map"]],
  "Ресторан": [["меню", "menu"], ["чай", "tea"], ["кофе", "coffee"], ["ужин", "dinner"]],
  "Работа": [["работа", "work"], ["проект", "project"], ["команда", "team"], ["встреча", "meeting"]],
  "Вопросы": [["где", "where"], ["когда", "when"], ["почему", "why"], ["как", "how"]],
  "Общение": [["разговор", "conversation"], ["идея", "idea"], ["помощь", "help"], ["язык", "language"]],
  "Класс": [["класс", "classroom"], ["доска", "board"], ["парта", "desk"], ["урок", "lesson"]],
  "Предметы": [["математика", "math"], ["история", "history"], ["музыка", "music"], ["наука", "science"]],
  "Расписание": [["расписание", "schedule"], ["понедельник", "monday"], ["вторник", "tuesday"], ["перемена", "break"]],
  "Домашнее задание": [["задание", "homework"], ["упражнение", "exercise"], ["ответ", "answer"], ["оценка", "grade"]],
  "Комнаты": [["комната", "room"], ["кухня", "kitchen"], ["спальня", "bedroom"], ["ванная", "bathroom"]],
  "Мебель": [["стол", "table"], ["стул", "chair"], ["кровать", "bed"], ["шкаф", "wardrobe"]],
  "Быт": [["уборка", "cleaning"], ["посуда", "dishes"], ["пол", "floor"], ["порядок", "order"]],
  "Двор": [["двор", "yard"], ["дерево", "tree"], ["скамейка", "bench"], ["сосед", "neighbor"]],
  "Режим дня": [["утро", "morning"], ["вечер", "evening"], ["завтрак", "breakfast"], ["сон", "sleep"]],
  "Учеба дома": [["ноутбук", "laptop"], ["тетрадь", "notebook"], ["повторение", "review"], ["тема", "topic"]],
  "Утро": [["будильник", "alarm"], ["зубы", "teeth"], ["душ", "shower"], ["одежда", "clothes"]],
  "Рабочий день": [["офис", "office"], ["задача", "task"], ["письмо", "email"], ["перерыв", "break"]],
  "Встречи": [["встреча", "meeting"], ["коллега", "colleague"], ["идея", "idea"], ["план", "plan"]],
  "Звонки": [["звонок", "call"], ["номер", "number"], ["связь", "connection"], ["голос", "voice"]],
  "Хобби": [["музыка", "music"], ["рисование", "drawing"], ["фильм", "movie"], ["игра", "game"]],
  "Спорт": [["спорт", "sport"], ["бег", "running"], ["мяч", "ball"], ["тренировка", "training"]],
  "Еда вне дома": [["кафе", "cafe"], ["ужин", "dinner"], ["заказ", "order"], ["чек", "bill"]],
  "Выходной": [["суббота", "saturday"], ["прогулка", "walk"], ["парк", "park"], ["отдых", "rest"]],
  "Планы": [["план", "plan"], ["цель", "goal"], ["неделя", "week"], ["месяц", "month"]]
};

const TOPIC_SENTENCE_BANK = {
  "Приветствия": [["Я говорю привет другу", "I say hello to my friend"], ["Мы желаем хорошего дня", "We wish a good day"]],
  "Семья": [["Моя семья большая", "My family is big"], ["Мой брат дома", "My brother is at home"]],
  "Школа": [["Я делаю домашнюю работу", "I do my homework"], ["Она читает книгу", "She reads a book"]],
  "Еда": [["Мы завтракаем утром", "We have breakfast in the morning"], ["Он пьет воду", "He drinks water"]],
  "Дом": [["Мой дом очень уютный", "My house is very cozy"], ["Окно в моей комнате большое", "The window in my room is big"]],
  "Животные": [["У нас дома есть кот", "We have a cat at home"], ["Собака любит играть", "The dog likes to play"]],
  "Погода": [["Сегодня прекрасная погода", "The weather is wonderful today"], ["Завтра будет дождь", "It will rain tomorrow"]],
  "Город": [["Я живу в большом городе", "I live in a big city"], ["Мы гуляем по парку", "We walk in the park"]],
  "Покупки": [["Я хочу купить новую сумку", "I want to buy a new bag"], ["Эта цена слишком высокая", "This price is too high"]],
  "Транспорт": [["Я еду в школу на автобусе", "I go to school by bus"], ["Поезд приходит вовремя", "The train arrives on time"]],
  "Путешествия": [["Где находится автобусная остановка?", "Where is the bus stop?"], ["Как пройти до музея?", "How can I get to the museum?"]],
  "Ресторан": [["Я хотел бы заказать чай", "I would like to order tea"], ["Можно мне меню, пожалуйста?", "Can I have the menu, please?"]],
  "Работа": [["Когда я пришел, они обсуждали проект", "When I arrived, they were discussing the project"], ["Она закончила работу поздно", "She finished work late"]],
  "Вопросы": [["Во сколько начинается урок?", "What time does the lesson start?"], ["Можно мне помочь?", "Can you help me?"]],
  "Общение": [["Я немного понимаю английский", "I understand English a little"], ["Вы говорите медленнее, пожалуйста", "Could you speak more slowly, please?"]],
  "Класс": [["Я сижу в классе", "I sit in the classroom"], ["Учитель пишет на доске", "The teacher writes on the board"]],
  "Предметы": [["Мой любимый предмет - история", "My favorite subject is history"], ["Сегодня у нас урок музыки", "Today we have a music lesson"]],
  "Расписание": [["Урок начинается в понедельник утром", "The lesson starts on Monday morning"], ["Сейчас у нас большая перемена", "We have a long break now"]],
  "Домашнее задание": [["Я делаю сложное задание", "I do a difficult homework task"], ["Мой ответ правильный", "My answer is correct"]],
  "Комнаты": [["Моя спальня очень светлая", "My bedroom is very bright"], ["Кухня рядом с ванной", "The kitchen is near the bathroom"]],
  "Мебель": [["Стол стоит у окна", "The table is near the window"], ["У меня новая кровать", "I have a new bed"]],
  "Быт": [["Я мою посуду вечером", "I wash the dishes in the evening"], ["Мы любим порядок дома", "We like order at home"]],
  "Двор": [["Во дворе растет дерево", "A tree grows in the yard"], ["Сосед сидит на скамейке", "The neighbor sits on the bench"]],
  "Режим дня": [["Я просыпаюсь рано утром", "I wake up early in the morning"], ["Вечером я быстро засыпаю", "I fall asleep quickly in the evening"]],
  "Учеба дома": [["Я повторяю тему дома", "I review the topic at home"], ["Я пишу в тетради", "I write in my notebook"]],
  "Утро": [["Будильник звонит в семь", "The alarm rings at seven"], ["После душа я одеваюсь", "I get dressed after the shower"]],
  "Рабочий день": [["Я отправляю письмо утром", "I send an email in the morning"], ["В офисе много задач", "There are many tasks in the office"]],
  "Встречи": [["На встрече мы обсуждаем план", "At the meeting we discuss the plan"], ["Мой коллега предлагает идею", "My colleague suggests an idea"]],
  "Звонки": [["Я проверяю номер перед звонком", "I check the number before the call"], ["Связь сегодня плохая", "The connection is bad today"]],
  "Хобби": [["По вечерам я смотрю фильм", "I watch a movie in the evening"], ["По выходным я люблю рисование", "I like drawing on weekends"]],
  "Спорт": [["Я бегаю в парке утром", "I run in the park in the morning"], ["После школы у нас тренировка", "We have training after school"]],
  "Еда вне дома": [["Мы делаем заказ в кафе", "We place an order in a cafe"], ["После ужина приносят чек", "They bring the bill after dinner"]],
  "Выходной": [["В субботу мы идем на прогулку", "On Saturday we go for a walk"], ["Это идеальный день для отдыха", "It is a perfect day for rest"]],
  "Планы": [["На неделю у меня большой план", "I have a big plan for the week"], ["Моя цель - говорить свободно", "My goal is to speak fluently"]],
  "Уверенное общение": [["Я уверенно говорю по-английски", "I speak English confidently"], ["Я понимаю собеседника без проблем", "I understand my partner without problems"]],
  "Аргументы": [["Я могу объяснить свою точку зрения", "I can explain my point of view"], ["У меня есть сильные аргументы", "I have strong arguments"]],
  "Истории": [["Я рассказываю интересную историю", "I tell an interesting story"], ["Вчера я встретил старого друга", "Yesterday I met an old friend"]],
  "Мнения": [["По моему мнению, это хорошая идея", "In my opinion, this is a good idea"], ["Я полностью согласен с тобой", "I totally agree with you"]],
  "Сложные покупки": [["Я хотел бы вернуть этот товар", "I would like to return this item"], ["Могу ли я оплатить картой?", "Can I pay by card?"]],
  "Работа и карьера": [["Я готовлюсь к собеседованию", "I am preparing for an interview"], ["Я хочу развивать свою карьеру", "I want to develop my career"]],
  "Переговоры": [["Мы обсуждаем условия договора", "We discuss the contract terms"], ["Давайте найдем общее решение", "Let us find a common solution"]],
  "Новости": [["Сегодня я читал мировые новости", "Today I read world news"], ["Эта новость меня удивила", "This news surprised me"]],
  "Свободный разговор": [["Давай просто поговорим о жизни", "Let us just talk about life"], ["Мне нравится поддерживать разговор", "I enjoy keeping a conversation"]],
  "Финальный диалог": [["Мы завершили курс и говорим уверенно", "We finished the course and speak confidently"], ["Теперь я могу поддержать сложный диалог", "Now I can keep a complex dialogue"]]
};

const TOPIC_ADVANCED_BANK = {
  "Путешествия": [["К тому времени, как мы приехали, поезд уже ушел", "By the time we arrived, the train had already left"]],
  "Ресторан": [["Если бы у меня было больше времени, я бы учился каждый день", "If I had more time, I would study every day"]],
  "Работа": [["Она сказала, что придет после того, как закончит работу", "She said she would come after she finished work"]],
  "Общение": [["Я стараюсь думать на английском, чтобы говорить свободнее", "I try to think in English to speak more fluently"]],
  "Вопросы": [["Чем больше я читаю, тем лучше понимаю язык", "The more I read, the better I understand the language"]]
};

const WORD_ALTERNATIVES = {
  "папа": ["father", "dad", "daddy"],
  "мама": ["mother", "mom", "mum", "mommy"],
  "брат": ["brother", "bro"],
  "сестра": ["sister", "sis"],
  "привет": ["hello", "hi"],
  "до свидания": ["goodbye", "bye", "bye bye"],
  "спасибо": ["thank you", "thanks", "thx"],
  "пожалуйста": ["please", "you are welcome"],
  "учитель": ["teacher", "tutor"],
  "книга": ["book", "textbook"],
  "машина": ["car", "auto"],
  "дом": ["house", "home"]
};

const initialProfile = {
  xp: 0,
  level: 1,
  streak: 0,
  lives: 5,
  completedLessons: [],
  lastStudyDate: null
};

const state = {
  profile: loadProfile(),
  lessons: buildLessons(),
  activeLesson: null,
  taskIndex: 0,
  correctAnswers: 0,
  buildWords: [],
  ttsFallbackNotified: false
};

const elements = {
  xpValue: document.getElementById("xpValue"),
  levelValue: document.getElementById("levelValue"),
  streakValue: document.getElementById("streakValue"),
  livesValue: document.getElementById("livesValue"),
  pathWrap: document.getElementById("pathWrap"),
  pathSvg: document.getElementById("pathSvg"),
  pathBase: document.getElementById("pathBase"),
  pathProgress: document.getElementById("pathProgress"),
  pathContainer: document.getElementById("pathContainer"),
  lessonOverlay: document.getElementById("lessonOverlay"),
  lessonTitle: document.getElementById("lessonTitle"),
  lessonThemeText: document.getElementById("lessonThemeText"),
  lessonProgressFill: document.getElementById("lessonProgressFill"),
  lessonProgressText: document.getElementById("lessonProgressText"),
  questionStage: document.getElementById("questionStage"),
  closeLessonBtn: document.getElementById("closeLessonBtn"),
  toast: document.getElementById("toast"),
  dailyChallengeBtn: document.getElementById("dailyChallengeBtn"),
  resetProgressBtn: document.getElementById("resetProgressBtn")
};

function loadProfile() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return { ...initialProfile };
  try {
    return { ...initialProfile, ...JSON.parse(raw) };
  } catch {
    return { ...initialProfile };
  }
}

function saveProfile() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.profile));
}

function sample(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function getByLessonIndex(arr, lessonIndex, shift = 0) {
  return arr[(lessonIndex + shift) % arr.length];
}

function getDistinctByIndex(arr, lessonIndex, count, avoidValue) {
  const result = [];
  for (let i = 0; i < arr.length && result.length < count; i += 1) {
    const item = arr[(lessonIndex + i) % arr.length];
    const val = Array.isArray(item) ? item[1] : item;
    if (avoidValue && normalize(val) === normalize(avoidValue)) continue;
    if (result.some((x) => normalize(Array.isArray(x) ? x[1] : x) === normalize(val))) continue;
    result.push(item);
  }
  return result;
}

function getTaskOrderByLessonIndex(index) {
  const base = ["choice", "type", "arrange", "listen"];
  const rotate = index % base.length;
  const rotated = [...base.slice(rotate), ...base.slice(0, rotate)];
  if (index % 2 === 1) {
    rotated[1] = [rotated[0], (rotated[0] = rotated[1])][0];
  }
  return rotated;
}

function sortTasksByOrder(tasks, order) {
  const rank = Object.fromEntries(order.map((type, idx) => [type, idx]));
  return [...tasks].sort((a, b) => rank[a.type] - rank[b.type]);
}

function getLessonTopic(index) {
  const zone = getZoneForLesson(index);
  const localIndex = index % 10;
  return ZONE_SUBTOPICS[zone][localIndex];
}

function playFeedbackSound(isCorrect) {
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return;
  const ctx = new Ctx();
  if (ctx.state === "suspended") {
    ctx.resume();
  }
  const now = ctx.currentTime;

  const osc1 = ctx.createOscillator();
  const gain1 = ctx.createGain();
  osc1.type = isCorrect ? "sine" : "square";
  osc1.frequency.setValueAtTime(isCorrect ? 660 : 420, now);
  osc1.frequency.exponentialRampToValueAtTime(isCorrect ? 990 : 260, now + 0.18);
  gain1.gain.setValueAtTime(0.0001, now);
  gain1.gain.exponentialRampToValueAtTime(isCorrect ? 0.22 : 0.32, now + 0.02);
  gain1.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
  osc1.connect(gain1).connect(ctx.destination);
  osc1.start(now);
  osc1.stop(now + 0.24);

  if (isCorrect) {
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "triangle";
    osc2.frequency.setValueAtTime(1100, now + 0.08);
    gain2.gain.setValueAtTime(0.0001, now + 0.08);
    gain2.gain.exponentialRampToValueAtTime(0.12, now + 0.1);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
    osc2.connect(gain2).connect(ctx.destination);
    osc2.start(now + 0.08);
    osc2.stop(now + 0.23);
  } else {
    const osc2 = ctx.createOscillator();
    const gain2 = ctx.createGain();
    osc2.type = "square";
    osc2.frequency.setValueAtTime(240, now + 0.1);
    osc2.frequency.exponentialRampToValueAtTime(180, now + 0.25);
    gain2.gain.setValueAtTime(0.0001, now + 0.1);
    gain2.gain.exponentialRampToValueAtTime(0.26, now + 0.12);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + 0.27);
    osc2.connect(gain2).connect(ctx.destination);
    osc2.start(now + 0.1);
    osc2.stop(now + 0.28);
  }
}

function levelFromXp(xp) {
  return Math.floor(xp / 150) + 1;
}

function normalize(text) {
  return text.trim().toLowerCase().replace(/\s+/g, " ");
}

function getAcceptedAnswers(expected) {
  if (Array.isArray(expected)) return expected.map((item) => normalize(item));
  return [normalize(expected)];
}

function isAnswerCorrect(userInput, expected) {
  const user = normalize(userInput);
  return getAcceptedAnswers(expected).includes(user);
}

function getTodayIso() {
  return new Date().toISOString().slice(0, 10);
}

function updateStreak() {
  const today = getTodayIso();
  if (state.profile.lastStudyDate === today) return;
  if (!state.profile.lastStudyDate) {
    state.profile.streak = 1;
  } else {
    const prev = new Date(state.profile.lastStudyDate);
    const curr = new Date(today);
    const delta = Math.round((curr - prev) / (1000 * 60 * 60 * 24));
    state.profile.streak = delta === 1 ? state.profile.streak + 1 : 1;
  }
  state.profile.lastStudyDate = today;
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.remove("hidden");
  setTimeout(() => elements.toast.classList.add("hidden"), 2300);
}

function canOpenLesson(index) {
  return index === 0 || state.profile.completedLessons.includes(index - 1);
}

function getZoneForLesson(index) {
  return Math.floor(index / 10);
}

function buildTasksByDifficulty(index, lessonTopic) {
  const order = getTaskOrderByLessonIndex(index);
  const topicWords = TOPIC_WORD_BANK[lessonTopic] || BEGINNER_WORDS;
  const topicSentences = TOPIC_SENTENCE_BANK[lessonTopic] || BASIC_SENTENCES;
  const topicAdvanced = TOPIC_ADVANCED_BANK[lessonTopic] || ADVANCED_SENTENCES;

  if (index < 10) {
    const [ruWord, enWord] = getByLessonIndex(topicWords, index);
    const [ruWordForType, enWordForType] = getByLessonIndex(topicWords, index, 1);
    const wrongWords = getDistinctByIndex(topicWords, index + 1, 3, enWord).map((pair) => pair[1]);
    const beginnerArrange = [
      "I am a student",
      "She is my friend",
      "We are at school",
      "This is my book",
      "He has a cat",
      "I drink water",
      "They play football",
      "It is a sunny day",
      "My house is big",
      "You are very kind"
    ];
    const arrangeSentence = getByLessonIndex(beginnerArrange, index);
    const listenPhrase = getByLessonIndex(
      [
        "Good morning",
        "Nice to meet you",
        "How are you",
        "See you tomorrow",
        "Thank you very much",
        "What is your name",
        "I am from Russia",
        "This is my classroom",
        "Please open your book",
        "Have a good day"
      ],
      index
    );
    const listenWrong = getDistinctByIndex(
      [
        "Good morning",
        "Nice to meet you",
        "How are you",
        "See you tomorrow",
        "Thank you very much",
        "What is your name",
        "I am from Russia",
        "This is my classroom",
        "Please open your book",
        "Have a good day"
      ],
      index + 2,
      2,
      listenPhrase
    );

    const tasks = [
      {
        type: "choice",
        prompt: `Выбери перевод слова "${ruWord}"`,
        options: shuffle([enWord, ...wrongWords]),
        answer: enWord
      },
      {
        type: "type",
        prompt: `Напиши по-английски: "${ruWordForType}"`,
        answer: WORD_ALTERNATIVES[ruWordForType]
          ? [enWordForType, ...WORD_ALTERNATIVES[ruWordForType]]
          : enWordForType
      },
      {
        type: "arrange",
        prompt: "Собери фразу из слов",
        answer: arrangeSentence,
        tokens: shuffle(arrangeSentence.split(" "))
      },
      {
        type: "listen",
        prompt: "Нажми слушать и выбери услышанное",
        speech: listenPhrase,
        options: shuffle([listenPhrase, ...listenWrong]),
        answer: listenPhrase
      }
    ];
    return sortTasksByOrder(tasks, order);
  }

  if (index < 30) {
    const [ruSentence, enSentence] = getByLessonIndex(topicSentences, index);
    const [ruSentenceForType, enSentenceForType] = getByLessonIndex(topicSentences, index, 1);
    const wrongBasic = getDistinctByIndex(topicSentences, index + 1, 3, enSentence).map((pair) => pair[1]);
    const tasks = [
      {
        type: "choice",
        prompt: `Выбери правильный перевод: "${ruSentence}"`,
        options: shuffle([enSentence, ...wrongBasic]),
        answer: enSentence
      },
      {
        type: "type",
        prompt: `Переведи на английский: "${ruSentenceForType}"`,
        answer: enSentenceForType
      },
      {
        type: "arrange",
        prompt: "Собери предложение",
        answer: enSentence,
        tokens: shuffle(enSentence.split(" "))
      },
      {
        type: "listen",
        prompt: "Прослушай и выбери точную фразу",
        speech: enSentence,
        options: shuffle([
          enSentence,
          getByLessonIndex(topicSentences, index + 1)[1],
          getByLessonIndex(DIALOG_SENTENCES, index + 1)[1]
        ]),
        answer: enSentence
      }
    ];
    return sortTasksByOrder(tasks, order);
  }

  if (index < 40) {
    const [ruSentence, enSentence] = getByLessonIndex(topicSentences, index);
    const [ruSentenceForType, enSentenceForType] = getByLessonIndex(topicSentences, index, 1);
    const tasks = [
      {
        type: "choice",
        prompt: `Какая фраза подходит для ситуации: "${ruSentence}"`,
        options: shuffle([
          enSentence,
          getByLessonIndex(topicSentences, index + 1)[1],
          getByLessonIndex(BASIC_SENTENCES, index + 2)[1]
        ]),
        answer: enSentence
      },
      {
        type: "type",
        prompt: `Напиши по-английски: "${ruSentenceForType}"`,
        answer: enSentenceForType
      },
      {
        type: "listen",
        prompt: "Слушай диалог и отметь правильный ответ",
        speech: enSentence,
        options: shuffle([
          enSentence,
          getByLessonIndex(topicSentences, index + 1)[1],
          getByLessonIndex(ADVANCED_SENTENCES, index + 1)[1]
        ]),
        answer: enSentence
      },
      {
        type: "arrange",
        prompt: "Построй разговорную фразу",
        answer: enSentence,
        tokens: shuffle(enSentence.replace("?", "").split(" "))
      }
    ];
    return sortTasksByOrder(tasks, order);
  }

  const [ruSentence, enSentence] = getByLessonIndex(topicAdvanced, index);
  const [ruSentenceForType, enSentenceForType] = getByLessonIndex(topicAdvanced, index, 1);
  const tasks = [
    {
      type: "choice",
      prompt: `Выбери точный перевод: "${ruSentence}"`,
      options: shuffle([
        enSentence,
        getByLessonIndex(topicAdvanced, index + 1)[1],
        getByLessonIndex(DIALOG_SENTENCES, index + 2)[1]
      ]),
      answer: enSentence
    },
    {
      type: "type",
      prompt: `Переведи полное предложение: "${ruSentenceForType}"`,
      answer: enSentenceForType
    },
    {
      type: "listen",
      prompt: "Слушай и найди верное предложение",
      speech: enSentence,
      options: shuffle([
        enSentence,
        getByLessonIndex(topicAdvanced, index + 1)[1],
        getByLessonIndex(BASIC_SENTENCES, index + 1)[1]
      ]),
      answer: enSentence
    },
    {
      type: "arrange",
      prompt: "Собери сложное предложение",
      answer: enSentence.replace(",", "").replace(".", ""),
      tokens: shuffle(enSentence.replace(",", "").replace(".", "").split(" "))
    }
  ];
  return sortTasksByOrder(tasks, order);
}

function buildLessons() {
  const lessons = [];
  for (let i = 0; i < LESSON_COUNT; i += 1) {
    const zone = getZoneForLesson(i);
    const topic = getLessonTopic(i);
    const title = `Урок ${i + 1}`;
    lessons.push({
      id: i,
      number: i + 1,
      zone,
      title,
      theme: THEME_ZONES[zone].title,
      subtopic: topic,
      xp: 20 + zone * 8,
      tasks: buildTasksByDifficulty(i, topic)
    });
  }
  return lessons;
}

function buildSmoothPath(points) {
  if (points.length < 2) return "";
  let d = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i += 1) {
    const prev = points[i - 1];
    const curr = points[i];
    const cp1x = prev.x;
    const cp1y = prev.y + 42;
    const cp2x = curr.x;
    const cp2y = curr.y - 42;
    d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
  }
  return d;
}

function getContiguousCompletedCount() {
  let count = 0;
  while (state.profile.completedLessons.includes(count)) {
    count += 1;
  }
  return count;
}

function drawLearningPath() {
  const buttons = Array.from(elements.pathContainer.querySelectorAll(".lesson-node button"));
  if (!buttons.length) return;

  const wrapRect = elements.pathWrap.getBoundingClientRect();
  const points = buttons.map((btn) => {
    const rect = btn.getBoundingClientRect();
    return {
      x: rect.left - wrapRect.left + rect.width / 2,
      y: rect.top - wrapRect.top + rect.height / 2
    };
  });

  const pathData = buildSmoothPath(points);
  elements.pathBase.setAttribute("d", pathData);
  elements.pathProgress.setAttribute("d", pathData);

  const totalLength = elements.pathProgress.getTotalLength();
  const maxReachIndex = Math.min(getContiguousCompletedCount(), points.length - 1);
  const progressRatio = points.length > 1 ? maxReachIndex / (points.length - 1) : 0;
  const visibleLength = totalLength * progressRatio;

  elements.pathProgress.style.strokeDasharray = `${totalLength}`;
  elements.pathProgress.style.strokeDashoffset = `${totalLength - visibleLength}`;
}

function renderTopStats() {
  state.profile.level = levelFromXp(state.profile.xp);
  elements.xpValue.textContent = state.profile.xp;
  elements.levelValue.textContent = state.profile.level;
  elements.streakValue.textContent = state.profile.streak;
  elements.livesValue.textContent = state.profile.lives;
}

function renderPath() {
  elements.pathContainer.innerHTML = "";

  THEME_ZONES.forEach((zone, zoneIndex) => {
    const zoneEl = document.createElement("section");
    zoneEl.className = `theme-zone ${zone.colorClass}`;
    zoneEl.innerHTML = `<h3 class="theme-title">${zone.title}</h3>`;

    const from = zoneIndex * 10;
    const to = from + 10;
    state.lessons.slice(from, to).forEach((lesson, localIndex) => {
      const globalIndex = from + localIndex;
      const isDone = state.profile.completedLessons.includes(globalIndex);
      const isOpen = canOpenLesson(globalIndex);
      const sideClass = localIndex % 2 === 0 ? "left" : "right";
      const stateClass = isDone ? "node-done" : isOpen ? "node-open" : "node-locked";

      const node = document.createElement("div");
      node.className = `lesson-node ${sideClass} ${stateClass}`;

      const btn = document.createElement("button");
      btn.disabled = !isOpen;
      btn.innerHTML = `${lesson.number}<small>${isDone ? "пройден" : "старт"}</small>`;
      btn.addEventListener("click", () => startLesson(lesson));

      const topic = document.createElement("div");
      topic.className = "node-topic";
      topic.textContent = lesson.subtopic;

      node.appendChild(btn);
      node.appendChild(topic);
      zoneEl.appendChild(node);
    });

    elements.pathContainer.appendChild(zoneEl);
  });

  drawLearningPath();
}

function startLesson(lesson) {
  state.activeLesson = lesson;
  state.taskIndex = 0;
  state.correctAnswers = 0;
  state.buildWords = [];
  elements.lessonTitle.textContent = `${lesson.title}`;
  elements.lessonThemeText.textContent = `${lesson.theme} · тема: ${lesson.subtopic}`;
  elements.lessonOverlay.classList.remove("hidden");
  renderTask();
}

function closeLesson() {
  elements.lessonOverlay.classList.add("hidden");
  state.activeLesson = null;
}

function renderTask() {
  const lesson = state.activeLesson;
  if (!lesson) return;
  if (state.taskIndex >= TASKS_PER_LESSON) {
    finishLesson();
    return;
  }

  const task = lesson.tasks[state.taskIndex];
  elements.lessonProgressFill.style.width = `${(state.taskIndex / TASKS_PER_LESSON) * 100}%`;
  elements.lessonProgressText.textContent = `Задание ${state.taskIndex + 1} из ${TASKS_PER_LESSON}`;

  if (task.type === "choice" || task.type === "listen") {
    renderChoiceTask(task);
  } else if (task.type === "type") {
    renderTypeTask(task);
  } else {
    renderArrangeTask(task);
  }
}

function speak(text) {
  // Пытаемся использовать Google TTS, а на мобильных при блокировке
  // переключаемся на speechSynthesis, чтобы озвучка всегда работала.
  const encodedText = encodeURIComponent(text);
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&q=${encodedText}&tl=en&client=tw-ob`;
  const audio = new Audio(url);
  audio.preload = "auto";

  const fallbackSpeak = () => {
    if (!window.speechSynthesis) {
      showToast("Озвучка недоступна на этом устройстве");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    utterance.rate = 0.95;
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);

    if (!state.ttsFallbackNotified) {
      showToast("Переключено на встроенную озвучку");
      state.ttsFallbackNotified = true;
    }
  };

  audio.play().catch(err => {
    console.error("Ошибка озвучки:", err);
    fallbackSpeak();
  });
}

function showAnswerResult(isCorrect) {
  playFeedbackSound(isCorrect);
  const fb = document.createElement("p");
  fb.className = `feedback ${isCorrect ? "ok" : "bad"}`;
  fb.textContent = isCorrect ? "Отлично! Это правильный ответ." : "Почти! Ошибочка, попробуем дальше.";
  elements.questionStage.appendChild(fb);

  if (isCorrect) {
    state.correctAnswers += 1;
    state.profile.xp += 10;
  } else {
    state.profile.lives = Math.max(0, state.profile.lives - 1);
  }
  renderTopStats();
  saveProfile();

  const nextBtn = document.createElement("button");
  nextBtn.className = "blue-btn";
  nextBtn.textContent = "Дальше";
  nextBtn.addEventListener("click", () => {
    state.taskIndex += 1;
    state.buildWords = [];
    renderTask();
  });

  const action = document.createElement("div");
  action.className = "action-row";
  action.appendChild(nextBtn);
  elements.questionStage.appendChild(action);
}

function disableChoices() {
  elements.questionStage.querySelectorAll(".choice").forEach((btn) => {
    btn.disabled = true;
  });
}

function renderChoiceTask(task) {
  elements.questionStage.innerHTML = `
    <h3>${task.prompt}</h3>
    ${task.type === "listen" ? '<div class="action-row"><button class="blue-btn" id="listenBtn">Слушать</button></div>' : ""}
    <div id="choiceList" class="choice-list"></div>
  `;

  if (task.type === "listen") {
    elements.questionStage.querySelector("#listenBtn").addEventListener("click", () => speak(task.speech));
  }

  const list = elements.questionStage.querySelector("#choiceList");
  task.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "choice";
    btn.textContent = option;
    btn.addEventListener("click", () => {
      disableChoices();
      showAnswerResult(normalize(option) === normalize(task.answer));
    });
    list.appendChild(btn);
  });
}

function renderTypeTask(task) {
  elements.questionStage.innerHTML = `
    <h3>${task.prompt}</h3>
    <input id="typeInput" class="big-input" type="text" placeholder="Напиши ответ на английском..." />
    <div class="action-row">
      <button id="checkTypeBtn" class="blue-btn">Проверить</button>
    </div>
  `;

  const input = elements.questionStage.querySelector("#typeInput");
  const checkBtn = elements.questionStage.querySelector("#checkTypeBtn");
  checkBtn.addEventListener("click", () => {
    checkBtn.disabled = true;
    input.disabled = true;
    const ok = isAnswerCorrect(input.value, task.answer);
    showAnswerResult(ok);
  });
}

function renderArrangeTask(task) {
  state.buildWords = [];
  elements.questionStage.innerHTML = `
    <h3>${task.prompt}</h3>
    <div id="answerBank" class="answer-bank"></div>
    <div id="wordBank" class="word-bank"></div>
    <div class="action-row"><button id="checkArrangeBtn" class="blue-btn">Проверить</button></div>
  `;

  const answerBank = elements.questionStage.querySelector("#answerBank");
  const wordBank = elements.questionStage.querySelector("#wordBank");
  const checkBtn = elements.questionStage.querySelector("#checkArrangeBtn");
  const tokens = task.tokens.map((word, tokenIndex) => ({
    word,
    tokenId: `${tokenIndex}-${word}`
  }));

  tokens.forEach(({ word, tokenId }) => {
    const btn = document.createElement("button");
    btn.className = "word-pill";
    btn.type = "button";
    btn.textContent = word;
    btn.dataset.tokenId = tokenId;
    btn.addEventListener("click", () => {
      if (btn.disabled) return;
      btn.disabled = true;
      speak(word);
      state.buildWords.push({ word, tokenId });
      renderAnswerBank(answerBank, wordBank);
    });
    wordBank.appendChild(btn);
  });

  renderAnswerBank(answerBank, wordBank);

  checkBtn.addEventListener("click", () => {
    checkBtn.disabled = true;
    const built = state.buildWords.map((item) => item.word).join(" ");
    showAnswerResult(normalize(built) === normalize(task.answer));
  });
}

function renderAnswerBank(answerBank, wordBank) {
  answerBank.innerHTML = "";
  if (!state.buildWords.length) {
    answerBank.textContent = "Нажимай на слова ниже, чтобы собрать предложение";
    return;
  }
  state.buildWords.forEach((item, itemIndex) => {
    const token = document.createElement("button");
    token.className = "word-pill";
    token.type = "button";
    token.textContent = `${item.word} ×`;
    token.addEventListener("click", () => {
      speak(item.word);
      const [removed] = state.buildWords.splice(itemIndex, 1);
      const sourceBtn = wordBank.querySelector(`[data-token-id="${removed.tokenId}"]`);
      if (sourceBtn) sourceBtn.disabled = false;
      renderAnswerBank(answerBank, wordBank);
    });
    answerBank.appendChild(token);
  });
}

function finishLesson() {
  const lesson = state.activeLesson;
  if (!lesson) return;

  updateStreak();
  state.profile.xp += lesson.xp;
  state.profile.lives = Math.min(5, state.profile.lives + 1);

  if (!state.profile.completedLessons.includes(lesson.id)) {
    state.profile.completedLessons.push(lesson.id);
  }

  saveProfile();
  renderTopStats();
  renderPath();

  elements.lessonProgressFill.style.width = "100%";
  elements.lessonProgressText.textContent = `Задание ${TASKS_PER_LESSON} из ${TASKS_PER_LESSON}`;
  elements.questionStage.innerHTML = `
    <h3>Урок завершен!</h3>
    <p>Правильных ответов: ${state.correctAnswers} из ${TASKS_PER_LESSON}</p>
    <p>Награда: +${lesson.xp} опыта и +1 сердце</p>
    <div class="action-row">
      <button id="finishBtn" class="blue-btn">Вернуться на карту</button>
    </div>
  `;
  elements.questionStage.querySelector("#finishBtn").addEventListener("click", closeLesson);
  showToast(`Урок ${lesson.number} пройден!`);
}

function runRandomLesson() {
  const available = state.lessons.filter((lesson) => canOpenLesson(lesson.id));
  if (!available.length) return;
  startLesson(sample(available));
}

function resetProgress() {
  if (!confirm("Точно сбросить весь прогресс?")) return;
  state.profile = { ...initialProfile };
  saveProfile();
  renderTopStats();
  renderPath();
  closeLesson();
  showToast("Прогресс очищен.");
}

elements.dailyChallengeBtn.addEventListener("click", runRandomLesson);
elements.resetProgressBtn.addEventListener("click", resetProgress);
elements.closeLessonBtn.addEventListener("click", closeLesson);
window.addEventListener("resize", drawLearningPath);

renderTopStats();
renderPath();
