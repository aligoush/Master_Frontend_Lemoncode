function isBookRead(books, titleToSearch) {
    let regex = new RegExp(titleToSearch);
    let result = false;

    books.forEach(book => {
      if(regex.test(book.title) && book.isRead){
        result = true;
      }
    });
    return result;

  }

  var books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
  ];

  console.log(isBookRead(books, "Devastación")); // true
  console.log(isBookRead(books, "Canción de hielo y fuego")); // false
  console.log(isBookRead(books, "Los Pilares de la Tierra")); // false