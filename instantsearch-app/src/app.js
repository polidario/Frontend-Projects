const { algoliasearch, instantsearch } = window;

const searchClient = algoliasearch('T8LNWT9XN7', '457af6e5f3439b7d344dcc1700e97ad5');

const search = instantsearch({
  indexName: 'movies_dataset',
  searchClient,
  future: { preserveSharedStateOnUnmount: true },
  
});


search.addWidgets([
  instantsearch.widgets.searchBox({
    container: '#searchbox',
  }),
  instantsearch.widgets.hits({
    container: '#hits',
    templates: {
      item: (hit, { html, components }) => html`
<article>
  <img src=${ hit.poster_path } alt=${ hit.title } />
  <div>
    <h1>${components.Highlight({hit, attribute: "title"})}</h1>
  </div>
</article>
`,
    },
  }),
  instantsearch.widgets.configure({
    hitsPerPage: 8,
  }),
  instantsearch.widgets.pagination({
    container: '#pagination',
  }),
]);

search.start();

