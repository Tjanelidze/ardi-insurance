type Props = {
    currentStep: 1 | 2 | 3
    steps: string[]
}

export function StepIndicator({currentStep, steps}: Props) {
    return (
        <div className="w-full mb-8">
            <div className="flex items-center">
                {steps.map((label, i) => {
                    const stepNumber = i + 1;
                    const isDone = stepNumber < currentStep;
                    const isActive = stepNumber === currentStep;

                    return (
                        <div key={stepNumber} className="flex items-center flex-1 last:flex-none">
                            <div className="flex flex-col items-center gap-1">
                                <div
                                    className={`
                    w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all
                    ${isDone ? 'bg-primary-500 text-white' : ''}
                    ${isActive ? 'bg-primary-500 text-white ring-4 ring-primary-500/20' : ''}
                    ${!isDone && !isActive ? 'bg-slate-100 dark:bg-navy-800 text-slate-400' : ''}
                  `}
                                >
                                    {isDone ? '✓' : stepNumber}
                                </div>
                                <span
                                    className={`text-xs font-medium whitespace-nowrap transition-colors ${
                                        isActive
                                            ? 'text-primary-500'
                                            : 'text-slate-400 dark:text-slate-500'
                                    }`}
                                >
                  {label}
                </span>
                            </div>

                            {i < steps.length - 1 && (
                                <div
                                    className={`h-0.5 flex-1 mx-2 mb-4 transition-all ${
                                        isDone ? 'bg-primary-500' : 'bg-slate-200 dark:bg-slate-700'
                                    }`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}