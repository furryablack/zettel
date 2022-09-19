# = NULLABLE

```dataviewjs
const LIMIT = 100;
const NOTES_FOLDER = 'Notes';
const IS_NULLABLE_AREA = '00 Null';

const areaPages = dv.pages()
	.where(p => p.file.folder === NOTES_FOLDER)
	.where(p => (p.file.outlinks || []).find(_ => IS_NULLABLE_AREA.indexOf(_)));

const pagesCount = areaPages.length;
const limitedPages = areaPages.sort(_ => _.ctime, 'DESC').limit(LIMIT);

dv.span('<span style="opacity:0.75;">-> limit: ' + LIMIT + '</span><br />');
dv.span('<span style="opacity:0.75;">-> notes: ' + pagesCount + '</span>');

dv.span('<br /><br />');

for (let page of limitedPages) {
	dv.span('<span style="opacity:0.5;">= </span>' + page.file.link + '<br />');
}
```