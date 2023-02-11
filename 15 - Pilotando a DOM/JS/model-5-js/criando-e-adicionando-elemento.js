// create element
const div = document.createElement('div')
div.innerText = "Olá devs"

// append prepend
const body = document.querySelector('body')

// body.append(div)


// insertBefore
const script = body.querySelector('script')
body.insertBefore(div, script)

