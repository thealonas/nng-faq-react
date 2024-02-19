---
slug: kak-tam-nng
title: Как там nng? 🤔
authors: [alonas]
---

Соблюдая традицию, будь то в войну и чуму, мы возвращаемся каждую зиму, чтобы что-то-да обновить, и эта зима не стала исключением, только на этот раз и с первым блог-постом.

Начнём с того, что будет полезно большинству, и закончим тем, что больше интересно фанатикам и нёрдам вроде нас.

## 🤝 Траст-фактор

До появления бота выдача редактора была доступна всем пользователям независимо от даты их регистрации. К сожалению, это приводило к участившимся нарушениям. С появлением бота мы ограничили доступ к выдаче редактора только для пользователей, зарегистрированных более полугода назад. Это помогло снизить количество нарушений, однако ограничило доступ выдачу для честных пользователей, при этом дата регистрации не всегда гарантирует надёжность страницы.

С приходом скриптов второй версии мы вводим систему траст-фактора - специальный показатель для оценки надёжности редактора. Он влияет на лимит групп и учитывается при приглашениях на бета-тесты. Траст-фактор рассчитывается на основе 20 различных параметров, которые мы не разглашаем. Если у вас уже есть больше групп, чем позволяет ваш траст-фактор, они у вас останутся.

:::tip Учтите
Прямо сейчас траст-фактор до сих пор высчитывается для всех редакторов. Поэтому корректное значение можно будет увидить только через пару дней.
:::

