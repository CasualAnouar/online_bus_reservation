interface Bus {
  car_name: string;
  nbr_places: Number;
  car_image: string;
}
interface BreakPoint {
  arrival_time: string;
  city_name: string;
}
interface Company {
  company_name: string;
}
export interface TripState {
  _id: string;
  departure_city: string;
  arrival_city: string;
  departure_date: string;
  departure_time: string;
  arrival_time: string;
  car: Bus;
  break_points: BreakPoint;
  company: Company;
  price:number,
  distance:string
}