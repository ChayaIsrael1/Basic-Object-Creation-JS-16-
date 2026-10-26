class MediaItem {
    constructor(title, genre ,year) {
        this.title = title
        this.year = year
        this.genre = genre
    }
    getSummary() {
        return "summary"
    }
}

class Book extends MediaItem {
    constructor(title, author,year, genre,pageCount) {
        super(title,  genre, year)
        this.author = author
        this.pageCount = pageCount
    }
    getSummary() {
        return `Book: ${this.title} by ${this.author}, ${this.pageCount} pages`
    }
}

class Movie extends MediaItem {
    constructor(title,  director, year,  genre, durationMinutes) {
        super(title, genre, year)
        this.director = director
        this.durationMinutes = durationMinutes
    }
    getSummary() {
        return `Movie: ${this.title} directed by ${this.director}, ${this.durationMinutes} min`
    }
}

class Library {
 
    constructor() {
        this.items = []
    }
    addItem(item) {
        this.items.push(item)
    }

  search(term) {
    const lowerTerm = term.toLowerCase();
    return this.items.filter(item => 
      item["title"].toLowerCase().includes(lowerTerm)
    );
  }

  // Uses filter to return all items matching the exact genre
  listByGenre(genre) {
    return this.items.filter(item=>
        item["genre"]==genre
    )
  }
}

const lib = new Library();
lib.addItem(new Book("Dune", "Frank Herbert", 1965, "Sci-Fi", 412));
lib.addItem(new Movie("Dune", "Denis Villeneuve", 2021, "Sci-Fi", 155));
console.log(lib.search("dune"));
console.log(lib.listByGenre("Sci-Fi"));

