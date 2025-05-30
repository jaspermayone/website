"use client"
import { useState, useEffect } from 'react';
import { formatDistanceToNow } from 'date-fns';

interface Commit {
  hash: string;
  date: string;
  author: string;
  email: string;
  message: string;
  url?: string;
  avatar?: string;
}

export default function Changelog() {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCommits();
  }, []);

  const fetchCommits = async (): Promise<void> => {
    try {
      const response = await fetch('/api/commits');
      if (!response.ok) throw new Error('Failed to fetch commits');
      const data: Commit[] = await response.json();
      setCommits(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const formatCommitMessage = (message: string) => {
    // Split commit message into title and description
    const lines = message.split('\n');
    const title = lines[0];
    const description = lines.slice(1).join('\n').trim();
    return { title, description };
  };

  const getCommitType = (message: string): string => {
    // Simple keyword detection for any commit message style
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('fix') || lowerMessage.includes('bug') || lowerMessage.includes('patch')) return 'fix';
    if (lowerMessage.includes('add') || lowerMessage.includes('new') || lowerMessage.includes('feature')) return 'feature';
    if (lowerMessage.includes('update') || lowerMessage.includes('improve') || lowerMessage.includes('enhance')) return 'improvement';
    if (lowerMessage.includes('remove') || lowerMessage.includes('delete')) return 'removal';
    if (lowerMessage.includes('doc') || lowerMessage.includes('readme')) return 'docs';
    if (lowerMessage.includes('style') || lowerMessage.includes('css') || lowerMessage.includes('design')) return 'style';
    return 'change';
  };

  const getTypeColor = (type: string): string => {
    const colors = {
      feature: 'bg-green-100 text-green-800',
      fix: 'bg-red-100 text-red-800',
      improvement: 'bg-blue-100 text-blue-800',
      removal: 'bg-orange-100 text-orange-800',
      docs: 'bg-purple-100 text-purple-800',
      style: 'bg-pink-100 text-pink-800',
      change: 'bg-gray-100 text-gray-800'
    };
    return colors[type] || colors.change;
  };

  const getTypeIcon = (type: string): string => {
    const icons = {
      feature: '✨',
      fix: '🐛',
      improvement: '⬆️',
      removal: '🗑️',
      docs: '📚',
      style: '💄',
      change: '📝'
    };
    return icons[type] || icons.change;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading changelog...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <div className="text-red-600 text-xl mb-4">⚠️ Error loading changelog</div>
            <p className="text-gray-600">{error}</p>
            <button 
              onClick={fetchCommits}
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Retry
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Changelog</h1>
          <p className="text-xl text-gray-600">Latest updates and changes to jaspermayone.com</p>
        </div>

        <div className="space-y-8">
          {commits.map((commit, index) => {
            const { title, description } = formatCommitMessage(commit.message);
            const type = getCommitType(commit.message);
            const typeColor = getTypeColor(type);
            const typeIcon = getTypeIcon(type);

            return (
              <div key={commit.hash} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-500">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColor}`}>
                      {typeIcon} {type}
                    </span>
                    <span className="text-sm text-gray-500">
                      {formatDistanceToNow(new Date(commit.date), { addSuffix: true })}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      {commit.hash.substring(0, 7)}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
                
                {description && (
                  <p className="text-gray-700 mb-4 whitespace-pre-line">{description}</p>
                )}

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    {commit.avatar ? (
                      <img 
                        src={commit.avatar} 
                        alt={commit.author}
                        className="w-6 h-6 rounded-full"
                      />
                    ) : (
                      <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                        <span className="text-xs font-semibold">
                          {commit.author.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                    <span>{commit.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    {commit.url && (
                      <a 
                        href={commit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 underline"
                      >
                        View on GitHub
                      </a>
                    )}
                    <span className="text">{commit.email}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}