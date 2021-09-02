const searchBook = () => {
  const searchField = document.getElementById('search-field');
  const searchText = searchField.value;
  searchField.value = '';
  const url = `https://openlibrary.org/search.json?q=${searchText}`;
  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.docs.length > 0) {
        document.getElementById('error').classList.add("d-none");
        displayDocs(data.docs)
      } else {
        document.getElementById('error').classList.remove("d-none");
        document.getElementById('search-result').textContent = ``
      }
    });
}
const displayDocs = docs => {
  const searchResult = document.getElementById('search-result')

  docs.forEach(doc => {
    console.log(doc);
    const div = document.createElement('div')
    div.classList.add('col');
    div.innerHTML = `
   <div class="col">
   <div class="card">
     <img src= " https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg"  class="card-img-top " >
     <div class="card-body">
       <p class="card-title">Author name ${doc.author_name}</p>
       <p class="card-text">First Publish Year ${doc.first_publish_year}</p>
     </div>
   </div>
 </div> `;
    searchResult.appendChild(div)
  })

}
     












