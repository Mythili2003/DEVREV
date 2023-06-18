function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 6000);
  }
  window.onload=fadeOut();
fetch('https://openlibrary.org/subjects/fiction.json')
  .then(response => response.json())
  .then(data => {
    const booksList = document.getElementById('books');
    const cartIcon = document.getElementById('cart-icon');
    const cartItemCount = document.getElementById('cart-item-count');
    const cartContainer = document.getElementById('cart');

    let cartItems = [];

    data.works.slice(0, 5).forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.className = 'book';

      const bookImage = document.createElement('img');
      bookImage.src = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;

      const bookDetailsContainer = document.createElement('div');
      bookDetailsContainer.className = 'book-details-container';

      const title = document.createElement('h2');
      title.textContent = book.title;

      const author = document.createElement('p');
      author.textContent = `Author: ${book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown'}`;

      const genre = document.createElement('p');
      genre.textContent = `Genre: Fiction`;

      const rating = document.createElement('p');
      rating.textContent = `Rating: ${book.rating ? book.rating.average.toFixed(2) : 'N/A'}`;

      const availability = document.createElement('p');
      availability.textContent = `Availability: ${padDigits(Math.floor(Math.random() * 100), 2)}`;

      const publishedYear = document.createElement('p');
      publishedYear.textContent = `Published Year: ${Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900}`;

      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.className = 'add-button';
      addButton.addEventListener('mouseover', () => {
        addButton.style.backgroundColor = 'lightcoral';
      });
      addButton.addEventListener('mouseout', () => {
        addButton.style.backgroundColor = 'orange';
      });
      addButton.addEventListener('click', () => {
        const cartItem = {
          title: book.title,
          author: book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown',
          genre: 'Fiction'
        };

        cartItems.push(cartItem);
        updateCartItemCount();
        displayCartItems();
      });

      bookDetailsContainer.appendChild(title);
      bookDetailsContainer.appendChild(author);
      bookDetailsContainer.appendChild(genre);
      bookDetailsContainer.appendChild(rating);
      bookDetailsContainer.appendChild(availability);
      bookDetailsContainer.appendChild(publishedYear);
      bookDetailsContainer.appendChild(addButton);

      bookItem.appendChild(bookImage);
      bookItem.appendChild(bookDetailsContainer);

      booksList.appendChild(bookItem);
    });

    function updateCartItemCount() {
      cartItemCount.textContent = cartItems.length;
    }

    function displayCartItems() {
      cartContainer.innerHTML = '';

      cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const cartTitle = document.createElement('p');
        cartTitle.textContent = `Title: ${item.title}`;

        const cartAuthor = document.createElement('p');
        cartAuthor.textContent = `Author: ${item.author}`;

        const cartGenre = document.createElement('p');
        cartGenre.textContent = `Genre: ${item.genre}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Cart';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
          cartItems.splice(index, 1); 
          updateCartItemCount();
          displayCartItems();
        });

        cartItem.appendChild(cartTitle);
        cartItem.appendChild(cartAuthor);
        cartItem.appendChild(cartGenre);
        cartItem.appendChild(removeButton);

        cartContainer.appendChild(cartItem);
      });
    }

    // cartIcon.addEventListener('click', () => {
    //   cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
    // });
    cartIcon.addEventListener('click', () => {
      cartContainer.classList.toggle('show-cart');
    });
  })
  .catch(error => {
    console.log('Error fetching books:', error);
  });

function padDigits(number, digits) {
  return number.toString().padStart(digits, '0');
}

// /educational books/ 
fetch('https://openlibrary.org/subjects/education.json')
  .then(response => response.json())
  .then(data => {
    const booksList = document.getElementById('book');
    const cartIcon = document.getElementById('cart-icon');
    const cartItemCount = document.getElementById('cart-item-count');
    const cartContainer = document.getElementById('cart');

    let cartItems = [];

    data.works.slice(0, 5).forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.className = 'book';

      const bookImage = document.createElement('img');
      bookImage.src = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;

      const bookDetailsContainer = document.createElement('div');
      bookDetailsContainer.className = 'book-details-container';

      const title = document.createElement('h2');
      title.textContent = book.title;

      const author = document.createElement('p');
      author.textContent = `Author: ${book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown'}`;

      const genre = document.createElement('p');
      genre.textContent = `Genre: Education`;

      const rating = document.createElement('p');
      rating.textContent = `Rating: ${book.rating ? book.rating.average.toFixed(2) : 'N/A'}`;

      const availability = document.createElement('p');
      availability.textContent = `Availability: ${padDigits(Math.floor(Math.random() * 100), 2)}`;

      const publishedYear = document.createElement('p');
      publishedYear.textContent = `Published Year: ${Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900}`;

      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.className = 'add-button';
      addButton.addEventListener('mouseover', () => {
        addButton.style.backgroundColor = 'lightcoral';
      });
      addButton.addEventListener('mouseout', () => {
        addButton.style.backgroundColor = 'orange';
      });
      addButton.addEventListener('click', () => {
        const cartItem = {
          title: book.title,
          author: book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown',
          genre: 'Education'
        };

        cartItems.push(cartItem);
        updateCartItemCount();
        displayCartItems();
      });

      bookDetailsContainer.appendChild(title);
      bookDetailsContainer.appendChild(author);
      bookDetailsContainer.appendChild(genre);
      bookDetailsContainer.appendChild(rating);
      bookDetailsContainer.appendChild(availability);
      bookDetailsContainer.appendChild(publishedYear);
      bookDetailsContainer.appendChild(addButton);

      bookItem.appendChild(bookImage);
      bookItem.appendChild(bookDetailsContainer);

      booksList.appendChild(bookItem);
    });

    function updateCartItemCount() {
      cartItemCount.textContent = cartItems.length;
    }

    function displayCartItems() {
      cartContainer.innerHTML = '';

      cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const cartTitle = document.createElement('p');
        cartTitle.textContent = `Title: ${item.title}`;

        const cartAuthor = document.createElement('p');
        cartAuthor.textContent = `Author: ${item.author}`;

        const cartGenre = document.createElement('p');
        cartGenre.textContent = `Genre: ${item.genre}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Cart';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
          cartItems.splice(index, 1); // Remove the item from the cartItems array
          updateCartItemCount();
          displayCartItems();
        });

        cartItem.appendChild(cartTitle);
        cartItem.appendChild(cartAuthor);
        cartItem.appendChild(cartGenre);
        cartItem.appendChild(removeButton);

        cartContainer.appendChild(cartItem);
      });
    }

    // cartIcon.addEventListener('click', () => {
    //   cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
    // });
    cartIcon.addEventListener('click', () => {
      cartContainer.classList.toggle('show-cart');
    });
  })
  .catch(error => {
    console.log('Error fetching books:', error);
  });

function padDigits(number, digits) {
  return number.toString().padStart(digits, '0');
}
//narrative books//
fetch('https://openlibrary.org/subjects/narrative.json')
  .then(response => response.json())
  .then(data => {
    const booksList = document.getElementById('bookbook');
    const cartIcon = document.getElementById('cart-icon');
    const cartItemCount = document.getElementById('cart-item-count');
    const cartContainer = document.getElementById('cart');

    let cartItems = [];

    data.works.slice(0, 5).forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.className = 'book';

      const bookImage = document.createElement('img');
      bookImage.src = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;

      const bookDetailsContainer = document.createElement('div');
      bookDetailsContainer.className = 'book-details-container';

      const title = document.createElement('h2');
      title.textContent = book.title;

      const author = document.createElement('p');
      author.textContent = `Author: ${book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown'}`;

      const genre = document.createElement('p');
      genre.textContent = `Genre: Narrative`;

      const rating = document.createElement('p');
      rating.textContent = `Rating: ${book.rating ? book.rating.average.toFixed(2) : 'N/A'}`;

      const availability = document.createElement('p');
      availability.textContent = `Availability: ${padDigits(Math.floor(Math.random() * 100), 2)}`;

      const publishedYear = document.createElement('p');
      publishedYear.textContent = `Published Year: ${Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900}`;

      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.className = 'add-button';
      addButton.addEventListener('mouseover', () => {
        addButton.style.backgroundColor = 'lightcoral';
      });
      addButton.addEventListener('mouseout', () => {
        addButton.style.backgroundColor = 'orange';
      });
      addButton.addEventListener('click', () => {
        const cartItem = {
          title: book.title,
          author: book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown',
          genre: 'Narrative'
        };

        cartItems.push(cartItem);
        updateCartItemCount();
        displayCartItems();
      });

      bookDetailsContainer.appendChild(title);
      bookDetailsContainer.appendChild(author);
      bookDetailsContainer.appendChild(genre);
      bookDetailsContainer.appendChild(rating);
      bookDetailsContainer.appendChild(availability);
      bookDetailsContainer.appendChild(publishedYear);
      bookDetailsContainer.appendChild(addButton);

      bookItem.appendChild(bookImage);
      bookItem.appendChild(bookDetailsContainer);

      booksList.appendChild(bookItem);
    });

    function updateCartItemCount() {
      cartItemCount.textContent = cartItems.length;
    }

    function displayCartItems() {
      cartContainer.innerHTML = '';

      cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const cartTitle = document.createElement('p');
        cartTitle.textContent = `Title: ${item.title}`;

        const cartAuthor = document.createElement('p');
        cartAuthor.textContent = `Author: ${item.author}`;

        const cartGenre = document.createElement('p');
        cartGenre.textContent = `Genre: ${item.genre}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Cart';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
          cartItems.splice(index, 1); // Remove the item from the cartItems array
          updateCartItemCount();
          displayCartItems();
        });

        cartItem.appendChild(cartTitle);
        cartItem.appendChild(cartAuthor);
        cartItem.appendChild(cartGenre);
        cartItem.appendChild(removeButton);

        cartContainer.appendChild(cartItem);
      });
    }

    // cartIcon.addEventListener('click', () => {
    //   cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
    // });
    cartIcon.addEventListener('click', () => {
      cartContainer.classList.toggle('show-cart');
    });
  })
  .catch(error => {
    console.log('Error fetching books:', error);
  });

function padDigits(number, digits) {
  return number.toString().padStart(digits, '0');
}
// novels
fetch('https://openlibrary.org/subjects/novel.json')
  .then(response => response.json())
  .then(data => {
    const booksList = document.getElementById('bookbooks');
    const cartIcon = document.getElementById('cart-icon');
    const cartItemCount = document.getElementById('cart-item-count');
    const cartContainer = document.getElementById('cart');

    let cartItems = [];

    data.works.slice(0, 5).forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.className = 'book';

      const bookImage = document.createElement('img');
      bookImage.src = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;

      const bookDetailsContainer = document.createElement('div');
      bookDetailsContainer.className = 'book-details-container';

      const title = document.createElement('h2');
      title.textContent = book.title;

      const author = document.createElement('p');
      author.textContent = `Author: ${book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown'}`;

      const genre = document.createElement('p');
      genre.textContent = `Genre: Novel`;

      const rating = document.createElement('p');
      rating.textContent = `Rating: ${book.rating ? book.rating.average.toFixed(2) : 'N/A'}`;

      const availability = document.createElement('p');
      availability.textContent = `Availability: ${padDigits(Math.floor(Math.random() * 100), 2)}`;

      const publishedYear = document.createElement('p');
      publishedYear.textContent = `Published Year: ${Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900}`;

      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.className = 'add-button';
      addButton.addEventListener('mouseover', () => {
        addButton.style.backgroundColor = 'lightcoral';
      });
      addButton.addEventListener('mouseout', () => {
        addButton.style.backgroundColor = 'orange';
      });
      addButton.addEventListener('click', () => {
        const cartItem = {
          title: book.title,
          author: book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown',
          genre: 'Novel'
        };

        cartItems.push(cartItem);
        updateCartItemCount();
        displayCartItems();
      });

      bookDetailsContainer.appendChild(title);
      bookDetailsContainer.appendChild(author);
      bookDetailsContainer.appendChild(genre);
      bookDetailsContainer.appendChild(rating);
      bookDetailsContainer.appendChild(availability);
      bookDetailsContainer.appendChild(publishedYear);
      bookDetailsContainer.appendChild(addButton);

      bookItem.appendChild(bookImage);
      bookItem.appendChild(bookDetailsContainer);

      booksList.appendChild(bookItem);
    });

    function updateCartItemCount() {
      cartItemCount.textContent = cartItems.length;
    }

    function displayCartItems() {
      cartContainer.innerHTML = '';

      cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const cartTitle = document.createElement('p');
        cartTitle.textContent = `Title: ${item.title}`;

        const cartAuthor = document.createElement('p');
        cartAuthor.textContent = `Author: ${item.author}`;

        const cartGenre = document.createElement('p');
        cartGenre.textContent = `Genre: ${item.genre}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Cart';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
          cartItems.splice(index, 1); 
          updateCartItemCount();
          displayCartItems();
        });

        cartItem.appendChild(cartTitle);
        cartItem.appendChild(cartAuthor);
        cartItem.appendChild(cartGenre);
        cartItem.appendChild(removeButton);

        cartContainer.appendChild(cartItem);
      });
    }

    cartIcon.addEventListener('click', () => {
      cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
    });
    cartIcon.addEventListener('click', () => {
      cartContainer.classList.toggle('show-cart');
    });
  })
  .catch(error => {
    console.log('Error fetching books:', error);
  });

function padDigits(number, digits) {
  return number.toString().padStart(digits, '0');
}
// fantasy

fetch('https://openlibrary.org/subjects/fantasy.json')
  .then(response => response.json())
  .then(data => {
    const booksList = document.getElementById('bookbookss');
    const cartIcon = document.getElementById('cart-icon');
    const cartItemCount = document.getElementById('cart-item-count');
    const cartContainer = document.getElementById('cart');

    let cartItems = [];

    data.works.slice(0, 5).forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.className = 'book';

      const bookImage = document.createElement('img');
      bookImage.src = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;

      const bookDetailsContainer = document.createElement('div');
      bookDetailsContainer.className = 'book-details-container';

      const title = document.createElement('h2');
      title.textContent = book.title;

      const author = document.createElement('p');
      author.textContent = `Author: ${book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown'}`;

      const genre = document.createElement('p');
      genre.textContent = `Genre: Fantasy`;

      const rating = document.createElement('p');
      rating.textContent = `Rating: ${book.rating ? book.rating.average.toFixed(2) : 'N/A'}`;

      const availability = document.createElement('p');
      availability.textContent = `Availability: ${padDigits(Math.floor(Math.random() * 100), 2)}`;

      const publishedYear = document.createElement('p');
      publishedYear.textContent = `Published Year: ${Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900}`;

      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.className = 'add-button';
      addButton.addEventListener('mouseover', () => {
        addButton.style.backgroundColor = 'lightcoral';
      });
      addButton.addEventListener('mouseout', () => {
        addButton.style.backgroundColor = 'orange';
      });
      addButton.addEventListener('click', () => {
        const cartItem = {
          title: book.title,
          author: book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown',
          genre: 'Fantasy'
        };

        cartItems.push(cartItem);
        updateCartItemCount();
        displayCartItems();
      });

      bookDetailsContainer.appendChild(title);
      bookDetailsContainer.appendChild(author);
      bookDetailsContainer.appendChild(genre);
      bookDetailsContainer.appendChild(rating);
      bookDetailsContainer.appendChild(availability);
      bookDetailsContainer.appendChild(publishedYear);
      bookDetailsContainer.appendChild(addButton);

      bookItem.appendChild(bookImage);
      bookItem.appendChild(bookDetailsContainer);

      booksList.appendChild(bookItem);
    });

    function updateCartItemCount() {
      cartItemCount.textContent = cartItems.length;
    }

    function displayCartItems() {
      cartContainer.innerHTML = '';

      cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const cartTitle = document.createElement('p');
        cartTitle.textContent = `Title: ${item.title}`;

        const cartAuthor = document.createElement('p');
        cartAuthor.textContent = `Author: ${item.author}`;

        const cartGenre = document.createElement('p');
        cartGenre.textContent = `Genre: ${item.genre}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Cart';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
          cartItems.splice(index, 1); 
          updateCartItemCount();
          displayCartItems();
        });

        cartItem.appendChild(cartTitle);
        cartItem.appendChild(cartAuthor);
        cartItem.appendChild(cartGenre);
        cartItem.appendChild(removeButton);

        cartContainer.appendChild(cartItem);
      });
    }

    // cartIcon.addEventListener('click', () => {
    //   cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
    // });
    cartIcon.addEventListener('click', () => {
      cartContainer.classList.toggle('show-cart');
    });
  })
  .catch(error => {
    console.log('Error fetching books:', error);
  });

function padDigits(number, digits) {
  return number.toString().padStart(digits, '0');
}

// history
fetch('https://openlibrary.org/subjects/history.json')
  .then(response => response.json())
  .then(data => {
    const booksList = document.getElementById('bookbooksss');
    const cartIcon = document.getElementById('cart-icon');
    const cartItemCount = document.getElementById('cart-item-count');
    const cartContainer = document.getElementById('cart');

    let cartItems = [];

    data.works.slice(0, 4).forEach(book => {
      const bookItem = document.createElement('li');
      bookItem.className = 'book';

      const bookImage = document.createElement('img');
      bookImage.src = `https://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;

      const bookDetailsContainer = document.createElement('div');
      bookDetailsContainer.className = 'book-details-container';

      const title = document.createElement('h2');
      title.textContent = book.title;

      const author = document.createElement('p');
      author.textContent = `Author: ${book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown'}`;

      const genre = document.createElement('p');
      genre.textContent = `Genre: History`;

      const rating = document.createElement('p');
      rating.textContent = `Rating: ${book.rating ? book.rating.average.toFixed(2) : 'N/A'}`;

      const availability = document.createElement('p');
      availability.textContent = `Availability: ${padDigits(Math.floor(Math.random() * 100), 2)}`;

      const publishedYear = document.createElement('p');
      publishedYear.textContent = `Published Year: ${Math.floor(Math.random() * (2023 - 1900 + 1)) + 1900}`;

      const addButton = document.createElement('button');
      addButton.textContent = 'Add to Cart';
      addButton.className = 'add-button';
      addButton.addEventListener('mouseover', () => {
        addButton.style.backgroundColor = 'lightcoral';
      });
      addButton.addEventListener('mouseout', () => {
        addButton.style.backgroundColor = 'orange';
      });
      addButton.addEventListener('click', () => {
        const cartItem = {
          title: book.title,
          author: book.authors ? book.authors.map(author => author.name).join(', ') : 'Unknown',
          genre: 'History'
        };

        cartItems.push(cartItem);
        updateCartItemCount();
        displayCartItems();
      });

      bookDetailsContainer.appendChild(title);
      bookDetailsContainer.appendChild(author);
      bookDetailsContainer.appendChild(genre);
      bookDetailsContainer.appendChild(rating);
      bookDetailsContainer.appendChild(availability);
      bookDetailsContainer.appendChild(publishedYear);
      bookDetailsContainer.appendChild(addButton);

      bookItem.appendChild(bookImage);
      bookItem.appendChild(bookDetailsContainer);

      booksList.appendChild(bookItem);
    });

    function updateCartItemCount() {
      cartItemCount.textContent = cartItems.length;
    }

    function displayCartItems() {
      cartContainer.innerHTML = '';

      cartItems.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';

        const cartTitle = document.createElement('p');
        cartTitle.textContent = `Title: ${item.title}`;

        const cartAuthor = document.createElement('p');
        cartAuthor.textContent = `Author: ${item.author}`;

        const cartGenre = document.createElement('p');
        cartGenre.textContent = `Genre: ${item.genre}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove from Cart';
        removeButton.className = 'remove-button';
        removeButton.addEventListener('click', () => {
          cartItems.splice(index, 1); 
          updateCartItemCount();
          displayCartItems();
        });

        cartItem.appendChild(cartTitle);
        cartItem.appendChild(cartAuthor);
        cartItem.appendChild(cartGenre);
        cartItem.appendChild(removeButton);

        cartContainer.appendChild(cartItem);
      });
    }

    // cartIcon.addEventListener('click', () => {
    //   cartContainer.style.display = cartContainer.style.display === 'block' ? 'none' : 'block';
    // });
    cartIcon.addEventListener('click', () => {
      cartContainer.classList.toggle('show-cart');
    });
  })
  .catch(error => {
    console.log('Error fetching books:', error);
  });

function padDigits(number, digits) {
  return number.toString().padStart(digits, '0');
}

