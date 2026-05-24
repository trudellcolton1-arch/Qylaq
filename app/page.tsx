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
        emissiveIntensity={0.5}
      />
    </mesh>
  );
}

export default function Qylaq() {
  const [balance, setBalance] = useState(12480);
  const [clarity, setClarity] = useState(98.7);

  const contributeInsight = () => {
    const minted = Math.floor(Math.random() * 650) + 220;
    setBalance(b => b + minted);
    setClarity(c => Math.min(99.9, c + 0.15));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/30 py-6">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-4xl">💎</span>
            <div>
              <div className="text-3xl tracking-[4px] font-light">QYLAQ</div>
              <div className="text-xs text-cyan-400 -mt-1">YEAR 3000</div>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="relative h-[620px] rounded-3xl overflow-hidden border border-cyan-400/30 bg-zinc-950">
              <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} color="#67e8f9" intensity={2} />
                <Crystal />
                <Stars radius={300} depth={50} count={800} factor={3} saturation={0} fade />
                <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.2} />
              </Canvas>

              <div className="absolute bottom-8 left-8 right-8 glass rounded-3xl p-10">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-cyan-400 text-sm tracking-widest mb-1">YOUR CLARITY BALANCE</div>
                    <div className="text-7xl font-light tracking-tighter">{balance.toLocaleString()}</div>
                    <div className="text-3xl text-cyan-300">QYL</div>
                  </div>
                  <motion.button 
                    onClick={contributeInsight}
                    whileHover={{ scale: 1.05 }}
                    className="px-10 py-6 bg-gradient-to-r from-cyan-400 to-purple-500 hover:from-cyan-300 hover:to-purple-400 text-black font-semibold rounded-2xl flex items-center gap-3 text-lg shadow-xl shadow-cyan-500/50"
                  >
                    <Sparkles className="w-6 h-6" /> CONTRIBUTE PURE INSIGHT
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-9 h-9 text-cyan-400" />
                <div>
                  <div className="text-sm tracking-widest text-cyan-400">CLARITY INDEX</div>
                  <div className="text-6xl font-light">{clarity}</div>
                </div>
              </div>
              <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-2.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full transition-all" style={{width: `${clarity}%`}} />
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <div className="uppercase text-xs tracking-widest mb-6 text-cyan-400 flex items-center gap-2">
                <Users /> LIVE REFRACTIONS
              </div>
              <div className="space-y-6">
                {[
                  {user: "@stella_neura", action: "Solved fusion alignment", amount: "+1840"},
                  {user: "@void_sage", action: "Shared empathy protocol", amount: "+920"},
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-white/10 pb-4 last:border-none">
                    <div>
                      <div className="text-cyan-300">{item.user}</div>
                      <div className="text-xs opacity-70">{item.action}</div>
                    </div>
                    <div className="text-emerald-400 font-medium">{item.amount} QYL</div>
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