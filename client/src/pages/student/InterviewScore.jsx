// import React, { useState, useEffect } from 'react';
// import { Sparkles, TrendingUp, BarChart3, Target, Users, MessageSquare, Code, Lightbulb, Heart, Zap } from 'lucide-react';

// const InterviewScore = () => {
//   const [scores, setScores] = useState({
//     communication: 0,
//     technical: 0,
//     problemSolving: 0,
//     culturalFit: 0,
//     confidence: 0
//   });

//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [interviewData, setInterviewData] = useState(null);

//   // Fetch interview scores from backend
//   useEffect(() => {
//     const fetchInterviewScores = async () => {
//       try {
//         setIsLoading(true);
//         // Replace with your actual API endpoint
//         const response = await fetch('/api/interview/scores', {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json',
//             // Add authorization header if needed
//             // 'Authorization': `Bearer ${token}`
//           }
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch interview scores');
//         }

//         const data = await response.json();
        
//         // Assuming the backend returns data in this format:
//         // {
//         //   interviewId: "123",
//         //   candidateName: "John Doe",
//         //   date: "2025-01-15",
//         //   scores: {
//         //     communication: 85,
//         //     technical: 92,
//         //     problemSolving: 78,
//         //     culturalFit: 88,
//         //     confidence: 82
//         //   }
//         // }
        
//         setInterviewData(data);
//         setScores(data.scores || {
//           communication: 0,
//           technical: 0,
//           problemSolving: 0,
//           culturalFit: 0,
//           confidence: 0
//         });
//       } catch (err) {
//         console.error('Error fetching interview scores:', err);
//         setError(err.message);
        
//         // Fallback to mock data for demonstration
//         const mockData = {
//           interviewId: "demo-123",
//           candidateName: "Demo Candidate",
//           date: new Date().toISOString().split('T')[0],
//           scores: {
//             communication: 85,
//             technical: 92,
//             problemSolving: 78,
//             culturalFit: 88,
//             confidence: 82
//           }
//         };
//         setInterviewData(mockData);
//         setScores(mockData.scores);
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchInterviewScores();
//   }, []);

//   const calculateAverage = () => {
//     const values = Object.values(scores);
//     return Math.round(values.reduce((acc, val) => acc + val, 0) / values.length);
//   };

//   const getScoreColor = (score) => {
//     if (score >= 90) return 'text-green-400';
//     if (score >= 80) return 'text-blue-400';
//     if (score >= 70) return 'text-yellow-400';
//     if (score >= 60) return 'text-orange-400';
//     return 'text-red-400';
//   };

//   const getScoreBgColor = (score) => {
//     if (score >= 90) return 'bg-green-500/20';
//     if (score >= 80) return 'bg-blue-500/20';
//     if (score >= 70) return 'bg-yellow-500/20';
//     if (score >= 60) return 'bg-orange-500/20';
//     return 'bg-red-500/20';
//   };

