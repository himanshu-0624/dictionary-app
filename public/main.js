// NOTE: wordSmith functions from lines 4 - 39


// information to reach API
const dataMuseUrl = 'https://api.datamuse.com/words?';
const queryParams1 = 'rel_ant=';
const queryParams2 = 'rel_syn=';
const queryParams3 = 'rel_rhy=';

// selecting page elements
const inputField = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField1 = document.querySelector('#responseField1');
const responseField2 = document.querySelector('#responseField2');
const responseField3 = document.querySelector('#responseField3');

// AJAX function for antonym
const getAntonyms = () => {
  const wordQuery = inputField.value;
  const endPoint = dataMuseUrl + queryParams1 + wordQuery;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse1(xhr.response);
    }
  };
  xhr.open('GET', endPoint);
  xhr.send();
}

// AJAX function for synonym

const getSynonyms = () => {
  const wordQuery = inputField.value;
  const endPoint = dataMuseUrl + queryParams2 + wordQuery;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse2(xhr.response);
    }
  };
  xhr.open('GET', endPoint);
  xhr.send();
}

// AJAX function for rhym
const getRhyming = () => {
  const wordQuery = inputField.value;
  const endPoint = dataMuseUrl + queryParams3 + wordQuery;

  const xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse3(xhr.response);
    }
  };
  xhr.open('GET', endPoint);
  xhr.send();
}


// clear previous results and display results to webpage
const displaySuggestions = (event) => {
  event.preventDefault();
  while(responseField1.firstChild){
    responseField1.removeChild(responseField1.firstChild);
  };
   while(responseField2.firstChild){
    responseField2.removeChild(responseField2.firstChild);
  };
   while(responseField3.firstChild){
    responseField3.removeChild(responseField3.firstChild);
  };
  getAntonyms();
  getSynonyms();
  getRhyming();
};

submit.addEventListener('click', displaySuggestions);




