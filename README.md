# Документация для развертывания проекта 

### 1. Клонирование проекта

```console
  git clone https://git.thenewschool.dev/nschoolteam/redesign/newschool-redesign.git
```

или 

```console
  git clone git@git.thenewschool.dev:nschoolteam/redesign/newschool-redesign.git
```

Лучше всего по ssh. Для этого добавьте его в настройках 

### 2. Установка зависимостей 

В проекте используется пакетный менеджер yarn

#### 2.1 Установка пакетов

```console
    yarn install
```

#### 2.2 Запуск проекта

```console
    yarn run start
```

Для build 

```console
    yarn run build
```

Проект должен запуститься по адресу 

```console
    http://localhost:4034
```

Весь перечень команд находится в package.json. Пройдемся по основным и самым частым в использовании 

```console
    yarn run svg
```

Команда для добавления svg. Поместите картинку в папку svg-icon и запустите команду. Теперь при использовании ns-icon в атрибуте icon укажите название картинки.

```console
    yarn run generate-sitemap-all
```

Используется для генерации sitemap всего сайта. Будет совершенствоваться со временем. Если скрипт в первый раз выдал ошибку (такое может быть), то перезапустите его.

```console
    yarn run schema
```

Самая полезная команда из всех. С помощью нее можно получить все типы, которые есть в API. Самый простой способ объяснить команду - показать на примере.

К примеру, при запросе

``` api
GET /api/v2/report-position/
```

появилось новое поле "entity". Чтобы не добавлять руками в файл с типами, прописываем эту команду, она подхватывает схемы из https://develop.thenewschool.dev/docs/schema/?format=json и автоматически подставляет в нужный объект.

<span style="color:red; font-weight:bold;">ВАЖНО!!!</span> Работайте с командой аккуратнее и после применения проверяйте на ошибки Работайте с командой аккуратнее и после применения проверяйте на ошибки

В процессе использования команд может появиться ошибка


```console
node:internal/fs/utils:916
    throw new ERR_INVALID_ARG_TYPE(
    ^

TypeError [ERR_INVALID_ARG_TYPE]: The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Object
    at Object.writeFileSync (node:fs:2281:5)
    at /home/dezember/Desktop/newschool/newschool-redesign/generate-svgs.ts:14:5
    at FSReqCallback.oncomplete (node:fs:189:23) {
  code: 'ERR_INVALID_ARG_TYPE'
}

Node.js v20.8.1
error Command failed with exit code 1.
```

Связано это с неправильной версии Node. Поменяйте версию (например на 16.20.2) с помощью этих команд 

```console
    nvm list - весь список версий 
    nvm install 16.20.2
    nvm use 16.20.2
```

### 3. Полезные ссылки

* https://www.artlebedev.ru/typograf/ - используется для правильной типографии текста 
* https://netology-university.bitbucket.io/codestyle/css/ - стилизация css кода и порядок свойств 
* https://ru.bem.info/methodology/ - методология БЭМ
* https://develop.thenewschool.dev/docs/swagger/ - API проекта
