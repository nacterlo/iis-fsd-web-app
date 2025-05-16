export const formattedDate = (date: string) => {

    const newDate = new Date(date)
    
    return newDate.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })

}


// Вспомогательная функция для конвертации
export const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
    });
};