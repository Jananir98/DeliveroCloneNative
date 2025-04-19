export type RootStackParamList = {
    Home: undefined;
    Restaurent: {
      id: string;
      imgUrl: string;
      title: string;
      rating: number;
      genre: string;
      address: string;
      short_description: string;
      dishes: any;
      long: number;
      lat: number;
    };
    Basket:undefined;
    PreparingOrder: undefined;
    Delivery: undefined;
    Payment:undefined;
    RazorpayWebView:undefined;
    Login:undefined;
    Signup: { email: string };
  };
  