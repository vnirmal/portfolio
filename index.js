window.onload = function() {
  var reader = new FileReader();

  // add text for landing page
  addTextToComponent("content/landingPageText.txt", "largeTextSection");
}

function addTextToComponent(textFile, componentId) {
  let parentComponent = document.getElementById(componentId);
  fetch(textFile)
    .then(response => response.text())
    .then(function(text) {
      textItems = text.split('\n');
      console.log(textItems);
      for (let item in textItems) {
        var newParagraph = document.createElement('p');
        newParagraph.innerHTML = text;
        parentComponent.appendChild(newParagraph);
      }
    });
}
