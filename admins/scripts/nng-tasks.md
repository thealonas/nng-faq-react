---
sidebar_position: 3
---

# nng tasks

Скрипт, автоматизирующий действия направленные на работу с самими группами (чистка стены, чистка статусов актуализация чёрного списка и тд).

* GitHub: [https://github.com/thealonas/nng-tasks](https://github.com/thealonas/nng-tasks)

### Установка

Воспользуйтесь готовым [Docker-контейнером](https://github.com/orgs/thealonas/packages/container/package/nng-tasks).

### Настройка

#### Скрипта

Основная настройка происходит через переменные среды. Ниже приведены все их значения.

* `NNG_DB_URL` — Ссылка на PostgreSQL БД
* `OP_CONNECT_HOST` — Ссылка на сервер 1Password Connect
* `OP_CONNECT_TOKEN` — Токен 1Password Connect
