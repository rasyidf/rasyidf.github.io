export const formatDate = (date: string | Date | unknown): string => {

    if (typeof date === 'string') {
        const dateObject = new Date(date);


        return dateObject.toLocaleString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }

    if (date instanceof Date) {
        return date.toLocaleString('id-ID', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
        });
    }

    return 'Error';
} 