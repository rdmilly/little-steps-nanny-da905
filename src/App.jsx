import { useState } from 'react'

export default function App() {
  const [showPortal, setShowPortal] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      id: 1,
      icon: '🌟',
      title: 'Full-Day Care',
      price: '$25/hr',
      description: 'Comprehensive care from morning through evening, including meals, activities, and naptime.',
      features: ['8+ hours', 'Meals included', 'Educational activities', 'Daily report']
    },
    {
      id: 2,
      icon: '🌙',
      title: 'Evening Care',
      price: '$22/hr',
      description: 'Perfect for date nights or evening events. Includes dinner, bath time, and bedtime routine.',
      features: ['4-6 hours', 'Dinner prep', 'Bedtime routine', 'Light housekeeping']
    },
    {
      id: 3,
      icon: '📚',
      title: 'After School',
      price: '$20/hr',
      description: 'Homework help, snacks, and supervised play until parents get home.',
      features: ['3-5 hours', 'Homework help', 'Healthy snacks', 'Activity planning']
    },
    {
      id: 4,
      icon: '🎉',
      title: 'Special Events',
      price: '$30/hr',
      description: 'Birthday parties, holidays, or any special occasion requiring extra care.',
      features: ['Flexible hours', 'Party assistance', 'Multiple children', 'Weekend available']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah M.',
      role: 'Mother of 2',
      text: 'Finding Little Steps was the best decision we made. Our kids absolutely adore their caregiver!',
      avatar: '👩‍🦰'
    },
    {
      name: 'David & Lisa',
      role: 'Parents of toddler',
      text: 'The daily reports and photos give us such peace of mind. Professional and caring service.',
      avatar: '👨‍👩‍👦'
    },
    {
      name: 'Jennifer K.',
      role: 'Working mom',
      text: 'Flexible scheduling that actually works with my unpredictable hours. A lifesaver!',
      avatar: '👩‍💼'
    }
  ]

  return (
    <div style={{ 
      fontFamily: "'Quicksand', sans-serif",
      minHeight: '100vh',
      background: 'linear-gradient(180deg, #FFFBEB 0%, #FFF 50%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Floating Gradient Orbs */}
      <div style={{
        position: 'fixed',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,217,61,0.3) 0%, transparent 70%)',
        animation: 'float 8s ease-in-out infinite',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        bottom: '-150px',
        left: '-100px',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(110,207,189,0.25) 0%, transparent 70%)',
        animation: 'float 10s ease-in-out infinite reverse',
        pointerEvents: 'none',
        zIndex: 0
      }} />
      <div style={{
        position: 'fixed',
        top: '40%',
        left: '60%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(255,143,163,0.2) 0%, transparent 70%)',
        animation: 'float 12s ease-in-out infinite',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@500;600;700;800&family=Quicksand:wght@400;500;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(5deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .service-card:hover {
          transform: translateY(-8px) !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.12) !important;
        }
        
        .btn-primary:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 25px rgba(255,143,163,0.4);
        }
        
        .btn-secondary:hover {
          background: #FFD93D !important;
          color: #2D3047 !important;
        }
      `}</style>

      {/* Header */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,251,235,0.9)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(0,0,0,0.05)',
        padding: '16px 40px'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '32px' }}>👣</span>
            <span style={{ 
              fontFamily: "'Nunito', sans-serif",
              fontSize: '24px',
              fontWeight: 800,
              background: 'linear-gradient(135deg, #FF8FA3, #FFD93D)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Little Steps
            </span>
          </div>
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <a href="#services" style={{ color: '#2D3047', textDecoration: 'none', fontWeight: 600 }}>Services</a>
            <a href="#booking" style={{ color: '#2D3047', textDecoration: 'none', fontWeight: 600 }}>Book Now</a>
            <a href="#testimonials" style={{ color: '#2D3047', textDecoration: 'none', fontWeight: 600 }}>Reviews</a>
            <button 
              onClick={() => setShowPortal(true)}
              style={{
                background: 'linear-gradient(135deg, #FF8FA3, #FF6B8A)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '50px',
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Nunito', sans-serif",
                transition: 'all 0.3s ease'
              }}
              className="btn-primary"
            >
              Client Portal
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '80px 40px 120px',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '60px',
        alignItems: 'center',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ animation: 'fadeInUp 0.8s ease-out' }}>
          <div style={{
            display: 'inline-block',
            background: 'linear-gradient(135deg, #C4B5FD, #A78BFA)',
            color: 'white',
            padding: '8px 20px',
            borderRadius: '50px',
            fontSize: '14px',
            fontWeight: 600,
            marginBottom: '24px'
          }}>
            ✨ Trusted by 100+ families
          </div>
          <h1 style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: '56px',
            fontWeight: 800,
            color: '#2D3047',
            lineHeight: 1.1,
            marginBottom: '24px'
          }}>
            Caring for your
            <span style={{
              display: 'block',
              background: 'linear-gradient(135deg, #FF8FA3, #FFD93D, #6ECFBD)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              little ones
            </span>
          </h1>
          <p style={{
            fontSize: '20px',
            color: '#6B7280',
            lineHeight: 1.7,
            marginBottom: '40px'
          }}>
            Professional, loving childcare that fits your family's needs. 
            Flexible scheduling, transparent pricing, and a nanny who 
            becomes part of your family.
          </p>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a 
              href="#booking"
              style={{
                background: 'linear-gradient(135deg, #6ECFBD, #4ECDC4)',
                color: 'white',
                padding: '18px 36px',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                fontFamily: "'Nunito', sans-serif",
                fontSize: '18px',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(110,207,189,0.3)'
              }}
              className="btn-primary"
            >
              Book a Meet & Greet
            </a>
            <a 
              href="#services"
              style={{
                background: 'transparent',
                color: '#2D3047',
                padding: '18px 36px',
                borderRadius: '50px',
                fontWeight: 700,
                textDecoration: 'none',
                fontFamily: "'Nunito', sans-serif",
                fontSize: '18px',
                border: '2px solid #2D3047',
                transition: 'all 0.3s ease'
              }}
              className="btn-secondary"
            >
              View Services
            </a>
          </div>
        </div>
        
        <div style={{ 
          position: 'relative',
          animation: 'fadeInUp 0.8s ease-out 0.2s backwards'
        }}>
          <div style={{
            background: 'linear-gradient(135deg, #FFD93D, #FF8FA3)',
            borderRadius: '30px',
            padding: '40px',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px'
            }}>
              {['👶', '🧸', '🎨', '📖'].map((emoji, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.9)',
                  borderRadius: '20px',
                  padding: '30px',
                  textAlign: 'center',
                  animation: `bounce 2s ease-in-out ${i * 0.2}s infinite`
                }}>
                  <span style={{ fontSize: '48px' }}>{emoji}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Floating badges */}
          <div style={{
            position: 'absolute',
            top: '-20px',
            right: '-20px',
            background: 'white',
            padding: '16px 24px',
            borderRadius: '16px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ fontSize: '24px' }}>⭐</span>
            <div>
              <div style={{ fontWeight: 700, color: '#2D3047' }}>5.0 Rating</div>
              <div style={{ fontSize: '12px', color: '#6B7280' }}>50+ reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        background: 'white',
        padding: '100px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '42px',
              fontWeight: 800,
              color: '#2D3047',
              marginBottom: '16px'
            }}>
              Services that fit your life
            </h2>
            <p style={{ fontSize: '18px', color: '#6B7280', maxWidth: '600px', margin: '0 auto' }}>
              From regular weekly care to date night coverage, I'm here to help your family thrive.
            </p>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '24px'
          }}>
            {services.map((service) => (
              <div 
                key={service.id}
                className="service-card"
                onClick={() => setSelectedService(service)}
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '32px',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
                  border: '1px solid rgba(0,0,0,0.05)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                <span style={{ 
                  fontSize: '48px', 
                  display: 'block', 
                  marginBottom: '20px' 
                }}>
                  {service.icon}
                </span>
                <h3 style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: '22px',
                  fontWeight: 700,
                  color: '#2D3047',
                  marginBottom: '8px'
                }}>
                  {service.title}
                </h3>
                <div style={{
                  fontSize: '28px',
                  fontWeight: 800,
                  background: 'linear-gradient(135deg, #6ECFBD, #4ECDC4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '16px'
                }}>
                  {service.price}
                </div>
                <p style={{
                  fontSize: '14px',
                  color: '#6B7280',
                  lineHeight: 1.6,
                  marginBottom: '20px'
                }}>
                  {service.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={{
                      fontSize: '13px',
                      color: '#2D3047',
                      padding: '6px 0',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}>
                      <span style={{ color: '#6ECFBD' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" style={{
        background: 'linear-gradient(180deg, #FFFBEB 0%, #FFF 100%)',
        padding: '100px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ 
          maxWidth: '900px', 
          margin: '0 auto',
          background: 'white',
          borderRadius: '32px',
          padding: '60px',
          boxShadow: '0 20px 60px rgba(0,0,0,0.08)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '42px',
              fontWeight: 800,
              color: '#2D3047',
              marginBottom: '16px'
            }}>
              Book Your Care
            </h2>
            <p style={{ fontSize: '18px', color: '#6B7280' }}>
              Schedule a free meet & greet or book your first session
            </p>
          </div>

          <div style={{
            background: '#F8FAFC',
            borderRadius: '20px',
            padding: '32px',
            marginBottom: '32px'
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: '8px',
              marginBottom: '24px'
            }}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                <div key={i} style={{
                  textAlign: 'center',
                  fontWeight: 600,
                  color: '#6B7280',
                  fontSize: '14px',
                  padding: '8px'
                }}>
                  {day}
                </div>
              ))}
              {Array.from({ length: 35 }, (_, i) => {
                const day = i - 2;
                const isValid = day > 0 && day <= 31;
                const isAvailable = isValid && ![6, 7, 13, 14, 20, 21, 27, 28].includes(day);
                return (
                  <div 
                    key={i}
                    style={{
                      textAlign: 'center',
                      padding: '12px',
                      borderRadius: '12px',
                      fontWeight: 600,
                      cursor: isAvailable ? 'pointer' : 'default',
                      background: isAvailable ? 'white' : 'transparent',
                      color: isValid ? (isAvailable ? '#2D3047' : '#D1D5DB') : 'transparent',
                      border: isAvailable ? '2px solid #E5E7EB' : 'none',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    {isValid ? day : ''}
                  </div>
                );
              })}
            </div>
            <p style={{ 
              textAlign: 'center', 
              fontSize: '14px', 
              color: '#6B7280' 
            }}>
              🟢 Available &nbsp;&nbsp; ⚪ Booked
            </p>
          </div>

          <button style={{
            width: '100%',
            background: 'linear-gradient(135deg, #FF8FA3, #FF6B8A)',
            color: 'white',
            border: 'none',
            padding: '20px',
            borderRadius: '16px',
            fontSize: '18px',
            fontWeight: 700,
            cursor: 'pointer',
            fontFamily: "'Nunito', sans-serif",
            transition: 'all 0.3s ease'
          }}
          className="btn-primary"
          >
            Schedule Free Consultation →
          </button>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" style={{
        background: 'white',
        padding: '100px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontFamily: "'Nunito', sans-serif",
              fontSize: '42px',
              fontWeight: 800,
              color: '#2D3047',
              marginBottom: '16px'
            }}>
              What families are saying
            </h2>
          </div>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '32px'
          }}>
            {testimonials.map((testimonial, i) => (
              <div key={i} style={{
                background: 'linear-gradient(135deg, #FFFBEB, #FFF)',
                borderRadius: '24px',
                padding: '40px',
                border: '1px solid rgba(255,217,61,0.3)'
              }}>
                <span style={{ fontSize: '64px', display: 'block', marginBottom: '24px' }}>
                  {testimonial.avatar}
                </span>
                <p style={{
                  fontSize: '18px',
                  color: '#2D3047',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <div style={{ fontWeight: 700, color: '#2D3047' }}>{testimonial.name}</div>
                  <div style={{ fontSize: '14px', color: '#6B7280' }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#2D3047',
        color: 'white',
        padding: '60px 40px',
        position: 'relative',
        zIndex: 1
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '60px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <span style={{ fontSize: '32px' }}>👣</span>
              <span style={{ 
                fontFamily: "'Nunito', sans-serif",
                fontSize: '24px',
                fontWeight: 800
              }}>
                Little Steps
              </span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
              Professional, loving childcare that becomes part of your family. 
              Serving families with flexible, transparent, and caring service.
            </p>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '20px' }}>Services</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Full-Day Care', 'Evening Care', 'After School', 'Special Events'].map((item, i) => (
                <li key={i} style={{ marginBottom: '12px' }}>
                  <a href="#services" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '20px' }}>Contact</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px', color: 'rgba(255,255,255,0.7)' }}>📧 hello@littlesteps.com</li>
              <li style={{ marginBottom: '12px', color: 'rgba(255,255,255,0.7)' }}>📱 (555) 123-4567</li>
              <li style={{ marginBottom: '12px', color: 'rgba(255,255,255,0.7)' }}>📍 Your Local Area</li>
            </ul>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, marginBottom: '20px' }}>Follow Along</h4>
            <div style={{ display: 'flex', gap: '16px' }}>
              {['📘', '📸', '🐦'].map((icon, i) => (
                <span key={i} style={{ 
                  fontSize: '24px', 
                  cursor: 'pointer',
                  opacity: 0.8,
                  transition: 'opacity 0.2s'
                }}>
                  {icon}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div style={{
          maxWidth: '1200px',
          margin: '48px auto 0',
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          color: 'rgba(255,255,255,0.4)',
          fontSize: '14px'
        }}>
          <span>© 2025 Little Steps Nanny. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Privacy</a>
            <a href="#" style={{ color: 'rgba(255,255,255,0.4)', textDecoration: 'none' }}>Terms</a>
          </div>
        </div>
      </footer>

      {/* Client Portal Modal */}
      {showPortal && (
        <div 
          onClick={() => setShowPortal(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
            backdropFilter: 'blur(4px)'
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'white',
              borderRadius: '32px',
              padding: '48px',
              maxWidth: '480px',
              width: '90%',
              boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
            }}
          >
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span style={{ fontSize: '64px', display: 'block', marginBottom: '16px' }}>👣</span>
              <h3 style={{
                fontFamily: "'Nunito', sans-serif",
                fontSize: '28px',
                fontWeight: 800,
                color: '#2D3047',
                marginBottom: '8px'
              }}>
                Client Portal
              </h3>
              <p style={{ color: '#6B7280' }}>Sign in to access your family dashboard</p>
            </div>
            
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: 600,
                  color: '#2D3047' 
                }}>
                  Email
                </label>
                <input 
                  type="email"
                  placeholder="your@email.com"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '2px solid #E5E7EB',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                />
              </div>
              <div style={{ marginBottom: '32px' }}>
                <label style={{ 
                  display: 'block', 
                  marginBottom: '8px', 
                  fontWeight: 600,
                  color: '#2D3047' 
                }}>
                  Password
                </label>
                <input 
                  type="password"
                  placeholder="••••••••"
                  style={{
                    width: '100%',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: '2px solid #E5E7EB',
                    fontSize: '16px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                />
              </div>
              <button 
                type="submit"
                style={{
                  width: '100%',
                  background: 'linear-gradient(135deg, #6ECFBD, #4ECDC4)',
                  color: 'white',
                  border: 'none',
                  padding: '18px',
                  borderRadius: '12px',
                  fontSize: '18px',
                  fontWeight: 700,
                  cursor: 'pointer',
                  fontFamily: "'Nunito', sans-serif"
                }}
              >
                Sign In
              </button>
            </form>
            
            <p style={{ 
              textAlign: 'center', 
              marginTop: '24px', 
              color: '#6B7280',
              fontSize: '14px' 
            }}>
              New family? <a href="#booking" onClick={() => setShowPortal(false)} style={{ color: '#FF8FA3', fontWeight: 600 }}>Book a consultation</a>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
