function fetchData() {
  fetch('My_Boardgames.json')
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      let output = '<h2"></h2>'
      data.forEach(function (item) {
        output += `
        <ul>
          <li>${item}</li>
        </ul>
      `
      })
      document.getElementById('BGlist').innerHTML = output
    })
    .catch((error) => {
      console.log(`Error Fetching data : ${error}`)
      document.getElementById('BGlist').innerHTML = 'Error Loading Data'
    })
}

fetchData()