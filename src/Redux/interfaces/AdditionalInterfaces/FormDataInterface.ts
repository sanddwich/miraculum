export default interface FormDataInterface {
  phone: {
    value: string
    error: boolean
    minLength: number
  }
  name: {
    value: string
    error: boolean
    minLength: number
  }
}