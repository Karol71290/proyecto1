function submitForm() {
    // Get the form values
    const date = parseInt(document.getElementById('date').value);
    const title = document.getElementById('title').value;
    const image = document.getElementById('image').value;
    const text = document.getElementById('text').value;
  
    // Create a new object with the form values
    const data = {
      date: date,
      title: title,
      image: image,
      text: text
    };
  
    // Convert the object to JSON
    const jsonData = JSON.stringify(data);
  
    // Send a POST request to the server to append the JSON data to the existing file
    fetch('http://localhost:5500/appendData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: jsonData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => console.log('New data added to timeline:', data))
    .catch(error => console.error('Error adding new data to timeline:', error));
  }
  