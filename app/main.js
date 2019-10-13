require('./css/bubble.css')
require('./css/stars.scss')
const years = require('./js/getBirthday.js').compute()
console.log(years)
// if (!years) {
//   require.ensure([], function (require) {
//     const love = require('./js/normal/go.js')
//     window.onload = () => {
//       love.go()
//     }
//   }, 'normal')
// } else {
//   require.ensure([], function (require) {
//     const b = require('./js/birthday/birthday')
//     b.start()
//   }, 'birthday')
// }
// require.ensure([], function (require) {
//   const love = require('./js/normal/go.js')
//   window.onload = () => {
//     love.go()
//   }
// }, 'normal')
require.ensure([], function (require) {
  const b = require('./js/birthday/birthday')
  b.start()
}, 'birthday')
