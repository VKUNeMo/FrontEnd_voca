
const validation = {
    checkEmpty: (value) => {
        if (value.length === 0) {
            return false
        } else {
            return true
        }
    },
    checkLength: (value, length) => {
        if (value.length < length) {
            return false
        }
        return true
    }
}

export default validation