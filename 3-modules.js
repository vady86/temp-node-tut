// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./4-names-module')  //importing the object
const sayHi = require('./5-utils') //importing the function

const data = require('./6-alternative_ModuleExporting')
//console.log(data)
//console.log(names)

require('./7-mind-grenade') //this will also call the function as it is called inside the module itself

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)