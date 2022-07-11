export interface FunctionResponse {
    _id:         string;
    startDate:   Date;
    endDate:     Date;
    totalChairs: number;
    roomNumber:  number;
    chairs:      number[];
    state:       boolean;
    movie:       string;
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
}
interface Movie{
    _id : string,
    name: string
}