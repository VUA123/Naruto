import { motion } from "framer-motion";
import { Clock, ShieldAlert, Flag, Zap, Award, Users } from "lucide-react";

interface TimelineNode {
  era: string;
  title: string;
  date: string;
  description: string;
  keyDetails: string[];
  icon: any;
  color: string;
}

const TIMELINE_DATA: TimelineNode[] = [
  {
    era: "Era 1",
    title: "Warring States Era",
    date: "Before the Hidden Villages",
    description: "Prior to the creation of hidden villages, the world was composed of small mercenary clans engaged in endless bloody conflicts. The two strongest mercenary clans—the Senju (led by Hashirama) and the Uchiha (led by Madara)—fought a devastating, multi-generational blood feud.",
    keyDetails: ["No centralized villages existed", "Children were sent to battle as soldiers", "Hashirama and Madara formed a secret, childhood friendship"],
    icon: ShieldAlert,
    color: "#ff3e3e"
  },
  {
    era: "Era 2",
    title: "Founding of Konohagakure",
    date: "The Village System is Born",
    description: "Tired of the endless bloodshed, Hashirama Senju and Madara Uchiha brokered a historic peace treaty, co-founding the first ninja village: Hidden Leaf (Konohagakure). This 'one village per country' structure was so successful that other nations copied it immediately, founding the Sand, Mist, Cloud, and Stone villages.",
    keyDetails: ["Hashirama became the First Hokage", "The ninja academy and mission ranking systems were created", "Madara defected after disagreements, sparking the legendary Valley of the End battle"],
    icon: Flag,
    color: "#ff7a18"
  },
  {
    era: "Era 3",
    title: "The Great Ninja Wars",
    date: "Global Conflicts",
    description: "Despite the village alliance, political instability and resource fights led to three devastating global conflicts known as the Great Shinobi World Wars. These wars forged legendary heroes and left deep scars across nations, creating the modern political landscape and fostering deep-seated hatred.",
    keyDetails: ["Second War: Jiraiya, Tsunade, and Orochimaru are dubbed the 'Sannin'", "Third War: Kakashi Hatake received his Sharingan from Obito Uchiha", "The wars caused heavy casualties and the rise of rogue criminal ninja"],
    icon: Zap,
    color: "#eab308"
  },
  {
    era: "Era 4",
    title: "Attack of the Nine-Tails",
    date: "The Night of Sealing",
    description: "A mysterious masked rogue ninja (Obito Uchiha acting under the name Tobi) bypassed Konoha's security and unleashed the Nine-Tails Tailed Beast (Kurama) upon the village. The Fourth Hokage, Minato Namikaze, and his wife Kushina sacrificed their lives to stop the beast, sealing it within their newborn son, Naruto.",
    keyDetails: ["Naruto Uzumaki became the Nine-Tails Jinchuriki", "Konoha was heavily damaged, breeding deep suspicion of the Uchiha clan", "Minato sealed his and Kushina's chakra inside Naruto to help him later"],
    icon: ShieldAlert,
    color: "#a78bfa"
  },
  {
    era: "Era 5",
    title: "The Birth of Team 7",
    date: "The Start of the Chronicles",
    description: "Twelve years after the tragedy, Naruto Uzumaki graduates the academy and is assigned to Team 7 under the tutelage of Kakashi Hatake, alongside his rival Sasuke Uchiha and Sakura Haruno. This begins their shared path of growth, rivalry, and eventually, diverging fates.",
    keyDetails: ["Team 7 completed their first major mission in the Land of Waves", "Sasuke Uchiha defected to Orochimaru in search of power to avenge his clan", "Naruto set out to train with Jiraiya to bring Sasuke back"],
    icon: Users,
    color: "#3b82f6"
  },
  {
    era: "Era 6",
    title: "The Fourth Great Shinobi War",
    date: "The Ultimate Alliance",
    description: "Under the Akatsuki's manipulation, the world is plunged into the Fourth Great Shinobi War. For the first time in history, all Five Great Nations put aside their hatred to form the Allied Shinobi Forces, uniting to stop Madara Uchiha, Obito, and eventually the primordial progenitor of chakra, Kaguya Ōtsutsuki.",
    keyDetails: ["The war united 80,000 ninja under a single banner", "Naruto and Sasuke gained god-like powers from the Sage of Six Paths", "The cycle of hatred was finally broken in a final, historic duel between Naruto and Sasuke"],
    icon: Award,
    color: "#4ade80"
  }
];

export default function Timeline() {
  return (
    <section className="py-12 px-6 md:px-12 bg-[#070707] min-h-screen relative overflow-hidden">
      {/* Decorative vertical center line in background */}
      <div className="absolute left-1/2 top-48 bottom-12 w-[1px] bg-gradient-to-b from-accent-orange/10 via-white/5 to-transparent -translate-x-1/2 hidden md:block" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Title Block */}
        <div className="text-center mb-20">
          <span className="text-[10px] font-cinzel text-accent-orange tracking-[0.3em] uppercase block mb-3">
            Chronological Archive
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-cinzel tracking-wider text-white mb-4">
            LORE & HISTORY TIMELINE
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-accent-orange to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/50 max-w-xl mx-auto font-poppins leading-relaxed">
            Scroll through the eras to understand the historic conflicts, sacrifices, and bonds that shaped the Ninja world from its chaotic origin to the era of peace.
          </p>
        </div>

        {/* Timeline List */}
        <div className="space-y-16 md:space-y-24">
          {TIMELINE_DATA.map((node, index) => {
            const IconComp = node.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={node.era} className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-0 relative ${isEven ? "" : "md:flex-row-reverse"}`}>
                
                {/* Visual Timeline Marker Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#070707] border-2 border-white/10 hidden md:flex items-center justify-center z-20"
                  style={{ borderColor: `${node.color}50` }}
                >
                  <Clock size={14} style={{ color: node.color }} />
                </div>

                {/* Left/Right Card column */}
                <motion.div
                  initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="w-full md:w-[45%]"
                >
                  <div
                    className="glass-panel-glow rounded-2xl p-6 md:p-8 border border-white/5 relative overflow-hidden group"
                    style={{
                      boxShadow: `0 0 30px ${node.color}03`,
                    }}
                  >
                    {/* Glow background hover circle */}
                    <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-xl"
                      style={{ backgroundColor: node.color }}
                    />

                    {/* Node Header */}
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-[10px] font-cinzel tracking-[0.2em] font-bold block mb-1" style={{ color: node.color }}>
                          {node.era.toUpperCase()} ➔ {node.date.toUpperCase()}
                        </span>
                        <h3 className="font-cinzel text-xl font-bold text-white tracking-wider group-hover:text-accent-orange transition-colors">
                          {node.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-xl bg-white/2 border border-white/5 flex items-center justify-center text-white/50 group-hover:text-accent-orange group-hover:border-accent-orange/20 transition-all duration-300 shrink-0">
                        <IconComp size={18} />
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-white/60 font-poppins leading-relaxed mb-6">
                      {node.description}
                    </p>

                    {/* Bullet details */}
                    <div className="border-t border-white/5 pt-4 space-y-2">
                      <span className="text-[9px] font-cinzel text-accent-gold tracking-widest block uppercase mb-1">
                        Historical Impact
                      </span>
                      {node.keyDetails.map((detail, dIdx) => (
                        <div key={dIdx} className="flex gap-2 items-start text-[11px] text-white/40 font-poppins">
                          <span style={{ color: node.color }} className="leading-none mt-0.5">•</span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Empty column on the other side to keep spacing */}
                <div className="w-full md:w-[45%] hidden md:block" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
