export interface IErrorNumberMessage {
    required: boolean,
    min: {
        min: number
    },
    max: {
        max: number
    },
    maxlength: {
        requiredLength: number
    },
    minlength: {
        requiredLength: number
    }
}
