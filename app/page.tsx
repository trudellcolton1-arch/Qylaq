'use client';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Users } from 'lucide-react';

function Crystal() {
  return (
    <mesh>
      <octahedronGeometry args={[2.2]} />
      <meshStandardMaterial 
        color="#67e8f9" 
        metalness={0.9} 
        roughness={0.1} 
        emissive="#22d3ee"
        emissiveIntensity={0.8}
      />
    </mesh>
  );
}

export default function QylaqDashboard() {
  const [balance, setBalance] = useState(12480);
  const [clarity, setClarity] = useState(98.7);

  const contributeInsight = () => {
    const minted = Math.floor(Math.random() * 850) + 220;
    setBalance(b => b + minted);
    setClarity(c => Math.min(99.98, c + 0.15));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <header className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-cyan-500/30 bg-black/80">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-5xl">💎</div>
            <div>
              <div className="text-4xl font-light tracking-[8px]">QYLAQ</div>
              <div className="text-xs text-cyan-400 -mt-1 tracking-widest">YEAR 3000 CLARITY ECONOMY</div>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="relative h-[720px] rounded-[32px] overflow-hidden border border-cyan-400/30 bg-zinc-950/80 backdrop-blur-3xl shadow-2xl">
              <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} color="#a5f3fc" intensity={4} />
                <pointLight position={[-10, -10, -10]} color="#c084fc" intensity={2} />
                <Crystal />
                <Stars radius={500} depth={50} count={1800} factor={3} saturation={0} fade speed={0.5} />
                <OrbitControls enablePan={false} enableZoom={true} autoRotate autoRotateSpeed={0.2} />
              </Canvas>

              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 glass rounded-3xl p-10 border border-cyan-400/40 w-[92%]">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div>
                    <div className="text-cyan-400 text-sm tracking-[4px] mb-1">YOUR CLARITY BALANCE</div>
                    <div className="text-[92px] leading-none font-light tracking-[-4px] tabular-nums">{balance.toLocaleString()}</div>
                    <div className="text-4xl text-cyan-200 -mt-3">QYL</div>
                  </div>
                  <motion.button
                    onClick={contributeInsight}
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 0.96 }}
                    className="px-14 py-6 bg-gradient-to-r from-cyan-400 to-violet-500 hover:from-cyan-300 hover:to-violet-400 rounded-2xl text-black font-semibold text-xl flex items-center gap-4 shadow-xl shadow-cyan-500/30"
                  >
                    <Sparkles className="w-7 h-7" /> CONTRIBUTE INSIGHT
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="glass rounded-3xl p-9 border border-cyan-400/30">
              <div className="flex items-center gap-5 mb-8">
                <Zap className="w-12 h-12 text-cyan-400" />
                <div>
                  <div className="uppercase text-xs tracking-widest text-cyan-400">CLARITY INDEX</div>
                  <div className="text-7xl font-light tabular-nums">{clarity}</div>
                </div>
              </div>
              <div className="relative h-2.5 bg-zinc-800 rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 transition-all" style={{ width: `${clarity}%` }}></div>
              </div>
            </div>

            <div className="glass rounded-3xl p-9">
              <div className="uppercase text-xs tracking-widest mb-8 flex items-center gap-3 text-cyan-400">
                <Users className="w-5 h-5" /> LIVE REFRACTIONS
              </div>
              <div className="space-y-8 text-sm">
                {[
                  ["@stella_quantum", "Resolved neural lattice paradox", "+1840"],
                  ["@echo_sapphire", "Uploaded pure empathy waveform", "+920"],
                  ["@kaleid_void", "Optimized Dyson swarm routing", "+1330"]
                ].map(([user, action, amount], i) => (
                  <div key={i} className="flex justify-between items-start border-b border-white/10 pb-6 last:border-none">
                    <div>
                      <div className="text-cyan-300 font-medium">{user}</div>
                      <div className="text-xs text-white/60 mt-1 pr-8">{action}</div>
                    </div>
                    <div className="text-emerald-400 font-mono tabular-nums">{amount}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}