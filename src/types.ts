export type Language = 'ja' | 'en';

export interface VehicleRecord {
  id: string;
  category: 'truck' | 'heavy' | 'bus' | 'car';
  name: string;
  nameEn: string;
  price: string;
  priceEn: string;
  specs: string;
  specsEn: string;
  image: string;
  badge?: string;
}

export interface CustomerReview {
  id: string;
  title: string;
  titleEn: string;
  comment: string;
  commentEn: string;
  location: string;
  locationEn: string;
  rating: number;
}

export interface AssessmentFormData {
  vehicleType: string;
  prefecture: string;
  phone: string;
  name: string;
  desiredTime?: string;
  preferredHours?: string;
  visitDateTime?: string;
  notes?: string;
}
