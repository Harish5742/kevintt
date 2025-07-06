import { useParams, Link } from 'react-router-dom';
import { MapPin, Clock, Users, CheckCircle, X, Car, MessageCircle } from 'lucide-react';

const PackageDetailPage = () => {
  const { id } = useParams();
  
  const whatsappNumber = "9159661123";
  const getWhatsAppMessage = (packageName: string) => 
    `Hi! I'm interested in the ${packageName} package. Can you provide more details?`;
  
  const handleWhatsAppClick = (packageName: string) => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(getWhatsAppMessage(packageName))}`;
    window.open(url, '_blank');
  };

  // Mock data - in a real app this would come from an API
  const packageDetails: { [key: string]: any } = {
    "1": {
      name: "Ooty Hill Station Special",
      duration: "3 Days 2 Nights",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Experience the charm of Ooty with this comprehensive 3-day tour covering all major attractions and scenic spots.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival & Local Sightseeing",
          activities: [
            "Doddabetta peak",
            "Tea factory & Tea Museum",
            "Visit Botanical Gardens",
            "Ooty Lake boating",
            "Rose Garden",
            "Thunder World",
            "Shopping at Charing Cross"
          ]
        },
        {
          day: "Day 2", 
          title: "Doddabetta & Coonoor",
          activities: [
            "Valley view point",
            "Toy Train ride experience",
            "Visit to Tea Gardens",
            "Sim's Park in Coonoor",
            "Return to Ooty",
            "Overnight stay"
          ]
        },
        {
          day: "Day 3",
          title: "Departure",
          activities: [
            "Visit Rose Garden",
            "Shopping at local markets",
            "Check-out from hotel",
            "Drop-off at your location"
          ]
        }
      ],
      inclusions: [
        "Transportation from pickup location to Ooty and back",
        "2 nights accommodation in 3-star hotel",
        "Daily breakfast",
        "All local sightseeing by private vehicle",
        "Toy train tickets",
        "Professional driver cum guide"
      ],
      exclusions: [
        "Entry tickets to monuments and parks",
        "Lunch and dinner",
        "Personal expenses",
        "Travel insurance",
        "Tips and gratuities"
      ]
    },
    "2": {
      name: "Ooty-Coonoor Combo",
      duration: "4 Days 3 Nights",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Explore both Ooty and Coonoor in this extended tour that covers the best of Nilgiri Hills.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Ooty",
          activities: [
            "Pickup from your location",
            "Travel to Ooty",
            "Check-in to hotel",
            "Visit Botanical Gardens",
            "Ooty Lake activities",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 2",
          title: "Ooty Sightseeing",
          activities: [
            "Doddabetta Peak visit",
            "Rose Garden exploration",
            "Thread Garden visit",
            "Local shopping",
            "Tea Museum",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 3",
          title: "Coonoor Exploration",
          activities: [
            "Travel to Coonoor",
            "Check-in to Coonoor hotel",
            "Sim's Park visit",
            "Lamb's Rock viewpoint",
            "Tea estate tour",
            "Overnight in Coonoor"
          ]
        },
        {
          day: "Day 4",
          title: "Departure",
          activities: [
            "Dolphin's Nose viewpoint",
            "Wellington visit",
            "Check-out and departure",
            "Drop-off at your location"
          ]
        }
      ],
      inclusions: [
        "Transportation throughout the tour",
        "3 nights accommodation (2 in Ooty, 1 in Coonoor)",
        "Daily breakfast",
        "All sightseeing by private vehicle",
        "Toy train experience",
        "Professional guide services"
      ],
      exclusions: [
        "Monument entry fees",
        "Meals other than breakfast",
        "Personal shopping",
        "Travel insurance",
        "Camera fees at attractions"
      ]
    },
    "3": {
      name: "Family Adventure Package",
      duration: "5 Days 4 Nights",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Perfect family getaway with activities suitable for all age groups, combining adventure with sightseeing.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival & Family Fun",
          activities: [
            "Pickup from your location",
            "Travel to Ooty with scenic stops",
            "Check-in to family-friendly hotel",
            "Visit Children's Park",
            "Ooty Lake paddle boating",
            "Evening at local market",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 2",
          title: "Adventure Activities",
          activities: [
            "Morning trekking at Doddabetta",
            "Adventure sports at Thunder World",
            "Visit Wax World Museum",
            "Chocolate making workshop",
            "Horse riding experience",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 3",
          title: "Nature & Culture",
          activities: [
            "Early morning nature walk",
            "Visit Tribal Research Center",
            "Tea factory tour with tasting",
            "Botanical Gardens exploration",
            "Stone House visit",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 4",
          title: "Coonoor Adventure",
          activities: [
            "Travel to Coonoor via Toy Train",
            "Trekking at Sim's Park",
            "Visit Highfield Tea Factory",
            "Lamb's Rock adventure activities",
            "Return to Ooty",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 5",
          title: "Shopping & Departure",
          activities: [
            "Visit local handicraft centers",
            "Shopping for souvenirs",
            "Final sightseeing",
            "Check-out and departure",
            "Drop-off at your location"
          ]
        }
      ],
      inclusions: [
        "Transportation throughout the tour",
        "4 nights accommodation in family rooms",
        "Daily breakfast and dinner",
        "All adventure activity charges",
        "Toy train tickets for family",
        "Professional family guide",
        "First aid kit and safety equipment"
      ],
      exclusions: [
        "Lunch and snacks",
        "Personal adventure gear",
        "Travel insurance",
        "Extra activities not mentioned",
        "Personal expenses and shopping"
      ]
    },
    "4": {
      name: "Romantic Ooty Getaway",
      duration: "3 Days 2 Nights",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Romantic escape amidst the serene hills perfect for couples seeking intimate moments.",
      itinerary: [
        {
          day: "Day 1",
          title: "Romantic Arrival",
          activities: [
            "Pickup from your location",
            "Romantic journey to Ooty with scenic stops",
            "Check-in to romantic resort/hotel",
            "Welcome drink and room decoration",
            "Private sunset viewing at Doddabetta",
            "Candlelight dinner at hotel",
            "Overnight in romantic suite"
          ]
        },
        {
          day: "Day 2",
          title: "Love in the Hills",
          activities: [
            "Private breakfast in room",
            "Couple's visit to Rose Garden",
            "Romantic boat ride at Ooty Lake",
            "Private tea garden walk",
            "Couple's spa session",
            "Romantic dinner with live music",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 3",
          title: "Memorable Farewell",
          activities: [
            "Lazy breakfast together",
            "Shopping for couple souvenirs",
            "Visit to Thread Garden",
            "Final romantic moments at viewpoint",
            "Check-out and departure",
            "Drop-off at your location"
          ]
        }
      ],
      inclusions: [
        "Private transportation for couple",
        "2 nights in romantic accommodation",
        "All meals with special romantic arrangements",
        "Couple's spa session",
        "Room decoration with flowers",
        "Private guide services",
        "Romantic dinner setups"
      ],
      exclusions: [
        "Alcoholic beverages",
        "Additional spa treatments",
        "Personal shopping",
        "Photography services",
        "Travel insurance"
      ]
    },
    "5": {
      name: "Ooty Photography Tour",
      duration: "4 Days 3 Nights",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Capture the beauty of Ooty with guided photography sessions at the most photogenic locations.",
      itinerary: [
        {
          day: "Day 1",
          title: "Golden Hour Arrival",
          activities: [
            "Pickup from your location",
            "Travel to Ooty with photo stops",
            "Check-in to photographer-friendly hotel",
            "Equipment check and briefing",
            "Sunset photography at Doddabetta Peak",
            "Photo review and editing session",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 2",
          title: "Landscape Photography",
          activities: [
            "Early morning sunrise shoot at Elk Hill",
            "Tea plantation photography",
            "Botanical Gardens macro photography",
            "Afternoon light at Rose Garden",
            "Blue hour photography at Ooty Lake",
            "Night photography techniques",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 3",
          title: "Cultural & Nature Shots",
          activities: [
            "Morning mist photography",
            "Local people and culture photography",
            "Toy Train action shots",
            "Wildlife photography at nearby forests",
            "Architecture photography in Coonoor",
            "Golden hour at viewpoints",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 4",
          title: "Final Shots & Departure",
          activities: [
            "Last minute creative shots",
            "Photo selection and editing workshop",
            "Creating photo stories",
            "Printing best photographs",
            "Check-out and departure",
            "Drop-off at your location"
          ]
        }
      ],
      inclusions: [
        "Transportation to all photo locations",
        "3 nights accommodation",
        "Daily breakfast and lunch",
        "Professional photography guide",
        "Basic photography equipment rental",
        "Photo editing software access",
        "Printed photo album"
      ],
      exclusions: [
        "Professional camera equipment",
        "Memory cards and batteries",
        "Dinner meals",
        "Additional photo printing",
        "Personal photography gear"
      ]
    },
    "6": {
      name: "Extended Nilgiri Tour",
      duration: "6 Days 5 Nights",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      description: "Comprehensive tour covering Ooty, Coonoor, and Kotagiri with cultural sites and adventure activities.",
      itinerary: [
        {
          day: "Day 1",
          title: "Arrival in Ooty",
          activities: [
            "Pickup from your location",
            "Scenic journey to Ooty",
            "Check-in to hotel",
            "Local orientation and briefing",
            "Visit Government Rose Garden",
            "Evening at Charring Cross",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 2",
          title: "Ooty Exploration",
          activities: [
            "Early morning at Doddabetta Peak",
            "Botanical Gardens guided tour",
            "Ooty Lake activities",
            "Tea Museum and tasting",
            "Thread Garden visit",
            "Local shopping time",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 3",
          title: "Coonoor Discovery",
          activities: [
            "Travel to Coonoor via Toy Train",
            "Check-in to Coonoor accommodation",
            "Sim's Park exploration",
            "Dolphin's Nose viewpoint",
            "Lamb's Rock trekking",
            "Tea estate tour with lunch",
            "Overnight in Coonoor"
          ]
        },
        {
          day: "Day 4",
          title: "Kotagiri Adventure",
          activities: [
            "Travel to Kotagiri",
            "Check-in to mountain resort",
            "Catherine Falls trekking",
            "Kodanad Viewpoint visit",
            "Elk Falls adventure",
            "Tribal village interaction",
            "Overnight in Kotagiri"
          ]
        },
        {
          day: "Day 5",
          title: "Cultural Immersion",
          activities: [
            "Visit Toda settlements",
            "Traditional craft workshops",
            "Nilgiri honey farm tour",
            "Spice plantation visit",
            "Return to Ooty",
            "Cultural dance performance",
            "Overnight in Ooty"
          ]
        },
        {
          day: "Day 6",
          title: "Final Exploration & Departure",
          activities: [
            "Visit Pykara Lake and Falls",
            "Mudumalai Wildlife Sanctuary",
            "Final shopping and souvenirs",
            "Check-out and departure preparation",
            "Drop-off at your location"
          ]
        }
      ],
      inclusions: [
        "Transportation throughout 6-day tour",
        "5 nights accommodation (mixed locations)",
        "All meals (breakfast, lunch, dinner)",
        "All sightseeing and entry tickets",
        "Toy train tickets",
        "Professional guide for entire tour",
        "Cultural program tickets"
      ],
      exclusions: [
        "Personal expenses and shopping",
        "Alcoholic beverages",
        "Travel insurance",
        "Tips for drivers and guides",
        "Camera fees at some locations"
      ]
    }
  };

  const currentPackage = packageDetails[id || "1"];
  
  if (!currentPackage) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Package not found</h1>
          <Link to="/packages" className="text-green-600 hover:text-green-700">
            Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  const vehicleOptions = [
    { type: "Sedan", capacity: "4 Seater", suitable: "Couples, Small families" },
    { type: "SUV", capacity: "6-7 Seater", suitable: "Families, Groups" },
    { type: "Tempo Traveller", capacity: "12+ Seater", suitable: "Large groups" }
  ];

  const pickupStates = [
    "Tamil Nadu", "Karnataka", "Kerala", "Andhra Pradesh", "Telangana", "Puducherry"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 md:h-96">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${currentPackage.image})` }}
        ></div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-white text-center px-4">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{currentPackage.name}</h1>
            <div className="flex items-center justify-center text-lg">
              <Clock className="h-5 w-5 mr-2" />
              {currentPackage.duration}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Description */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Package</h2>
              <p className="text-gray-600 leading-relaxed">{currentPackage.description}</p>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Day-wise Itinerary</h2>
              <div className="space-y-6">
                {currentPackage.itinerary.map((day: any, index: number) => (
                  <div key={index} className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{day.day}: {day.title}</h3>
                    <ul className="space-y-2">
                      {day.activities.map((activity: string, actIndex: number) => (
                        <li key={actIndex} className="flex items-start">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                          <span className="text-gray-600">{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-green-900 mb-4 flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Inclusions
                </h3>
                <ul className="space-y-2">
                  {currentPackage.inclusions.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-4 w-4 text-green-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                  <X className="h-5 w-5 mr-2" />
                  Exclusions
                </h3>
                <ul className="space-y-2">
                  {currentPackage.exclusions.map((item: string, index: number) => (
                    <li key={index} className="flex items-start">
                      <X className="h-4 w-4 text-red-500 mt-1 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Interested in this package?</h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleWhatsAppClick(currentPackage.name)}
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Chat on WhatsApp
                </button>
                <Link
                  to="/contact"
                  className="w-full bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-lg font-medium transition-colors duration-300 block text-center"
                >
                  Contact Form
                </Link>
              </div>
            </div>

            {/* Pickup Locations */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Pickup Locations
              </h3>
              <p className="text-gray-600 mb-3">We provide pickup from all major cities in:</p>
              <div className="grid grid-cols-2 gap-2">
                {pickupStates.map((state, index) => (
                  <span key={index} className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded text-center">
                    {state}
                  </span>
                ))}
              </div>
            </div>

            {/* Vehicle Options */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Car className="h-5 w-5 mr-2" />
                Vehicle Options
              </h3>
              <div className="space-y-3">
                {vehicleOptions.map((vehicle, index) => (
                  <div key={index} className="border rounded-lg p-3">
                    <h4 className="font-semibold text-gray-900">{vehicle.type}</h4>
                    <p className="text-sm text-gray-600">{vehicle.capacity}</p>
                    <p className="text-sm text-green-600">{vehicle.suitable}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailPage;
