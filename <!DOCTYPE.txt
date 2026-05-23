<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Al-Furqan Academy | Learn Quran & Arabic Online</title>
    <link href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        :root {
            --primary: #1e5631;
            --primary-light: #2d7a46;
            --secondary: #d4af37;
            --accent: #0f3d0f;
            --light: #f8f9f5;
            --dark: #1a1a1a;
            --white: #ffffff;
            --gradient: linear-gradient(135deg, #1e5631 0%, #2d7a46 100%);
        }
        
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        body {
            font-family: 'Poppins', sans-serif;
            background: var(--light);
            color: var(--dark);
            line-height: 1.7;
            overflow-x: hidden;
        }
        
        header {
            background: var(--gradient);
            color: var(--white);
            position: fixed;
            width: 100%;
            top: 0;
            z-index: 1000;
            box-shadow: 0 4px 20px rgba(0,0,0,0.15);
        }
        
        .header-top {
            background: rgba(0,0,0,0.2);
            padding: 8px 0;
            font-size: 0.85rem;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        .header-flex {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 15px 0;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 12px;
            font-size: 1.5rem;
            font-weight: 700;
        }
        
        .logo i { font-size: 2rem; color: var(--secondary); }
        
        nav ul {
            display: flex;
            list-style: none;
            gap: 30px;
        }
        
        nav a {
            color: var(--white);
            text-decoration: none;
            font-weight: 500;
            transition: 0.3s;
            position: relative;
        }
        
        nav a:hover { color: var(--secondary); }
        
        nav a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--secondary);
            transition: 0.3s;
        }
        
        nav a:hover::after { width: 100%; }
        
        .mobile-menu {
            display: none;
            font-size: 1.5rem;
            cursor: pointer;
        }
        
        .hero {
            margin-top: 80px;
            background: linear-gradient(135deg, rgba(30,86,49,0.95) 0%, rgba(15,61,15,0.95) 100%), 
                        url('https://images.unsplash.com/photo-1564769625905-50e93615e769?w=1920') center/cover;
            min-height: 90vh;
            display: flex;
            align-items: center;
            text-align: center;
            color: var(--white);
            position: relative;
            overflow: hidden;
        }
        
        .hero::before {
            content: '';
            position: absolute;
            top: -50%;
            right: -20%;
            width: 600px;
            height: 600px;
            background: radial-gradient(circle, rgba(212,175,55,0.1) 0%, transparent 70%);
            animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.5; }
            50% { transform: scale(1.2); opacity: 0.8; }
        }
        
        .hero-content h1 {
            font-family: 'Amiri', serif;
            font-size: 3.5rem;
            margin-bottom: 20px;
            line-height: 1.2;
        }
        
        .hero-content h1 span { color: var(--secondary); }
        
        .hero-content p {
            font-size: 1.2rem;
            max-width: 600px;
            margin: 0 auto 30px;
            opacity: 0.9;
        }
        
        .hero-badges {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 30px 0;
            flex-wrap: wrap;
        }
        
        .badge {
            background: rgba(255,255,255,0.15);
            backdrop-filter: blur(10px);
            padding: 10px 20px;
            border-radius: 50px;
            font-size: 0.9rem;
            border: 1px solid rgba(255,255,255,0.2);
        }
        
        .btn {
            display: inline-block;
            padding: 15px 40px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            transition: 0.3s;
            cursor: pointer;
            border: none;
            font-size: 1rem;
        }
        
        .btn-primary {
            background: var(--secondary);
            color: var(--dark);
        }
        
        .btn-primary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 30px rgba(212,175,55,0.4);
        }
        
        .btn-outline {
            background: transparent;
            color: var(--white);
            border: 2px solid var(--white);
            margin-left: 15px;
        }
        
        .btn-outline:hover {
            background: var(--white);
            color: var(--primary);
        }
        
        .stats-bar {
            background: var(--white);
            padding: 40px 0;
            box-shadow: 0 5px 30px rgba(0,0,0,0.08);
            position: relative;
            z-index: 10;
            margin-top: -50px;
            border-radius: 20px;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
        }
        
        .stats-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 30px;
            text-align: center;
        }
        
        .stat-item h3 {
            font-size: 2.5rem;
            color: var(--primary);
            font-weight: 700;
        }
        
        .stat-item p { color: #666; font-size: 0.9rem; }
        
        section { padding: 80px 0; }
        
        .section-header {
            text-align: center;
            margin-bottom: 60px;
        }
        
        .section-header h2 {
            font-family: 'Amiri', serif;
            font-size: 2.5rem;
            color: var(--primary);
            margin-bottom: 15px;
        }
        
        .section-header p {
            color: #666;
            max-width: 600px;
            margin: 0 auto;
        }
        
        .gold-line {
            width: 60px;
            height: 3px;
            background: var(--secondary);
            margin: 20px auto;
        }
        
        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 30px;
        }
        
        .service-card {
            background: var(--white);
            padding: 40px 30px;
            border-radius: 20px;
            text-align: center;
            transition: 0.3s;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            border: 1px solid rgba(0,0,0,0.05);
        }
        
        .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
        
        .service-icon {
            width: 80px;
            height: 80px;
            background: var(--gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 25px;
            font-size: 2rem;
            color: var(--white);
        }
        
        .service-card h3 {
            font-size: 1.3rem;
            margin-bottom: 15px;
            color: var(--primary);
        }
        
        .service-card p {
            color: #666;
            font-size: 0.95rem;
        }
        
        .pricing {
            background: linear-gradient(135deg, #f8f9f5 0%, #e8f0e8 100%);
        }
        
        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
            max-width: 1000px;
            margin: 0 auto;
        }
        
        .pricing-card {
            background: var(--white);
            border-radius: 20px;
            padding: 40px 30px;
            text-align: center;
            position: relative;
            transition: 0.3s;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }
        
        .pricing-card.featured {
            border: 2px solid var(--secondary);
            transform: scale(1.05);
        }
        
        .pricing-card.featured::before {
            content: 'MOST POPULAR';
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--secondary);
            color: var(--dark);
            padding: 5px 20px;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
        }
        
        .pricing-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
        
        .pricing-card.featured:hover {
            transform: scale(1.05) translateY(-5px);
        }
        
        .price {
            font-size: 3rem;
            font-weight: 700;
            color: var(--primary);
            margin: 20px 0;
        }
        
        .price span {
            font-size: 1rem;
            color: #666;
            font-weight: 400;
        }
        
        .pricing-features {
            list-style: none;
            margin: 30px 0;
        }
        
        .pricing-features li {
            padding: 10px 0;
            border-bottom: 1px solid #eee;
            color: #555;
        }
        
        .pricing-features li i {
            color: var(--primary);
            margin-right: 10px;
        }
        
        .registration {
            background: var(--gradient);
            color: var(--white);
            position: relative;
            overflow: hidden;
        }
        
        .registration::before {
            content: '';
            position: absolute;
            top: 0;
            right: 0;
            width: 400px;
            height: 400px;
            background: radial-gradient(circle, rgba(212,175,55,0.2) 0%, transparent 70%);
        }
        
        .reg-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 60px;
            align-items: center;
        }
        
        .reg-info h2 {
            font-family: 'Amiri', serif;
            font-size: 2.5rem;
            margin-bottom: 20px;
        }
        
        .reg-info p {
            opacity: 0.9;
            margin-bottom: 30px;
        }
        
        .contact-method {
            display: flex;
            align-items: center;
            gap: 15px;
            margin: 20px 0;
            padding: 15px;
            background: rgba(255,255,255,0.1);
            border-radius: 10px;
            backdrop-filter: blur(10px);
        }
        
        .contact-method i {
            font-size: 1.5rem;
            color: var(--secondary);
        }
        
        .form-card {
            background: var(--white);
            padding: 40px;
            border-radius: 20px;
            color: var(--dark);
            box-shadow: 0 20px 60px rgba(0,0,0,0.2);
        }
        
        .form-card h3 {
            font-size: 1.5rem;
            margin-bottom: 25px;
            color: var(--primary);
        }
        
        .form-group { margin-bottom: 20px; }
        
        .form-group label {
            display: block;
            margin-bottom: 8px;
            font-weight: 500;
            color: #555;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            width: 100%;
            padding: 14px;
            border: 2px solid #e0e0e0;
            border-radius: 10px;
            font-family: 'Poppins', sans-serif;
            transition: 0.3s;
            font-size: 0.95rem;
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
            outline: none;
            border-color: var(--primary);
        }
        
        .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        
        .knowledge-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
        }
        
        .knowledge-card {
            background: var(--white);
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
            transition: 0.3s;
        }
        
        .knowledge-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.1);
        }
        
        .knowledge-img {
            height: 180px;
            background: var(--gradient);
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 3rem;
            color: var(--white);
        }
        
        .knowledge-content { padding: 25px; }
        
        .knowledge-content h3 {
            color: var(--primary);
            margin-bottom: 10px;
            font-size: 1.2rem;
        }
        
        .knowledge-content p {
            color: #666;
            font-size: 0.9rem;
            margin-bottom: 15px;
        }
        
        .read-more {
            color: var(--primary);
            text-decoration: none;
            font-weight: 600;
            display: inline-flex;
            align-items: center;
            gap: 5px;
        }
        
        .testimonials {
            background: linear-gradient(135deg, #f8f9f5 0%, #e8f0e8 100%);
        }
        
        .testimonial-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 30px;
        }
        
        .testimonial-card {
            background: var(--white);
            padding: 30px;
            border-radius: 20px;
            position: relative;
            box-shadow: 0 5px 20px rgba(0,0,0,0.05);
        }
        
        .testimonial-card::before {
            content: '"';
            font-size: 4rem;
            color: var(--secondary);
            position: absolute;
            top: 10px;
            left: 20px;
            opacity: 0.3;
            font-family: 'Amiri', serif;
        }
        
        .testimonial-text {
            margin-bottom: 20px;
            color: #555;
            font-style: italic;
            padding-top: 20px;
        }
        
        .testimonial-author {
            display: flex;
            align-items: center;
            gap: 15px;
        }
        
        .author-avatar {
            width: 50px;
            height: 50px;
            background: var(--gradient);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            font-weight: 700;
        }
        
        .author-info h4 {
            color: var(--primary);
            font-size: 1rem;
        }
        
        .author-info p {
            color: #888;
            font-size: 0.85rem;
        }
        
        .stars {
            color: var(--secondary);
            margin-top: 5px;
        }
        
        footer {
            background: var(--dark);
            color: var(--white);
            padding: 60px 0 20px;
        }
        
        .footer-grid {
            display: grid;
            grid-template-columns: 2fr 1fr 1fr 1fr;
            gap: 40px;
            margin-bottom: 40px;
        }
        
        .footer-brand h3 {
            font-family: 'Amiri', serif;
            font-size: 1.5rem;
            margin-bottom: 15px;
            color: var(--secondary);
        }
        
        .footer-brand p {
            opacity: 0.7;
            font-size: 0.9rem;
            line-height: 1.8;
        }
        
        .footer-links h4 {
            color: var(--secondary);
            margin-bottom: 20px;
            font-size: 1.1rem;
        }
        
        .footer-links ul { list-style: none; }
        
        .footer-links li { margin-bottom: 12px; }
        
        .footer-links a {
            color: rgba(255,255,255,0.7);
            text-decoration: none;
            transition: 0.3s;
        }
        
        .footer-links a:hover { color: var(--secondary); }
        
        .social-links {
            display: flex;
            gap: 15px;
            margin-top: 20px;
        }
        
        .social-links a {
            width: 40px;
            height: 40px;
            background: rgba(255,255,255,0.1);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--white);
            transition: 0.3s;
        }
        
        .social-links a:hover {
            background: var(--secondary);
            color: var(--dark);
        }
        
        .footer-bottom {
            border-top: 1px solid rgba(255,255,255,0.1);
            padding-top: 20px;
            text-align: center;
            opacity: 0.6;
            font-size: 0.85rem;
        }
        
        @media (max-width: 768px) {
            .mobile-menu { display: block; }
            
            nav {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                background: var(--primary);
                padding: 20px;
            }
            
            nav.active { display: block; }
            
            nav ul {
                flex-direction: column;
                gap: 15px;
            }
            
            .hero {
                margin-top: 60px;
                min-height: 70vh;
            }
            
            .hero-content h1 { font-size: 2rem; }
            
            .stats-grid { grid-template-columns: repeat(2, 1fr); }
            
            .reg-container { grid-template-columns: 1fr; }
            
            .form-row { grid-template-columns: 1fr; }
            
            .footer-grid { grid-template-columns: 1fr; }
            
            .pricing-card.featured { transform: scale(1); }
        }
        
        .fade-in {
            opacity: 0;
            transform: translateY(30px);
            transition: 0.8s ease-out;
        }
        
        .fade-in.visible {
            opacity: 1;
            transform: translateY(0);
        }
    </style>
