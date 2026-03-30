import {useEffect, useState} from 'react';
import {StepIndicator} from './components/ui/StepIndicator';

type Step = 1 | 2 | 3

const STEPS = ['მონაცემები', 'პაკეტი', 'შეჯამება'];

function App() {
    const [step, setStep] = useState<Step>(1);
    const [dark, setDark] = useState(() => {
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
    }, [dark]);

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-navy-900 transition-colors duration-200">

            <header className="bg-navy-900 dark:bg-navy-900 px-6 py-4">
                <div className="max-w-2xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <svg width="36" height="32" viewBox="0 0 36 32" fill="none">
                            <path d="M18 2L34 30H2L18 2Z" stroke="#00A693" strokeWidth="2.5" fill="none"
                                  strokeLinejoin="round"/>
                            <path d="M18 10L27 27H9L18 10Z" stroke="#00A693" strokeWidth="1.5" fill="none"
                                  strokeLinejoin="round"/>
                        </svg>
                        <div>
                            <div className="text-white font-bold text-lg tracking-wide leading-none">არდი</div>
                            <div className="text-primary-500 text-xs">ავტომობილის დაზღვევა</div>
                        </div>
                    </div>

                    <button
                        onClick={() => setDark(d => !d)}
                        className="w-9 h-9 rounded-xl bg-white/10 flex cursor-pointer items-center justify-center text-white hover:bg-white/20 transition-colors"
                        aria-label="Toggle dark mode"
                    >
                        {dark ? (
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.8"/>
                                <path
                                    d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
                                    stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                            </svg>
                        ) : (
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor"
                                      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        )}
                    </button>
                </div>
            </header>


            <div className="flex flex-col items-center py-10 px-4">
                <div className="w-full max-w-2xl">

                    <StepIndicator currentStep={step} steps={STEPS}/>

                    <div className="bg-white dark:bg-navy-800 rounded-2xl p-8 shadow-sm">
                        <p className="text-slate-400 dark:text-slate-500 text-sm text-center">Step {step}</p>
                    </div>

                    <div className="flex gap-3 mt-4">
                        <button
                            onClick={() => setStep(s => Math.max(1, s - 1) as Step)}
                            className="flex-1 py-3 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                        >
                            ← უკან
                        </button>
                        <button
                            onClick={() => setStep(s => Math.min(3, s + 1) as Step)}
                            className="flex-1 py-3 rounded-xl bg-primary-500 text-white text-sm font-medium hover:bg-primary-600 transition-colors"
                        >
                            შემდეგი →
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;