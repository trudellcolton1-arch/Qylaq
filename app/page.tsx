'use client';

import { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Users, RefreshCw } from 'lucide-react';

function Crystal() {
  return (
    <mesh>
      <octahedronGeometry args={[2.2]} />
      <meshStandardMaterial 
        color="#67e8f9" 
        metalness={0.9} 
        roughness={0.1} 
        emissive="#22d3ee"
        emissiveIntensity={0.4}
      />
    </mesh>
  );
}

export default function Qylaq() {
  const [balance, setBalance] = useState(12480);
  const [clarity, setClarity] = useState(98.7);
  const [isMinting, setIsMinting] = useState(false);

  const contributeInsight = () => {
    setIsMinting(true);
    setTimeout(() => {
      const minted = Math.floor(Math.random() * 850) + 320;
      setBalance(b => b + minted);
      setClarity(c => Math.min(99.98, c + (Math.random() * 0.3 + 0.08)));
      setIsMinting(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <header className="fixed top-0 w-full z-50 backdrop-blur-2xl border-b border-cyan-500/20 bg-black/80">
        <div className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="text-4xl">💎</div>
            <div>
              <div className="text-4xl font-light tracking-widest">QYLAQ</div>
              <div className="text-xs text-cyan-400">YEAR 3000</div>
            </div>
          </div>
        </div>
      </header>

      <div className="pt-28 max-w-7xl mx-auto px-8">
        <div className="text-center mb-12">
          <h1 className="text-7xl font-light tracking-tighter mb-4">Crystal Clarity Economy</h1>
          <p className="text-xl text-zinc-400">Value that refracts truth</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <div className="relative h-[680px] rounded-3xl overflow-hidden border border-cyan-400/30 bg-black/40">
              <Canvas camera={{ position: [0, 2, 9] }}>
                <ambientLight intensity={0.3} />
                <pointLight position={[5, 8, 10]} color="#67e8f9" intensity={3} />
                <Crystal />
                <Stars radius={400} depth={60} count={1200} factor={2} saturation={0} fade />
                <OrbitControls enableZoom enableRotate autoRotate autoRotateSpeed={0.15} />
              </Canvas>

              <div className="absolute bottom-10 left-10 right-10 bg-black/80 backdrop-blur-xl border border-cyan-400/30 rounded-3xl p-8">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs tracking-widest text-cyan-400">BALANCE</div>
                    <div className="text-7xl font-light tabular-nums">{balance.toLocaleString()}</div>
                    <div className="text-cyan-300">QYL</div>
                  </div>
                  <motion.button
                    onClick={contributeInsight}
                    disabled={isMinting}
                    className="px-12 py-5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl font-medium flex items-center gap-3 disabled:opacity-70"
                  >
                    {isMinting ? <RefreshCw className="animate-spin" /> : <Sparkles />} 
                    {isMinting ? 'MINTING...' : 'CONTRIBUTE INSIGHT'}
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 space-y-6">
            <div className="glass rounded-3xl p-8">
              <div className="flex gap-4 items-center mb-6">
                <Zap className="w-10 h-10 text-cyan-400" />
                <div>
                  <div className="text-cyan-400">CLARITY INDEX</div>
                  <div className="text-6xl font-light">{clarity}</div>
                </div>
              </div>
              <div className="h-3 bg-white/10 rounded-full">
                <div className="h-3 bg-cyan-400 rounded-full" style={{width: `${clarity}%`}} />
              </div>
            </div>

            <div className="glass rounded-3xl p-8">
              <h3 className="uppercase text-xs mb-6">LIVE REFRACTIONS</h3>
              <div className="space-y-6 text-sm">
                {[
                  {user: "@stella_neura", action: "Resolved quantum coherence", amount: "+1240"},
                  {user: "@echo_92", action: "Shared empathy model", amount: "+670"}
                ].map((item, i) => (
                  <div key={i} className="flex justify-between border-b border-white/10 pb-5 last:border-0">
                    <div>
                      <div className="text-cyan-300">{item.user}</div>
                      <div className="text-xs text-white/60">{item.action}</div>
                    </div>
                    <div className="text-emerald-400">{item.amount} QYL</div>
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
