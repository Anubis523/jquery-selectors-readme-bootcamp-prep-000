// declare your functions here...
function paragraphSelector () {
  let paragraphs = $('p').get()
  return paragraphs
}

function lastImageSelector() {
  let images = $('img').get()
  return images[images.length-1]
}
