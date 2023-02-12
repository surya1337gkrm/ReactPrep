import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import food from './static/food.png';

const Title = () => (
  <a href='/'>
    <img src={food} alt='food logo' />
  </a>
);
const HeaderComponent = () => {
  return (
    <div className='header'>
      <Title />
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const restaurantList = [
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '98587',
      name: 'Sri Sai Fast Foods',
      uuid: '431094c0-0bf2-4807-b37b-ca0fb04a8715',
      city: '69',
      area: 'Khadi Colony',
      totalRatingsString: '1000+ ratings',
      cloudinaryImageId: 'stoha2ibifkd84slslpw',
      cuisines: ['South Indian', 'North Indian'],
      tags: [],
      costForTwo: 10000,
      costForTwoString: '₹100 FOR TWO',
      deliveryTime: 18,
      minDeliveryTime: 18,
      maxDeliveryTime: 18,
      slaString: '18 MINS',
      lastMileTravel: 3.9000000953674316,
      slugs: {
        restaurant: 'sri-sai-fast-foods-kt-road-korlagunta',
        city: 'tirupati',
      },
      cityState: '69',
      address:
        '6-1, 70 A, KT Rd, Srinivasa Nagar, Varadaraj Nagar, Tirupati, Andhra Pradesh 517501, India',
      locality: 'K T Road',
      parentId: 14024,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '30% off',
        shortDescriptionList: [
          {
            meta: '30% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '30% off up to ₹75 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '30% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '30% off up to ₹75 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5832620~p=1~eid=00000186-43d8-a25d-3286-034000230157',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '3.9 kms',
      hasSurge: false,
      sla: {
        restaurantId: '98587',
        deliveryTime: 18,
        minDeliveryTime: 18,
        maxDeliveryTime: 18,
        lastMileTravel: 3.9000000953674316,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '3.7',
      totalRatings: 1000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '218280',
      name: "Sakhi Tiffin's",
      uuid: '2bb83450-ae1b-40ab-89e4-f6492473cf1a',
      city: '69',
      area: 'Royal Nagar',
      totalRatingsString: '5000+ ratings',
      cloudinaryImageId: 'ndw1xehee8dyt2b4xk54',
      cuisines: ['South Indian', 'North Indian'],
      tags: [],
      costForTwo: 15000,
      costForTwoString: '₹150 FOR TWO',
      deliveryTime: 14,
      minDeliveryTime: 14,
      maxDeliveryTime: 14,
      slaString: '14 MINS',
      lastMileTravel: 0.800000011920929,
      slugs: {
        restaurant: "sakhi-tiffin's-korlagunta-korlagunta",
        city: 'tirupati',
      },
      cityState: '69',
      address:
        'AIR Bypass Road,Next to Chillies Restaurant, STV Nagar, Bairagi patteda, Tirupati, Andhra Pradesh 517501',
      locality: 'Air By Pass Road',
      parentId: 14055,
      unserviceable: false,
      veg: true,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.8 kms',
      hasSurge: false,
      sla: {
        restaurantId: '218280',
        deliveryTime: 14,
        minDeliveryTime: 14,
        maxDeliveryTime: 14,
        lastMileTravel: 0.800000011920929,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.8',
      totalRatings: 5000,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '607702',
      name: 'Pulse Grameena Biryani',
      uuid: '446ce330-ae30-451a-9bee-4d46cb0bed3a',
      city: '69',
      area: 'Tata Nagar',
      totalRatingsString: '500+ ratings',
      cloudinaryImageId: 'w7fktuea0z4p0duehcg4',
      cuisines: ['Biryani', 'North Indian', 'Seafood'],
      tags: [],
      costForTwo: 30000,
      costForTwoString: '₹300 FOR TWO',
      deliveryTime: 15,
      minDeliveryTime: 15,
      maxDeliveryTime: 15,
      slaString: '15 MINS',
      lastMileTravel: 0.30000001192092896,
      slugs: {
        restaurant: 'pulse-grameena-biryani-tata-nagar-tata-nagar',
        city: 'tirupati',
      },
      cityState: '69',
      address:
        '19,Kesavayangunta ,Raghavendra Nagar, Near SGS College ,Tirupati',
      locality: 'Konkachennaiahgunta',
      parentId: 361582,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: '60% off',
        shortDescriptionList: [
          {
            meta: '60% off | Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '60% OFF',
        shortDescriptionList: [
          {
            meta: 'Use TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: '60% off up to ₹120 | Use code TRYNEW',
            discountType: 'Percentage',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: '',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '0.3 kms',
      hasSurge: false,
      sla: {
        restaurantId: '607702',
        deliveryTime: 15,
        minDeliveryTime: 15,
        maxDeliveryTime: 15,
        lastMileTravel: 0.30000001192092896,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: false,
      avgRating: '3.5',
      totalRatings: 500,
      new: false,
    },
    subtype: 'basic',
  },
  {
    type: 'restaurant',
    data: {
      type: 'F',
      id: '650507',
      name: 'Fb Cakes',
      uuid: '56c41582-3029-488a-ac94-5b4507e09429',
      city: '69',
      area: 'Korlagunta',
      totalRatingsString: 'Too Few Ratings',
      cloudinaryImageId: 'a53bdeed939ae720286d75b1428916dd',
      cuisines: ['Bakery', 'Sweets', 'Snacks'],
      tags: [],
      costForTwo: 150000,
      costForTwoString: '₹1500 FOR TWO',
      deliveryTime: 24,
      minDeliveryTime: 24,
      maxDeliveryTime: 24,
      slaString: '24 MINS',
      lastMileTravel: 2.9000000953674316,
      slugs: {
        restaurant: 'fb-cakes-korlagunta-korlagunta',
        city: 'tirupati',
      },
      cityState: '69',
      address:
        'D.NO:18-2-299 / A1,GROUND & 1ST FLOOR,ASHOK NAGAR,TIRUPATI,ANDHRA PRADESH-517501, Tirupati (Rural), Tirupathi, Andhra Pradesh-517501',
      locality: 'Ashok Nagar',
      parentId: 245423,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: 'Flat ₹125 off',
        shortDescriptionList: [
          {
            meta: 'Flat ₹125 off on orders above ₹199',
            discountType: 'Flat',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: 'Flat ₹125 off on orders above ₹199 | Use code FLAT125',
            discountType: 'Flat',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      aggregatedDiscountInfoV2: {
        header: '₹125 OFF',
        shortDescriptionList: [
          {
            meta: 'Use SWIGGYWEEKENDS',
            discountType: 'Flat',
            operationType: 'RESTAURANT',
          },
        ],
        descriptionList: [
          {
            meta: 'Flat ₹125 off on orders above ₹199 | Use code FLAT125',
            discountType: 'Flat',
            operationType: 'RESTAURANT',
          },
        ],
        subHeader: '',
        headerType: 0,
        superFreedel: '',
      },
      ribbon: [
        {
          type: 'PROMOTED',
        },
      ],
      chain: [],
      feeDetails: {
        fees: [
          {
            name: 'distance',
            fee: 2100,
            message: '',
          },
          {
            name: 'time',
            fee: 0,
            message: '',
          },
          {
            name: 'special',
            fee: 0,
            message: '',
          },
        ],
        totalFees: 2100,
        message: '',
        title: 'Delivery Charge',
        amount: '2100',
        icon: '',
      },
      availability: {
        opened: true,
        nextOpenMessage: '',
        nextCloseMessage: '',
      },
      longDistanceEnabled: 0,
      rainMode: 'NONE',
      thirdPartyAddress: false,
      thirdPartyVendor: '',
      adTrackingID: 'cid=5839507~p=4~eid=00000186-43d8-a25d-3286-034100230446',
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: '2.9 kms',
      hasSurge: false,
      sla: {
        restaurantId: '650507',
        deliveryTime: 24,
        minDeliveryTime: 24,
        maxDeliveryTime: 24,
        lastMileTravel: 2.9000000953674316,
        lastMileDistance: 0,
        serviceability: 'SERVICEABLE',
        rainMode: 'NONE',
        longDistance: 'NOT_LONG_DISTANCE',
        preferentialService: false,
        iconType: 'EMPTY',
      },
      promoted: true,
      avgRating: '--',
      totalRatings: 0,
      new: false,
    },
    subtype: 'basic',
  },
];

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  lastMileTravelString,
}) => {
  return (
    <div className='card'>
      <img
        src={
          'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/' +
          cloudinaryImageId
        }
        alt={name}
      />
      <h2>{name}</h2>
      <h3>{cuisines.join(', ')}</h3>
      <h4>{avgRating}</h4>
      <small>{lastMileTravelString}</small>
    </div>
  );
};

const Body = () => {
  return (
    <div className='restaurant-list'>
      {/* <RestaurantCard {...restaurantList[0].data} />
      <RestaurantCard {...restaurantList[1].data} />
      <RestaurantCard {...restaurantList[2].data} />
      <RestaurantCard {...restaurantList[3].data} /> */}
      {/* instead of writing same code multiple times, we can use map to iterate through the data */}
      {restaurantList.map((restaurant) => (
        <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
      ))}
    </div>
  );
};
const Footer = () => {
  return <footer>Footer</footer>;
};

const AppLayout = () => {
  return (
    <>
      <HeaderComponent />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<AppLayout />);
