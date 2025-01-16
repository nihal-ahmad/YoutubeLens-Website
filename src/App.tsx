import { Search, MessageSquare, FileText, Download, Chrome, ArrowRight, Youtube } from 'lucide-react';

function App() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none" />
        <header className="container mx-auto px-4 pt-24 pb-32 text-center relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,0,255,0.1),transparent)] pointer-events-none" />
          <div className="flex items-center justify-center gap-2 mb-8">
            <Youtube className="text-purple-600 w-12 h-12" />
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Enhance Your YouTube Experience
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Transform how you interact with YouTube videos using AI-powered summarization,
            transcript search, and intelligent video chat.
          </p>
          <button 
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center gap-3 mx-auto transform hover:scale-105"
          >
            <Download size={24} />
            <a href='https://drive.google.com/drive/folders/189fIbBuxpHgfc-eT_B_rUqF_lvWifnZt?usp=sharing' target='_blank'>Download Extension</a>
          </button>
        </header>
      </div>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-24">
        <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
          Powerful Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border border-purple-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
              <FileText className="text-purple-600 transform group-hover:scale-110 transition-transform duration-300" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 relative">Video Summarization</h3>
            <p className="text-gray-600 leading-relaxed relative">
              Get instant AI-generated summaries of any YouTube video, saving your time
              and helping you grasp key points quickly.
            </p>
          </div>

          <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border border-purple-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
              <Search className="text-purple-600 transform group-hover:scale-110 transition-transform duration-300" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 relative">Transcript Search</h3>
            <p className="text-gray-600 leading-relaxed relative">
              Search through video transcripts and jump directly to specific moments
              using our intelligent timestamp navigation.
            </p>
          </div>

          <div className="group bg-white p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:transform hover:-translate-y-2 border border-purple-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-transform duration-300">
              <MessageSquare className="text-purple-600 transform group-hover:scale-110 transition-transform duration-300" size={32} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800 relative">Video Chat</h3>
            <p className="text-gray-600 leading-relaxed relative">
              Ask questions about the video content and get instant AI-powered responses
              based on the video context.
            </p>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-50/50 to-white/50 pointer-events-none" />
        <div className="container mx-auto px-4 relative">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Installation Guide
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6">
              <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-purple-600 text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Download the Extension</h3>
                  <p className="text-gray-600 leading-relaxed">Click the download button above to get the extension ZIP file</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-purple-600 text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Open Chrome Extensions Page</h3>
                  <p className="text-gray-600 leading-relaxed">Go to chrome://extensions/ in your Chrome browser</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-purple-600 text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Enable Developer Mode</h3>
                  <p className="text-gray-600 leading-relaxed">Toggle on "Developer mode" in the top right corner</p>
                </div>
              </div>

              <div className="flex items-start gap-6 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100">
                <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="font-bold text-purple-600 text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">Load the Extension</h3>
                  <p className="text-gray-600 leading-relaxed">Click "Load unpacked" and select the extracted extension folder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="container mx-auto px-4 py-24">
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <Youtube className="w-[40rem] h-[40rem]" />
          </div>
          <div className="aspect-video relative">
            <img 
              src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80"
              alt="Extension Demo"
              className="w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="group relative bg-white px-8 py-4 rounded-full text-lg font-bold flex items-center gap-3 hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-purple-500/20">
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                 <a href="https://www.linkedin.com/in/nihal-ahmad-46042a192/" target='_blank'>Let's Connect</a> 
                </span>
                <ArrowRight className="text-purple-600 group-hover:text-white transition-colors duration-300" size={24} />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Chrome size={32} className="text-purple-400" />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">
              YouTube Extension
            </span>
          </div>
          <p className="text-gray-400">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}

export default App;