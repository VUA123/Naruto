import { motion } from "framer-motion";
import { Clock, ShieldAlert, Flag, Zap, Award, Users, Swords, Flame, Skull, Eye } from "lucide-react";

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
    icon: Flame,
    color: "#a78bfa"
  },
  {
    era: "Era 5",
    title: "Team 7 & The Chūnin Exams",
    date: "Part I: The Beginning",
    description: "Twelve years after the tragedy, Naruto Uzumaki graduates the academy and forms Team 7 with Sasuke Uchiha and Sakura Haruno under Kakashi Hatake. They soon enter the perilous Chūnin Exams, drawing ninja from all over the globe into a high-stakes survival test.",
    keyDetails: ["Team 7 bonded during their first A-rank mission in the Land of Waves against Zabuza", "The Chūnin Exams tested the world's most promising young genin", "Orochimaru infiltrated the exams and placed a Curse Mark on Sasuke"],
    icon: Users,
    color: "#3b82f6"
  },
  {
    era: "Era 6",
    title: "The Konoha Crush",
    date: "Part I: The Fall of the Third",
    description: "During the final rounds of the Chūnin Exams, the Hidden Sand and Hidden Sound villages launched a surprise invasion on the Leaf Village. The Third Hokage, Hiruzen Sarutobi, sacrificed his life to seal away Orochimaru's arms, stopping the invasion but leaving the village leaderless.",
    keyDetails: ["Naruto defeated the One-Tail Jinchuriki, Gaara, changing his heart forever", "Hiruzen used the Reaper Death Seal against Orochimaru and the reanimated previous Hokages", "Tsunade was eventually recruited to become the Fifth Hokage"],
    icon: Skull,
    color: "#ff3e3e"
  },
  {
    era: "Era 7",
    title: "The Sasuke Retrieval Mission",
    date: "Part I: The Valley of the End",
    description: "Desperate for the power to defeat his brother Itachi, Sasuke Uchiha abandons the Leaf Village to seek out Orochimaru. A team of young genin, led by Shikamaru Nara, embarks on a desperate pursuit, culminating in a legendary and tragic clash between Naruto and Sasuke at the Valley of the End.",
    keyDetails: ["The Sound Four were defeated by the Leaf Genin with help from the Sand Siblings", "Sasuke unlocked the final stage of his Curse Mark and fully matured Sharingan", "Naruto failed to bring Sasuke back, vowing to train under Jiraiya for three years"],
    icon: Swords,
    color: "#6d28d9"
  },
  {
    era: "Era 8",
    title: "The Akatsuki Suppression",
    date: "Shippuden: The Return",
    description: "Two and a half years later, an older, stronger Naruto returns to the village. The Akatsuki, a rogue organization of S-class criminals, begins actively hunting Jinchūriki to extract their Tailed Beasts. The Leaf Village wages a shadow war to suppress the Akatsuki members.",
    keyDetails: ["Gaara is captured, but rescued by Naruto and Lady Chiyo", "Asuma Sarutobi is killed by Hidan, leading Shikamaru to enact brilliant revenge", "Sasuke seemingly kills Orochimaru and forms his own team (Taka) to hunt Itachi"],
    icon: Eye,
    color: "#ff7a18"
  },
  {
    era: "Era 9",
    title: "The Tale of Jiraiya & Pain's Assault",
    date: "Shippuden: Destruction of Konoha",
    description: "Jiraiya infiltrates the Hidden Rain to uncover the Akatsuki's leader, Pain, but is killed in combat. Pain then launches a devastating assault on Konoha, flattening the entire village to dust. Naruto returns, having mastered Sage Mode, to face Pain in an epic confrontation of ideals.",
    keyDetails: ["Jiraiya sacrifices himself to send vital intelligence back to the Leaf", "Pain uses Almighty Push to utterly destroy Konohagakure", "Naruto defeats Pain (Nagato) and convinces him to resurrect the fallen villagers"],
    icon: ShieldAlert,
    color: "#a78bfa"
  },
  {
    era: "Era 10",
    title: "The Five Kage Summit",
    date: "Shippuden: Gathering Storm",
    description: "In response to the Akatsuki's escalating threat, the leaders of the Five Great Nations convene a rare summit in the Land of Iron. Sasuke infiltrates the summit seeking revenge on the Leaf elders, while Tobi declares the start of the Fourth Great Ninja War.",
    keyDetails: ["Sasuke discovers the tragic truth of Itachi's sacrifice and vows to destroy Konoha", "Danzo Shimura briefly takes power before being killed by Sasuke", "The Five Nations agree to form the first-ever Allied Shinobi Forces"],
    icon: Flag,
    color: "#eab308"
  },
  {
    era: "Era 11",
    title: "The Fourth Great Shinobi War",
    date: "Shippuden: The Ultimate Alliance",
    description: "The Allied Shinobi Forces, 80,000 strong, clash against an army of White Zetsu and legendary reanimated ninja controlled by Kabuto. The conflict escalates into a battle against the true masterminds: Obito Uchiha, the resurrected Madara Uchiha, and ultimately, the alien progenitor Kaguya Ōtsutsuki.",
    keyDetails: ["Naruto befriends Kurama, unlocking Nine-Tails Chakra Mode", "Madara unleashes the Ten-Tails and casts the Infinite Tsukuyomi over the world", "Team 7 unites one last time to seal away Kaguya and save humanity"],
    icon: Award,
    color: "#4ade80"
  },
  {
    era: "Era 12",
    title: "The Final Valley",
    date: "Shippuden: The Cycle Broken",
    description: "With the world saved, Sasuke declares his intention to execute the Kage and forcefully govern the world from the shadows to ensure permanent peace. Naruto refuses to let his friend walk a path of loneliness, leading to their final, cataclysmic duel at the Valley of the End.",
    keyDetails: ["The battle destroys the statues of Hashirama and Madara, symbolizing the end of the feud", "Both Naruto and Sasuke lose an arm in the final clash", "Sasuke finally concedes to Naruto's vision of cooperation, ending the cycle of hatred forever"],
    icon: Clock,
    color: "#3b82f6"
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
