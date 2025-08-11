import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  services: [
    // Plumbing
    {
      name: 'Ahmed Plumbing',
      price: 100,
      categoryId: 1,
      serviceId: 1,
      description:
        'Ahmed has plumbing experience of 10 years handling residential and commercial issues.',
      rating: 3,
    },
    {
      name: 'City Pipe Fix',
      price: 80,
      categoryId: 1,
      serviceId: 2,
      description:
        'Experienced plumbers specializing in pipe leak repairs and bathroom fittings.',
      rating: 4,
    },
    {
      name: 'QuickFix Plumbing',
      price: 120,
      categoryId: 1,
      serviceId: 3,
      description:
        '24/7 emergency plumbing services with a satisfaction guarantee.',
      rating: 5,
    },

    // Mechanic
    {
      name: 'Joe’s Auto Repair',
      price: 150,
      categoryId: 2,
      serviceId: 4,
      description:
        'Certified mechanic offering general vehicle maintenance and engine diagnostics.',
      rating: 4,
    },
    {
      name: 'SpeedyFix Garage',
      price: 130,
      categoryId: 2,
      serviceId: 5,
      description: 'Fast turnaround service for brake, tire, and oil issues.',
      rating: 5,
    },
    {
      name: 'MotorAid Mobile',
      price: 180,
      categoryId: 2,
      serviceId: 6,
      description:
        'Mobile mechanic coming to your location. Specializes in battery and starter issues.',
      rating: 3,
    },

    // Babysitter
    {
      name: 'Mary Babysits',
      price: 60,
      categoryId: 3,
      serviceId: 7,
      description:
        'CPR certified babysitter with 5 years of experience caring for toddlers.',
      rating: 5,
    },
    {
      name: 'Little Angels Care',
      price: 50,
      categoryId: 3,
      serviceId: 8,
      description: 'Fun, safe, and engaging babysitting for kids aged 2–8.',
      rating: 4,
    },
    {
      name: 'Nanny Pro Services',
      price: 70,
      categoryId: 3,
      serviceId: 9,
      description:
        'Professional babysitting with educational play activities and homework help.',
      rating: 5,
    },

    // Electrician
    {
      name: 'Bright Spark Electrics',
      price: 100,
      categoryId: 4,
      serviceId: 10,
      description:
        'Licensed electrician handling wiring, sockets, and lighting installations.',
      rating: 4,
    },
    {
      name: 'PowerFix Solutions',
      price: 120,
      categoryId: 4,
      serviceId: 11,
      description:
        'Expert in home electrical diagnostics and fuse box replacements.',
      rating: 3,
    },
    {
      name: 'Volt Wizard',
      price: 110,
      categoryId: 4,
      serviceId: 12,
      description:
        '24/7 electrical repairs with quality workmanship and safety assurance.',
      rating: 5,
    },

    // Moving
    {
      name: 'EasyMove Services',
      price: 200,
      categoryId: 5,
      serviceId: 13,
      description:
        'Reliable moving service for homes and offices. Includes packing and unpacking.',
      rating: 5,
    },
    {
      name: 'QuickRelocate',
      price: 180,
      categoryId: 5,
      serviceId: 14,
      description: 'Affordable and fast moving services across the city.',
      rating: 4,
    },
    {
      name: 'Careful Movers',
      price: 220,
      categoryId: 5,
      serviceId: 15,
      description: 'Safe and careful handling of furniture and fragile items.',
      rating: 5,
    },

    // Petsitter
    {
      name: 'Paws & Tails Care',
      price: 90,
      categoryId: 6,
      serviceId: 16,
      description:
        'Experienced pet sitter for cats and dogs. Includes walks and playtime.',
      rating: 5,
    },
    {
      name: 'PetPal Sitting',
      price: 80,
      categoryId: 6,
      serviceId: 17,
      description:
        'Daily pet visits with feeding, medication, and updates to owners.',
      rating: 4,
    },
    {
      name: 'Happy Tails Stay',
      price: 95,
      categoryId: 6,
      serviceId: 18,
      description:
        'Pet boarding service with 24/7 supervision and grooming available.',
      rating: 4,
    },

    // Cleaner
    {
      name: 'Sparkle Clean Co.',
      price: 100,
      categoryId: 7,
      serviceId: 19,
      description:
        'Deep cleaning for apartments and offices with eco-friendly products.',
      rating: 5,
    },
    {
      name: 'Fresh Space Cleaners',
      price: 85,
      categoryId: 7,
      serviceId: 20,
      description:
        'Weekly or one-time cleaning services. Trusted by over 300 homes.',
      rating: 4,
    },
    {
      name: 'MaidPro Solutions',
      price: 90,
      categoryId: 7,
      serviceId: 21,
      description: 'Custom cleaning plans tailored to your space and needs.',
      rating: 3,
    },

    // Towing
    {
      name: 'RoadHero Towing',
      price: 150,
      categoryId: 8,
      serviceId: 22,
      description: 'Emergency vehicle towing 24/7. Covers entire city region.',
      rating: 5,
    },
    {
      name: 'FastTow Services',
      price: 140,
      categoryId: 8,
      serviceId: 23,
      description: 'Quick response towing and roadside assistance.',
      rating: 4,
    },
    {
      name: 'Secure Haul',
      price: 160,
      categoryId: 8,
      serviceId: 24,
      description: 'Safe and insured towing service for motorcycles and cars.',
      rating: 4,
    },

    // Painter
    {
      name: 'ProWall Painters',
      price: 110,
      categoryId: 9,
      serviceId: 25,
      description:
        'Experienced painting crew for residential and office interiors.',
      rating: 4,
    },
    {
      name: 'ColorCraze',
      price: 100,
      categoryId: 9,
      serviceId: 26,
      description:
        'Color consultations and precise wall painting with premium paints.',
      rating: 5,
    },
    {
      name: 'SmoothStrokes',
      price: 115,
      categoryId: 9,
      serviceId: 27,
      description:
        'Professional wall preparation and finish with minimal mess.',
      rating: 3,
    },

    // Graphic Designer
    {
      name: 'PixelCraft Studio',
      price: 200,
      categoryId: 10,
      serviceId: 28,
      description:
        'Logo, branding, and digital art creation tailored to your brand.',
      rating: 5,
    },
    {
      name: 'Visual Vibe Design',
      price: 180,
      categoryId: 10,
      serviceId: 29,
      description:
        'Freelance designer offering clean UI/UX and creative illustrations.',
      rating: 4,
    },
    {
      name: 'DesignNest',
      price: 170,
      categoryId: 10,
      serviceId: 30,
      description: 'Fast turnaround designs for social media and marketing.',
      rating: 4,
    },

    // Developer
    {
      name: 'CodeSmith',
      price: 300,
      categoryId: 11,
      serviceId: 31,
      description:
        'Full-stack developer specializing in React Native and Node.js.',
      rating: 5,
    },
    {
      name: 'DevLink Solutions',
      price: 280,
      categoryId: 11,
      serviceId: 32,
      description:
        'Web and mobile app development for startups and businesses.',
      rating: 4,
    },
    {
      name: 'BitWise Studio',
      price: 320,
      categoryId: 11,
      serviceId: 33,
      description:
        'Experienced software engineer with 8 years building custom platforms.',
      rating: 5,
    },

    // Aircond Service
    {
      name: 'CoolZone Services',
      price: 150,
      categoryId: 12,
      serviceId: 34,
      description:
        'AC cleaning, gas refill, and installation by certified technicians.',
      rating: 4,
    },
    {
      name: 'ChillPro Maintenance',
      price: 140,
      categoryId: 12,
      serviceId: 35,
      description: 'Fast and affordable AC repairs with 3-month warranty.',
      rating: 5,
    },
    {
      name: 'FrostFix',
      price: 160,
      categoryId: 12,
      serviceId: 36,
      description:
        'All-in-one air conditioning service including inspection and parts replacement.',
      rating: 3,
    },
  ],
  currentService: [],
};

const ServiceSlice = createSlice({
  name: 'service',
  initialState: initialState,
  reducers: {
    getCurrentService: (state, action) => {
      state.currentService = state.services.filter(
        value => action.payload === value.categoryId,
      );
    },
  },
});

export const { getCurrentService } = ServiceSlice.actions;
export default ServiceSlice.reducer;
