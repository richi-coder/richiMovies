export const validateSearch = (strSearch, savedInput) => {
    // Avoid:

    // Empty strings
    if (strSearch === '') return false;
    // Repeated search
    if (strSearch === savedInput) return false;

    
    return true
}