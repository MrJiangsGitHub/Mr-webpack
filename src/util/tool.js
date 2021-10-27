import moment from 'moment'

export function dateFormat(date, format = "YYYY-MM-DD HH:mm:ss") {
    return moment(date).format(format)
}
