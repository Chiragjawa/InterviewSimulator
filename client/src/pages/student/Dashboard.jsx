import React, { useState } from 'react';
import { FiUser, FiEdit, FiPlay, FiStopCircle } from 'react-icons/fi';
import { Sparkles } from 'lucide-react';

// recordings 
// screen in interview session 

const Dashboard = () => {
  // Store mocks in state
  const [mockInterviews, setMockInterviews] = useState([
    { id: 1, title: 'Frontend Developer Mock', date: '2025-04-12', score: 85 },
    { id: 2, title: 'Backend Developer Mock', date: '2025-04-09', score: 92 },
    { id: 3, title: 'System Design Mock', date: '2025-03-28', score: 78 },
  ]);

  // Handle "Start New Mock Test"
  const handleStartMock = () => {
    const newMock = {
      id: mockInterviews.length + 1,
      title: `Mock Test #${mockInterviews.length + 1}`,
      date: new Date().toISOString().split('T')[0], // current date
      score: null,
    };
    setMockInterviews([newMock, ...mockInterviews]);
  };

  return (
    <div className="flex min-h-screen bg-gray-900 pt-16">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800/50 backdrop-blur-sm border-r border-gray-700 p-6 hidden md:block">
        <div className="flex items-center gap-3 mb-10">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
            Dashboard
          </h2>
        </div>
        <nav className="space-y-4">
          <button className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-200 w-full">
            <FiUser className="mr-3" /> Dashboard
          </button>
          <button className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-200 w-full">
            <FiStopCircle className="mr-3" /> Overall Score
          </button>
          <button className="flex items-center text-gray-300 hover:text-white hover:bg-gray-700/50 p-3 rounded-lg transition-all duration-200 w-full">
            <FiEdit className="mr-3" /> Edit Info
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back 👋</h1>
          <p className="text-gray-400">Let's sharpen those interview skills!</p>
        </header>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Mocks</p>
                <p className="text-2xl font-bold text-white">{mockInterviews.length}</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <FiPlay className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Average Score</p>
                <p className="text-2xl font-bold text-white">
                  {mockInterviews.filter(mock => mock.score).length > 0 
                    ? Math.round(mockInterviews.filter(mock => mock.score).reduce((acc, mock) => acc + mock.score, 0) / mockInterviews.filter(mock => mock.score).length)
                    : 0}%
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center">
                <FiStopCircle className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">This Month</p>
                <p className="text-2xl font-bold text-white">
                  {mockInterviews.filter(mock => {
                    const mockDate = new Date(mock.date);
                    const now = new Date();
                    return mockDate.getMonth() === now.getMonth() && mockDate.getFullYear() === now.getFullYear();
                  }).length}
                </p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg flex items-center justify-center">
                <FiUser className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>

        {/* Start New Test */}
        <div className="mb-10">
          <button
            onClick={handleStartMock}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white text-lg font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3"
          >
            <FiPlay className="w-5 h-5" />
            Start New Mock Test
          </button>
        </div>

        {/* Mock Interview List */}
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Your Previous Mock Interviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockInterviews.map((mock) => (
              <div
                key={mock.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 rounded-xl hover:border-purple-500/50 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {mock.title}
                  </h3>
                  {mock.score && (
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      mock.score >= 90 ? 'bg-green-500/20 text-green-400' :
                      mock.score >= 80 ? 'bg-blue-500/20 text-blue-400' :
                      mock.score >= 70 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {mock.score}%
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-400 mb-4">Taken on: {mock.date}</p>
                <div className="flex gap-2">
                  <button className="flex-1 px-3 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white rounded-lg transition-colors text-sm">
                    View Details
                  </button>
                  {!mock.score && (
                    <button className="px-3 py-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg transition-all duration-200 text-sm">
                      Continue
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;