fetch('zelda-timeline.json')
  .then(response => response.json())
  .then(data => {
    // Sort the data based on the "date" property in ascending order
    data.sort((a, b) => a.date - b.date);

    // Use the sorted 'data' variable to access your JSON dataset
    console.log(data); // Example: Output the sorted dataset to the console

    // Access the timeline container element in the HTML
    const timelineContainer = document.getElementById('timeline-container');

    // Loop through the sorted data and create HTML elements for each event
    data.forEach(event => {
      // Create the elements
      const eventElement = document.createElement('div');
      const contentWrapper = document.createElement('div');
      const titleElement = document.createElement('h2');
      const imageElement = document.createElement('img');
      const textElement = document.createElement('p');

      // Set the content for each element
      titleElement.textContent = event.title;
      imageElement.src = event.image;
      textElement.textContent = event.text;

      // Add classes to the elements
      eventElement.classList.add('timeline-event');
      contentWrapper.classList.add('event-content-wrapper');
      titleElement.classList.add('event-title');
      imageElement.classList.add('event-image');
      textElement.classList.add('event-text');

      // Append the elements to the content wrapper
      contentWrapper.appendChild(titleElement);
      contentWrapper.appendChild(imageElement);
      contentWrapper.appendChild(textElement);

      // Append the content wrapper to the event element
      eventElement.appendChild(contentWrapper);

      // Append the event element to the timeline container
      timelineContainer.appendChild(eventElement);
    });

   
  })
  .catch(error => {
    console.error('Error fetching the JSON dataset:', error);
  });
