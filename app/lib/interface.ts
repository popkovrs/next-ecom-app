export interface simplifiedEvent {
    _id: string;
    name: string;
    date: string;
    city: string;
    place: string;
    imageUrl: string;
    price: number;
    slug: string;
    genre: string;
}

export interface fullEvent {
    _id: string;
    name: string;
    date: string;
    city: string;
    place: string;
    images: any;
    price: number;
    slug: string;
    genre: string;
    description: string;
    price_id: string;
}