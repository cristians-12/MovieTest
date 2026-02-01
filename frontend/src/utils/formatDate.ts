export const formatDate = (dateString: string, language: string = 'es-CO') => {
    if (!dateString) return "";

    const date = new Date(dateString);

    return new Intl.DateTimeFormat(language, {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(date);
};