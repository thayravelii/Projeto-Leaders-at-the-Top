var array = [1, 2, 3, 4]
const callback = (prop) => {
    console.log(array[prop])
}

const forEach = (array, callback) => {
    var verif = 0
    for (prop in array) {
        callback (prop)
        verif++
    }
    console.log("Total de arrays:" + verif)
}

forEach(array, callback)


array = [];

const funcCallback = (prop) => {
  array.push(prop)

}
const map = (array, funcCallback) => {
    for (prop = 0; prop < 8; prop ++) {
        funcCallback(prop)
    }
    console.log("New Array:")
    console.log(array)
}
map (array, funcCallback)