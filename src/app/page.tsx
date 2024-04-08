import Navigation from "@/app/navigation/page.tsx";
import GradientCircle from "@/components/ui/gradient-circle/page.tsx";

export default function Home() {
  return (
    <>
      {/* <Navigation /> */}
      <div className='flex items-center justify-center min-h-screen'>
        <GradientCircle width={550} height={550} />
        <div className='flex gap-3 bg-white p-4 pr-10 rounded-lg absolute left-[450px] top-[350px] shadow-lg cursor-pointer z-50'>
          <p className='text-5xl'>👋🏻</p>
          <div>
            <div className='text-rang-700 font-medium'>Hello, {"I'm"}</div>
            <p className='text-rang-950 font-extrabold text-3xl'>Ali Mousavi</p>
          </div>
        </div>
        <div className=' bg-white py-3 px-6 rounded-lg absolute left-[500px] top-[480px] shadow-lg cursor-pointer'>
          <p className='text-rang-600 uppercase tracking-widest font-medium text-sm'>
            Frontend Developer
          </p>
          <p className='text-rang-600 font-medium text-sm'>Munich 🇩🇪 📍</p>
        </div>
      </div>
    </>
  );
}
