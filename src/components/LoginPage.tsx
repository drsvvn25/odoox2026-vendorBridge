import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Lock, Mail, Shield, LogIn, CheckCircle } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

export default function LoginPage({ onLoginSuccess }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);
  const [isGranted, setIsGranted] = useState(false);

  // Auto-fill mock credentials for easy demonstration
  const handlePrefill = () => {
    setEmail('alex.rivera@vendorbridge.com');
    setPassword('security_pass_2026');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsVerifying(true);
    
    // Simulate API authorization check
    setTimeout(() => {
      setIsVerifying(false);
      setIsGranted(true);
      
      setTimeout(() => {
        onLoginSuccess();
      }, 700);
    }, 1200);
  };

  return (
    <main className="relative min-h-screen bg-background flex flex-col items-center justify-center overflow-hidden px-4 select-none">
      
      {/* Background Dotted Overlay */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
      
      {/* Soft Glow Radial Circles */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 blur-[120px] rounded-full pointer-events-none"></div>

      {/* Main Container */}
      <div className="z-10 w-full max-w-[400px]">
        
        {/* Brand Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-surface-container-highest border border-outline-variant flex items-center justify-center rounded-lg mb-4">
            <Shield className="text-primary w-6 h-6 animate-pulse" />
          </div>
          <h1 className="font-sans text-3xl font-extrabold tracking-tight text-white">VendorBridge</h1>
          <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mt-1">Procurement ERP System</p>
        </div>

        {/* Login Form Form Card */}
        <div className="bg-surface-container-low border border-outline-variant rounded-xl p-6 shadow-2xl relative">
          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            {/* Field 1: Email */}
            <div className="space-y-1.5 animate-in fade-in duration-300">
              <div className="flex justify-between items-center">
                <label className="font-mono text-[10px] text-on-surface-variant uppercase px-1" htmlFor="email">Work Email</label>
                <button 
                  type="button" 
                  onClick={handlePrefill}
                  className="font-mono text-[9px] text-primary hover:underline"
                >
                  Use Demo Login
                </button>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  <Mail className="w-4 h-4" />
                </span>
                <input 
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  required
                  className="w-full h-11 pl-10 pr-4 bg-surface-container-lowest border border-outline-variant text-on-surface font-sans text-sm rounded-lg focus:outline-none focus:border-secondary transition-all"
                />
              </div>
            </div>

            {/* Field 2: Password */}
            <div className="space-y-1.5 animate-in fade-in duration-300 delay-75">
              <div className="flex justify-between items-center px-1">
                <label className="font-mono text-[10px] text-on-surface-variant uppercase" htmlFor="password">Password</label>
                <span className="font-mono text-[10px] text-secondary hover:text-primary transition-colors cursor-pointer">Forgot Password?</span>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                  <Lock className="w-4 h-4" />
                </span>
                <input 
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full h-11 pl-10 pr-4 bg-surface-container-lowest border border-outline-variant text-on-surface font-sans text-sm rounded-lg focus:outline-none focus:border-secondary transition-all"
                />
              </div>
            </div>

            {/* Action 1: Sign In Submit */}
            <button 
              type="submit" 
              disabled={isVerifying || isGranted}
              className={`w-full h-11 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] disabled:scale-100 disabled:opacity-90 text-white font-sans text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer ${isGranted ? 'bg-[#1c2128] border border-primary text-primary' : ''}`}
            >
              {isVerifying ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span className="font-mono text-xs">Verifying Access...</span>
                </>
              ) : isGranted ? (
                <>
                  <CheckCircle className="text-primary w-5 h-5" />
                  <span className="font-mono text-xs text-primary font-bold">Access Granted</span>
                </>
              ) : (
                <>
                  <span>Sign In to ERP</span>
                  <LogIn className="w-4 h-4" />
                </>
              )}
            </button>

            {/* SSO separator */}
            <div className="relative py-2 flex items-center select-none">
              <div className="flex-grow border-t border-outline-variant/40"></div>
              <span className="flex-shrink mx-4 font-mono text-[9px] text-on-surface-variant/50">SSO OPTION</span>
              <div className="flex-grow border-t border-outline-variant/40"></div>
            </div>

            {/* Action 2: SSO Authenticate */}
            <button 
              type="button"
              onClick={() => {
                handlePrefill();
                setIsVerifying(true);
                setTimeout(() => {
                  setIsVerifying(false);
                  setIsGranted(true);
                  setTimeout(() => onLoginSuccess(), 600);
                }, 1000);
              }}
              className="w-full h-11 bg-transparent hover:bg-surface-variant/30 border border-outline-variant text-on-surface font-sans text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <img 
                alt="Google authentication identity logo" 
                className="w-4 h-4" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoOVpXBbgpaKlXy1w-PRiX8E95z9TVBBYQTV4tbgOUCYqXdmE1He3tGEHl13OHVMRK9VXs_aFBwad1fMz-4tfERIz_XE4iwZ3CSldAL5oAa1QbnuctAp2mKPKaYhfwvKzxFjbxHOZOfZ_p4hBX1kWD7S7T2raU5-JBEyUV2U3jimabcbWUh65Cpagf84IbUQoMX4wZILoWgTLN-oKPn7wNzxO59rXTGXuAsk2U2nV2La9keAceb1HquBKp8uqIhQG6eAPHiYcqVley"
              />
              <span className="font-mono text-xs text-on-surface">Authenticate with Google</span>
            </button>
          </form>
        </div>

        {/* Verification Info Panel */}
        <div className="mt-6 p-4 bg-surface-container-high/30 border border-outline-variant/30 rounded-lg flex items-start gap-3">
          <Shield className="text-tertiary w-5 h-5 flex-shrink-0 mt-0.5" />
          <p className="font-sans text-xs text-on-surface-variant leading-relaxed">
            This is a secure procurement environment. All login attempts are logged and monitored via encrypted ERP protocols.
          </p>
        </div>
      </div>

      {/* Footer Layout elements */}
      <footer className="absolute bottom-8 flex flex-col items-center gap-1.5">
        <div className="flex items-center gap-4 text-xs">
          <span className="font-mono text-[10px] text-on-surface-variant hover:text-white cursor-pointer select-none">Privacy Policy</span>
          <span className="w-1.5 h-1.5 bg-outline-variant rounded-full"></span>
          <span className="font-mono text-[10px] text-on-surface-variant hover:text-white cursor-pointer select-none">Terms of Service</span>
        </div>
        <div className="flex items-center gap-1 opacity-55 saturate-50 mt-1">
          <span className="font-mono text-[9px] text-on-surface-variant">Powered by</span>
          <svg className="fill-on-surface" fill="none" height="12" viewBox="0 0 76 15" width="48" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.5 0L0 15H2.5L7.5 4.8L12.5 15H15L7.5 0Z"></path>
            <path d="M25 0V15H27.5V0H25Z"></path>
            <path d="M35 0L42.5 7.5L35 15H37.5L45 7.5L37.5 0H35Z"></path>
            <path d="M55 0V15H57.5V0H55Z"></path>
            <path d="M65 0L72.5 7.5L65 15H67.5L75 7.5L67.5 0H65Z"></path>
          </svg>
        </div>
      </footer>
    </main>
  );
}