Вы можете узнать свой траст-фактор в [боте](https://vk.me/nnghub), зайдя в свой профиль. Мы не показываем точное число, но с помощью эмодзи вы сможете понять общую картину.

![Скриншот профиля пользователя в nng боте](/img/blog/2023-12-25-kak-tam-nng/profile.png)

## 🌐 Новый сайт

Уже третья версия нашего сайта. Можно сказать, что nng как проект сформировался с момента запуска первой версии сайта (1 января 2019 года).

Мы продолжаем поддерживать единый сайт со всей информацией о nng, тем самым ведя наш собственный архив, так как это упрощает организацию информации. Статьи ВКонтакте до сих пор не так удобны, как нам бы хотелось. Основная информация о nng ([ЧАВО](https://vk.com/@nnghub-faq), [правила](https://vk.com/@nnghub-rules), [блог-посты](https://vk.com/@nnghub)) остаются ВКонтакте, в то время как [списки групп](/lists/clubs), [списки заблокированных](/lists/bnnd), [благодарности](/lists/thx) и [информация для администраторов похожих групп](/admins/processes) удобнее хранить на сайте.

:::tip Учтите
Наш домен обновился на `nng.alonas.lv`, но редирект со старого домена будет работать ещё год.
:::

![Скриншот главной страницы сайта](/img/blog/2023-12-25-kak-tam-nng/website.png)

## 📨 Отказ от рассылок

Мы приняли решение отказаться от рассылок. Поскольку в ближайшее время у нас нет планов на создание новых групп, мы считаем, что рассылки уже не так актуальны. Ранее используемая рассылка «Опросики» теперь заменена тестовой группой – [nng β](https://vk.com/stagingarea).

Если вам интересно практиковаться в опросах или участвовать в будущих тестах, рекомендуем присоединиться к [тестовой группе](https://vk.com/stagingarea). Для тех, кто просто желает оставаться в курсе всех последних анонсов и обновлений, рекомендуем включить уведомления о новых постах в [основной группе](https://vk.com/nnghub).

## 🤖 Новый бот

Прежде всего, бот теперь располагается в [основной группе](https://vk.com/nnghub), но помимо этого мы также добавили несколько новых фич.

:::tip Учтите
У основной группы теперь новая короткая ссылка: [@nnghub](https://vk.com/nnghub).
:::

### 🧣 Система приглашений

Появилась система приглашений. У каждого пользователя теперь есть своя уникальная ссылка-приглашение. Ограничений на количество приглашений нет, и за каждого приглашённого друга оба получат дополнительные группы.

![Скриншот с разделом приглашений nng бота](/img/blog/2023-12-25-kak-tam-nng/invites.png)

### 🦉 Поддержка

Теперь, когда бот находится в основной группе, мы добавили функцию связи с нами и возможность оставить жалобу на редактора в нём. Для жалоб и запросов доступно пошаговое заполнение, чтобы избежать ошибок при отправке.

![Скриншот меню поддержки в nng боте](/img/blog/2023-12-25-kak-tam-nng/support_type.png)

![Скриншот первого этапа вопроса и заполнения жалобы в nng боте](/img/blog/2023-12-25-kak-tam-nng/support_steps.png)

### 💬 Автоответчик

Мы прекрасно знаем, что многие не любят читать [ЧАВО](/general/faq), хоть с момента его создания однотипные вопросы уменьшились, они не исчезли полностью. Мы заметили, что есть те, кто пытается задать боту вопросы из ЧАВО, на что ранее они получали ошибку.

Теперь, если попробовать задать вопрос [боту](https://vk.me/nnghub), на который есть ответ из ЧАВО, он возьмёт его напрямую оттуда. Пока что предлагаемые ответы не идеальны, так как боту требуется время для обучения на задаваемых вопросах, но со временем это улучшится.

![Скриншот работы автоматического ответа в nng боте](/img/blog/2023-12-25-kak-tam-nng/algolia.png)

_Спасибо [Algolia](https://www.algolia.com/) за предоставленный сервис 🫶🏻_

### ✏️ Новая выдача

Улучшили систему выдачи, исправив прежние недостатки.

Теперь бот всегда выдаёт случайную группу, вместо той, в которой больше всего свободных мест, чтобы нельзя было узнать, кто оставил комментарий от имени группы перебрав группы. Также теперь нельзя отклонить выдачу и запросить другую группу (новая станет доступна только после выдачи в предложенной ранее).

Также теперь нет необходимости нажимать на «Я вступил» в процессе выдачи редактора. После вступления в группу, редактор будет выдан автоматически.

![Скриншот работы выдачи редактора в nng боте](/img/blog/2023-12-25-kak-tam-nng/editor_give.png)

## ⚖️ Изменение в системе блокировок

С внедрением траст-фактора мы решили смягчить [правила](/general/rules), введя систему предупреждений.

Теперь за нарушения зелёного приоритета (взаимодействие со стеной, историями или публикация рекламы) вместо моментальной блокировки будут выдаваться предупреждения. Если в течение года у редактора наберётся три предупреждения, он будет заблокирован.

В будущем мы планируем расширить эту систему на нарушения бирюзового приоритета (спам или флуд), но пока мы понаблюдаем за эффективностью системы с зелёным приоритетом.

Все текущие пользователи, у которых была блокировка с зелёным или белым приоритетом, были разблокированы.

---

import Admonition from '@theme/Admonition';

<Admonition type="warning" icon="🤓" title="С этого момента начинается душнилово">
  Первая часть поста с информацией для большинства закончилась. С этого момента начинается то, что больше интересно фанатикам и нёрдам.
</Admonition>

## ⚙️ Да, мы всё переписали

Понятно, что на базе старых скриптов невозможно было бы сделать тот же траст-фактор или нового бота. Именно поэтому мы решили переписать с нуля весь стек. Если раньше каждый скрипт независимо работал с базой данных, то теперь всё работает через единый nng api (исключение только nng tasks и nng scraper, так как они актуализируют данные в самой базе).

В результате у нас выходит следующий зоопарк:

- nng api — API, через который работают скрипты
- nng sdk — SDK для кода, который используют все скрипты
- nng bot — основной чат-бот
- nng watchdog — скрипт для отслеживания нарушений в группах
- nng tasks _(ранее nng server)_ — скрипт, для работы с самими группами (актуализация чёрного списка, чистка редакторов и тд.)
- nng scraper — веб-скрапер для сбора данных, которые мы не можем получить через API ВКонтакте
- nng admin — админ-панель, которая пришла на замену админки в первой версии бота

Пока запустить стек самостоятельно невозможно (из-за отсутствия исходных кодов nng api, sdk, scraper и соответствующей документации). Мы планируем решить это после завершения работы над [nng в Telegram](#%EF%B8%8F-расширение-в-telegram). Исходные коды [nng bot](https://github.com/thealonas/nng-bot), [nng watchdog](https://github.com/thealonas/nng-watchdog) и [nng tasks](https://github.com/thealonas/nng-tasks) уже доступны в нашем [GitHub](https://github.com/thealonas). В свою очередь, о том, как работают скрипты мы планируем подробнее рассказать в следующих блог-постах.

:::tip Учтите
У нашего GitHub тоже поменялась ссылка: [@thealonas](https://github.com/thealonas).
:::

## 🗃️ База комментариев

Благодаря тому, что мы переписали весь стек, мы смогли создать единую базу всех комментариев, оставленных от имени nng, о чём мечтали ещё в 2021 году.

В настоящее время мы храним комментарии с 2022 года. Это нужно, чтобы проверять активен ли ещё редактор. Каждый комментарий также оценивается по токсичности, что помогает при рассмотрении жалоб на редакторов (беря во внимание средний показатель токсичных комментариев у редактора) и ведении статистики.

_Спасибо [Google Jigsaw](https://jigsaw.google.com/) и [BrowserStack](https://www.browserstack.com/) за предоставленные сервисы 🫶🏻_

## 📟 Статус проекта

Со стороны уже давно может показаться, что мы утратили интерес к проекту, но это не так.

nng — наш любимый проект. Мы постоянно ищем способы его улучшения, как для себя, так и для пользователей _(по крайней мере мы на это надеемся)_. Весь проект поддерживается нашим энтузиазмом.

Впрочем, не все аспекты удаётся улучшить. Например, взаимодействие с аудиторией всё ещё остаётся слабым местом. Мы не стремимся к созданию крупного сообщества вокруг nng или к ненужным постам ради поддержания активности. Мы также не оцениваем nng по количеству подписчиков.

Идеи для nng приходят спонтанно, и после месяца планирования мы приступаем к реализации. Иногда это удаётся, иногда нет. Если что-то не получается сразу, мы возвращаемся к идее позже (например, автоответчик в боте или база комментариев). Много времени занимает работа над ошибками и перфекционизм.

_На самом деле, никто и не мог в 2018 году подумать о том, что nng проживёт хотя бы больше года, но на удивление nng живёт уже 5 лет ;D_

## ✈️ Расширение в Telegram

Довольно спорное решение, но рабочий концепт уже имеется. ~~Надеемся, к февралю мы сможем его запустить для всех.~~

Комментарии, оставленные через nng в Telegram, будут более «анонимными», чем ВКонтакте, так как не будут привязаны к вашему аккаунту. Из-за этого нам придётся использовать фильтр на токсичность для каждого комментария.

Зачем? По большей части для тех, кто не хочет покупать Telegram Premium, но также и чтобы предложить решение для тех, кто хотел увидеть nng в Telegram.

## 🍍 А что с Alonas?

Хоть теперь основная группа и перестала называться Alonas, сам Alonas никуда не делся и продолжает существовать как [коллектив](https://alonas.lv/), одна из задач которого продолжать поддерживать nng. Мы уже давно не планируем новые проекты ВКонтакте, поэтому и решили сосредоточить основную группу только на nng.

## ❤️ Спасибо

Спасибо, что дочитали (или даже если пролистали до конца). Если у вас появятся вопросы, пожелания или предложения, то ждём в комментариях или личным сообщением [через бота](https://vk.me/nnghub). Если вы хотите, вы также можете поддержать nng [материально](/donate/methods).

Отдельное спасибо [людям, которые помогали в поддержке nng](/lists/thx) и компаниям, которые проспонсировали наш коллектив: [1Password](https://1password.com/), [Sentry](https://sentry.io/for/good/), [Atlassian](https://www.atlassian.com/), [Algolia](https://www.algolia.com/), [JetBrains](https://jb.gg/OpenSourceSupport), [MacStadium](https://www.macstadium.com/), [Tuta](https://tuta.com/), [A/I](https://www.autistici.org/), [BrowserStack](https://www.browserstack.com/) и [Google Jigsaw](https://jigsaw.google.com/).