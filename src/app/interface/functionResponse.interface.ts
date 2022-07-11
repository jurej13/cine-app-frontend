export interface FunctionResponse {
    _id:         string;
    startDate:   Date;
    endDate:     Date;
    totalChairs: number;
    roomNumber:  number;
    chairs:      number[];
    state:       boolean;
    movie:       string;
    price :      number;
}
export interface FunctionPopulated {
    _id:         string;
    startDate:   Date;
    endDate:     Date;
    totalChairs: number;
    roomNumber:  number;
    chairs:      number[];
    state:       boolean;
    movie:       Movie;
    price :      number;
}
interface Movie{
    _id : string,
    name: string
}