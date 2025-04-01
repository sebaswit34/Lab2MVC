/*
  📦 Dependy the Importer  
  Zaimportuj wszystkie wymagane moduły: path, express, body-parser, logger oraz routing.  
*/
const http = require("http");
const config = require("./config");
const { requestRouting } = require("./routing/routing");

const requestListener = (request, response) => {
  requestRouting(request, response);
};

const server = http.createServer(requestListener);

server.listen(config.PORT);

/*
  🏗 Structo the Builder  
  Utwórz instancję aplikacji express i zapisz ją w stałej app.  
*/
/*
  🏗 Structo the Builder  
  Zarejestruj middleware body-parser do parsowania ciał formularzy. 
*/
/*
  🏗 Structo the Builder  
  Dodaj middleware logujący informacje o każdym przychodzącym żądaniu.  
*/
/*
  🏗 Structo the Builder  
  Zarejestruj middleware obsługujące poszczególne ścieżki.  
*/
/*
  🏗 Structo the Builder  
    Obsłuż stronę 404 – zwróć plik 404.html i zaloguj błąd.   
*/
/*
  🏗 Structo the Builder  
    Uruchom serwer i nasłuchuj na porcie z config.js.    
*/
