import { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Award, 
  ShieldCheck, 
  MessageSquare, 
  HardHat, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  ChevronRight, 
  Download, 
  Menu, 
  X,
  GraduationCap,
  Microscope,
  Music,
  Trophy,
  History,
  Target,
  Rocket,
  Star,
  MessageCircle,
  Copy,
  Check,
  Quote
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// --- Types ---
type Page = 'home' | 'about' | 'academics' | 'admissions' | 'gallery' | 'contact';

// --- Constants & Helpers ---
const WHATSAPP_NUMBER = "254711894460";

const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank');
};

// --- Components ---

const ReadyToStart = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  return (
    <div className="bg-forest-green p-8 rounded-2xl text-white">
      <h3 className="text-xl font-bold mb-4">Ready to Start?</h3>
      <p className="text-gray-300 text-sm mb-6">
        Contact our admissions office today to schedule an interview or a school tour.
      </p>
      <button 
        onClick={() => setActivePage('contact')}
        className="w-full bg-golden-yellow text-forest-green font-bold py-4 rounded-xl hover:bg-white transition-colors shadow-lg"
      >
        Contact Admissions Office
      </button>
    </div>
  );
};

const Navbar = ({ activePage, setActivePage }: { activePage: Page, setActivePage: (p: Page) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [logoError, setLogoError] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isSolid = scrolled || activePage !== 'home';

  const navItems: { label: string; id: Page }[] = [
    { label: 'Home', id: 'home' },
    { label: 'About Us', id: 'about' },
    { label: 'Academics', id: 'academics' },
    { label: 'Admissions', id: 'admissions' },
    { label: 'Gallery', id: 'gallery' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isSolid ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center cursor-pointer" onClick={() => setActivePage('home')}>
            <div className="bg-white p-1.5 rounded-xl mr-3 shadow-md border border-gray-100 flex items-center justify-center min-w-[60px] min-h-[60px]">
              {!logoError ? (
                <img 
                  src="https://lh3.googleusercontent.com/d/1VyPsxcrmYGch1cqzCRoebXuD6vkXjY0B" 
                  alt="Green View School Logo" 
                  className="w-14 h-14 object-contain"
                  referrerPolicy="no-referrer"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <GraduationCap className="text-forest-green w-10 h-10" />
              )}
            </div>
            <div>
              <span className={`text-xl font-bold block leading-none ${isSolid ? 'text-forest-green' : 'text-white'}`}>Green View School</span>
              <span className={`text-[10px] font-semibold uppercase tracking-widest ${isSolid ? 'text-gray-600' : 'text-gray-200'}`}>Eldama Ravine</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActivePage(item.id)}
                className={`text-sm font-semibold transition-colors hover:text-golden-yellow ${
                  activePage === item.id 
                    ? 'text-golden-yellow' 
                    : isSolid ? 'text-forest-green' : 'text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={isSolid ? 'text-forest-green' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActivePage(item.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-3 text-base font-medium rounded-md ${
                    activePage === item.id ? 'bg-forest-green text-white' : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  const [logoError, setLogoError] = useState(false);

  return (
    <footer className="bg-forest-green text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-6">
              <div className="bg-white p-2 rounded-2xl mr-4 shadow-lg flex items-center justify-center min-w-[80px] min-h-[80px]">
                {!logoError ? (
                  <img 
                    src="https://lh3.googleusercontent.com/d/1VyPsxcrmYGch1cqzCRoebXuD6vkXjY0B" 
                    alt="Green View School Logo" 
                    className="w-20 h-20 object-contain"
                    referrerPolicy="no-referrer"
                    onError={() => setLogoError(true)}
                  />
                ) : (
                  <GraduationCap className="text-forest-green w-16 h-16" />
                )}
              </div>
              <span className="text-2xl font-bold tracking-tight">Green View School</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Nurturing academic excellence and holistic development in the heart of Eldama Ravine. Striving for excellence since our inception.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/gvseldama" target="_blank" rel="noopener noreferrer" className="bg-white/10 p-2 rounded-full hover:bg-golden-yellow hover:text-forest-green transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-golden-yellow">Quick Links</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li><button onClick={() => setActivePage('about')} className="hover:text-white transition-colors">About Our School</button></li>
              <li><button onClick={() => setActivePage('academics')} className="hover:text-white transition-colors">Academic Programs</button></li>
              <li><button onClick={() => setActivePage('admissions')} className="hover:text-white transition-colors">Admission Process</button></li>
              <li><button onClick={() => setActivePage('gallery')} className="hover:text-white transition-colors">School Gallery</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-golden-yellow">Academics</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li>Pre-Primary (PP1-PP2)</li>
              <li>Primary School (Grade 1-6)</li>
              <li>Junior Secondary (JSS)</li>
              <li>Co-curricular Activities</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-golden-yellow">Contact Us</h4>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 text-golden-yellow shrink-0" />
                <span>Milimani Court Area, Eldama Ravine (Near NCPB)</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 text-golden-yellow shrink-0" />
                <span>+254 711 894 460</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 text-golden-yellow shrink-0" />
                <span>greenviewacademyravine@gmail.com</span>
              </li>
              <li className="flex items-center">
                <div className="w-[18px] mr-3 text-golden-yellow shrink-0 font-bold text-[10px]">P.O.</div>
                <span>Box 216, Eldama Ravine</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-gray-400 text-xs">
          <p>&copy; {new Date().getFullYear()} Green View School - Eldama Ravine. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://lh3.googleusercontent.com/d/1xy2MVZiyeYs2ftglT6MpQjAt5G_sK8mA" 
            alt="Green View School Campus" 
            className="w-full h-full object-cover brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-green/60 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 bg-golden-yellow text-forest-green font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Welcome to Green View School Eldama Ravine
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Nurturing Excellence <br />
              <span className="text-golden-yellow">in the Heart of Eldama Ravine.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl font-light">
              Where we shape character, build futures, and empower the next generation of leaders.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setActivePage('contact')}
                className="bg-golden-yellow text-forest-green px-8 py-4 rounded-lg font-bold hover:bg-white transition-all transform hover:scale-105 shadow-lg flex items-center justify-center"
              >
                Enquire Now <ChevronRight className="ml-2" size={20} />
              </button>
              <button 
                onClick={() => setActivePage('admissions')}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-all flex items-center justify-center"
              >
                JSS Admissions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4">Why Choose Green View School?</h2>
            <div className="w-24 h-1 bg-golden-yellow mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                icon: <Users className="w-10 h-10 text-forest-green" />,
                title: "Experienced Teachers",
                desc: "Our dedicated faculty brings years of expertise in delivering high-quality education and mentorship."
              },
              {
                icon: <Microscope className="w-10 h-10 text-forest-green" />,
                title: "Modern CBC/JSS Facilities",
                desc: "Equipped with state-of-the-art labs and learning tools to support the new curriculum requirements."
              },
              {
                icon: <ShieldCheck className="w-10 h-10 text-forest-green" />,
                title: "Strong Moral Foundation",
                desc: "We prioritize discipline, integrity, and character building alongside academic success."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 bg-gray-50 rounded-2xl border-b-4 border-golden-yellow shadow-sm hover:shadow-xl transition-all"
              >
                <div className="mb-6 bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-inner">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-forest-green mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* School Leadership Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4">Our School Leadership</h2>
            <div className="w-24 h-1 bg-golden-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Director */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/5]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1VQicGbvHSdfIu0zPKyL2Odw09CRtMBfy" 
                  alt="Director of Green View School" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-green via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <Quote className="text-golden-yellow w-10 h-10 mb-4 opacity-50" />
                  <h3 className="text-2xl font-bold mb-1">Director's Message</h3>
                  <p className="text-golden-yellow font-semibold mb-4">Green View School Eldama Ravine</p>
                  <p className="text-sm text-gray-200 line-clamp-3 italic">
                    "At Green View School, we believe that education is more than just academic success; it's about nurturing the heart and mind. Our commitment is to provide a holistic learning environment where every student feels valued, challenged, and inspired."
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Headmaster */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative group"
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/5]">
                <img 
                  src="https://lh3.googleusercontent.com/d/1vt0ernyOBdXOxWeRIXwclFTqui_0NwAR" 
                  alt="Headmaster of Green View School" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-green via-transparent to-transparent opacity-90"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <Quote className="text-golden-yellow w-10 h-10 mb-4 opacity-50" />
                  <h3 className="text-2xl font-bold mb-1">Headmaster's Message</h3>
                  <p className="text-golden-yellow font-semibold mb-4">Green View School Eldama Ravine</p>
                  <p className="text-sm text-gray-200 line-clamp-3 italic">
                    "As the Headmaster of Green View School, I am honored to lead a team of dedicated educators who are passionate about student success. Our focus is on creating a disciplined yet supportive environment where every child can flourish academically and socially."
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <button 
              onClick={() => setActivePage('about')}
              className="inline-flex items-center bg-forest-green text-white px-10 py-4 rounded-xl font-bold hover:bg-golden-yellow hover:text-forest-green transition-all shadow-lg group"
            >
              Read Full Leadership Messages <ChevronRight className="ml-2 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Wall of Fame & Academic Excellence */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-forest-green mb-4">Legacy of Excellence: Our Top Performers</h2>
            <div className="w-24 h-1 bg-golden-yellow mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Top Scorer Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-forest-green to-forest-green/90 p-8 rounded-3xl text-white shadow-xl relative overflow-hidden"
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-golden-yellow/10 rounded-full blur-3xl"></div>
              <div className="flex items-center mb-6">
                <div className="bg-golden-yellow p-3 rounded-xl text-forest-green mr-4">
                  <Award size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Top Scorer</h3>
                  <div className="text-golden-yellow font-bold">KCPE Excellence</div>
                </div>
              </div>
              <div className="mb-6">
                <div className="text-4xl font-bold mb-1">421 <span className="text-lg font-normal opacity-80">Marks</span></div>
                <div className="text-xl font-bold text-golden-yellow">Alan Kiplagat Chumba</div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Position 2 in Eldama Ravine Sub-county. Future Engineer.
              </p>
            </motion.div>

            {/* Consistent Success Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-white p-8 rounded-3xl border-2 border-forest-green/10 shadow-lg relative overflow-hidden"
            >
              <div className="flex items-center mb-6">
                <div className="bg-forest-green/10 p-3 rounded-xl text-forest-green mr-4">
                  <Star size={28} className="fill-golden-yellow text-golden-yellow" />
                </div>
                <h3 className="text-xl font-bold text-forest-green">Consistent Success</h3>
              </div>
              <div className="mb-6">
                <div className="text-5xl font-bold text-forest-green mb-2">11</div>
                <div className="text-lg font-semibold text-gray-600">Students with 400+ Marks</div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Celebrating 11 Students who scored 400+ Marks in a single KCPE season.
              </p>
            </motion.div>

            {/* Alumni Spotlight */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-golden-yellow p-8 rounded-3xl text-forest-green shadow-xl relative overflow-hidden"
            >
              <div className="flex items-center mb-6">
                <div className="bg-forest-green p-3 rounded-xl text-white mr-4">
                  <GraduationCap size={28} />
                </div>
                <h3 className="text-xl font-bold">Alumni Spotlight</h3>
              </div>
              <div className="space-y-4 mb-6">
                <div>
                  <div className="font-bold text-lg">Ivy Jepkurui</div>
                  <div className="text-sm opacity-80">B- in KCSE 2025</div>
                </div>
                <div>
                  <div className="font-bold text-lg">Kemboi Roy</div>
                  <div className="text-sm opacity-80">JKUAT Graduate</div>
                </div>
              </div>
              <p className="font-medium leading-relaxed italic">
                "From GVS to University: Our foundation leads to global success."
              </p>
            </motion.div>
          </div>

          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => openWhatsApp("Hello GVS, I am impressed by Alan Kiplagat's 421 marks! I want my child to achieve similar results. How do I start the enrollment process?")}
              className="flex items-center bg-forest-green text-white px-8 py-4 rounded-2xl font-bold hover:bg-golden-yellow hover:text-forest-green transition-all shadow-xl group"
            >
              <MessageCircle className="mr-3 group-hover:scale-110 transition-transform" />
              Inquire About Enrollment
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats/Links */}
      <section className="py-16 bg-forest-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-golden-yellow mb-2">100%</div>
              <div className="text-sm uppercase tracking-widest font-semibold">CBC Transition</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-golden-yellow mb-2">20+</div>
              <div className="text-sm uppercase tracking-widest font-semibold">Expert Staff</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-golden-yellow mb-2">A+</div>
              <div className="text-sm uppercase tracking-widest font-semibold">Academic Record</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-golden-yellow mb-2">500+</div>
              <div className="text-sm uppercase tracking-widest font-semibold">Happy Students</div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Start Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white p-12 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold text-forest-green mb-6">Ready to Start?</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Contact our admissions office today to schedule an interview or a school tour.
            </p>
            <button 
              onClick={() => setActivePage('contact')}
              className="bg-forest-green text-white px-12 py-5 rounded-xl font-bold hover:bg-golden-yellow hover:text-forest-green transition-all shadow-lg text-lg"
            >
              Contact Admissions Office
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="pt-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-4xl font-bold text-forest-green mb-6">Our History & Legacy</h1>
              <p className="text-gray-700 leading-relaxed mb-6">
                Green View School has long been a pillar of education in Eldama Ravine town. Known for our consistent performance and unwavering commitment to excellence, we have nurtured thousands of students who have gone on to become leaders in various fields.
              </p>
              <p className="text-gray-700 leading-relaxed">
                From our humble beginnings, we have grown into a premier institution that balances academic rigor with character development, ensuring every child who walks through our gates is prepared for the challenges of the future.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://lh3.googleusercontent.com/d/1PWuAtFAO_a3p9Z9nqLnvlbqV1YD1Xg_c" 
                alt="Green View School History" 
                className="rounded-2xl shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 bg-golden-yellow p-8 rounded-2xl hidden md:block">
                <span className="text-forest-green font-bold text-5xl block">15+</span>
                <span className="text-forest-green font-semibold uppercase tracking-widest text-xs">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-10 border-2 border-forest-green rounded-3xl bg-forest-green text-white relative overflow-hidden group">
              <Target className="absolute -right-10 -bottom-10 w-48 h-48 text-white/10 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Target className="mr-3 text-golden-yellow" /> Our Vision
              </h2>
              <p className="text-lg leading-relaxed italic">
                "To be a premier institution of academic excellence and holistic development, nurturing responsible and innovative leaders for the future."
              </p>
            </div>
            <div className="p-10 border-2 border-golden-yellow rounded-3xl bg-white text-forest-green relative overflow-hidden group">
              <Rocket className="absolute -right-10 -bottom-10 w-48 h-48 text-golden-yellow/10 group-hover:scale-110 transition-transform" />
              <h2 className="text-3xl font-bold mb-6 flex items-center">
                <Rocket className="mr-3 text-golden-yellow" /> Our Mission
              </h2>
              <p className="text-lg leading-relaxed">
                "To provide a safe, nurturing, and challenging learning environment that fosters discipline, integrity, and academic success through the CBC and Junior Secondary School curriculum."
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-forest-green mb-4">School Leadership</h2>
            <p className="text-gray-600">Dedicated to guiding our students towards excellence</p>
            <div className="w-24 h-1 bg-golden-yellow mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-golden-yellow rounded-full -z-10 opacity-20"></div>
              <img 
                src="https://lh3.googleusercontent.com/d/1vt0ernyOBdXOxWeRIXwclFTqui_0NwAR" 
                alt="Headmaster of Green View School" 
                className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/5]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
                <h3 className="text-2xl font-bold text-forest-green">Headmaster's Message</h3>
                <p className="text-golden-yellow font-semibold">Green View School Eldama Ravine</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-forest-green mb-8 leading-tight">
                Leading with Vision and Purpose
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  As the Headmaster of Green View School, I am honored to lead a team of dedicated educators who are passionate about student success. Our focus is on creating a disciplined yet supportive environment where every child can flourish academically and socially.
                </p>
                <p>
                  We believe in the power of the CBC and JSS curriculum to transform lives. By integrating modern teaching methods with traditional values, we prepare our students to be critical thinkers and compassionate citizens.
                </p>
                <p className="font-bold text-forest-green italic">
                  "Excellence is not an act, but a habit. We strive to make excellence a habit for every student at Green View."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-forest-green mb-4">Core Values</h2>
            <p className="text-gray-600">The principles that guide our school community</p>
            <div className="w-24 h-1 bg-golden-yellow mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BookOpen />, title: "Quality Instruction", desc: "Delivering the best CBC and JSS education through modern methods." },
              { icon: <MessageSquare />, title: "Transparency", desc: "Open communication with parents regarding student progress." },
              { icon: <ShieldCheck />, title: "Safety", desc: "A secure and protected environment for every child." },
              { icon: <Award />, title: "Integrity", desc: "Building a foundation of honesty and hard work in every student." }
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center">
                <div className="text-forest-green mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-bold text-forest-green mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AcademicsPage = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  return (
    <div className="pt-24 animate-in fade-in duration-700">
      <div className="bg-forest-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Academic Excellence</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive learning pathways designed to nurture talent and intellectual growth from early years to secondary school.
          </p>
        </div>
      </div>

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {/* PP1-PP2 */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img src="https://lh3.googleusercontent.com/d/1kygBrSZB3e-oH3b3wK7Y2HGFzzzboA2P" alt="Pre-Primary Students" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="md:w-1/2">
                <span className="text-golden-yellow font-bold uppercase tracking-widest text-sm">Early Years</span>
                <h2 className="text-3xl font-bold text-forest-green mt-2 mb-6">Pre-Primary (PP1-PP2)</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Our early years program focuses on play-based learning, social development, and building a strong foundation for literacy and numeracy. We create a warm, welcoming environment where children feel safe to explore and discover.
                </p>
                <ul className="space-y-3">
                  {['Play-based learning', 'Social & Emotional growth', 'Foundational Literacy', 'Creative Arts'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ChevronRight className="text-golden-yellow mr-2" size={18} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Primary */}
            <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
              <div className="md:w-1/2">
                <img src="https://lh3.googleusercontent.com/d/1NQ2bjYcTZxqf-ciye9D8iDWOKmY4gJ38" alt="Primary School Students" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="md:w-1/2">
                <span className="text-golden-yellow font-bold uppercase tracking-widest text-sm">Competency Based Curriculum</span>
                <h2 className="text-3xl font-bold text-forest-green mt-2 mb-6">Primary School (Grade 1-6)</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Mastery of the CBC curriculum is at the heart of our primary school. We focus on developing core competencies, critical thinking, and a love for lifelong learning through interactive and student-centered teaching methods.
                </p>
                <ul className="space-y-3">
                  {['CBC Curriculum Mastery', 'Digital Literacy', 'Critical Thinking', 'Value-based Education'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ChevronRight className="text-golden-yellow mr-2" size={18} /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* JSS */}
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img src="https://lh3.googleusercontent.com/d/1C0M4h70INBvi7UarLhALE912mQwAqhdV" alt="Junior Secondary Students" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
              </div>
              <div className="md:w-1/2">
                <span className="text-golden-yellow font-bold uppercase tracking-widest text-sm">The Future of Education</span>
                <h2 className="text-3xl font-bold text-forest-green mt-2 mb-6">Junior Secondary School (JSS)</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Highlighting Grade 7 & 8 readiness, our JSS program features specialized science labs, career pathway guidance, and advanced learning facilities to prepare students for senior secondary and beyond.
                </p>
                <ul className="space-y-3 mb-8">
                  {['Science & Tech Labs', 'Career Guidance', 'Advanced CBC Integration', 'Leadership Training'].map((item, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <ChevronRight className="text-golden-yellow mr-2" size={18} /> {item}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => openWhatsApp("Hello GVS Eldama, I am interested in enrolling my child for Grade 7/8 Junior Secondary. Please send me the JSS requirements and fee structure.")}
                  className="flex items-center bg-forest-green text-white px-6 py-3 rounded-xl font-bold hover:bg-golden-yellow hover:text-forest-green transition-all shadow-md group"
                >
                  <MessageCircle className="mr-2 group-hover:scale-110 transition-transform" size={20} />
                  JSS Admission Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Co-curricular */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-forest-green mb-4">Beyond the Classroom</h2>
            <p className="text-gray-600">Nurturing talents through co-curricular activities</p>
            <div className="w-24 h-1 bg-golden-yellow mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            {[
              { 
                icon: <Trophy />, 
                title: "Athletics", 
                desc: "Active participation in local Eldama Ravine sub-county competitions.",
                image: "https://lh3.googleusercontent.com/d/1PLrc85pQklvhyUyQq7tJHEhpCDRpi2yp"
              },
              { 
                icon: <Music />, 
                title: "Music & Drama", 
                desc: "Developing creative expression and confidence on stage.",
                image: "https://lh3.googleusercontent.com/d/1G-gDHUdDnvWCGOK9kQPecvzlINVjPek_"
              },
              { 
                icon: <Users />, 
                title: "Clubs & Societies", 
                desc: "Scouts, Environment, and Debate clubs for holistic growth.",
                image: "https://lh3.googleusercontent.com/d/1Gu3q-n792GVITIYDFP2fVQTUbhNT3hlt"
              },
              { 
                icon: <Microscope />, 
                title: "Science Fairs", 
                desc: "Encouraging innovation and scientific inquiry.",
                image: "https://lh3.googleusercontent.com/d/1v0fteUpoL2ItE2kY7CQ7RbRWYAA1gCzS"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 p-2 rounded-lg text-forest-green shadow-sm">
                    {item.icon}
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="font-bold text-forest-green mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto">
            <ReadyToStart setActivePage={setActivePage} />
          </div>
        </div>
      </div>
    </div>
  );
};

const AdmissionsPage = ({ setActivePage }: { setActivePage: (p: Page) => void }) => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="pt-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold text-forest-green mb-8">Join the Green View Family</h1>
            <p className="text-gray-700 mb-10 text-lg">
              We are excited to welcome new students to our vibrant learning community. Our admission process is designed to be transparent and straightforward.
            </p>
            
            <div className="space-y-8 mb-16">
              {[
                { step: "01", title: "Inquiry", desc: "Visit our school or contact the admissions office for initial information." },
                { step: "02", title: "Interview", desc: "Schedule an assessment interview for the student." },
                { step: "03", title: "Documentation", desc: "Submit required documents including birth certificate and previous school reports." },
                { step: "04", title: "Admission", desc: "Receive the admission letter and fee structure to finalize enrollment." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-3xl font-bold text-golden-yellow/30">{item.step}</div>
                  <div>
                    <h3 className="text-xl font-bold text-forest-green mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Payment Details Section */}
            <div className="bg-white p-8 rounded-3xl border-2 border-forest-green/10 shadow-sm">
              <h2 className="text-2xl font-bold text-forest-green mb-6 flex items-center">
                <Award className="mr-3 text-golden-yellow" /> School Fees Payment
              </h2>
              <p className="text-gray-600 mb-8">Make payments easily using our official Paybill or Bank details below.</p>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">M-Pesa Paybill</div>
                    <div className="text-lg font-bold text-forest-green">400200</div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard("400200", "paybill")}
                    className="p-3 bg-white rounded-lg text-forest-green hover:bg-forest-green hover:text-white transition-all shadow-sm"
                  >
                    {copied === "paybill" ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                  <div>
                    <div className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Account Number</div>
                    <div className="text-lg font-bold text-forest-green">01129216000000</div>
                  </div>
                  <button 
                    onClick={() => copyToClipboard("01129216000000", "account")}
                    className="p-3 bg-white rounded-lg text-forest-green hover:bg-forest-green hover:text-white transition-all shadow-sm"
                  >
                    {copied === "account" ? <Check size={20} /> : <Copy size={20} />}
                  </button>
                </div>

                <div className="p-4 bg-golden-yellow/10 rounded-xl border border-golden-yellow/20">
                  <p className="text-sm text-forest-green font-medium">
                    <strong>Note:</strong> Please use your child's full name and grade as the account reference for easier tracking.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-10 rounded-3xl border border-gray-200">
            <h2 className="text-2xl font-bold text-forest-green mb-8">Downloads & Resources</h2>
            <div className="space-y-4 mb-12">
              <button className="w-full flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 hover:border-golden-yellow transition-colors group">
                <div className="flex items-center">
                  <div className="bg-forest-green/10 p-3 rounded-lg mr-4 text-forest-green">
                    <Download size={20} />
                  </div>
                  <span className="font-semibold text-gray-700">Fee Structure (PDF)</span>
                </div>
                <ChevronRight className="text-gray-400 group-hover:text-golden-yellow" />
              </button>
              <button className="w-full flex items-center justify-between p-5 bg-white rounded-xl border border-gray-200 hover:border-golden-yellow transition-colors group">
                <div className="flex items-center">
                  <div className="bg-forest-green/10 p-3 rounded-lg mr-4 text-forest-green">
                    <Download size={20} />
                  </div>
                  <span className="font-semibold text-gray-700">Admission Form (PDF)</span>
                </div>
                <ChevronRight className="text-gray-400 group-hover:text-golden-yellow" />
              </button>
            </div>

            <ReadyToStart setActivePage={setActivePage} />
          </div>
        </div>
      </div>
    </div>
  );
};

const GalleryPage = () => {
  const images = [
    { src: 'https://lh3.googleusercontent.com/d/1PWuAtFAO_a3p9Z9nqLnvlbqV1YD1Xg_c', title: 'Our History & Legacy' },
    { src: 'https://lh3.googleusercontent.com/d/1kygBrSZB3e-oH3b3wK7Y2HGFzzzboA2P', title: 'Pre-Primary Learning' },
    { src: 'https://lh3.googleusercontent.com/d/1NQ2bjYcTZxqf-ciye9D8iDWOKmY4gJ38', title: 'Primary School Excellence' },
    { src: 'https://lh3.googleusercontent.com/d/1C0M4h70INBvi7UarLhALE912mQwAqhdV', title: 'Junior Secondary School' },
    { src: 'https://lh3.googleusercontent.com/d/1PLrc85pQklvhyUyQq7tJHEhpCDRpi2yp', title: 'Athletics & Sports' },
    { src: 'https://lh3.googleusercontent.com/d/1G-gDHUdDnvWCGOK9kQPecvzlINVjPek_', title: 'Music & Drama Festival' },
    { src: 'https://lh3.googleusercontent.com/d/1Gu3q-n792GVITIYDFP2fVQTUbhNT3hlt', title: 'Clubs & Societies' },
    { src: 'https://lh3.googleusercontent.com/d/1v0fteUpoL2ItE2kY7CQ7RbRWYAA1gCzS', title: 'Science Fair Innovation' },
  ];

  return (
    <div className="pt-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-forest-green mb-4">Latest from Green View School</h1>
          <p className="text-gray-600">Capturing moments of excellence and joy</p>
          <div className="w-24 h-1 bg-golden-yellow mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl shadow-md"
            >
              <img src={img.src} alt={img.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-bold">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-gray-50 rounded-3xl text-center">
          <Facebook className="mx-auto text-forest-green mb-4" size={40} />
          <h2 className="text-2xl font-bold text-forest-green mb-4">Follow us on Facebook</h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Stay updated with our latest news, events, and student achievements by following our official Facebook page.
          </p>
          <a 
            href="https://facebook.com/gvseldama" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-forest-green text-white px-8 py-3 rounded-full font-bold hover:bg-golden-yellow hover:text-forest-green transition-all"
          >
            Visit @gvseldama
          </a>
        </div>
      </div>
    </div>
  );
};

const ContactPage = () => {
  return (
    <div className="pt-24 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl font-bold text-forest-green mb-8">Get in Touch</h1>
            <p className="text-gray-700 mb-10">
              Have questions? We're here to help. Reach out to us via any of the following channels or visit our campus in Eldama Ravine.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-forest-green/10 p-4 rounded-xl text-forest-green mr-6">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-forest-green mb-1">Location</h3>
                  <p className="text-gray-600">Milimani Court Area, Eldama Ravine (Near NCPB)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-forest-green/10 p-4 rounded-xl text-forest-green mr-6">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-forest-green mb-1">Phone</h3>
                  <p className="text-gray-600">+254 711 894 460</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-forest-green/10 p-4 rounded-xl text-forest-green mr-6">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-forest-green mb-1">Email</h3>
                  <p className="text-gray-600">greenviewacademyravine@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-forest-green/10 p-4 rounded-xl text-forest-green mr-6">
                  <div className="w-6 h-6 flex items-center justify-center font-bold text-xs">P.O.</div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-forest-green mb-1">P.O. Box</h3>
                  <p className="text-gray-600">216, Eldama Ravine</p>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="font-bold text-lg text-forest-green mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Your Name" className="w-full p-4 rounded-xl border border-gray-200 focus:border-forest-green outline-none transition-colors" />
                  <input type="email" placeholder="Your Email" className="w-full p-4 rounded-xl border border-gray-200 focus:border-forest-green outline-none transition-colors" />
                </div>
                <input type="text" placeholder="Subject" className="w-full p-4 rounded-xl border border-gray-200 focus:border-forest-green outline-none transition-colors" />
                <textarea placeholder="Message" rows={4} className="w-full p-4 rounded-xl border border-gray-200 focus:border-forest-green outline-none transition-colors"></textarea>
                <button className="bg-forest-green text-white px-10 py-4 rounded-xl font-bold hover:bg-golden-yellow hover:text-forest-green transition-all shadow-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="h-[600px] rounded-3xl overflow-hidden shadow-xl border-8 border-white relative group">
            <iframe 
              src="https://maps.google.com/maps?q=0.045774,35.72669&z=16&output=embed" 
              className="w-full h-full border-0" 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Green View School Location"
            ></iframe>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg border border-gray-100 pointer-events-none group-hover:opacity-0 transition-opacity duration-300">
              <div className="flex items-center text-forest-green font-bold text-sm">
                <MapPin size={16} className="mr-2" />
                Find us in Eldama Ravine
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [activePage, setActivePage] = useState<Page>('home');

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage]);

  return (
    <div className="min-h-screen font-sans text-gray-900 bg-white selection:bg-golden-yellow selection:text-forest-green">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      
      <main>
        {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
        {activePage === 'about' && <AboutPage />}
        {activePage === 'academics' && <AcademicsPage setActivePage={setActivePage} />}
        {activePage === 'admissions' && <AdmissionsPage setActivePage={setActivePage} />}
        {activePage === 'gallery' && <GalleryPage />}
        {activePage === 'contact' && <ContactPage />}
      </main>

      {/* Floating WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={() => openWhatsApp("Hello Greenview Academy, I am browsing your website and have a question. Please assist me.")}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20"></div>
        <MessageCircle size={32} className="relative z-10" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 whitespace-nowrap font-bold">
          Chat with us
        </span>
      </motion.button>

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
