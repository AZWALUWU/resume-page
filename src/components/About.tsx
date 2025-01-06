import React from 'react';

const calculateAge = (birthDate: Date): number => {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

const About: React.FC = () => {
  const birthDate = new Date(2007, 2, 15); 
  const age = calculateAge(birthDate);

  return (
    <section id="about" className="mb-8">
      <h2 className="text-3xl font-bold mb-6 text-gray-100">About Me</h2>
      <p className="text-gray-300 mb-4 center">
        I&apos;m a {age}-year-old Full Stack Developer with a passion for creating innovative web applications.<br></br>
        <br />Full Stack developer skilled in HTML, CSS, JavaScript, TypeScript, Python, React.js, MongoDB, Express, Node.js, Next.js, and Tailwind CSS. Experienced with Vercel, MongoDB Atlas, and Render.
      </p>    
    </section>
  );
};

export default About;