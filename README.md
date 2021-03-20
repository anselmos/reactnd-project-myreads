# MyReads

Udacity Nanodegree React project.

This project is a book-management app for easier managing your library of books.

Project has a sample data along with Udacity API backend that can be found at : https://reactnd-books-api.udacity.com/books

# Live version of app

You can check live version of app here: 

https://anselmos.github.io/reactnd-project-myreads/


# Dependencies

To install dependencies run:
```
npm install 
```

or 
```
yarn install
```

# Running

```
yarn start
```

## Backend Server

As this project is more focused on learning React basics, API to backend is already provided with js-functions:
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.