</head>
<body>
    <header>
        <div class="header-top">
            <div class="container">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span><i class="fas fa-phone"></i> WhatsApp: +60 1X-XXX XXXX</span>
                    <span><i class="fas fa-envelope"></i> alfurqan.academy@email.com</span>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="header-flex">
                <div class="logo">
                    <i class="fas fa-mosque"></i>
                    <span>Al-Furqan Academy</span>
                </div>
                <div class="mobile-menu" onclick="toggleMenu()">
                    <i class="fas fa-bars"></i>
                </div>
                <nav id="mainNav">
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#knowledge">Knowledge</a></li>
                        <li><a href="#register">Register</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <section class="hero" id="home">
        <div class="container">
            <div class="hero-content">
                <div class="hero-badges">
                    <div class="badge"><i class="fas fa-check-circle"></i> Hafiz Al-Quran</div>
                    <div class="badge"><i class="fas fa-graduation-cap"></i> MA Arabic Studies</div>
                    <div class="badge"><i class="fas fa-globe"></i> Online Worldwide</div>
                    <div class="badge"><i class="fas fa-tag"></i> From RM40/session</div>
                </div>
                <h1>Learn <span>Quran</span> & <span>Arabic</span><br>From a Qualified Teacher</h1>
                <p>Personalized online classes for all levels. Whether you want to read Quran with proper Tajweed, memorize it, or master Arabic language — start your journey today from Kuala Lumpur to the world.</p>
                <div>
                    <a href="#register" class="btn btn-primary">Start Learning Now</a>
                    <a href="#pricing" class="btn btn-outline">View Pricing</a>
                </div>
            </div>
        </div>
    </section>

    <div class="stats-bar">
        <div class="container">
            <div class="stats-grid">
                <div class="stat-item">
                    <h3>5+</h3>
                    <p>Years Teaching</p>
                </div>
                <div class="stat-item">
                    <h3>100%</h3>
                    <p>Quran Memorized</p>
                </div>
                <div class="stat-item">
                    <h3>MA</h3>
                    <p>Arabic Degree</p>
                </div>
                <div class="stat-item">
                    <h3>Online</h3>
                    <p>Flexible Schedule</p>
                </div>
            </div>
        </div>
    </div>

    <section id="services">
        <div class="container">
            <div class="section-header fade-in">
                <h2>What You Can Learn</h2>
                <div class="gold-line"></div>
                <p>Comprehensive Islamic education tailored to your level and goals, taught with patience and dedication.</p>
            </div>
            <div class="services-grid">
                <div class="service-card fade-in">
                    <div class="service-icon">
                        <i class="fas fa-book-open"></i>
                    </div>
                    <h3>Quran Reading (Tajweed)</h3>
                    <p>Learn to read Quran with proper pronunciation and Tajweed rules. Perfect for beginners and those who want to correct their recitation.</p>
                </div>
                <div class="service-card fade-in">
                    <div class="service-icon">
                        <i class="fas fa-brain"></i>
                    </div>
                    <h3>Quran Memorization (Hifz)</h3>
                    <p>Structured memorization program with revision techniques. For those who dream of becoming Hafiz/Hafizah with proper Tajweed.</p>
                </div>
                <div class="service-card fade-in">
                    <div class="service-icon">
                        <i class="fas fa-language"></i>
                    </div>
                    <h3>Arabic Language</h3>
                    <p>From basic alphabet to advanced grammar (Nahw & Sarf). Learn Fusha Arabic to understand Quran and Islamic texts directly.</p>
                </div>
                <div class="service-card fade-in">
                    <div class="service-icon">
                        <i class="fas fa-pray"></i>
                    </div>
                    <h3>Islamic Studies</h3>
                    <p>Fiqh, Aqidah, Hadith, and Tafsir. Deepen your understanding of Islam with authentic knowledge from qualified sources.</p>
                </div>
                <div class="service-card fade-in">
                    <div class="service-icon">
                        <i class="fas fa-child"></i>
                    </div>
                    <h3>Kids Classes</h3>
                    <p>Fun, interactive sessions designed for children. Learn Quran, Arabic, and Islamic manners in an engaging way.</p>
                </div>
                <div class="service-card fade-in">
                    <div class="service-icon">
                        <i class="fas fa-users"></i>
                    </div>
                    <h3>Group Sessions</h3>
                    <p>Learn with family or friends at discounted rates. Up to 4 students per session for interactive group learning.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="pricing" id="pricing">
        <div class="container">
            <div class="section-header fade-in">
                <h2>Investment in Your Akhirah</h2>
                <div class="gold-line"></div>
                <p>Affordable pricing because knowledge of Quran should be accessible to everyone. Choose what fits your goals.</p>
            </div>
            <div class="pricing-grid">
                <div class="pricing-card fade-in">
                    <h3>Trial Session</h3>
                    <div class="price">RM20<span>/30 mins</span></div>
                    <p>Perfect to experience the class</p>
                    <ul class="pricing-features">
                        <li><i class="fas fa-check"></i> 30-minute assessment</li>
                        <li><i class="fas fa-check"></i> Level evaluation</li>
                        <li><i class="fas fa-check"></i> Custom study plan</li>
                        <li><i class="fas fa-check"></i> No commitment</li>
                    </ul>
                    <a href="#register" class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);">Book Trial</a>
                </div>
                
                <div class="pricing-card featured fade-in">
                    <h3>Beginner Package</h3>
                    <div class="price">RM150<span>/month</span></div>
                    <p>Most popular for new students</p>
                    <ul class="pricing-features">
                        <li><i class="fas fa-check"></i> 4 classes per month</li>
                        <li><i class="fas fa-check"></i> 45 minutes per class</li>
                        <li><i class="fas fa-check"></i> Quran + Basic Tajweed</li>
                        <li><i class="fas fa-check"></i> Weekly homework</li>
                        <li><i class="fas fa-check"></i> Progress tracking</li>
                        <li><i class="fas fa-check"></i> WhatsApp support</li>
                    </ul>
                    <a href="#register" class="btn btn-primary">Get Started</a>
                </div>
                
                <div class="pricing-card fade-in">
                    <h3>Intensive Package</h3>
                    <div class="price">RM280<span>/month</span></div>
                    <p>For serious learners</p>
                    <ul class="pricing-features">
                        <li><i class="fas fa-check"></i> 8 classes per month</li>
                        <li><i class="fas fa-check"></i> 60 minutes per class</li>
                        <li><i class="fas fa-check"></i> Quran + Arabic + Islamic Studies</li>
                        <li><i class="fas fa-check"></i> Memorization techniques</li>
                        <li><i class="fas fa-check"></i> Priority scheduling</li>
                        <li><i class="fas fa-check"></i> Recording of classes</li>
                    </ul>
                    <a href="#register" class="btn btn-outline" style="color: var(--primary); border-color: var(--primary);">Go Intensive</a>
                </div>
            </div>
            <div style="text-align: center; margin-top: 40px; color: #666;">
                <p><i class="fas fa-info-circle"></i> Group classes (2-4 students): 30% discount per person | Family package available</p>
            </div>
        </div>
    </section>

    <section id="knowledge">
        <div class="container">
            <div class="section-header fade-in">
                <h2>Islamic Knowledge Hub</h2>
                <div class="gold-line"></div>
                <p>Free articles and resources to deepen your understanding of Islam. New content added regularly.</p>
            </div>
            <div class="knowledge-grid">
                <div class="knowledge-card fade-in">
                    <div class="knowledge-img">
                        <i class="fas fa-book-quran"></i>
                    </div>
                    <div class="knowledge-content">
                        <h3>Introduction to Tajweed</h3>
                        <p>Learn the basic rules of Tajweed that every Muslim should know to read Quran correctly. Includes Makharij (articulation points) and Sifat (qualities of letters).</p>
                        <a href="#" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div class="knowledge-card fade-in">
                    <div class="knowledge-img">
                        <i class="fas fa-star-and-crescent"></i>
                    </div>
                    <div class="knowledge-content">
                        <h3>Five Pillars of Islam</h3>
                        <p>A comprehensive guide to the foundation of Islamic practice: Shahada, Salah, Zakat, Sawm, and Hajj. Perfect for new Muslims and those seeking revision.</p>
                        <a href="#" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div class="knowledge-card fade-in">
                    <div class="knowledge-img">
                        <i class="fas fa-mosque"></i>
                    </div>
                    <div class="knowledge-content">
                        <h3>Understanding Salah</h3>
                        <p>The spiritual and physical dimensions of prayer. Learn the meaning behind each movement and supplication to transform your Salah experience.</p>
                        <a href="#" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div class="knowledge-card fade-in">
                    <div class="knowledge-img">
                        <i class="fas fa-heart"></i>
                    </div>
                    <div class="knowledge-content">
                        <h3>99 Names of Allah</h3>
                        <p>Explore the Beautiful Names of Allah (Asmaul Husna) with meanings and benefits. Memorization guide and daily reflection prompts included.</p>
                        <a href="#" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div class="knowledge-card fade-in">
                    <div class="knowledge-img">
                        <i class="fas fa-hand-holding-heart"></i>
                    </div>
                    <div class="knowledge-content">
                        <h3>Duas for Daily Life</h3>
                        <p>Essential supplications from Quran and Sunnah for every situation: morning, evening, eating, traveling, and seeking protection.</p>
                        <a href="#" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                
                <div class="knowledge-card fade-in">
                    <div class="knowledge-img">
                        <i class="fas fa-language"></i>
                    </div>
                    <div class="knowledge-content">
                        <h3>Arabic for Quran Understanding</h3>
                        <p>Key Arabic vocabulary that appears frequently in Quran. Learn 100 words that unlock 50% of Quranic text understanding.</p>
                        <a href="#" class="read-more">Read Article <i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="testimonials">
        <div class="container">
            <div class="section-header fade-in">
                <h2>What Students Say</h2>
                <div class="gold-line"></div>
                <p>Alhamdulillah, blessed to help students from Malaysia and around the world.</p>
            </div>
            <div class="testimonial-grid">
                <div class="testimonial-card fade-in">
                    <div class="testimonial-text">
                        My son was struggling to read Quran properly for years. After just 2 months of classes, his Tajweed improved dramatically. The teacher is patient and makes learning enjoyable.
                    </div>
                    <div class="testimonial-author">
                        <div class="author-avatar">S</div>
                        <div class="author-info">
                            <h4>Sarah A.</h4>
                            <p>Kuala Lumpur, Malaysia</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial-card fade-in">
                    <div class="testimonial-text">
                        I always wanted to understand Quran in Arabic instead of relying on translations. The Arabic classes are well-structured and the teacher explains grammar in a simple way. Highly recommended!
                    </div>
                    <div class="testimonial-author">
                        <div class="author-avatar">A</div>
                        <div class="author-info">
                            <h4>Ahmad R.</h4>
                            <p>Singapore</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="testimonial-card fade-in">
                    <div class="testimonial-text">
                        As a new Muslim, I needed someone who could teach me from zero. The trial class convinced me immediately. Now I can read Quran and understand my prayers. May Allah bless this academy.
                    </div>
                    <div class="testimonial-author">
                        <div class="author-avatar">M</div>
                        <div class="author-info">
                            <h4>Maryam K.</h4>
                            <p>London, UK</p>
                            <div class="stars">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="registration" id="register">
        <div class="container">
            <div class="reg-container">
                <div class="reg-info fade-in">
                    <h2>Start Your Journey Today</h2>
                    <p>Fill out the form and I will contact you within 24 hours via WhatsApp to discuss your goals, schedule your trial class, and answer any questions.</p>
                    
                    <div class="contact-method">
                        <i class="fab fa-whatsapp"></i>
                        <div>
                            <strong>WhatsApp</strong><br>
                            +60 1X-XXX XXXX
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <i class="fas fa-envelope"></i>
                        <div>
                            <strong>Email</strong><br>
                            alfurqan.academy@email.com
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <i class="fas fa-video"></i>
                        <div>
                            <strong>Platform</strong><br>
                            Zoom, Google Meet, or your preference
                        </div>
                    </div>
                    
                    <div class="contact-method">
                        <i class="fas fa-clock"></i>
                        <div>
                            <strong>Availability</strong><br>
                            Flexible hours including weekends
                        </div>
                    </div>
                </div>
                
                <div class="form-card fade-in">
                    <h3><i class="fas fa-user-plus"></i> Register for Classes</h3>
                    <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
                        <div class="form-row">
                            <div class="form-group">
                                <label>Full Name *</label>
                                <input type="text" name="name" placeholder="Your name" required>
                            </div>
                            <div class="form-group">
                                <label>WhatsApp Number *</label>
                                <input type="tel" name="phone" placeholder="+60 XX-XXX XXXX" required>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="your@email.com">
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>Country/Location *</label>
                                <input type="text" name="location" placeholder="e.g., Kuala Lumpur, Malaysia" required>
                            </div>
                            <div class="form-group">
                                <label>Age Group *</label>
                                <select name="age_group" required>
                                    <option value="">Select age</option>
                                    <option value="child">Child (5-12)</option>
                                    <option value="teen">Teenager (13-17)</option>
                                    <option value="adult">Adult (18+)</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label>Class Type *</label>
                                <select name="class_type" required>
                                    <option value="">Select class</option>
                                    <option value="trial">Trial Session (RM20)</option>
                                    <option value="quran_reading">Quran Reading/Tajweed</option>
                                    <option value="quran_hifz">Quran Memorization</option>
                                    <option value="arabic">Arabic Language</option>
                                    <option value="islamic_studies">Islamic Studies</option>
                                    <option value="package">Beginner Package</option>
                                    <option value="intensive">Intensive Package</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Preferred Time *</label>
                                <select name="time" required>
                                    <option value="">Select time</option>
                                    <option value="morning">Morning (9AM-12PM)</option>
                                    <option value="afternoon">Afternoon (12PM-5PM)</option>
                                    <option value="evening">Evening (5PM-9PM)</option>
                                    <option value="weekend">Weekend Only</option>
                                    <option value="flexible">Flexible</option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-group">
                            <label>Current Level *</label>
                            <select name="level" required>
                                <option value="">Select level</option>
                                <option value="zero">Complete Beginner (No Arabic/Quran)</option>
                                <option value="basic">Can Read Arabic Letters</option>
                                <option value="intermediate">Can Read Quran Slowly</option>
                                <option value="advanced">Can Read but Need Tajweed</option>
                                <option value="hifz">Want to Memorize</option>
                            </select>
                        </div>
                        
                        <div class="form-group">
                            <label>Goals & Notes</label>
                            <textarea name="message" rows="3" placeholder="Tell me about your goals, preferred days, or any questions..."></textarea>
                        </div>
                        
                        <button type="submit" class="btn btn-primary" style="width: 100%;">
                            <i class="fas fa-paper-plane"></i> Submit Registration
                        </button>
                        
                        <p style="text-align: center; margin-top: 15px; font-size: 0.85rem; color: #888;">
                            <i class="fas fa-lock"></i> Your information is kept private and secure
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <h3><i class="fas fa-mosque"></i> Al-Furqan Academy</h3>
                    <p>Dedicated to spreading the knowledge of Quran and Arabic to Muslims worldwide. Based in Kuala Lumpur, Malaysia — teaching students across the globe through online platforms.</p>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-telegram"></i></a>
                        <a href="#"><i class="fab fa-youtube"></i></a>
                    </div>
                </div>
                
                <div class="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#services">Our Services</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#knowledge">Knowledge Hub</a></li>
                        <li><a href="#register">Register</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h4>Classes</h4>
                    <ul>
                        <li><a href="#">Quran Tajweed</a></li>
                        <li><a href="#">Quran Hifz</a></li>
                        <li><a href="#">Arabic Language</a></li>
                        <li><a href="#">Islamic Studies</a></li>
                        <li><a href="#">Kids Program</a></li>
                    </ul>
                </div>
                
                <div class="footer-links">
                    <h4>Resources</h4>
                    <ul>
                        <li><a href="#">Tajweed Guide</a></li>
                        <li><a href="#">Arabic Basics</a></li>
                        <li><a href="#">Daily Duas</a></li>
                        <li><a href="#">Islamic Articles</a></li>
                        <li><a href="#">Student Portal</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p> Al-Furqan Academy. All rights reserved. | Designed with <i class="fas fa-heart" style="color: var(--secondary);"></i> for the Ummah</p>
            </div>
        </div>
    </footer>

    <script>
        function toggleMenu() {
            document.getElementById('mainNav').classList.toggle('active');
        }
        
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    document.getElementById('mainNav').classList.remove('active');
                }
            });
        });
        
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
        
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.2)';
            } else {
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            }
        });
    </script>
</body>
</html>
