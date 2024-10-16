const escapeStr = '\`\\\/\"\''
const arr = [4, '2']
const obj = { str: 'Obj String', num: 666, bool: false, undef: undefined }
const nested = {
        arr: [4, undefined, '2'],
        obj: { str: 'Nested String', num: 3.142, bool: false }
}

Object.freeze(nested)
Object.freeze(nested.arr)
Object.freeze(nested.obj)
