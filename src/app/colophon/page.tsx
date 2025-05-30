import { Code, Globe, Laptop, Wrench, ExternalLink, History, Server, User } from 'lucide-react';

export default function Colophon() {
    const techStack = [
        { 
            name: 'Next.js', 
            description: 'React framework that enables server-side rendering and static site generation',
            url: 'https://nextjs.org',
            category: 'framework'
        },
        { 
            name: 'React', 
            description: 'JavaScript library for building user interfaces',
            url: 'https://react.dev',
            category: 'library'
        },
        { 
            name: 'Tailwind CSS', 
            description: 'Utility-first CSS framework',
            url: 'https://tailwindcss.com',
            category: 'styling'
        },
        { 
            name: 'shadcn/ui', 
            description: 'Reusable component library built with Radix UI and Tailwind',
            url: 'https://ui.shadcn.com',
            category: 'components'
        },
        { 
            name: 'Framer Motion', 
            description: 'Animation library for React',
            url: 'https://www.framer.com/motion',
            category: 'animation'
        },
        { 
            name: 'react-i18next', 
            description: 'Internationalization framework',
            url: 'https://react.i18next.com',
            category: 'i18n'
        },
        { 
            name: 'TypeScript', 
            description: 'Strongly typed programming language that builds on JavaScript',
            url: 'https://www.typescriptlang.org',
            category: 'language'
        }
    ];

    const tools = [
        { name: 'Windsurf', description: 'AI-powered code editor' },
        { name: 'VS Code', description: 'Source code editor' },
        { name: 'GitHub', description: 'Version control and collaboration' },
        { name: 'Claude', description: 'AI assistant for development' },
        { name: 'Dia Browser', description: 'Web development and testing' }
    ];

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
            <div className="max-w-5xl mx-auto px-6 py-16">
                {/* Header */}
                <div className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-6">
                        Colophon
                    </h1>
                    <div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600 mx-auto mb-8"></div>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                        A comprehensive look at the evolution, tools, and technologies that power this website
                    </p>
                </div>

                {/* Site History Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full">
                            <History className="w-7 h-7 text-amber-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Site History</h2>
                    </div>
                    
                
                    <div className="flex items-center gap-3 mb-2">
                        <User className="w-5 h-5 text-blue-600" />
                        <span className="font-semibold text-slate-900">Original Development</span>
                    </div>
                    <p className="text-slate-700 mb-0">
                        The original site was developed by{' '}
                                    <a 
                                        href="https://aram.sh" 
                                        className="text-blue-600 hover:text-blue-800 font-medium underline decoration-blue-300 hover:decoration-blue-500 transition-colors"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Aram Shiva
                                    </a>
                                </p>
                </section>

                {/* Technology Stack Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full">
                            <Code className="w-7 h-7 text-blue-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Technology Stack</h2>
                    </div>
                    
                    <div className="grid lg:grid-cols-2 gap-6">
                        {techStack.map((tech, index) => (
                            <div 
                                key={index}
                                className="group bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/50 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                      
                                        <div>
                                            <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                                {tech.name}
                                            </h3>
                                            <span className="text-xs font-medium px-2 py-1 bg-slate-100 text-slate-600 rounded-full capitalize">
                                                {tech.category}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-slate-600 leading-relaxed">
                                    {tech.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Hosting & Deployment Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full">
                            <Server className="w-7 h-7 text-green-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Hosting & Deployment</h2>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 rounded-2xl p-8 shadow-lg border border-green-200/50">
                        <div className="flex items-start gap-6">
                            <div className="p-4 bg-white rounded-full shadow-sm">
                                <Server className="w-8 h-8 text-green-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Vercel Platform</h3>
                                <p className="text-slate-700 leading-relaxed mb-4">
                                    The site is hosted on{' '}
                                    <a 
                                        href="https://vercel.com" 
                                        className="text-green-600 hover:text-green-800 font-medium underline decoration-green-300 hover:decoration-green-500 transition-colors"
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        Vercel
                                    </a>
                                    , which provides seamless deployment from GitHub, automatic HTTPS, and global CDN distribution.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-white/80 text-green-700 text-sm font-medium rounded-full">
                                        GitHub Integration
                                    </span>
                                    <span className="px-3 py-1 bg-white/80 text-green-700 text-sm font-medium rounded-full">
                                        Automatic HTTPS
                                    </span>
                                    <span className="px-3 py-1 bg-white/80 text-green-700 text-sm font-medium rounded-full">
                                        Global CDN
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Development Tools Section */}
                <section className="mb-20">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full">
                            <Wrench className="w-7 h-7 text-purple-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Development Tools</h2>
                    </div>
                    
                    <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {tools.map((tool, index) => (
                                <div key={index} className="text-center group">
                                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                                        <Wrench className="w-7 h-7 text-purple-600" />
                                    </div>
                                    <h3 className="font-bold text-slate-900 mb-2 text-lg">
                                        {tool.name}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {tool.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Hardware Section */}
                <section className="mb-16">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="p-3 bg-gradient-to-br from-gray-100 to-slate-100 rounded-full">
                            <Laptop className="w-7 h-7 text-gray-600" />
                        </div>
                        <h2 className="text-3xl font-bold text-slate-900">Hardware</h2>
                    </div>
                    
                    <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-8 shadow-lg border border-gray-200/50">
                        <div className="flex items-center gap-6">
                            <div className="p-4 bg-white rounded-full shadow-sm">
                                <Laptop className="w-10 h-10 text-gray-600" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                                    Apple M4 Pro MacBook Pro
                                </h3>
                                <p className="text-slate-600 text-lg">
                                    Primary development machine for coding, design, and testing
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <div className="text-center pt-12 border-t border-slate-200/50">
                    <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        This page celebrates the amazing tools and technologies that make modern web development possible, 
                        and honors the continuous evolution of this digital space.
                    </p>
                </div>
            </div>
        </main>
    );
}