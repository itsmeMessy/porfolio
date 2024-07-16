import pic1 from '../../../utils/ojt/0552a1fe-2fbb-4cd3-bce6-772dd5944e3a.jpeg';
import pic2 from '../../../utils/ojt/102d3214-ae50-429f-afc7-713e6171d4d4.jpeg';
import pic3 from '../../../utils/ojt/b137ec11-7a53-41ca-b0f1-c1504e5ebcb9.jpeg';
import pic4 from '../../../utils/ojt/efd1d146-ba81-422c-b728-32435689d433 (1).jpeg';
import pic5 from '../../../utils/ojt/a (2).jpeg';
import pic6 from '../../../utils/ojt/b.jpeg';
import pic7 from '../../../utils/ojt/c.jpeg';
import pic8 from '../../../utils/ojt/d.jpeg';

export default function Photo() {
    const photo = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8];
  
    return (
      <div className='h-screen'>
        <div className="ojt flex flex-col items-center bg-[var(--background)] text-[var(--foreground)] py-10">
          <div className="view grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
            {photo.map((image, index) => (
              <div key={index} className="relative flex items-center justify-center h-48 w-48 bg-[rgba(255,255,255,0.1)] backdrop-blur-md border-2 border-transparent rounded-lg bg-clip-padding opacity-90 forHov">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 z-0 rounded-lg blur-lg"></div>
                <img className="relative z-10 rounded-lg w-44 h-44" src={image} alt="Interior design" />
              </div>
            ))}
          </div>
        </div>
  
        <div className="ojt flex justify-center items-center py-10  from-purple-500 to-cyan-500">
          <p className="view text-white font-body text-xl text-center w-1/2">
            During my internship at a networking company, I had the opportunity to expand my skills beyond coding and delve into the world of networking. I learned extensively about the functioning of switches and their pivotal role in establishing local networks. This hands-on experience provided me with a deep understanding of how switches operate, their configurations, and how they can be effectively used to manage and optimize local area networks (LANs).
          </p>
        </div>
      </div>
    );
}
