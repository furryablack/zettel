# = READme

### === What Is

Knowledge managment system based on Zettelkasten method.

This project doesn't contain any notes. It's just an empty vault that is ready to work.

Positive things:
- Offline works
- Based on text files
- Obsidian is free and small tool
- Notes view like a graph
- There is a possibility to share Obsidian Vault with notes between some devices where Obsidian can work

Negative things:
- There is no simple way to share your vault
- This solution requires knowledge and skills about JS programming to serve issues during note writing process
- Images and other non-text files increases your vault's size very much

### === Tech tools

- Obsidian (last stable version)
- Obsidian plugins: DataView, Advanced Tables, Copy Button For Code Block
- Custom JS Code alongside DataView plugin

### === What is Area
- Notes in the `Areas/**` folder.
- Do not contain any content, are virtual folders for notes that located in the folder named `Notes/*`.
- A note can have several virtual folders (named like `areas`).
- Automatically displays the last 100 (sorted by ctime) notes in a list.

### === NULLABLE
- Notes in the  `Notes/*` folder that have `00 Null` area.
- Automatically displays the last 100 (sorted by ctime) notes in a list.
- `00 Null` - default area for new notes, you should change it during note writing.

### === IN-BOX and MOCs
- Notes in the `Notes/*` folder filtered by `inbox/true` and `moc/true` tags respectively.
- Automatically displays the last 100 (sorted by ctime) notes in a list.

### === Tags

-- `id/%zettelkasten-id%`
It generates automatically alongside date and time.

-- `inbox/%boolean$`
**true** (default) a note in progress, **false** - a note in archive (or complited).

-- `green/%boolean%`
**false** (default) an author's note, **false** - no author's note.

-- `moc/%boolean%`
**false** (default) a note with notes or Map Of Content.

-- `tag/%string%`
Content tags to help to search.

### === Key-bindings

- `Ctrl + O` - a new note is created through the search.
- `Ctrl + E` - switch editor.
- `Ctrl + T` - paste template.
- `Ctrl + C` - copy.
- `Ctrl + Shift + C` - linker.
- `Ctrl + L` - auto-format tables.
- `Ctrl + P` - command bar.
- `Ctrl + M` - move the file.
- `Ctrl + G` - open graph.
- `Ctrl + Shift + G` - open local graph.
- `Ctrl + K` - insert a markdown link.
- `Ctrl + I` - text in italics.
- `Ctrl + B` - bold text.
- `Ctrl + F` - search in a file.
- `Ctrl + Shift` - search in all files.
- `Ctrl + S` - save the file.
- `Ctrl + H` - search and replace in a file.
- `Ctrl + Shift + <-` - back.
- `Ctrl + Shift + ->` - forward.
- `F1` - file manager.
- `F2` - export to PDF.