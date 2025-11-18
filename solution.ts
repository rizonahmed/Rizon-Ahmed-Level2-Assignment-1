 const formatValue = (input: string | number | boolean): (string | number | boolean) => {

    if (typeof input === "string") {
        return input.toUpperCase()
    } else if (typeof input === "number") {
        return input * 10
    } else {
        return !input
    }

}







 const getLength = (input: string | any[]): number => {
    if (typeof input === "string" || Array.isArray(input)) { return input.length }
    return 0
}






 class Person {
    name: string;
    age: number;


    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name:${this.name}, Age: ${this.age}'`;
    }
}


 




 const filterByRating = (input: { title: string, rating: number }[]): ({ title: string, rating: number }[]) => {
    return input.filter(item => item.rating >= 4.0)
}






 const filterActiveUsers = (input: { id: number, name: string, email: string, isActive: boolean }[]): { id: number, name: string, email: string, isActive: boolean }[] => {
    return input.filter(activeUser => activeUser?.isActive === true)
}







 interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

const printBookDetails = (inputValue: Book): string => {
    const availabilityStatus = inputValue.isAvailable ? 'Yes' : 'No';
    return `Title: ${inputValue.title}, Author: ${inputValue.author}, Published: ${inputValue.publishedYear}, Available: ${availabilityStatus}`;
}






 const getUniqueValues = (value01: (string | number)[], value02: (string | number)[]): (string | number)[] => {
    const result: (string | number)[] = [];

    for (const value of value01) {
        if (!result.includes(value)) result.push(value);
    }
    for (const value of value02) {
        if (!result.includes(value)) result.push(value);
    }
    return result;
}








 const calculateTotalPrice = (inputValue: { name: string; price: number; quantity: number; discount?: number }[]): number => {
    if (inputValue.length === 0) return 0;

    return inputValue.map((product) => {
        let total = product.price * product.quantity;
        if (product.discount !== undefined) {
            total -= (total * product.discount) / 100;
        }
        return total;
    }).reduce((sum, item) => sum + item, 0);
}