export function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function isValidPassword(password) {
    if (password.length < 8) {
        return { isValid: false, message: "Password must be at least 8 characters"} 
    }
    if (!/[0-9]/.test(password)) {
        return { isValid: false, message: "Password must contain at least one number"}
    }
    if (!/[a-zA-Z]/.test(password)) {
        return { isValid: false, message: "Password must contain at least one letter"}
    }
    if (!/[A-Z]/.test(password)) {
        return { isValid: false, message: "Password must contain at least one uppercase letter"}
    }

    return { isValid: true, message: "" };
}

export function isValidPhoneNumber(phoneNumber) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
}