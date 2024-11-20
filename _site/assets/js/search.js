SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('search-results'),
  json: '/search.json',
  searchResultTemplate: '<div class="search-result"><a href="{url}">{title}</a><p>{excerpt}</p></div>',
  noResultsText: 'No results found',
  limit: 10,
  fuzzy: false
});
