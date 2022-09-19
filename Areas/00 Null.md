#  = 00 Null Area
#id/2022-09-12/03-31-24

---
### === Notes in the area

```dataviewjs
const LIMIT = 100;
const NOTES_FOLDER = 'Notes';
const AREAS_FOLDER = 'Areas';
const currName = dv.current().file.path;

if (currName.indexOf(AREAS_FOLDER) >= 0) {
	const areaPages = dv.pages()
		.where(p => p.file.folder === NOTES_FOLDER)
		.where(p => (p.file.outlinks || []).find(_ => currName.indexOf(_)));

	const pagesCount = areaPages.length;
	const limitedPages = areaPages.sort(_ => _.ctime, 'DESC').limit(LIMIT);

	dv.span('<span style="opacity:0.75;">-> limit: ' + LIMIT + '</span><br />');
	dv.span('<span style="opacity:0.75;">-> notes: ' + pagesCount + '</span>');

	dv.span('<br /><br />');

	for (let page of limitedPages) {
		dv.span('<span style="opacity:0.5;">= </span>' + page.file.link + '<br />');
	}	
}
```