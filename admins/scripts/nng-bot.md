---
sidebar_position: 1
---

# nng bot

Чат-бот ВКонтакте для групп nng, позволяющий пользователям подавать заявку на редактора, запрашивать разблокировку и связываться с администрацией.

* GitHub: [https://github.com/thealonas/nng-bot](https://github.com/thealonas/nng-bot)

![Скриншот nng бота](https://raw.githubusercontent.com/thealonas/nng-bot/master/.github/bot.png)

### Установка

Воспользуйтесь готовым [Docker-контейнером](https://github.com/orgs/thealonas/packages/container/package/nng-bot).

По умолчанию используется порт `1231`, поэтому необходимо использовать прокси-сервер (например nginx).

### Настройка

Основаня настройка происходит через переменные среды. Ниже приведены все их значения.

* `NNG_API_URL` — Ссылка на API-сервер
* `NNG_API_AK` — Токен выданный API-сервером
* `OP_CONNECT_HOST` — Ссылка на сервер 1Password Connect
* `OP_CONNECT_TOKEN` — Токен 1Password Connect
