import React, { useState, useMemo } from 'react';
import { 
  ShoppingBag, 
  Search, 
  SlidersHorizontal, 
  CheckCircle2, 
  ShieldCheck, 
  Truck, 
  PhoneCall, 
  MessageSquare, 
  X, 
  Plus, 
  Minus, 
  Trash2, 
  Layers, 
  Sprout, 
  FlaskConical, 
  Shield, 
  Cpu, 
  Wrench,
  Check,
  Copy,
  ExternalLink
} from 'lucide-react';
import { Button, Card } from '../components/UI';
import { SEO } from '../components/SEO';

interface ProductItem {
  id: string;
  name: string;
  nameHi: string;
  category: 'seeds' | 'nutrition' | 'protection' | 'diagnostics' | 'equipment';
  brand: string;
  packSize: string;
  price: number;
  originalPrice?: number;
  description: string;
  specifications: string[];
  certification: string;
  inStock: boolean;
  featured?: boolean;
}

const PRODUCTS: ProductItem[] = [
  {
    id: 'prod-01',
    name: 'HarKhil Certified Hybrid Paddy (RH-1537)',
    nameHi: 'हरखिल प्रमाणित संकर धान बीज (RH-1537)',
    category: 'seeds',
    brand: 'HarKhil Seed Science',
    packSize: '3 kg Pack',
    price: 1450,
    originalPrice: 1650,
    description: 'उच्च उपज क्षमता, जीवाणु पत्ती झुलसा (BLB) रोधी, 125-130 दिन की परिपक्वता अवधि वाली संकर किस्म।',
    specifications: ['अंकुरण दर: 90%+', 'परिपक्वता: 125-130 दिन', 'दाना: लंबा एवं पतला चमकदार'],
    certification: 'Seed Certification Agency Tested',
    inStock: true,
    featured: true,
  },
  {
    id: 'prod-02',
    name: 'Chelated Nano Zinc & Multi-Micronutrient',
    nameHi: 'चिलेटेड नैनो जिंक एवं सूक्ष्म पोषक तत्व',
    category: 'nutrition',
    brand: 'HarKhil NutriTech',
    packSize: '500 ml Bottle',
    price: 480,
    originalPrice: 560,
    description: 'पत्तियों द्वारा त्वरित अवशोषण युक्त तरल जिंक पोषण। धान, मक्का एवं सब्जियों में खैरा रोग एवं पीलापन दूर करता है।',
    specifications: ['Zn EDTA: 12% Min', 'पूर्णतः घुलनशील', 'स्प्रे एवं ड्रिप दोनों के लिए अनुकूल'],
    certification: 'FCO Quality Standard Compliant',
    inStock: true,
    featured: true,
  },
  {
    id: 'prod-03',
    name: 'Trichoderma viride 1.5% WP (Bio-Fungicide)',
    nameHi: 'ट्राइकोडर्मा विरिडी 1.5% WP (जैव फफूंदनाशी)',
    category: 'protection',
    brand: 'HarKhil BioProtect',
    packSize: '1 kg Foil Pack',
    price: 320,
    originalPrice: 380,
    description: 'जड़ सड़न, उकठा (Wilt) और बीज जनित रोगों से सुरक्षा प्रदान करने वाला प्राकृतिक मित्र फफूंद कल्चर।',
    specifications: ['CFU गणना: 2x10^6 प्रति ग्राम', 'बीज उपचार एवं मृदा उपचार हेतु', '100% पर्यावरण सुरक्षित'],
    certification: 'CIBRC Registered Bio-Control',
    inStock: true,
    featured: false,
  },
  {
    id: 'prod-04',
    name: 'Organic Humic & Fulvic Acid Granules',
    nameHi: 'सक्रिय ह्यूमिक एवं फुल्विक एसिड दानेदार',
    category: 'nutrition',
    brand: 'HarKhil NutriTech',
    packSize: '10 kg Bag',
    price: 850,
    originalPrice: 990,
    description: 'भूमि की जल धारण क्षमता एवं जैविक कार्बन बढ़ाने तथा जड़ों के तीव्र विकास हेतु उच्च शक्ति दानेदार खाद।',
    specifications: ['ह्यूमिक एसिड: 65%', 'फुल्विक एसिड: 15%', 'पोटाश संवर्धित'],
    certification: 'Organic NPOP Compliant',
    inStock: true,
    featured: true,
  },
  {
    id: 'prod-05',
    name: 'Digital Multi-Parameter Soil NPK & pH Probe',
    nameHi: 'डिजिटल मृदा NPK एवं pH परीक्षण किट',
    category: 'diagnostics',
    brand: 'HarKhil Diagnostics',
    packSize: '1 Field Unit + Sensor',
    price: 3850,
    originalPrice: 4500,
    description: 'खेत पर तुरंत मृदा का pH, नमी, विद्युत चालकता (EC) एवं पोषक स्थिति मापने वाला आधुनिक डिजिटल सेंसर।',
    specifications: ['तुरंत डिजिटल LCD रीडिंग', 'स्टेनलेस स्टील सेंसिंग पिन', 'IP67 वाटरप्रूफ बॉडी'],
    certification: 'CE & ISO Calibrated Laboratory Grade',
    inStock: true,
    featured: true,
  },
  {
    id: 'prod-06',
    name: 'Dual-Motor 16L Battery Knapsack Sprayer',
    nameHi: '16 लीटर ड्यूल-मोटर रिचार्जेबल बैटरी स्प्रेयर',
    category: 'equipment',
    brand: 'HarKhil AgroEquip',
    packSize: '1 Complete Unit',
    price: 2950,
    originalPrice: 3400,
    description: '12V 12Ah लेड-एसिड बैटरी चालित, प्रेशर रेगुलेटर और 4 प्रकार के नोजल सेट युक्त मजबूत स्प्रे पंप।',
    specifications: ['बैटरी: 12V 12Ah (6-8 घंटे बैकअप)', 'टैंक क्षमता: 16 लीटर उच्च घनत्व प्लास्टिक', 'स्टेनलेस स्टील टेलीस्कोपिक लांस'],
    certification: 'Heavy Duty Field Tested',
    inStock: true,
    featured: false,
  },
  {
    id: 'prod-07',
    name: 'Azadirachtin 10,000 PPM (Neem Bio-Pesticide)',
    nameHi: 'अज़ाडिरैक्टीन 10,000 PPM शुद्ध नीम कीटनाशक',
    category: 'protection',
    brand: 'HarKhil BioProtect',
    packSize: '1 Liter Bottle',
    price: 650,
    originalPrice: 750,
    description: 'रस चूसक कीटों (माहू, सफेद मक्खी, थ्रिप्स) एवं सुंडियों के जैविक नियंत्रण हेतु शक्तिशाली नीम अर्क।',
    specifications: ['अज़ाडिरैक्टीन: 1% EC (10,000 PPM)', 'परागकण कीटों (मधुमक्खी) हेतु सुरक्षित', 'शून्य रासायनिक अवशेष'],
    certification: 'CIBRC Certified Bio-Insecticide',
    inStock: true,
    featured: false,
  },
  {
    id: 'prod-08',
    name: 'Liquid Bio-NPK Consortia (Tri-Bio Solution)',
    nameHi: 'तरल जैव NPK कंसोर्शियम (नाइट्रोजन-फास्फेट-पोटाश)',
    category: 'nutrition',
    brand: 'HarKhil NutriTech',
    packSize: '1 Liter Bottle',
    price: 390,
    originalPrice: 480,
    description: 'वायुमंडलीय नाइट्रोजन स्थिरीकरण, फॉस्फोरस घुलनशीलता एवं पोटाश गतिशीलता बढ़ाने वाले जीवाणुओं का तरल समूह।',
    specifications: ['जीवित जीवाणु: 1x10^8 CFU/ml', 'रासायनिक खाद पर 20-25% बचत', 'बीज एवं ड्रिप अनुप्रयोग'],
    certification: 'National Biofertilizer Standard FCO',
    inStock: true,
    featured: false,
  },
  {
    id: 'prod-09',
    name: 'High-Yield Hybrid Maize Seed (K-9040)',
    nameHi: 'उच्च उपज संकर मक्का बीज (K-9040)',
    category: 'seeds',
    brand: 'HarKhil Seed Science',
    packSize: '4 kg Pack',
    price: 1680,
    originalPrice: 1900,
    description: 'सूखा सहनशील, मजबूत तना, गिरनारोधी एवं नारंगी-पीले ठोस दानों वाली खरीफ व रबी की अग्रणी मक्का किस्म।',
    specifications: ['परिपक्वता: 100-110 दिन', 'दाना भराव: भुट्टे के शीर्ष तक', 'चारा गुणवत्ता: उच्च'],
    certification: 'Certified High Germination Tested',
    inStock: true,
    featured: false,
  },
];

