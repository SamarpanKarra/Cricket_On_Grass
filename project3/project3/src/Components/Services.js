import React from 'react';
import { useParams } from 'react-router-dom';
import Image from "../images/box-cricket.png"
import { Container } from 'react-bootstrap';
const Services = () => {
  const { id } = useParams();
  const styles = {
    minHeight: "65vh",
    position: "relative",
    backgroundSize: "cover",
    backgroundImage: `url(${Image})`,
  };
  const contentList = [
    {
      id: 1, title: 'Box Cricket Services', content: 'Sharpen your box cricket skills with our premium practice nets, offering an immersive training environment for intensive sessions. ',
      Title: " Elevate Your Box Cricket Skills with Elite Cricket Services' Premium Box Cricket Facilities ",
      Content: "Welcome to Elite Cricket Services, your premier destination for mastering the art of box cricket. Our Box Cricket Services page introduces you to a world of unparalleled training experiences, meticulously designed to refine your skills and boost your performance on the pitch. Discover how our cutting-edge facilities and expert coaching support can take your box cricket game to new heights.  ",
      type: "Introduction:", content1: "Box cricket demands precision and practice, and at Elite Cricket Services, we're dedicated to providing cricketers with top-tier training facilities. Our premium box cricket setups replicate the intensity of real-game situations, empowering players to hone their techniques and excel in their performances. Whether you're a seasoned box cricket enthusiast or a budding talent, our facilities cater to all skill levels, fostering growth and progress in a supportive environment.",
      type2:"Our Box Cricket Facilities:",content2:"Experience the ultimate training experience with Elite Cricket Services' premium box cricket facilities. Equipped with high-quality netting and cutting-edge ball-tracking technology, our setups offer a lifelike simulation of match conditions. From batting drills to bowling practice, our versatile setups cater to all aspects of box cricket, providing players with the perfect platform to refine their skills and enhance their performance.",
      key:"Key Features of Our Box Cricket Facilities:",
      type22: "1. High-Quality Netting:", content22: "Our box cricket facilities boast durable and reliable netting materials, ensuring a safe and effective training environment for cricketers of all levels. ",
      type222: "2. Advanced Ball-Tracking Technology:", content222: "  Train smarter with real-time feedback on your performance, allowing you to analyze and improve various aspects of your game.",
      type2222: "3. Versatile Setups:", content2222: "Our box cricket facilities accommodate a wide range of training drills, catering to the diverse needs of cricketers seeking to enhance their skills.",
      type22222: "4. Expert Coaching Support:", content22222: "Benefit from personalized guidance from our experienced coaches, who are dedicated to helping you achieve your box cricketing goals.",
      type3: "Our Range of Services:", content3: "At Elite Cricket Services, we offer a comprehensive suite of services tailored to meet the diverse needs of our clients:",
      type33: "1. Individual Training Sessions:", content33: " Receive personalized training sessions focused on your specific needs and goals, guided by our expert coaches.",
      type333: "2. Group Training Programs:", content333: " Engage in collaborative training sessions with peers, fostering camaraderie and skill development in a group setting.",
      type3333: "3. Specialized Workshops and Clinics:", content3333: "Participate in specialized workshops and clinics targeting specific aspects of box cricket, led by experienced coaches and guest experts.",
      type4: "Why Choose Elite Cricket Services?",
      type5:"Excellence in Training:",content5:"Our facilities are designed to maximize performance and accelerate skill development.",
      type55:"Expert Coaching Support:",content55:"Benefit from personalized guidance from our team of experienced coaches.",
      type555:"Cutting-Edge Technology:",content555:"Utilize advanced ball-tracking technology to track your progress and enhance your training.",
      type5555:"Versatility and Flexibility:",content5555:"Customize your training sessions to focus on specific skills or areas for improvement.",
      type55555:"Commitment to Excellence:",content55555:"Experience a supportive and empowering environment dedicated to helping you reach your full potential as a box cricketer.",
      conclusion: "Conclusion:", Conclusion: "Elevate your box cricketing journey with Elite Cricket Services' premium box cricket facilities. Whether you're a seasoned professional or an aspiring talent, our setups provide the perfect platform to refine your skills and excel on the pitch. Join us in redefining box cricket training and unlock your full potential as a cricketer. Contact us today to learn more about our box cricket facilities and take the first step towards box cricketing excellence."
    },
    {
      id: 2, title: 'Artificial Grass', content: 'Transform your space with lush greenery that requires minimal maintenance. Our artificial grass solutions offer the beauty of natural turf without the hassle.',
      Title: "Title: Elevate Your Cricket Experience with Elite Cricket Services' Artificial Turf Solutions",
      Content: "Welcome to Elite Cricket Services, where we revolutionize the way you play cricket with our premium artificial turf solutions. Our Services page is your gateway to discovering the unparalleled benefits of synthetic grass for cricket pitches, practice areas, and recreational spaces. With a commitment to quality, durability, and environmental sustainability, we offer tailored artificial grass solutions designed to elevate your cricketing experience to new heights.",
      type: "Introduction:", content1: "Natural grass has long been associated with cricket pitches, but its maintenance challenges are undeniable. At Elite Cricket Services, we offer a modern alternative – artificial turf that combines the lush appearance of natural grass with unmatched convenience and durability. Our artificial grass solutions are meticulously crafted to provide top-notch playing surfaces for cricket enthusiasts of all levels.",
      type2: "Our Artificial Turf Solutions:", content2: "Say goodbye to the hassles of maintaining natural grass and hello to the convenience of artificial turf. Elite Cricket Services specializes in providing premium synthetic grass solutions that are perfect for cricket pitches, practice areas, and recreational spaces. Our artificial turf offers a range of benefits, including:",
      key:"Key Features of Our Artificial Grass:",
      type22: "1. Premium Quality:", content22: "We source only the highest quality artificial grass materials to ensure that our clients receive the best possible product. Our synthetic turf is engineered to replicate the look and feel of natural grass, providing a stunning aesthetic appeal that enhances any cricketing environment.",
      type222: "2. Durability and Resilience: ", content222: " Our artificial grass is designed to withstand heavy usage and maintain its pristine appearance season after season. Whether you're hosting regular matches or engaging in intense practice sessions, our synthetic turf offers unmatched durability and resilience, ensuring long-lasting performance.",
      type2222: "3. Low Maintenance:", content2222: "Say goodbye to the time-consuming tasks of mowing, watering, and fertilizing natural grass. With Elite Cricket Services' artificial turf solutions, you can enjoy the beauty of greenery all year round with minimal maintenance requirements. Simply brush or hose down the turf occasionally to keep it looking its best – it's that easy!",
      type22222: "4. Eco-Friendly:", content22222: "Our synthetic grass options are environmentally friendly, requiring significantly less water and chemical usage compared to natural grass. By choosing artificial turf for your cricketing needs, you're making a sustainable choice that contributes to water conservation and reduces your carbon footprint.",
      type3: "Our Range of Services:", content3: "At Elite Cricket Services, we understand that every cricketing space is unique, which is why we offer a range of artificial turf solutions tailored to meet your specific requirements:",
      type33: "1. Cricket Pitches:", content33: "Transform your cricket pitch into a professional-grade playing surface with our premium artificial turf. Our synthetic grass is designed to provide optimal ball bounce and player traction, ensuring a true and consistent playing experience.",
      type333: "2. Practice Areas:", content333: "Create the perfect practice space for honing your cricketing skills with our durable and resilient artificial turf solutions. Whether you're installing a batting cage, bowling lane, or fielding area, our synthetic grass provides an ideal surface for repetitive training drills and exercises.",
      type3333: "3. Recreational Spaces:", content3333: "Enhance your backyard or recreational area with our low-maintenance and eco-friendly artificial turf options. Perfect for hosting friendly matches or casual cricketing sessions, our synthetic grass creates a safe and enjoyable environment for players of all ages.",
      type4: "Why Choose Elite Cricket Services?",
      type5: "Expertise:", content5: "With years of experience in the industry, we possess the knowledge and expertise to deliver artificial turf solutions that exceed expectations.",
      type55: "Customization:", content55: "We work closely with our clients to understand their unique needs and preferences, ensuring that our artificial grass solutions are tailored to meet their specific requirements.",
      type555: "Quality Assurance:", content555: " We adhere to strict quality standards throughout the manufacturing and installation process, guaranteeing the durability, performance, and aesthetics of our artificial turf.",
      type5555: "Customer Satisfaction:", content5555: "Our priority is customer satisfaction, and we go above and beyond to ensure that every client receives exceptional service and support.",
      conclusion: "Conclusion:", Conclusion: "Experience the ultimate convenience and performance with Elite Cricket Services' premium artificial turf solutions. Say goodbye to the challenges of maintaining natural grass and hello to the beauty and durability of synthetic grass. Whether you're a professional club seeking top-notch playing surfaces or a homeowner looking to enhance your backyard, our artificial turf options are the perfect choice for cricket enthusiasts everywhere. Contact us today to learn more about how we can transform your cricketing space with our innovative artificial grass solutions.",
    },
    {
      id: 3, title: 'Astro Turf Cricket Pitch', content: 'Elevate your game with our Astro Turf cricket pitches. Designed for superior performance and durability.',
      Title:"Title: Elevate Your Cricketing Experience with Elite Cricket Services' Astro Turf Cricket Pitches",
      Content:"Welcome to Elite Cricket Services, where we redefine the standards of cricketing excellence with our cutting-edge Astro Turf cricket pitches. Our Services page is your gateway to discovering the unparalleled advantages of our meticulously engineered surfaces, designed to elevate your game to new heights. With a focus on quality, performance, and player safety, we offer innovative Astro Turf solutions that cater to the needs of professional stadiums, community sports facilities, and individual enthusiasts alike.",
      type:"Introduction:",content1:"Astro Turf has revolutionized the world of cricket, offering a level of performance and consistency that is unmatched by traditional playing surfaces. At Elite Cricket Services, we take pride in delivering Astro Turf cricket pitches that meet the highest standards of quality and innovation. Our surfaces are engineered to provide exceptional grip, consistent bounce, and enhanced player safety, making them the preferred choice for cricketing professionals and enthusiasts worldwide.",
      type2:"Our Astro Turf Cricket Pitches:",content2:"Experience the pinnacle of cricketing excellence with Elite Cricket Services' Astro Turf cricket pitches. Our surfaces are meticulously crafted to deliver optimal performance in every aspect of the game, from batting and bowling to fielding and wicketkeeping. Whether you're training for a big match or honing your skills during practice sessions, our Astro Turf pitches provide the perfect platform for success.",
      key:"Key Features of Our Astro Turf Pitches:",
      type22:"1. Exceptional Grip:",content22:" Our Astro Turf surfaces offer superior grip, allowing players to maintain control over their movements and execute shots with precision. Whether you're facing fast bowlers or spinners, our surfaces ensure that you can trust your footing and focus on playing your best cricket.",
      type222:"2. Consistent Bounce:",content222:"Consistency is key in cricket, and our Astro Turf pitches deliver reliable bounce throughout the game. Say goodbye to unpredictable variations in bounce caused by uneven surfaces – with Elite Cricket Services' Astro Turf, you can expect a true and consistent bounce that enhances the quality of your gameplay.",
      type2222:"3. Enhanced Player Safety: ",content2222:" Safety is paramount in any sport, and our Astro Turf pitches are designed with player welfare in mind. The shock-absorbent properties of Astro Turf help reduce the risk of injuries from slips, falls, and impact, ensuring that players can enjoy the game with confidence and peace of mind.",
      type3:"Our Range of Services:",content3:"At Elite Cricket Services, we offer a comprehensive range of Astro Turf solutions tailored to meet the diverse needs of our clients:",
      type33:"1. Professional Stadiums:",content33:" Transform your stadium into a world-class cricketing venue with our state-of-the-art Astro Turf pitches. Whether you're hosting international matches or domestic tournaments, our surfaces provide the perfect stage for showcasing the talent and skill of the players.",
      type333:"2. Community Sports Facilities:",content333:" Enhance the quality of cricketing facilities in your community with our Astro Turf solutions. From local clubs to recreational centers, our surfaces offer a cost-effective and high-performance option for upgrading existing pitches or creating new ones.",
      type3333:"3. Individual Enthusiasts:",content3333:"Take your cricketing experience to the next level with our Astro Turf pitches for personal use. Whether you're a serious cricketer looking to practice at home or a group of friends seeking a premium playing surface for friendly matches, our surfaces are the ideal choice for maximising enjoyment and performance.",
      type4: "Why Choose Elite Cricket Services?",
      type5:"Quality Assurance:",content5:"We adhere to stringent quality standards in the design, manufacturing, and installation of our Astro Turf pitches, ensuring that every surface meets the highest levels of excellence.",
      type55:"Performance Optimization:",content55:"Our surfaces are engineered to enhance the performance of players at all levels, providing optimal grip, bounce, and safety for a superior cricketing experience.",
      type555:"Customization Options:",content555:"We work closely with our clients to understand their specific requirements and preferences, offering tailored solutions that meet their individual needs and budget.",
      type5555:" Expertise and Experience:",content5555:" With years of experience in the industry, our team possesses the knowledge and expertise to deliver Astro Turf solutions that exceed expectations and stand the test of time.",
      conclusion:"Conclusion:",Conclusion:"Invest in quality, invest in performance, and elevate your game with Elite Cricket Services' Astro Turf cricket pitches. Whether you're a professional player, a community sports facility, or an individual enthusiast, our surfaces offer the perfect combination of excellence, innovation, and reliability. Experience the difference that Astro Turf can make to your cricketing experience and join us in redefining the way cricket is played. Contact us today to learn more about our Astro Turf solutions and take the first step towards cricketing greatness.",
    },
    {
      id:4,title:" Cricket Practice Net",content:"Sharpen your skills and refine your technique with our cricket practice nets. Designed for intensive training, our nets provide a controlled environment for players to focus on their game.",
      Title:"Title: Elevate Your Cricketing Skills with Elite Cricket Services' Premium Practice Nets",
      Content:"Welcome to Elite Cricket Services, where we empower cricketers of all levels to master the art of the game with our state-of-the-art practice nets. Our Services page is your gateway to discovering the ultimate training experience, designed to enhance your skills and elevate your performance on the field. With cutting-edge technology, expert coaching support, and versatile setups, our practice nets offer the perfect space for cricketers to hone their craft and unleash their full potential.",
      type:'Introduction:',content1:"Practice is the cornerstone of cricketing success, and at Elite Cricket Services, we understand the importance of providing cricketers with top-notch training facilities. Our premium practice nets are meticulously designed to replicate match conditions, allowing players to fine-tune their skills and build confidence in their abilities. Whether you're a seasoned professional or a budding talent, our facilities cater to all levels of expertise, providing a supportive environment for growth and development.",
      type2:"Our Practice Nets:",content2:"Experience the ultimate training experience with Elite Cricket Services' premium practice nets. Equipped with high-quality netting and advanced ball-tracking technology, our facilities offer a realistic and immersive training experience that simulates match conditions. From batting drills to bowling practice, our versatile setups cater to all aspects of the game, allowing players to focus on refining their techniques and mastering their skills.",
      key:"Key Features of Our Astro Turf Pitches:",
      type22:"1. High-Quality Netting:",content22:"Our practice nets are constructed with high-quality netting materials that provide durability, reliability, and safety. Whether you're facing fast deliveries or spin variations, our nets offer the perfect combination of strength and flexibility, ensuring that you can train with confidence and peace of mind.",
      type222:"2. Advanced Ball-Tracking Technology:",content222:"Train smarter with our advanced ball-tracking technology, which provides real-time feedback on your performance. From tracking ball speed and trajectory to analysing spin and swing, our technology allows you to pinpoint areas for improvement and track your progress over time.",
      type2222:"3. Versatile Setups:",content2222:"Our practice nets are designed to accommodate a wide range of training drills and exercises, catering to the diverse needs of cricketers. Whether you're working on your batting technique, refining your bowling action, or practising fielding skills, our versatile setups provide the perfect environment for productive and enjoyable training sessions.",
      type22222:"4. Expert Coaching Support:",content22222:"At Elite Cricket Services, we believe in the power of expert guidance to unlock your full potential as a cricketer. That's why our practice nets come with dedicated coaching support from experienced professionals who are committed to helping you achieve your goals. Whether you're looking for technical advice, tactical insights, or mental conditioning, our coaches are here to support you every step of the way.",
      type3:"Our Range of Services:",content3:"At Elite Cricket Services, we offer a comprehensive range of services to meet the diverse needs of our clients:",
      type33:"1. Individual Training Sessions:",content33:"Enhance your skills with personalized training sessions tailored to your specific needs and goals. Our expert coaches will work with you one-on-one to identify areas for improvement and develop a customized training plan to help you reach your full potential.",
      type333:"2. Group Training Programs:",content333:"Train with friends, teammates, or fellow enthusiasts in our group training programs, which offer a fun and collaborative environment for learning and development. Whether you're part of a club, school, or community group, our group training programs provide a valuable opportunity to improve your skills and build camaraderie with fellow players.",
      type3333:"3. Specialized Workshops and Clinics:",content3333:"Take your training to the next level with our specialized workshops and clinics, which focus on specific aspects of the game such as batting, bowling, fielding, and mental toughness. Led by experienced coaches and guest experts, our workshops and clinics provide in-depth instruction, practical exercises, and valuable insights to help you elevate your game.",
      type4: "Why Choose Elite Cricket Services?",
      type5:"Excellence in Training:",content5:"Our practice nets are designed to deliver a superior training experience that maximisesa performance and accelerates skill development.",
      type55:"Expert Coaching Support:",content55:"Our team of experienced coaches provides personalized guidance and support to help you achieve your cricketing goals.",
      type555:"Cutting-Edge Technology:",content555:"We leverage advanced ball-tracking technology to provide real-time feedback and analysis, enabling you to track your progress and make informed adjustments to your training regimen.",
      type5555:"Versatility and Flexibility:",content5555:"Our practice nets are versatile and adaptable, allowing you to customise your training sessions to focus on specific skills or areas for improvement.",
      type55555:"Commitment to Excellence:",content55555:" At Elite Cricket Services, we are committed to excellence in everything we do, from the quality of our facilities to the professionalism of our coaching staff. We strive to provide a supportive and empowering environment where cricketers can thrive and reach their full potential.",
      conclusion:"Conclusion:",Conclusion:"Take your game to the next level with Elite Cricket Services' premium practice nets. Whether you're a seasoned professional or a budding talent, our facilities offer the perfect space to enhance your skills, build confidence, and unlock your full potential on the field. With cutting-edge technology, expert coaching support, and versatile setups, our practice nets provide everything you need to master the art of cricket and achieve your goals. Join us in redefining the way cricket is practised and experience the difference that Elite Cricket Services can make to your cricketing journey. Contact us today to learn more about our practice nets and take the first step towards cricketing excellence.",
    }
  ];

  const selectedContent = contentList.find(content => content.id === parseInt(id));

  if (!selectedContent) {
    return <div>No content found</div>;
  }

  return (
    <>
      <section className="w-100 bg-fixed d-flex align-items-center justify-content-center bg-secondary background-about" style={styles}>
        <div style={{ zIndex: 1, width: "90%", maxWidth: "700px", backgroundColor: "rgba(0,0,0,0.5)", margin: "60px 0 70px 0" }} className="d-flex align-items-center justify-content-center py-5 rounded flex-column text-white">
          <h1 className="px-2 text-center" style={{ fontSize: "38px" }}>{selectedContent.title}</h1>
          <p className="px-2 mt-2 text-center" style={{ maxWidth: "500px", fontSize: "16px" }}>{selectedContent.content}</p>
        </div>
      </section>
      <Container>
        <h6 style={{ fontWeight: "600" }}>{selectedContent.Title}</h6>
        <p className='py-3'>{selectedContent.Content}</p>
        <h6 style={{ fontWeight: "600" }}>{selectedContent.type}</h6>
        <p className='py-3'>{selectedContent.content1}</p>
        <h6 style={{ fontWeight: "600" }}>{selectedContent.type2}</h6>
        <p className='py-3'>{selectedContent.content2}</p>
        <p style={{ fontWeight: "600" }} className=''>{selectedContent.key}</p>
        <h6 style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type22} <span style={{fontWeight:"400"}}>{selectedContent.content22}</span></h6>
        <h6 style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type222} <span style={{fontWeight:"400"}}>{selectedContent.content222}</span></h6>
        <h6 style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type2222} <span style={{fontWeight:"400"}}>{selectedContent.content2222}</span></h6>
        <h6 style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type22222} <span style={{fontWeight:"400"}}>{selectedContent.content22222}</span></h6>
        <h6 style={{ fontWeight: "600" }}>{selectedContent.type3}</h6>
        <p className='py-3'>{selectedContent.content3}</p>
        <h6 style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type33} <span style={{fontWeight:"400"}}>{selectedContent.content33}</span></h6>
        <h6 style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type333} <span style={{fontWeight:"400"}}>{selectedContent.content333}</span></h6>
        <h6  style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type3333} <span style={{fontWeight:"400"}}>{selectedContent.content3333}</span></h6>
        <h6 style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type4}</h6>
        <h6 style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type5} <span style={{fontWeight:"400"}}>{selectedContent.content5}</span></h6>
        <h6 style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type55} <span style={{fontWeight:"400"}}>{selectedContent.content55}</span></h6>
        <h6 style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type555} <span style={{fontWeight:"400"}}>{selectedContent.content555}</span></h6>
        <h6 style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type5555} <span style={{fontWeight:"400"}}>{selectedContent.content5555}</span></h6>
        <h6 style={{ fontWeight: "600" }} className='mb-5'>{selectedContent.type55555} <span style={{fontWeight:"400"}}>{selectedContent.content55555}</span></h6>
        <p  style={{ fontWeight: "600" }}>{selectedContent.conclusion}</p>
        <p className='py-3'>{selectedContent.Conclusion}</p>
        <center> <button href="tel:+9492438138" className=" btn btn-dark rounded-pill px-5 py-2 text-uppercase" style={{ width: "200px", marginRight: "30px", margin: "10px" }}>
          Call
        </button>
          <button  href="https://wa.me/9492438138" className=" btn btn-success rounded-pill px-5 py-2 text-uppercase" style={{ width: "200px" }}>
            WhatsApp
          </button></center>
      </Container>


    </>
  );
};

export default Services;
