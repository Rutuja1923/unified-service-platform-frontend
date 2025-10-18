// data.js
export const serviceData = {
  1: {
    name: "Home Maintenance",
    desc: "Professional maintenance services including plumbing, electrical, and painting.",
    providers: [
      {
        id: 1,
        name: "Rajesh Kumar",
        location: "Bangalore",
        cost: "₹500 - ₹1200",
        rating: 4.8,
        completed: 245,
        verified: true,
        image: "https://randomuser.me/api/portraits/men/32.jpg",
        details: {
          startingPrice: "₹199",
          packages: [
            { type: "1 switch", rating: 4.82, reviews: "15K", price: "₹99" },
            { type: "2 switches", rating: 4.83, reviews: "6K", price: "₹149" },
            { type: "More than 2 switches", rating: 4.81, reviews: "11K", price: "₹179" },
            { type: "AC switchboard", rating: 4.82, reviews: "2K", price: "₹249" },
          ],
          process: [
            "Inspection",
            "Quote approval",
            "Repair & spare parts",
            "Replacement if needed",
            "Warranty activation",
          ],
          reviews: [
            { user: "Akshita Arora", date: "Oct 12, 2025", rating: 5, comment: "Professional and patient service." },
            { user: "Aniruddha Chatterjee", date: "Oct 12, 2025", rating: 5, comment: "Quick issue identification and affordable spare parts." },
          ],
        },
      },
      {
        id: 2,
        name: "Sneha Patil",
        location: "Pune",
        cost: "₹600 - ₹1500",
        rating: 4.6,
        completed: 198,
        verified: true,
        image: "https://randomuser.me/api/portraits/women/45.jpg",
        details: {
          startingPrice: "₹249",
          packages: [
            { type: "1 switch", rating: 4.8, reviews: "10K", price: "₹119" },
            { type: "2 switches", rating: 4.79, reviews: "5K", price: "₹159" },
          ],
          process: [
            "Inspection",
            "Quote approval",
            "Repair",
            "Warranty activation",
          ],
          reviews: [
            { user: "Deepa", date: "Oct 13, 2025", rating: 5, comment: "Polite and professional." },
            { user: "Ankit", date: "Oct 13, 2025", rating: 5, comment: "Explains every step clearly." },
          ],
        },
      },
      {
        id: 3,
        name: "Amit Sharma",
        location: "Mumbai",
        cost: "₹550 - ₹1300",
        rating: 4.7,
        completed: 210,
        verified: true,
        image: "https://randomuser.me/api/portraits/men/65.jpg",
        details: {
          startingPrice: "₹219",
          packages: [
            { type: "1 switch", rating: 4.75, reviews: "8K", price: "₹109" },
            { type: "2 switches", rating: 4.78, reviews: "4K", price: "₹159" },
          ],
          process: ["Inspection", "Quote approval", "Repair & replacement if needed", "Warranty activation"],
          reviews: [
            { user: "Rohit", date: "Oct 14, 2025", rating: 5, comment: "Quick and professional service." },
          ],
        },
      },
      {
        id: 4,
        name: "Neha Singh",
        location: "Delhi",
        cost: "₹600 - ₹1400",
        rating: 4.5,
        completed: 190,
        verified: false,
        image: "https://randomuser.me/api/portraits/women/55.jpg",
        details: {
          startingPrice: "₹229",
          packages: [
            { type: "1 switch", rating: 4.7, reviews: "7K", price: "₹119" },
            { type: "2 switches", rating: 4.69, reviews: "3K", price: "₹159" },
          ],
          process: ["Inspection", "Quote approval", "Repair", "Warranty activation"],
          reviews: [
            { user: "Meera", date: "Oct 14, 2025", rating: 5, comment: "Good service and polite staff." },
          ],
        },
      },
      {
        id: 5,
        name: "Vikram Joshi",
        location: "Chennai",
        cost: "₹500 - ₹1250",
        rating: 4.4,
        completed: 175,
        verified: true,
        image: "https://randomuser.me/api/portraits/men/72.jpg",
        details: {
          startingPrice: "₹209",
          packages: [
            { type: "1 switch", rating: 4.65, reviews: "6K", price: "₹99" },
            { type: "2 switches", rating: 4.67, reviews: "2K", price: "₹149" },
          ],
          process: ["Inspection", "Quote approval", "Repair & parts replacement", "Warranty activation"],
          reviews: [
            { user: "Karan", date: "Oct 15, 2025", rating: 5, comment: "Highly recommend this professional." },
          ],
        },
      },
      {
        id: 6,
        name: "Priya Reddy",
        location: "Hyderabad",
        cost: "₹550 - ₹1350",
        rating: 4.6,
        completed: 200,
        verified: true,
        image: "https://randomuser.me/api/portraits/women/66.jpg",
        details: {
          startingPrice: "₹219",
          packages: [
            { type: "1 switch", rating: 4.7, reviews: "7K", price: "₹109" },
            { type: "2 switches", rating: 4.72, reviews: "3K", price: "₹159" },
          ],
          process: ["Inspection", "Quote approval", "Repair", "Warranty activation"],
          reviews: [
            { user: "Sanya", date: "Oct 15, 2025", rating: 5, comment: "Very satisfied with the service." },
          ],
        },
      },
    ],
  },

  2: {
    name: "Electrician",
    desc: "Installation, repair, and maintenance of electrical systems.",
    providers: [
      {
        id: 7,
        name: "Manish Verma",
        location: "Bangalore",
        cost: "₹800 - ₹1500",
        rating: 4.7,
        completed: 210,
        verified: true,
        image: "https://randomuser.me/api/portraits/men/12.jpg",
        details: {
          startingPrice: "₹250",
          packages: [
            { type: "Fan Installation", rating: 4.8, reviews: "5K", price: "₹199" },
            { type: "Light Repair", rating: 4.7, reviews: "3K", price: "₹149" },
          ],
          process: ["Inspection", "Quote approval", "Repair", "Warranty activation"],
          reviews: [
            { user: "Rahul", date: "Oct 16, 2025", rating: 5, comment: "Great electrician, quick work." },
          ],
        },
      },
      {
        id: 8,
        name: "Sonal Gupta",
        location: "Delhi",
        cost: "₹850 - ₹1550",
        rating: 4.6,
        completed: 198,
        verified: true,
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        details: {
          startingPrice: "₹259",
          packages: [
            { type: "Fan Installation", rating: 4.6, reviews: "4K", price: "₹199" },
            { type: "Light Repair", rating: 4.7, reviews: "2K", price: "₹149" },
          ],
          process: ["Inspection", "Repair", "Warranty activation"],
          reviews: [
            { user: "Meena", date: "Oct 16, 2025", rating: 5, comment: "Polite and skilled." },
          ],
        },
      },
      {
        id: 9,
        name: "Rohit Singh",
        location: "Mumbai",
        cost: "₹800 - ₹1600",
        rating: 4.5,
        completed: 190,
        verified: false,
        image: "https://randomuser.me/api/portraits/men/36.jpg",
        details: {
          startingPrice: "₹270",
          packages: [
            { type: "Fan Installation", rating: 4.5, reviews: "3K", price: "₹199" },
            { type: "Light Repair", rating: 4.4, reviews: "2K", price: "₹149" },
          ],
          process: ["Inspection", "Repair", "Warranty activation"],
          reviews: [
            { user: "Amit", date: "Oct 16, 2025", rating: 5, comment: "Good work, friendly." },
          ],
        },
      },
      {
        id: 10,
        name: "Anita Sharma",
        location: "Chennai",
        cost: "₹850 - ₹1500",
        rating: 4.7,
        completed: 205,
        verified: true,
        image: "https://randomuser.me/api/portraits/women/33.jpg",
        details: {
          startingPrice: "₹265",
          packages: [
            { type: "Fan Installation", rating: 4.8, reviews: "5K", price: "₹199" },
            { type: "Light Repair", rating: 4.7, reviews: "3K", price: "₹149" },
          ],
          process: ["Inspection", "Repair", "Warranty activation"],
          reviews: [
            { user: "Pooja", date: "Oct 16, 2025", rating: 5, comment: "Very professional." },
          ],
        },
      },
      {
        id: 11,
        name: "Vikas Reddy",
        location: "Hyderabad",
        cost: "₹800 - ₹1550",
        rating: 4.6,
        completed: 198,
        verified: true,
        image: "https://randomuser.me/api/portraits/men/44.jpg",
        details: {
          startingPrice: "₹259",
          packages: [
            { type: "Fan Installation", rating: 4.6, reviews: "4K", price: "₹199" },
            { type: "Light Repair", rating: 4.7, reviews: "2K", price: "₹149" },
          ],
          process: ["Inspection", "Repair", "Warranty activation"],
          reviews: [
            { user: "Suresh", date: "Oct 16, 2025", rating: 5, comment: "Prompt and professional." },
          ],
        },
      },
      {
        id: 12,
        name: "Neha Rani",
        location: "Kolkata",
        cost: "₹820 - ₹1580",
        rating: 4.5,
        completed: 185,
        verified: false,
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        details: {
          startingPrice: "₹269",
          packages: [
            { type: "Fan Installation", rating: 4.5, reviews: "3K", price: "₹199" },
            { type: "Light Repair", rating: 4.4, reviews: "2K", price: "₹149" },
          ],
          process: ["Inspection", "Repair", "Warranty activation"],
          reviews: [
            { user: "Rekha", date: "Oct 16, 2025", rating: 5, comment: "Good service." },
          ],
        },
      },
    ],
  },

  // Similar structure will continue for HVAC, Cleaning, Painting, and Carpenter sections
};
