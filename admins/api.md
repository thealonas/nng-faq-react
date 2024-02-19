---
sidebar_position: 3
---

# 🗄 API

Небольшая часть публичного API для тех, кто хочет работать с нашими списками.

:::caution Внимание
У API тоже есть свои лимиты, поэтому оптимизируйте запросы так, чтобы не флудить ими.
:::

## Методы

### groups

Позволяет получить список всех групп.

* Ссылка: `https://api.nng.alonas.lv/groups`
* Методы: `GET`
* Ответ:
    ```json
    [
      {
        "group_id": 214447636, // ID группы
        "screen_name": "ffnng" // Короткая ссылка группы
      },
      {
        "group_id": 197691823,
        "screen_name": "nngpub"
      }
    ]
    ```

### bnnd

Позволяет получить список заблокированных.

* Ссылка: `https://api.nng.alonas.lv/users/bnnd`
* Методы: `GET`
* Ответ:
    ```json
    [
      {
        "user_id": 533370070, // ID пользователя
        "name": "Платон Боровенников", // Имя пользователя на момент блокировки
        "violations": [
          {
            "group_id": 158785301, // ID группы, где было нарушено правило (отсутствует у старых записей)
            "priority": "teal", // Приоритет блокировки на основе нарушения (green – Зелёный, teal – Бирюзовый, orange – Оранжевый, red – Красный)
            "complaint": 527055305, // ID человека, пожаловшегося на пользователя
            "date": "2020-02-29" // Дата нарушения (отсутствует у старых записей)
          }
        ]
      },
      {
        "user_id": 527055305,
        "name": "Nikita Ivanov",
        "violations": [
          {
            "group_id": null,
            "priority": "red",
            "complaint": null,
            "date": null
          }
        ]
      }
    ]
    ```

### thx

Позволяет получить список приоритетных пользователей.

* Ссылка: `https://api.nng.alonas.lv/users/thx`
* Методы: `GET`
* Ответ:
    ```json
    [
      {
        "name": "Александр Бергер", // Имя пользователя
        "user_id": 183636229 // ID пользователя
      },
      {
        "name": "Егор Гущин",
        "user_id": 260905818
      }
    ]
    ```