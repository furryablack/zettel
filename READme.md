# = READme

### === Что такое Area
- Заметки в папке `Areas/**`.
- Не содержат контента, являются виртуальными папками для заметок в папке `Notes/*`.
- У заметки может быть несколько виртальных папок (areas).
- Автоматически выводит 100 последних (ctime) заметок списком.

### === NULLABLE
- Заметки из папки `Notes/*` у которых есть `00 Null`.
- Автоматически выводит 100 последних (ctime) заметок списком.
- `00 Null` - area по умолчанию для новых заметок.

### === IN-BOX and MOCs
- Заметки из папки `Notes/*` с фильтрацией по тэгам `inbox/true` и `moc/true` соответсвенно.
- Автоматически выводит 100 последних (ctime) заметок списком.

### === Tags

-- `id/%zettelkasten-id%`
Генерируется автоматически из даты и времени.

-- `inbox/%boolean$`
**true** (по умолчанию) заметка в работе, **false** - заметка в архиве.

-- `green/%boolean%`
**false** (по умолчанию) авторская заметка, **false** - обычная.

-- `moc/%boolean%`
**false** (по умолчанию) заметка с заметками, Map Of Content.
**green/false** - так как это заметка, объединяющая другие заметки (green и не green) под какой-то темой.

-- `tag/%string%`
Контентные теги для поиска.

### === Key-bindings

- `Ctrl + O` - новая заметка создается через поиск.
- `Ctrl + E` - переключение редактора.
- `Ctrl + T` - вставить темплейт.
- `Ctrl + C` - копировать.
- `Ctrl + Shift + C` - компановщик.
- `Ctrl + L` - авто-форматирование таблиц.
- `Ctrl + P` - панель команд.
- `Ctrl + M` - переместить файл.
- `Ctrl + G` - отрыть граф.
- `Ctrl + Shift + G` - открыть локальный граф.
- `Ctrl + K` - вставить markdown ссылку.
- `Ctrl + I` - текст курсивом.
- `Ctrl + B` - жирный текст.
- `Ctrl + F` - поиск в файле.
- `Ctrl + Shift` - поиск во всех файлах.
- `Ctrl + S` - сохранить файл.
- `Ctrl + H` - поиск и замена в файле.
- `Ctrl + Shift + <-` - назад.
- `Ctrl + Shift + ->` - вперед.
- `F1` - файл менеджер.
- `F2` - экспорт в PDF.