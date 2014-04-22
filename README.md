mangaapi
========

API for manga reader

## Routes

### Search

To search for matching manga comics

```
/search/?t=bleach
```

Returns

```json
{
  searchTerm: "bleach",
  resultCount: 1,
  resultPageCount: 1,
  results: [
    {
      resultName: "Bleach",
      resultUrl: "/94/bleach.html",
      resultFullUrl: "http://www.mangareader.net/94/bleach.html",
      resultThumbImageUrl: "http://s1.mangareader.net/cover/bleach/bleach-r0.jpg",
      resultChapters: "581 Chapters Published. (Ongoing)",
      resultType: "Manga (Read Right to Left)",
      resultGenre: "Action, Comedy, Drama, Fantasy, Shounen, Super Power, Supernatural"
    }
  ]
}
```

### Comic

```
/comic/?c=http://www.mangareader.net/94/bleach.html
```

Returns

```json
{
comicUrl: "http://www.mangareader.net/94/bleach.html",
chapterCount: 577,
chapters: [
    {
      chapterUrl: "/94-8-1/bleach/chapter-1.html",
      chapterFullUrl: "http://www.mangareader.net/94-8-1/bleach/chapter-1.html",
      chapterTitle: "Bleach 1",
      chapterDescription: null,
      chapterDate: "07/04/2009"
    },
    {
      chapterUrl: "/94-9-1/bleach/chapter-2.html",
      chapterFullUrl: "http://www.mangareader.net/94-9-1/bleach/chapter-2.html",
      chapterTitle: "Bleach 2",
      chapterDescription: null,
      chapterDate: "07/04/2009"
    }
  ]
}
````

### Chapters

```
/chapters/?c=http://www.mangareader.net/94-8-1/bleach/chapter-1.html
```

Returns

```json
{
chapterUrl: "http://www.mangareader.net/94-8-1/bleach/chapter-1.html",
pageCount: 57,
pages: [
    {
      pageNumber: "1",
      pageUrl: "/94-8-1/bleach/chapter-1.html",
      pageFullUrl: "http://www.mangareader.net/94-8-1/bleach/chapter-1.html"
    },
    {
      pageNumber: "2",
      pageUrl: "/94-8-2/bleach/chapter-1.html",
      pageFullUrl: "http://www.mangareader.net/94-8-2/bleach/chapter-1.html"
    }
  ]
}
```

### Page

```
/page/?p=http://www.mangareader.net/94-8-1/bleach/chapter-1.html
```

Returns

```json
{
  pageUrl: "http://www.mangareader.net/94-8-1/bleach/chapter-1.html",
  pageImage: {
    imageWidth: "800",
    imageHeight: "1254",
    imageSource: "http://i14.mangareader.net/bleach/1/bleach-1585768.jpg",
    imageAlt: "Bleach 1 - Page 1"
  }
}
```
