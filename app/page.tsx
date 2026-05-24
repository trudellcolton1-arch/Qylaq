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
    setClarity(c => Math.min(99.9, c + 0.15));
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-cyan-500/30 py-6">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="text-4xl">💎</span>
            <div>
              <div className="text-3xl font-light tracking-widest">QYLAQ</div>
              <div className="text-xs text-cyan-400 -mt-1">YEAR 3000 CRYSTAL ECONOMY</div>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-32 pb-20 max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="relative h-[620px] rounded-3xl overflow-hidden border border-cyan-500/30 bg-zinc-950">
              <Canvas camera={{ position: [0, 0, 8] }}>
                <ambientLight intensity={0.4} />
                <pointLight position={[10, 10, 10]} color="#a5f3fc" intensity={2} />
                <Crystal />
                <Stars radius={300} depth={50} count={800} factor={4} saturation={0} fade />
                <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.3} />
              </Canvas>

              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 glass rounded-3xl px-12 py-8 text-center">
                <div className="text-cyan-400 text-sm tracking-[4px] mb-3">YOUR CLARITY BALANCE</div>
                <div className="text-7xl font-light tracking-tighter tabular-nums">{balance.toLocaleString()}</div>
                <div className="text-3xl text-cyan-300">QYL</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="glass rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Zap className="w-9 h-9 text-cyan-400" />
                <div>
                  <div className="uppercase tracking-widest text-xs text-cyan-400">CLARITY INDEX</div>
                  <div className="text-6xl font-light">{clarity}</div>
                </div>
              </div>
              <div className="h-2.5 bg-white/10 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all" style={{ width: `${clarity}%` }} />
              </div>
            </div>

            <motion.button 
              onClick={contributeInsight}
              whileHover={{ scale: 1.03 }}
              className="w-full py-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-black rounded-3xl text-xl font-medium flex items-center justify-center gap-3 hover:brightness-110 transition"
            >
              <Sparkles className="w-6 h-6" /> CONTRIBUTE PURE INSIGHT
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