const CATEGORIES = [
  { id: 'all', nameEn: 'All Products', nameHi: 'सभी उत्पाद', icon: Layers },
  { id: 'seeds', nameEn: 'Seeds & Hybrids', nameHi: 'प्रमाणित बीज', icon: Sprout },
  { id: 'nutrition', nameEn: 'Bio-Fertilizers & Nutrients', nameHi: 'उर्वरक एवं पोषण', icon: FlaskConical },
  { id: 'protection', nameEn: 'Crop Protection & Bio', nameHi: 'फसल सुरक्षा', icon: Shield },
  { id: 'diagnostics', nameEn: 'Soil & Sensors', nameHi: 'मृदा परीक्षण किट', icon: Cpu },
  { id: 'equipment', nameEn: 'Sprayers & Implements', nameHi: 'कृषि उपकरण', icon: Wrench },
];

export const Marketplace: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');

  // Cart / Order state
  const [cart, setCart] = useState<{ [productId: string]: number }>({});
  const [isCheckoutOpen, setIsCheckoutOpen] = useState<boolean>(false);
  const [customerName, setCustomerName] = useState<string>('');
  const [customerPhone, setCustomerPhone] = useState<string>('');
  const [customerLocation, setCustomerLocation] = useState<string>('');
  const [orderCopied, setOrderCopied] = useState<boolean>(false);

  // Filtered & Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchCategory = activeCategory === 'all' || item.category === activeCategory;
      const q = searchQuery.trim().toLowerCase();
      const matchSearch =
        q === '' ||
        item.name.toLowerCase().includes(q) ||
        item.nameHi.includes(q) ||
        item.brand.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);
      return matchCategory && matchSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [activeCategory, searchQuery, sortBy]);

  // Cart helper functions
  const addToCart = (productId: string) => {
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
  };

  const removeFromCart = (productId: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      if (updated[productId] > 1) {
        updated[productId] -= 1;
      } else {
        delete updated[productId];
      }
      return updated;
    });
  };

  const deleteFromCart = (productId: string) => {
    setCart((prev) => {
      const updated = { ...prev };
      delete updated[productId];
      return updated;
    });
  };

  const totalCartCount = useMemo(() => {
    return Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  }, [cart]);

  const totalCartAmount = useMemo(() => {
    return Object.entries(cart).reduce((sum, [id, qty]) => {
      const prod = PRODUCTS.find((p) => p.id === id);
      return sum + (prod ? prod.price * qty : 0);
    }, 0);
  }, [cart]);

  const cartItemsList = useMemo(() => {
    return Object.entries(cart)
      .map(([id, qty]) => {
        const prod = PRODUCTS.find((p) => p.id === id);
        return prod ? { product: prod, quantity: qty } : null;
      })
      .filter(Boolean) as { product: ProductItem; quantity: number }[];
  }, [cart]);

  // Generate formatted order text
  const generateOrderSummary = () => {
    let text = `*HarKhil Agro — कृषि सामग्री आदेश / Dispatch Request*\n`;
    text += `━━━━━━━━━━━━━━━━━━━━\n`;
    if (customerName) text += `👤 ग्राहक / किसान: ${customerName}\n`;
    if (customerPhone) text += `📞 मोबाइल: ${customerPhone}\n`;
    if (customerLocation) text += `📍 पता / जिला: ${customerLocation}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*आदेशित सामग्री:*\n`;
    cartItemsList.forEach((item, index) => {
      text += `${index + 1}. ${item.product.nameHi} (${item.product.packSize})\n`;
      text += `   मात्रा: ${item.quantity} | दर: ₹${item.product.price} | कुल: ₹${item.product.price * item.quantity}\n`;
    });
    text += `━━━━━━━━━━━━━━━━━━━━\n`;
    text += `*कुल अनुमानित राशि: ₹${totalCartAmount.toLocaleString('en-IN')}*\n`;
    text += `प्रेषण केंद्र: HarKhil Central Supply Hub, India\n`;
    return text;
  };

  const handleCopyOrder = () => {
    const text = generateOrderSummary();
    navigator.clipboard.writeText(text);
    setOrderCopied(true);
    setTimeout(() => setOrderCopied(false), 2500);
  };

  const handleWhatsAppOrder = () => {
    const text = encodeURIComponent(generateOrderSummary());
    // Direct WhatsApp business dispatch draft
    window.open(`https://wa.me/?text=${text}`, '_blank');
  };

  return (
    <>
      <SEO
        title="कृषि बाज़ार (Marketplace) — प्रमाणित बीज, उर्वरक व कृषि उपकरण"
        description="हरखिल कृषि बाज़ार: प्रमाणित संकर बीज, जैव उर्वरक, फसल सुरक्षा रसायन एवं आधुनिक कृषि यंत्र सीधे अधिकृत हब से प्राप्त करें।"
        canonical="https://agro.harkhil.com/marketplace"
      />

      <div className="pt-28 pb-24 sm:pt-36 sm:pb-32 bg-warm-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Banner */}
          <div className="text-center max-w-3xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-forest-900/5 border border-forest-900/10 text-forest-900 text-xs font-semibold uppercase tracking-wider mb-4">
              <ShoppingBag className="w-3.5 h-3.5 text-nature-600" />
              <span>HarKhil Krishi Marketplace • कृषि इनपुट बाज़ार</span>
            </div>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-forest-900">
              प्रमाणित कृषि सामग्री एवं <span className="gold-gradient-text">आधुनिक उपकरण</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-warm-700 leading-relaxed">
              वैज्ञानिक मानकों पर परीक्षित संकर बीज, उच्च-प्रभावी जैव उर्वरक, फसल सुरक्षा और आधुनिक स्प्रेयर — 100% प्रामाणिक बैच गारंटी के साथ।
            </p>
          </div>

          {/* Quick Trust Pillars Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-warm-100/80 border border-warm-200 mb-8 text-xs sm:text-sm text-forest-900">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-nature-600 shrink-0" />
              <span>100% प्रमाणित बैच गुणवत्ता</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Truck className="w-5 h-5 text-nature-600 shrink-0" />
              <span>केंद्रीय हब से सुरक्षित प्रेषण</span>
            </div>
            <div className="flex items-center gap-2.5">
              <FlaskConical className="w-5 h-5 text-nature-600 shrink-0" />
              <span>प्रयोगशाला परीक्षण रिपोर्ट उपलब्ध</span>
            </div>
            <div className="flex items-center gap-2.5">
              <PhoneCall className="w-5 h-5 text-nature-600 shrink-0" />
              <span>कृषि वैज्ञानिक तकनीकी परामर्श</span>
            </div>
          </div>

          {/* Search & Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pb-6 border-b border-warm-200 mb-8">
            {/* Search Input */}
            <div className="relative flex-grow max-w-lg">
              <Search className="w-4 h-4 text-warm-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="उत्पाद का नाम, घटक या ब्रांड खोजें..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-warm-300 bg-white text-forest-900 text-sm placeholder:text-warm-400 focus:outline-none focus:ring-2 focus:ring-forest-800 focus:border-transparent transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-warm-400 hover:text-forest-900"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 text-xs text-warm-600 font-medium">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>क्रमबद्ध करें:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="py-2 px-3 rounded-lg border border-warm-300 bg-white text-forest-900 text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-forest-800 transition"
              >
                <option value="featured">अनुशंसित (Featured)</option>
                <option value="price-asc">मूल्य: कम से अधिक</option>
                <option value="price-desc">मूल्य: अधिक से कम</option>
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                    isActive
                      ? 'bg-forest-900 text-gold-400 shadow-sm'
                      : 'bg-white border border-warm-200 text-warm-700 hover:bg-warm-100/70 hover:text-forest-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-warm-500'}`} />
                  <span>{cat.nameHi}</span>
                  <span className="text-[11px] opacity-75 hidden sm:inline">({cat.nameEn})</span>
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          {filteredProducts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-warm-200 p-8 max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-xl bg-warm-100 flex items-center justify-center mx-auto mb-4 text-warm-500">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-forest-900">कोई उत्पाद नहीं मिला</h3>
              <p className="text-sm text-warm-600 mt-1">
                आपके द्वारा खोजे गए शब्द या श्रेणी में कोई सामग्री उपलब्ध नहीं है। कृपया फ़िल्टर बदलें।
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-4 px-4 py-2 rounded-lg bg-forest-900 text-white text-xs font-semibold hover:bg-forest-800 transition"
              >
                सभी उत्पाद देखें
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((prod) => {
                const qtyInCart = cart[prod.id] || 0;
                return (
                  <Card key={prod.id} className="flex flex-col justify-between hover:shadow-md transition-shadow duration-200">
                    <div>
                      {/* Brand & Pack Header */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-nature-700 bg-nature-50 px-2 py-0.5 rounded border border-nature-200">
                          {prod.brand}
                        </span>
                        <span className="text-xs font-medium text-warm-500">
                          {prod.packSize}
                        </span>
                      </div>

                      {/* Product Name */}
                      <h3 className="font-serif text-lg font-bold text-forest-900 leading-snug">
                        {prod.nameHi}
                      </h3>
                      <p className="text-xs text-warm-500 font-sans mt-0.5">
                        {prod.name}
                      </p>

                      {/* Description */}
                      <p className="text-xs text-warm-700 mt-3 leading-relaxed">
                        {prod.description}
                      </p>

                      {/* Specifications bullet points */}
                      <div className="mt-4 pt-3 border-t border-warm-100 space-y-1.5">
                        {prod.specifications.map((spec, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[11px] text-warm-600">
                            <CheckCircle2 className="w-3.5 h-3.5 text-nature-600 shrink-0" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>

                      {/* Certification Pill */}
                      <div className="mt-3 text-[10px] text-warm-500 flex items-center gap-1 font-medium bg-warm-100/60 p-1.5 rounded-md">
                        <ShieldCheck className="w-3 h-3 text-gold-600 shrink-0" />
                        <span>{prod.certification}</span>
                      </div>
                    </div>

                    {/* Bottom Pricing & Action */}
                    <div className="mt-6 pt-4 border-t border-warm-200/80 flex items-center justify-between">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-xl font-bold font-serif text-forest-950">
                            ₹{prod.price.toLocaleString('en-IN')}
                          </span>
                          {prod.originalPrice && (
                            <span className="text-xs text-warm-400 line-through">
                              ₹{prod.originalPrice.toLocaleString('en-IN')}
                            </span>
                          )}
                        </div>
                        <span className="text-[10px] text-nature-700 font-medium">
                          जीएसटी एवं पैकिंग सहित
                        </span>
                      </div>

                      {qtyInCart === 0 ? (
                        <button
                          onClick={() => addToCart(prod.id)}
                          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold bg-forest-900 text-white hover:bg-forest-800 transition active:scale-95 shadow-xs"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>ऑर्डर में जोड़ें</span>
                        </button>
                      ) : (
                        <div className="inline-flex items-center gap-2 bg-warm-100 border border-warm-300 rounded-lg p-1">
                          <button
                            onClick={() => removeFromCart(prod.id)}
                            className="w-7 h-7 flex items-center justify-center rounded-md bg-white text-forest-900 hover:bg-warm-200 transition text-xs font-bold shadow-xs"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-xs font-bold text-forest-950 px-1 min-w-[20px] text-center">
                            {qtyInCart}
                          </span>
                          <button
                            onClick={() => addToCart(prod.id)}
                            className="w-7 h-7 flex items-center justify-center rounded-md bg-forest-900 text-white hover:bg-forest-800 transition text-xs font-bold shadow-xs"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      )}
                    </div>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Floating Cart Dispatch Bar */}
          {totalCartCount > 0 && (
            <div className="fixed bottom-6 left-0 right-0 z-40 px-4">
              <div className="max-w-3xl mx-auto bg-forest-950 text-white rounded-2xl shadow-2xl p-4 border border-gold-500/40 backdrop-blur-xl flex items-center justify-between gap-4 animate-in slide-in-from-bottom-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-400 text-forest-950 flex items-center justify-center font-bold text-sm shadow-md">
                    {totalCartCount}
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">
                      {totalCartCount} सामग्री चुनी गई
                    </h4>
                    <p className="text-xs text-warm-300">
                      अनुमानित कुल: <strong className="text-gold-400 text-sm">₹{totalCartAmount.toLocaleString('en-IN')}</strong>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCart({})}
                    className="p-2 text-warm-400 hover:text-warm-100 transition"
                    title="Clear Order List"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <Button
                    onClick={() => setIsCheckoutOpen(true)}
                    variant="gold"
                    size="sm"
                    className="shadow-md"
                  >
                    <span>ऑर्डर / प्रेषण सूची देखें</span>
                    <ShoppingBag className="w-3.5 h-3.5 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Checkout & Dispatch Drawer Modal */}
          {isCheckoutOpen && (
            <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-warm-200 relative animate-in zoom-in-95">
                <button
                  onClick={() => setIsCheckoutOpen(false)}
                  className="absolute right-4 top-4 p-2 text-warm-400 hover:text-forest-900 rounded-lg hover:bg-warm-100 transition"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-2.5 pb-4 border-b border-warm-200">
                  <div className="w-9 h-9 rounded-xl bg-forest-900 text-gold-400 flex items-center justify-center">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-bold text-forest-900">
                      कृषि सामग्री प्रेषण विवरण
                    </h3>
                    <p className="text-xs text-warm-500">
                      सीधे प्रेषण हब से सामग्री प्राप्त करने हेतु विवरण दर्ज करें
                    </p>
                  </div>
                </div>

                {/* Selected Items List */}
                <div className="mt-4 max-h-48 overflow-y-auto space-y-2 pr-1 divide-y divide-warm-100">
                  {cartItemsList.map((item) => (
                    <div key={item.product.id} className="pt-2 flex items-center justify-between text-xs">
                      <div className="flex-grow pr-2">
                        <span className="font-semibold text-forest-900 block">{item.product.nameHi}</span>
                        <span className="text-warm-500 text-[11px]">{item.product.packSize} • ₹{item.product.price} × {item.quantity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-forest-950 font-serif">
                          ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                        </span>
                        <button
                          onClick={() => deleteFromCart(item.product.id)}
                          className="text-warm-400 hover:text-red-600 transition p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 pt-3 border-t border-warm-200 flex justify-between items-center text-sm font-bold text-forest-900">
                  <span>कुल प्रेषण मूल्य:</span>
                  <span className="text-lg font-serif text-forest-950">
                    ₹{totalCartAmount.toLocaleString('en-IN')}
                  </span>
                </div>

                {/* Farmer Details Form */}
                <div className="mt-5 space-y-3 pt-3 border-t border-warm-200">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-warm-600">
                    क्रेता / किसान विवरण
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] font-medium text-warm-700 block mb-1">पूरा नाम</label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="उदा. राजेश पटेल"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-warm-300 focus:outline-none focus:ring-2 focus:ring-forest-800"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-warm-700 block mb-1">मोबाइल नंबर</label>
                      <input
                        type="tel"
                        value={customerPhone}
                        onChange={(e) => setCustomerPhone(e.target.value)}
                        placeholder="उदा. 98765 43210"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-warm-300 focus:outline-none focus:ring-2 focus:ring-forest-800"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-warm-700 block mb-1">ग्राम / तहसील / जिला</label>
                    <input
                      type="text"
                      value={customerLocation}
                      onChange={(e) => setCustomerLocation(e.target.value)}
                      placeholder="उदा. ग्राम धरमपुरा, जिला रायपुर, छत्तीसगढ़"
                      className="w-full px-3 py-2 text-xs rounded-lg border border-warm-300 focus:outline-none focus:ring-2 focus:ring-forest-800"
                    />
                  </div>
                </div>

                {/* Dispatch & Action Buttons */}
                <div className="mt-6 pt-4 border-t border-warm-200 flex flex-col gap-2.5">
                  <button
                    onClick={handleWhatsAppOrder}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-[#25D366] hover:bg-[#20ba59] text-white shadow-sm transition active:scale-98"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp पर सीधा प्रेषण आदेश भेजें</span>
                  </button>

                  <div className="flex gap-2">
                    <button
                      onClick={handleCopyOrder}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-warm-100 hover:bg-warm-200 text-forest-900 border border-warm-300 transition"
                    >
                      {orderCopied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-nature-600" />
                          <span>सूची कॉपी हो गई!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-warm-600" />
                          <span>आदेश सूची कॉपी करें</span>
                        </>
                      )}
                    </button>

                    <a
                      href="mailto:contact@harkhil.com?subject=HarKhil%20Marketplace%20Order"
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-warm-100 hover:bg-warm-200 text-forest-900 border border-warm-300 transition"
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-warm-600" />
                      <span>ईमेल प्रेषण</span>
                    </a>
                  </div>
                </div>

                <div className="mt-4 p-2.5 rounded-lg bg-warm-50 border border-warm-200 text-[10px] text-warm-500 text-center">
                  हब प्रेषण सहायता: <strong>contact@harkhil.com</strong> • समय: सोम - शनि (9:00 AM – 6:00 PM IST)
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
};
