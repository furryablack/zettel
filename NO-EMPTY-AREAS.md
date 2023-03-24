# = NO-EMPTY-AREAS

```dataviewjs
const LIMIT = 100;
const AREAS_FOLDER = 'Areas';

const areaPages = dv.pages()
	.where(p => p.file.folder === AREAS_FOLDER)
	.where(p => (p.file.inlinks || []).length > 0);

const pagesCount = areaPages.length;
const limitedPages = areaPages.sort(_ => _.ctime, 'DESC').limit(LIMIT);

dv.span('<span style="opacity:0.75;">-> limit: ' + LIMIT + '</span><br />');
dv.span('<span style="opacity:0.75;">-> areas: ' + pagesCount + '</span>');

dv.span('<br /><br />');

for (let page of limitedPages) {
	dv.span('<span style="opacity:0.5;">= </span>' + page.file.link + ' <span style="opacity:0.5;">(' + (page.file.inlinks || []).length + ')</span>' + '<br />');
}
```