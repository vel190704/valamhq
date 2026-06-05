import Image from "next/image";

export default function Home() {
  return (
    // The main wrapper covering the full screen with a brown background
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-[#2C1B11] p-6 font-sans">
      
     {/* Centered Content Container */}
<div className="flex flex-col items-center mx-auto text-center">
  
  {/* 1. Logo Space */}
  {/* We set a fixed size of 300px and use flex centering inside the box */}
  <div className="relative h-[300px] w-[300px] flex items-center justify-center mx-auto">
    <Image
      src="/11.png" 
      alt="Company Logo"
      width={300}
      height={300}
      priority
      className="object-contain"
    />
  </div>

        {/* 2. Small Content Space */}
<div className="max-w-4xl w-full">
  
  {/* The heading container uses flex to put items in a row and center them */}
  <h1 className="text-2xl font-bold text-white flex items-center justify-center gap-4">
    
    {/* Left Star */}
    <Image
      src="/star.png" // Change this to your actual star image filename
      alt="Star decorator"
      width={40}      // Adjust the size to fit your text beautifully
      height={40}
      className="object-contain"
    />

    {/* Your Tagline Text */}
   <span className="whitespace-nowrap font-serif">Our mission is to make wealth creation accessible, engaging, and understandable for everyone.</span>

    {/* Right Star */}
    <Image
      src="/star.png" // Change this to your actual star image filename
      alt="Star decorator"
      width={40}      // Keeps the size identical to the left star
      height={40}
      className="object-contain"
    />
    
  </h1>
          <p className="mt-2 text-sm text-amber-100/80">
            Coming Soon!!
          </p>
        </div>

      </div>

    </div>
  );
}