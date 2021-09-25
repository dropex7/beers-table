# Список пива с фильтрами, поиском и пагинацией

### Дана API - https://punkapi.com/documentation/v2

* Создать каталог с информацией о продукции, которую предоставляет данная API.
* Каждая продукция выглядит в виде карточки с картинкой и характеристиками.
* Реализовать фильтрацию по параметрам. После ввода в соответствующее поле и нажатия на кнопку "Применить" показываем результаты фильтрации по каталогу(для всех параметров из таблицы кроме beer_name).
* Реализовать поиск по полю beer_name. После ввода названия в инпут с задержкой(нужно добавить небольшой debounce, приблизительно в 200мс) автоматически производиться запрос и обновляется список.
* Реализовать пагинацию. Добавить выпадашку выбора размера страницы. Добавить кнопки для перехода на следующую и предыдущую страницу.
