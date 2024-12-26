import { CategoriesTypes, SuggestedRestaurantsTypes } from '@/types';

export const SuggestedRestaurants: SuggestedRestaurantsTypes[] = [
  {
    id: 1,
    name: 'RestoBar Restaurant',
    image:
      'https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=',
    ratings: 4.7,
  },
  {
    id: 2,
    name: 'SeaShell Restaurant',
    image:
      'https://media.istockphoto.com/id/1343182422/photo/empty-rustic-design-restaurant-with-wooden-furniture-and-some-decorative-plants.jpg?s=612x612&w=0&k=20&c=NxyQLdiqVJrMQOfwCgnXGlxW9cXKa1Uk11xqfSaVPs8=',
    ratings: 4.0,
  },
  {
    id: 3,
    name: 'PamShore Restaurant',
    image:
      'https://plus.unsplash.com/premium_photo-1661883237884-263e8de8869b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudHxlbnwwfHwwfHx8MA%3D%3D',
    ratings: 4.9,
  },
];

export const data: CategoriesTypes[] = [
  {
    id: '1',
    name: 'Pizza',
    image:
      'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
    price: 70,
  },
  {
    id: '2',
    name: 'Bugger',
    image:
      'https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=',
    price: 50,
  },
  {
    id: '3',
    name: 'Sandwich',
    image:
      'https://media.istockphoto.com/id/1397193477/photo/club-sandwich-made-with-bacon-ham-turkey-cheese-lettuce-and-tomato.jpg?s=612x612&w=0&k=20&c=fjNyxTEA0L88bqENs8_SKMnfAOyWlNPGxLIxz9nsSss=',
    price: 100,
  },
  {
    id: '4',
    name: 'Coffee',
    image:
      'https://media.istockphoto.com/id/1426308134/photo/south-indian-filter-coffee-served-in-a-traditional-tumbler-or-cup-over-roasted-raw-beans.jpg?s=612x612&w=0&k=20&c=0_pG57x7SK2y8hEBpcMvUrmBLtkwwWfdKDD4p4BZqhk=',
    price: 20,
  },
];

export const ItemData = [
  {
    id: '1',
    name: 'Pizza',
    image:
      'https://media.istockphoto.com/id/1442417585/photo/person-getting-a-piece-of-cheesy-pepperoni-pizza.jpg?s=612x612&w=0&k=20&c=k60TjxKIOIxJpd4F4yLMVjsniB4W1BpEV4Mi_nb4uJU=',
    price: 70,
    description:
      'A classic Italian delight with a crispy golden crust, topped with tangy tomato sauce, gooey melted mozzarella, and a generous layer of perfectly spiced pepperoni slices. Every bite bursts with the authentic flavors of your favorite comfort food.',
    ratings: 4.5,
    delivery: 'Free',
    time: 10,
  },
  {
    id: '2',
    name: 'Bugger',
    image:
      'https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=',
    price: 50,
    description:
      'A juicy and succulent cheeseburger featuring a perfectly grilled beef patty, fresh lettuce, crisp onions, ripe tomatoes, and a slice of melted cheddar cheese, all sandwiched between a soft sesame seed bun. The ultimate indulgence for burger lovers.',
    ratings: 4.0,
    delivery: 'Free',
    time: 15,
  },
  {
    id: '3',
    name: 'Sandwich',
    image:
      'https://media.istockphoto.com/id/1397193477/photo/club-sandwich-made-with-bacon-ham-turkey-cheese-lettuce-and-tomato.jpg?s=612x612&w=0&k=20&c=fjNyxTEA0L88bqENs8_SKMnfAOyWlNPGxLIxz9nsSss=',
    price: 100,
    description:
      'A triple-decker club sandwich stacked with layers of crispy bacon, tender slices of ham and turkey, creamy mayonnaise, crunchy lettuce, juicy tomato slices, and perfectly toasted bread. A wholesome and filling option to power your day.',
    ratings: 4.9,
    delivery: 'Free',
    time: 30,
  },
  {
    id: '4',
    name: 'Coffee',
    image:
      'https://media.istockphoto.com/id/1426308134/photo/south-indian-filter-coffee-served-in-a-traditional-tumbler-or-cup-over-roasted-raw-beans.jpg?s=612x612&w=0&k=20&c=0_pG57x7SK2y8hEBpcMvUrmBLtkwwWfdKDD4p4BZqhk=',
    price: 20,
    description:
      'Aromatic and rich South Indian filter coffee, prepared with freshly roasted coffee beans and a touch of frothy milk. Served in a traditional tumbler, this coffee delivers a bold and robust flavor with an invigorating aroma that awakens your senses.',
    ratings: 4.0,
    delivery: 'Free',
    time: 15,
  },
];
