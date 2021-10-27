import Examples from './connector.js'

export function getData() {
    return Examples.get('/ExamplesData')
}
