import { Settings, Wrench, ThumbsUp, Sparkles } from "lucide-react";
import Features from "../Components/Features";
import SigninCard from "../Components/SigninCard";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020817] via-[#071226] to-[#020817] flex items-center justify-center px-6">
      
      <div className="w-full max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE TEXT */}
        <div className="hidden lg:block space-y-10">
          <Features
            icon={<Settings size={20} />}
            title="Adaptable performance"
            text="Our system efficiently manages employee data for seamless insights."
          />

          <Features
            icon={<Wrench size={20} />}
            title="Built for scalability"
            text="Process large datasets returned from API without performance drops."
          />

          <Features
            icon={<ThumbsUp size={20} />}
            title="Data Visualization"
            text="Visualize employee salary trends using interactive charts."
          />

          <Features
            icon={<Sparkles size={20} />}
            title="Location Mapping"
            text="Display employee cities on a map for geographical insights."
          />
        </div>

        {/* LOGIN CARD */}
        <div className="flex justify-center">
          <SigninCard />
        </div>
      </div>
    </div>
  )
}

export default LoginPage
