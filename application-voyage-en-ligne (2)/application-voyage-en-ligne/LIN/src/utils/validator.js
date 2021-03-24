export default {
    /**
     * Check phone number
     * @param {Number} phone 
     */
    validatePhone(phone) {
        const reg = /^[0][6-9][0-9]{8}$/;
        return reg.test(phone)
    }
}