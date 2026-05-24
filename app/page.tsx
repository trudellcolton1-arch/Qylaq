'use client';
import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Users } from 'lucide-react';

function Crystal() {
  return (
    <mesh>
      <octahedronGeometry args={[2]} />
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

export default function Qylaq() {
  const [balance, setBalance] = useState(12480);
  const [clarity, setClarity] = useState(98.7);

  const contributeInsight = () => {
    const minted = Math.floor(Math.random() * 850) + 220;
    setBalance(b => b + minted);
    setClarity(c => Math.min(99.98, c + 0.15));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <header className="fixed top-0 w-full z-50 backdrop-blur-xl border-b border-cyan-500/30 bg-black/80">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-5xl">💎</div>
            <div>
              <div className="text-4xl font-light tracking-[4px]">QYLAQ</div>
              <div className="text-xs text-cyan-400 tracking-widest">YEAR 3000</div>
            </div>
          </div>
          <nav className="flex gap-10 text-sm uppercase tracking-widest">
            <div className="text-cyan-400">THE CRYSTAL</div>
            <div>REFRACTIONS</div>
            <div>NETWORK</div>
          </nav>
        </div>
      </header>

      <div className="pt-28 pb-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="relative h-[720px] rounded-3xl overflow-hidden border border-cyan-400/30 bg-black/60">
              <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} color="#a5f3fc" intensity={2} />
                <Crystal />
                <Stars radius={300} depth={50} count={800} factor={3} saturation={0} fade />
                <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.2} />
              </Canvas>

              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 glass rounded-3xl p-10 text-center border border-cyan-400/30">
                <div className="text-cyan-400 text-sm tracking-[3px] mb-2">YOUR CLARITY BALANCE</div>
                <div className="text-8xl font-light tracking-tighter text-white tabular-nums">{balance.toLocaleString()}</div>
                <div className="text-3xl text-cyan-200">QYL</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6 pt-8 lg:pt-0">
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-9 h-9 text-cyan-400" />
                <div>
                  <div className="text-cyan-400 tracking-widest text-sm">CLARITY INDEX</div>
                  <div className="text-7xl font-light">{clarity}</div>
                </div>
              </div>
              <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all" style={{width: `${clarity}%`}} />
              </div>
            </div>

            <motion.button
              onClick={contributeInsight}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-3xl text-black font-semibold text-xl flex items-center justify-center gap-3 hover:brightness-110 transition-all"
            >
              <Sparkles className="w-6 h-6" /> CONTRIBUTE PURE INSIGHT
            </motion.button>

            <div className="glass rounded-3xl p-8">
              <div className="uppercase text-xs tracking-widest text-cyan-400 mb-6 flex items-center gap-2">
                <Users /> LIVE REFRACTIONS
              </div>
              <div className="space-y-5 text-sm">
                {[
                  ["@stella_neura", "Solved temporal alignment", "+1840"],
                  ["@echo_void", "Shared empathy lattice", "+920"],
                  ["@kaleid_9", "Optimized stellar trade", "+1330"]
                ].map(([user, action, amt], i) => (
                  <div key={i} className="flex justify-between py-2 border-b border-white/10 last:border-none">
                    <div>
                      <div className="text-cyan-300">{user}</div>
                      <div className="text-xs text-white/50">{action}</div>
                    </div>
                    <div className="text-emerald-400 font-medium">{amt} QYL</div>
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