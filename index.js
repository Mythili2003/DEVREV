$(document).ready(function() {
  const API_URL = 'https://openlibrary.org/search.json';

  const searchInput = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');
  const results = document.getElementById('results');
  const prevButton = document.getElementById('prevButton');
  const nextButton = document.getElementById('nextButton');

  let currentPage = 1;
  let totalResults = 0;
  let totalPages = 0;
  let currentQuery = '';

  function displaySuggestions(data) {
    suggestions.innerHTML = '';

    if (data.numFound > 0) {
      const suggestionsList = document.createElement('ul');

      data.docs.slice(0, 7).forEach(item => {
        const suggestionItem = document.createElement('li');
        suggestionItem.textContent = `${item.title} - ${item.author_name ? item.author_name.join(', ') : 'Unknown'}`;
        suggestionItem.addEventListener('click', () => {
          searchInput.value = suggestionItem.textContent;
          suggestions.innerHTML = '';
          searchBooks();
        });

        suggestionsList.appendChild(suggestionItem);
      });

      suggestions.appendChild(suggestionsList);
    } else {
      suggestions.innerHTML = '<p>No suggestions found.</p>';
    }
  }

  function displayResults(data) {
    suggestions.innerHTML = ''; // Close suggestions when viewing results
    results.innerHTML = '';

    data.docs.forEach(book => {
      const listItem = document.createElement('li');
      const title = document.createElement('h3');
      title.textContent = book.title;
      const authors = document.createElement('p');
      authors.textContent = `Author(s): ${book.author_name ? book.author_name.join(', ') : 'Unknown'}`;
      const genres = document.createElement('p');
      genres.textContent = `Genre(s): ${book.subject ? book.subject.join(', ') : 'N/A'}`;
      const cover = document.createElement('img');
      cover.src = `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`;

      const availability = document.createElement('p');
      availability.textContent = `Availability: ${String(Math.floor(Math.random() * 100)).padStart(2, '0')}`;
      const publishedYear = document.createElement('p');
      publishedYear.textContent = `Published Year: ${Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900}`;

      listItem.appendChild(cover);
      listItem.appendChild(title);
      listItem.appendChild(authors);
      listItem.appendChild(genres);
      listItem.appendChild(availability);
      listItem.appendChild(publishedYear);

      results.appendChild(listItem);
    });

    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage === totalPages;
  }

  function searchBooks() {
    const query = searchInput.value.trim();

    if (query === '') {
      suggestions.innerHTML = '';
      results.innerHTML = '';
      return;
    }

    if (query === currentQuery) {
      return;
    }

    currentQuery = query;

    const params = {
      q: query,
      page: currentPage,
      limit: 10,
    };

    $.ajax({
      url: API_URL,
      data: params,
      dataType: 'json',
      success: function(data) {
        totalResults = data.numFound;
        totalPages = Math.ceil(totalResults / 10);

        displayResults(data);
      },
      error: function(error) {
        console.log('Error fetching book data:', error);
      }
    });
  }

  function goToPage(page) {
    if (page < 1 || page > totalPages) {
      return;
    }
    
    currentPage = page;
    searchBooks();
    }
    
    searchInput.addEventListener('input', function() {
    const query = this.value.trim();
    
    if (query === '') {
    suggestions.innerHTML = '';
    return;
    }
    
    const params = {
    q: query,
    limit: 7,
    };
    
    $.ajax({
    url: API_URL,
    data: params,
    dataType: 'json',
    success: function(data) {
    displaySuggestions(data);
    },
    error: function(error) {
    console.log('Error fetching suggestions:', error);
    }
    });
    });
    
    searchInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
    e.preventDefault();
    searchBooks();
    }
    });
    
    prevButton.addEventListener('click', function() {
    goToPage(currentPage - 1);
    });
    
    nextButton.addEventListener('click', function() {
    goToPage(currentPage + 1);
    });
    });

  