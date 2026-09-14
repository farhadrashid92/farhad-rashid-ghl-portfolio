import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { WORKFLOWS } from '@/data/config';
import { Play, ArrowRight, Zap, CheckCircle2 } from 'lucide-react';

export function AutomationsSection() {
  const [activeWorkflowId, setActiveWorkflowId] = useState(WORKFLOWS[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeNodeIndex, setActiveNodeIndex] = useState(-1);

  const activeWorkflow = WORKFLOWS.find(w => w.id === activeWorkflowId) || WORKFLOWS[0];

  const playWorkflow = () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setActiveNodeIndex(0);

    let currentIndex = 0;
    const interval = setInterval(() => {
      currentIndex++;
      if (currentIndex >= activeWorkflow.nodes.length) {
        clearInterval(interval);
        setTimeout(() => {
          setIsPlaying(false);
          setActiveNodeIndex(-1);
        }, 1000);
      } else {
        setActiveNodeIndex(currentIndex);
      }
    }, 800);
  };

  return (
    <section id="automations" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 -z-10" />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Automation</span> Systems I've Built
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Interactive visual maps of the GoHighLevel automation logic driving client growth and reducing manual tasks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Sidebar / Selectors */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {WORKFLOWS.map((workflow) => (
              <button
                key={workflow.id}
                onClick={() => {
                  if (!isPlaying) {
                    setActiveWorkflowId(workflow.id);
                    setActiveNodeIndex(-1);
                  }
                }}
                disabled={isPlaying}
                className={`text-left px-6 py-4 rounded-xl transition-all duration-300 flex items-center justify-between group ${
                  activeWorkflowId === workflow.id 
                    ? 'bg-primary/10 border-primary/30 border text-white shadow-[0_0_20px_rgba(26,86,219,0.1)]' 
                    : 'bg-transparent border-transparent border text-muted-foreground hover:bg-card hover:border-border'
                } ${isPlaying ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <span className="font-medium text-lg">{workflow.title}</span>
                <ArrowRight className={`w-4 h-4 transition-transform ${
                  activeWorkflowId === workflow.id ? 'translate-x-0 opacity-100 text-primary' : '-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-50'
                }`} />
              </button>
            ))}
          </div>

          {/* Visualization Area */}
          <div className="lg:col-span-8">
            <div className="glass-card rounded-2xl p-6 md:p-12 min-h-[500px] flex flex-col relative">
              <div className="flex justify-between items-center mb-12">
                <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-3">
                  <Zap className="w-5 h-5 text-primary" />
                  {activeWorkflow.title}
                </h3>
                <button 
                  onClick={playWorkflow}
                  disabled={isPlaying}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  <Play className="w-4 h-4 fill-current" />
                  {isPlaying ? 'Running...' : 'Run Simulation'}
                </button>
              </div>

              <div className="flex-1 flex flex-col items-center justify-center py-8">
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeWorkflow.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="w-full max-w-lg flex flex-col gap-2 relative"
                  >
                    {activeWorkflow.nodes.map((node, i) => {
                      const isPast = activeNodeIndex >= i;
                      const isActive = activeNodeIndex === i;
                      const isLast = i === activeWorkflow.nodes.length - 1;

                      return (
                        <div key={`${activeWorkflow.id}-node-${i}`} className="flex flex-col items-center w-full">
                          <motion.div
                            animate={{
                              scale: isActive ? 1.05 : 1,
                              boxShadow: isActive ? '0 0 30px rgba(26,86,219,0.3)' : 'none',
                              borderColor: isActive ? 'rgba(26,86,219,0.5)' : (isPast ? 'rgba(26,86,219,0.2)' : 'rgba(255,255,255,0.05)'),
                              backgroundColor: isActive ? 'rgba(26,86,219,0.1)' : (isPast ? 'rgba(255,255,255,0.03)' : 'rgba(255,255,255,0.01)')
                            }}
                            className="w-full sm:w-4/5 py-4 px-6 rounded-xl border relative z-10 transition-colors duration-500 backdrop-blur-sm flex items-center justify-between"
                          >
                            <span className={`font-medium transition-colors duration-500 ${isPast ? 'text-white' : 'text-muted-foreground'}`}>
                              {node}
                            </span>
                            
                            {isPast && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="text-primary"
                              >
                                <CheckCircle2 className="w-5 h-5" />
                              </motion.div>
                            )}
                          </motion.div>

                          {!isLast && (
                            <div className="h-8 w-px bg-border relative">
                              {/* Animated line fill when playing */}
                              {isPast && !isActive && (
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: "100%" }}
                                  transition={{ duration: 0.5 }}
                                  className="absolute top-0 left-0 w-full bg-primary shadow-[0_0_10px_rgba(26,86,219,0.5)]"
                                />
                              )}
                              {isActive && (
                                <motion.div
                                  initial={{ height: 0 }}
                                  animate={{ height: "100%" }}
                                  transition={{ duration: 0.8, ease: "linear" }}
                                  className="absolute top-0 left-0 w-full bg-primary shadow-[0_0_10px_rgba(26,86,219,0.5)]"
                                />
                              )}
                              {/* Arrow head */}
                              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 border-r border-b border-border rotate-45 bg-card" />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
