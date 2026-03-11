import React from "react";
import { router, usePage } from "@inertiajs/react"; 

interface GuardLayoutProps {
    children: React.ReactNode;
}

export default function GuardLayout({ children }: GuardLayoutProps) {
    
    // Kukunin natin ang current URL mula sa Inertia
    const { url } = usePage();

    // Helper function para i-check kung active ba ang menu
    const isActive = (path: string) => {
        return url.startsWith(path);
    };

    return (
        // Naka-lock na ang height para hindi gumalaw ang sidebar
        <div className="h-screen flex bg-gray-100 overflow-hidden">

            {/* Sidebar */}
            <aside className="w-64 shrink-0 bg-gradient-to-b from-blue-900 to-blue-800 text-white p-6 flex flex-col shadow-xl z-20">
                <div className="text-2xl font-black mb-10 border-b border-blue-700 pb-5 tracking-wider text-center">
                    VISITOR LOG
                </div>

                <nav className="flex-1 space-y-3">
                    
                    {/* Dashboard Menu */}
                    <div
                        onClick={() => router.visit('/dashboard')}
                        className={`cursor-pointer p-3 rounded-xl transition-all duration-300 font-medium flex items-center gap-3
                            ${isActive('/dashboard') 
                                ? 'bg-white text-blue-900 shadow-lg transform scale-105 font-bold' 
                                : 'text-gray-200 hover:bg-blue-700 hover:text-white hover:translate-x-1' 
                            }`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                        Dashboard
                    </div>

                    {/* Visitor Registration Menu */}
                    <div
                        onClick={() => router.visit('/visitor/register')}
                        className={`cursor-pointer p-3 rounded-xl transition-all duration-300 font-medium flex items-center gap-3
                            ${isActive('/visitor/register') 
                                ? 'bg-white text-blue-900 shadow-lg transform scale-105 font-bold' 
                                : 'text-gray-200 hover:bg-blue-700 hover:text-white hover:translate-x-1' 
                            }`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                        Registration
                    </div>

                    {/* QR Scanner Menu */}
                    <div
                        onClick={() => router.visit('/scanner')}
                        className={`cursor-pointer p-3 rounded-xl transition-all duration-300 font-medium flex items-center gap-3
                            ${isActive('/scanner') 
                                ? 'bg-white text-blue-900 shadow-lg transform scale-105 font-bold' 
                                : 'text-gray-200 hover:bg-blue-700 hover:text-white hover:translate-x-1' 
                            }`}
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm14 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                        QR Scanner
                    </div>

                </nav>

                {/* Logout Button Section - Ginawang 'mb-2' para bumaba nang kaunti */}
                <div className="mt-auto mb-1">
                    <div
                        className="cursor-pointer text-gray-300 hover:bg-red-500 hover:text-white p-3 rounded-xl transition-all duration-300 flex items-center gap-3 font-bold group"
                        onClick={() => router.visit('/logout', { method: 'post' })}
                    >
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        Logout
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-10 overflow-y-auto bg-gray-50">
                {children}
            </main>

        </div>
    );
}