//   const categories = [
//     {
//       key: 'communication',
//       name: 'Communication Skills',
//       description: 'Clarity, articulation, structured responses',
//       icon: MessageSquare,
//       color: 'from-blue-500 to-cyan-500'
//     },
//     {
//       key: 'technical',
//       name: 'Technical Knowledge',
//       description: 'Understanding of key concepts for the role',
//       icon: Code,
//       color: 'from-purple-500 to-pink-500'
//     },
//     {
//       key: 'problemSolving',
//       name: 'Problem-Solving',
//       description: 'Ability to analyze problems and propose solutions',
//       icon: Lightbulb,
//       color: 'from-green-500 to-emerald-500'
//     },
//     {
//       key: 'culturalFit',
//       name: 'Cultural & Role Fit',
//       description: 'Alignment with company values and job role',
//       icon: Heart,
//       color: 'from-red-500 to-pink-500'
//     },
//     {
//       key: 'confidence',
//       name: 'Confidence & Clarity',
//       description: 'Confidence in responses, engagement, and clarity',
//       icon: Zap,
//       color: 'from-yellow-500 to-orange-500'
//     }
//   ];

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-900 pt-16 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
//           <p className="text-gray-400 text-lg">Loading interview scores...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-900 pt-16 flex items-center justify-center">
//         <div className="text-center">
//           <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
//             <span className="text-red-400 text-2xl">⚠️</span>
//           </div>
//           <p className="text-red-400 text-lg mb-2">Error loading scores</p>
//           <p className="text-gray-400">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-900 pt-16">
//       <div className="max-w-7xl mx-auto p-6">
//         {/* Header */}
//         <div className="mb-8">
//           <div className="flex items-center gap-3 mb-4">
//             <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
//               <Sparkles className="w-6 h-6 text-white" />
//             </div>
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//               Interview Score Report
//             </h1>
//           </div>
//           {interviewData && (
//             <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 mb-6">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
//                 <div>
//                   <p className="text-gray-400 text-sm">Candidate</p>
//                   <p className="text-white font-semibold">{interviewData.candidateName}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-sm">Interview ID</p>
//                   <p className="text-white font-semibold">{interviewData.interviewId}</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-400 text-sm">Date</p>
//                   <p className="text-white font-semibold">{interviewData.date}</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>

//         {/* Overall Score Card */}
//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8">
//           <div className="text-center">
//             <h2 className="text-3xl font-bold text-white mb-2">Overall Score</h2>
//             <div className="flex items-center justify-center gap-4 mb-6">
//               <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold ${getScoreBgColor(calculateAverage())} ${getScoreColor(calculateAverage())}`}>
//                 {calculateAverage()}%
//               </div>
//               <div className="text-left">
//                 <p className="text-gray-400">Average Performance</p>
//                 <p className={`text-xl font-semibold ${getScoreColor(calculateAverage())}`}>
//                   {calculateAverage() >= 90 ? 'Excellent' :
//                    calculateAverage() >= 80 ? 'Very Good' :
//                    calculateAverage() >= 70 ? 'Good' :
//                    calculateAverage() >= 60 ? 'Fair' : 'Needs Improvement'}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Radar Chart Visualization */}
//         <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 mb-8">
//           <h3 className="text-2xl font-semibold text-white mb-6 text-center">Performance Radar Chart</h3>
//           <div className="flex justify-center">
//             <div className="relative w-80 h-80">
//               {/* Radar Chart Background */}
//               <svg width="320" height="320" viewBox="0 0 320 320" className="absolute inset-0">
//                 {/* Background circles */}
//                 {[20, 40, 60, 80, 100].map((percent, index) => (
//                   <circle
//                     key={index}
//                     cx="160"
//                     cy="160"
//                     r={160 * (percent / 100)}
//                     fill="none"
//                     stroke="#374151"
//                     strokeWidth="1"
//                     opacity="0.3"
//                   />
//                 ))}
                
//                 {/* Category lines */}
//                 {categories.map((_, index) => {
//                   const angle = (index * 72 - 90) * (Math.PI / 180);
//                   const x = 160 + 160 * Math.cos(angle);
//                   const y = 160 + 160 * Math.sin(angle);
//                   return (
//                     <line
//                       key={index}
//                       x1="160"
//                       y1="160"
//                       x2={x}
//                       y2={y}
//                       stroke="#374151"
//                       strokeWidth="1"
//                       opacity="0.3"
//                     />
//                   );
//                 })}

//                 {/* Score polygon */}
//                 <polygon
//                   points={categories.map((_, index) => {
//                     const angle = (index * 72 - 90) * (Math.PI / 180);
//                     const score = scores[categories[index].key];
//                     const radius = 160 * (score / 100);
//                     const x = 160 + radius * Math.cos(angle);
//                     const y = 160 + radius * Math.sin(angle);
//                     return `${x},${y}`;
//                   }).join(' ')}
//                   fill="url(#gradient)"
//                   fillOpacity="0.3"
//                   stroke="#8b5cf6"
//                   strokeWidth="2"
//                 />

