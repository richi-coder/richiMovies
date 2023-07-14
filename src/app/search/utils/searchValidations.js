export const validateSearch = (strSearch, savedInput) => {
    // Avoid searching:

    // Empty strings
    if (strSearch === '') return false;
    if (strSearch === savedInput) return false;

    
    return true
}