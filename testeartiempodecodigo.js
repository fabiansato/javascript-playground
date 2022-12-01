// testear el tiempo que usa un codigo

console.time('FOR LOOP PROFILE')

let value = 0

for (let i = 0; i < 2000e6; i++){
    value++
}

console.timeEnd('FOR LOOP PROFILE')
