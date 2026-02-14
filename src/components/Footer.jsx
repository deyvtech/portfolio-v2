import React from 'react'

const Footer = () => {
    const [currentTime, setCurrentTime] = React.useState(new Date().toLocaleTimeString());
    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date().toLocaleTimeString());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

  return (
    <footer className="max-container border-t border-slate-200 dark:border-slate-800 py-16 opacity-30 text-[9px] flex flex-col md:flex-row justify-between items-center gap-6 uppercase tracking-[0.3em]">
        <div className="flex gap-12">
            <span>© {new Date().getFullYear()} DEV_SYSTEM</span>
            <span>BUILD_ID: 94F8S2</span>
        </div>
        <div>{currentTime}</div>
    </footer>
  )
}

export default Footer