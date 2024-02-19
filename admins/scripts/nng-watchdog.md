---
sidebar_position: 2
---

# nng watchdog

Скрипт, отслеживающий нарушения правил редакторами. В случае нарушения правил редактор автоматически блокируется, а совершенные им нарушения отменяются.

* GitHub: [https://github.com/thealonas/nng-watchdog](https://github.com/thealonas/nng-watchdog)

### Установка

Воспользуйтесь готовым [Docker-контейнером](https://github.com/orgs/thealonas/packages/container/package/nng-watchdog).

### Настройка

Основная настройка происходит через переменные среды. Ниже приведены все их значения.

* `NNG_API_URL` — Ссылка на API-сервер
* `NNG_API_AK` — Токен выданный API-сервером
* `OP_CONNECT_HOST` — Ссылка на сервер 1Password Connect
* `OP_CONNECT_TOKEN` — Токен 1Password Connect
