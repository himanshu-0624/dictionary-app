// Formats response to look presentable on webpage

// for antonym
const renderResponse1 = (res) => {
    // Handles if res is falsey
    if(!res){
      console.log(res.status);
    }
    // In case res comes back as a blank array
    if(!res.length){
      responseField1.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"><p>Try again!</p><p>There were no suggestions found!</p></div>";
      return;
    }
  
    // Creates an empty array to contain the HTML strings
    let wordList1 = [];
    // Loops through the response and caps off at 10
    for(let i = 0; i < Math.min(res.length, 10); i++){
      // creating a list of words
      wordList1.push(`<li>${res[i].word}</li>`);
    }
    // Joins the array of HTML strings into one string
    wordList1 = wordList1.join("");
  
    // Manipulates responseField to render the modified response
    responseField1.innerHTML = `<p>You might be interested in:</p><ol>${wordList1}</ol>`;
    return
  }

  // for synonym
  const renderResponse2 = (res) => {
  
    if(!res){
      console.log(res.status);
    }
  
    if(!res.length){
      responseField1.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"><p>Try again!</p><p>There were no suggestions found!</p></div>";
      return;
    }
  
  
    let wordList2 = [];
   
    for(let i = 0; i < Math.min(res.length, 10); i++){
     
      wordList2.push(`<li>${res[i].word}</li>`);
    }
   
    wordList2 = wordList2.join("");
  
   
    responseField2.innerHTML = `<p>You might be interested in:</p><ol>${wordList2}</ol>`;
    return
  }
// for rhyming
  const renderResponse3 = (res) => {
    
    if(!res){
      console.log(res.status);
    }
  
    if(!res.length){
      responseField3.innerHTML = "<div class=\"alert alert-danger\" role=\"alert\"><p>Try again!</p><p>There were no suggestions found!</p></div>";
      return;
    }
  
   
    let wordList3 = [];
   
    for(let i = 0; i < Math.min(res.length, 10); i++){
      // creating a list of words
      wordList3.push(`<li>${res[i].word}</li>`);
    }
    // Joins the array of HTML strings into one string
    wordList3 = wordList3.join("");
  
    // Manipulates responseField to render the modified response
    responseField3.innerHTML = `<p>You might be interested in:</p><ol>${wordList3}</ol>`;
    return;
  }

/*

  // Renders response before it is modified
const renderRawResponse = (res) => {
    // Takes the first 10 words from res
    let trimmedResponse = res.slice(0, 10);
    // Manipulates responseField to render the unformatted response
    responseField.innerHTML = `<text>${JSON.stringify(trimmedResponse)}</text>`;
  }

  */
