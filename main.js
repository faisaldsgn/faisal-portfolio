// import './style.css'

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `


window.Alpine = Alpine
Alpine.start()

window.intersect = Alpine
Alpine.plugin(intersect)

// $(window).load(function() {
//     $("body").removeClass("preload");
//   });