//                 {/* Gradient definition */}
//                 <defs>
//                   <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
//                     <stop offset="0%" stopColor="#8b5cf6" />
//                     <stop offset="100%" stopColor="#3b82f6" />
//                   </linearGradient>
//                 </defs>
//               </svg>

//               {/* Category labels */}
//               <div className="absolute inset-0 flex items-center justify-center">
//                 {categories.map((category, index) => {
//                   const angle = (index * 72 - 90) * (Math.PI / 180);
//                   const radius = 140;
//                   const x = radius * Math.cos(angle);
//                   const y = radius * Math.sin(angle);
//                   return (
//                     <div
//                       key={index}
//                       className="absolute text-center"
//                       style={{
//                         transform: `translate(${x}px, ${y}px)`,
//                         width: '80px'
//                       }}
//                     >
//                       <div className="text-xs text-gray-400 font-medium">{category.name}</div>
//                       <div className={`text-sm font-bold ${getScoreColor(scores[category.key])}`}>
//                         {scores[category.key]}%
//                       </div>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Detailed Score Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//           {categories.map((category) => {
//             const IconComponent = category.icon;
//             const score = scores[category.key];
//             return (
//               <div key={category.key} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-200">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
//                     <IconComponent className="w-6 h-6 text-white" />
//                   </div>
//                   <div>
//                     <h3 className="font-semibold text-white">{category.name}</h3>
//                     <p className="text-sm text-gray-400">{category.description}</p>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <div className="flex justify-between items-center">
//                     <span className="text-gray-400">Score</span>
//                     <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}%</span>
//                   </div>
//                   <div className="w-full bg-gray-700 rounded-full h-2">
//                     <div
//                       className={`h-2 rounded-full transition-all duration-500 ${
//                         score >= 90 ? 'bg-green-500' :
//                         score >= 80 ? 'bg-blue-500' :
//                         score >= 70 ? 'bg-yellow-500' :
//                         score >= 60 ? 'bg-orange-500' : 'bg-red-500'
//                       }`}
//                       style={{ width: `${score}%` }}
//                     ></div>
//                   </div>
//                   <div className="text-sm text-gray-400">
//                     {score >= 90 ? 'Excellent performance' :
//                      score >= 80 ? 'Very good performance' :
//                      score >= 70 ? 'Good performance' :
//                      score >= 60 ? 'Fair performance' : 'Needs improvement'}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-center gap-4">
//           <button
//             onClick={() => window.history.back()}
//             className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
//           >
//             Back to Dashboard
//           </button>
//           <button
//             className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200"
//           >
//             Download Report
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InterviewScore; 
import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  MessageSquare,
  Code,
  Lightbulb,
  Heart,
  Zap
} from 'lucide-react';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip
} from 'recharts';

