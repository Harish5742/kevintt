
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users } from 'lucide-react';

const PackagesPage = () => {
  const packages = [
    {
      id: 1,
      name: "Ooty Hill Station Special",
      duration: "3 Days 2 Nights",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Explore the beautiful hill station with its gardens, lakes, and scenic viewpoints",
      highlights: ["Botanical Gardens", "Ooty Lake", "Doddabetta Peak"]
    },
    {
      id: 2,
      name: "Ooty-Coonoor Combo",
      duration: "4 Days 3 Nights",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Visit both Ooty and nearby Coonoor for a complete Nilgiri experience",
      highlights: ["Toy Train Ride", "Tea Gardens", "Sim's Park"]
    },
    {
      id: 3,
      name: "Family Adventure Package",
      duration: "5 Days 4 Nights",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Perfect family getaway with activities suitable for all age groups",
      highlights: ["Adventure Sports", "Nature Walks", "Local Culture"]
    },
    {
      id: 4,
      name: "Romantic Ooty Getaway",
      duration: "3 Days 2 Nights",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Romantic escape amidst the serene hills perfect for couples",
      highlights: ["Couple Activities", "Scenic Spots", "Cozy Stays"]
    },
    {
      id: 5,
      name: "Ooty Photography Tour",
      duration: "4 Days 3 Nights",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Capture the beauty of Ooty with guided photography sessions",
      highlights: ["Sunrise Points", "Landscape Photography", "Local Life"]
    },
    {
      id: 6,
      name: "Extended Nilgiri Tour",
      duration: "6 Days 5 Nights",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      description: "Comprehensive tour covering Ooty, Coonoor, and Kotagiri",
      highlights: ["Multiple Hill Stations", "Cultural Sites", "Adventure Activities"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-700 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Ooty Tour Packages</h1>
          <p className="text-lg text-green-100 max-w-2xl mx-auto">
            Choose from our carefully crafted tour packages to experience the Queen of Hill Stations
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.map((pkg) => (
              <div key={pkg.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div 
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${pkg.image})` }}
                ></div>
                
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{pkg.name}</h3>
                  
                  <div className="flex items-center text-green-600 font-medium mb-3 text-sm">
                    <Clock className="h-4 w-4 mr-1" />
                    {pkg.duration}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-3 text-sm">{pkg.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-900 dark:text-white mb-2 text-sm">Highlights:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pkg.highlights.map((highlight, index) => (
                        <span 
                          key={index}
                          className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-xs px-2 py-1 rounded"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    to={`/package/${pkg.id}`}
                    className="block w-full bg-green-600 hover:bg-green-700 text-white text-center px-5 py-2 rounded-lg font-medium transition-colors duration-300 text-sm"
                  >
                    View Itinerary
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-gray-300 mb-6">
            We create custom itineraries based on your preferences and requirements
          </p>
          <Link 
            to="/contact"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-base font-semibold transition-colors duration-300"
          >
            Create Custom Package
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PackagesPage;
