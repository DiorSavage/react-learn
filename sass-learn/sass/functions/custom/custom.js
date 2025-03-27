// Как запустить JavaScript функцию в SASS

// npm install -g dart-sass

// после написания кода, находясь в sass-learn
// node ./sass/functions/custom/custom.js

const sass = require('sass')
const outFile = './sass/functions/custom/output_func.css'
const fs = require('fs')

sass.render({
    file: './sass/functions/custom/functions-input.scss',
    outFile,
    functions: {
        'pow($base, $exponent)': function(base, exponent) {
            if (!(base instanceof sass.types.Number)) {
                throw '$base should be a number'
            }
            if ( base.getUnit()) {
                throw '$base should not have units'
            }
            if (!(exponent instanceof sass.types.Number)) {
                throw '$base should be a number'
            }
            if ( exponent.getUnit()) {
                throw '$base should not have units'
            }

            return new sass.types.Number(
                Math.pow(base,getValue(), exponent.getValue())
            )
        },
    }
}, (err, result) => {
    if (err) {
        console.error(err)
    } else {
        console.log(result.css.toString())
        fs.writeFileSync(outFile, result.css.toString(), (err) => {
            console.error('Error while writing file', err)
        })
    }
})