const InterviewScore = () => {
  const [scores, setScores] = useState({
    communication: 0,
    technical: 0,
    problemSolving: 0,
    culturalFit: 0,
    confidence: 0,
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [interviewData, setInterviewData] = useState(null);

  useEffect(() => {
    const mockData = {
      interviewId: "demo-123",
      candidateName: "Demo Candidate",
      date: new Date().toISOString().split('T')[0],
      scores: {
        communication: 85,
        technical: 92,
        problemSolving: 78,
        culturalFit: 88,
        confidence: 82
      }
    };

    setInterviewData(mockData);
    setScores(mockData.scores);
    setIsLoading(false);
  }, []);

  const calculateAverage = () => {
    const values = Object.values(scores);
    return Math.round(values.reduce((acc, val) => acc + val, 0) / values.length);
  };

  const getScoreColor = (score) => {
    if (score >= 90) return 'text-green-400';
    if (score >= 80) return 'text-blue-400';
    if (score >= 70) return 'text-yellow-400';
    if (score >= 60) return 'text-orange-400';
    return 'text-red-400';
  };

  const getScoreBgColor = (score) => {
    if (score >= 90) return 'bg-green-500/20';
    if (score >= 80) return 'bg-blue-500/20';
    if (score >= 70) return 'bg-yellow-500/20';
    if (score >= 60) return 'bg-orange-500/20';
    return 'bg-red-500/20';
  };

  const categories = [
    {
      key: 'communication',
      name: 'Communication Skills',
      description: 'Clarity, articulation, structured responses',
      icon: MessageSquare,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'technical',
      name: 'Technical Knowledge',
      description: 'Understanding of key concepts for the role',
      icon: Code,
      color: 'from-purple-500 to-pink-500',
    },
    {
      key: 'problemSolving',
      name: 'Problem-Solving',
      description: 'Ability to analyze problems and propose solutions',
      icon: Lightbulb,
      color: 'from-green-500 to-emerald-500',
    },
    {
      key: 'culturalFit',
      name: 'Cultural & Role Fit',
      description: 'Alignment with company values and job role',
      icon: Heart,
      color: 'from-red-500 to-pink-500',
    },
    {
      key: 'confidence',
      name: 'Confidence & Clarity',
      description: 'Confidence in responses, engagement, and clarity',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const radarData = categories.map(category => ({
    subject: category.name,
    score: scores[category.key]
  }));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-900 pt-16 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-400 text-lg">Loading interview scores...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Interview Score Report
            </h1>
          </div>

          
        </div>
         <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-8">
          {interviewData && (
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-4 mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-gray-400 text-sm">Candidate</p>
                  <p className="text-white font-semibold">{interviewData.candidateName}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Interview ID</p>
                  <p className="text-white font-semibold">{interviewData.interviewId}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Date</p>
                  <p className="text-white font-semibold">{interviewData.date}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        
         <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 mb-8 flex flex-col lg:flex-row gap-6">
  {/* Radar Chart Section */}
  <div className="w-full lg:w-1/2">
    <h2 className="text-center text-xl text-white font-semibold mb-4">Radar Chart Overview</h2>
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="80%">
        <PolarGrid stroke="#4B5563" />
        <PolarAngleAxis dataKey="subject" stroke="#E5E7EB" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#9CA3AF" />
        <Radar dataKey="score" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.4} />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  </div>

  {/* Overall Score Section */}
  <div className="w-full lg:w-1/2 flex flex-col justify-center items-center">
    <h2 className="text-2xl font-bold text-white mb-2">Overall Score</h2>
    <div className="flex items-center justify-center gap-4">
      <div className={`w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold ${getScoreBgColor(calculateAverage())} ${getScoreColor(calculateAverage())}`}>
        {calculateAverage()}%
      </div>
      <div className="text-left">
        <p className="text-gray-400">Average Performance</p>
        <p className={`text-xl font-semibold ${getScoreColor(calculateAverage())}`}>
          {calculateAverage() >= 90 ? 'Excellent' :
            calculateAverage() >= 80 ? 'Very Good' :
              calculateAverage() >= 70 ? 'Good' :
                calculateAverage() >= 60 ? 'Fair' : 'Needs Improvement'}
        </p>
      </div>
    </div>
  </div>
</div>

      
        {/* Score Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {categories.map((category) => {
            const IconComponent = category.icon;
            const score = scores[category.key];
            return (
              <div key={category.key} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white">{category.name}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Score</span>
                    <span className={`text-2xl font-bold ${getScoreColor(score)}`}>{score}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${getScoreColor(score).replace("text", "bg")}`}
                      style={{ width: `${score}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-gray-400">
                    {score >= 90 ? 'Excellent performance' :
                      score >= 80 ? 'Very good performance' :
                        score >= 70 ? 'Good performance' :
                          score >= 60 ? 'Fair performance' :
                            'Needs improvement'}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-lg transition-colors"
          >
            Back to Dashboard
          </button>
          <button
            className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-lg transition-all duration-200"
          >
            Download Report
          </button>
        </div>
      </div>
    </div>
  
      </div>
    </div>
  );
};

export default InterviewScore;
