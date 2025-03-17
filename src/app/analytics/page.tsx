"use client";

import { useEffect, useState } from 'react';

interface Analytics {
  totalPageViews: number;
  referralSources: {
    source: string;
    count: number;
  }[];
}

export default function AnalyticsDashboard() {
  const [analytics, setAnalytics] = useState<Analytics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState('');
  const [authorized, setAuthorized] = useState(false);

  const fetchAnalytics = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`/api/analytics?key=${apiKey}`);
      
      if (!response.ok) {
        if (response.status === 401) {
          setError('Invalid API key. Please check your credentials.');
          setAuthorized(false);
        } else {
          setError(`Error: ${response.status} ${response.statusText}`);
        }
        return;
      }
      
      const data = await response.json();
      setAnalytics(data);
      setAuthorized(true);
      
      // Save API key to localStorage for convenience
      localStorage.setItem('analyticsApiKey', apiKey);
    } catch (err) {
      setError('An error occurred while fetching analytics data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Try to load API key from localStorage
    const savedApiKey = localStorage.getItem('analyticsApiKey');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>
      
      {!authorized ? (
        <div className="mb-8 p-4 bg-gray-100 rounded dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-4">Authentication</h2>
          <div className="flex items-end gap-4">
            <div className="flex-1">
              <label htmlFor="apiKey" className="block text-sm font-medium mb-1">
                API Key
              </label>
              <input
                id="apiKey"
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter your API key"
              />
            </div>
            <button
              onClick={fetchAnalytics}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Authenticate
            </button>
          </div>
          {error && <p className="mt-2 text-red-500">{error}</p>}
        </div>
      ) : (
        <>
          <div className="mb-4 flex justify-between items-center">
            <button
              onClick={fetchAnalytics}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              disabled={loading}
            >
              {loading ? 'Loading...' : 'Refresh Data'}
            </button>
            <button
              onClick={() => {
                setAuthorized(false);
                setApiKey('');
                localStorage.removeItem('analyticsApiKey');
              }}
              className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition"
            >
              Logout
            </button>
          </div>

          {loading ? (
            <div className="text-center py-8">Loading analytics data...</div>
          ) : error ? (
            <div className="text-red-500 py-4">{error}</div>
          ) : analytics ? (
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Overview</h2>
                <div className="text-4xl font-bold">{analytics.totalPageViews}</div>
                <div className="text-gray-500 dark:text-gray-400">Total Page Views</div>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-4">Referral Sources</h2>
                {analytics.referralSources.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">No referral data available yet.</p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b dark:border-gray-700">
                          <th className="py-2 px-4">Source</th>
                          <th className="py-2 px-4">Count</th>
                          <th className="py-2 px-4">Percentage</th>
                        </tr>
                      </thead>
                      <tbody>
                        {analytics.referralSources.map((source) => (
                          <tr key={source.source} className="border-b dark:border-gray-700">
                            <td className="py-2 px-4">{source.source}</td>
                            <td className="py-2 px-4">{source.count}</td>
                            <td className="py-2 px-4">
                              {((source.count / analytics.totalPageViews) * 100).toFixed(2)}%
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}