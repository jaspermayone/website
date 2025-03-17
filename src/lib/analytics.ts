import { prisma } from './db';
import { createHash } from 'crypto';

// Function to hash sensitive data like IP for privacy
const hashData = (data: string): string => {
  return createHash('sha256').update(data).digest('hex');
};

// Generate a session ID from user agent and IP
const generateSessionId = (userAgent: string, ip: string): string => {
  return hashData(`${userAgent}-${ip}-${new Date().toDateString()}`);
};

// Track page views
export const trackPageView = async (
  path: string,
  userAgent?: string | null,
  referer?: string | null,
  ip?: string | null
) => {
  try {
    // Hash IP for privacy if it exists
    const hashedIp = ip ? hashData(ip) : null;
    const sessionId = userAgent && ip 
      ? generateSessionId(userAgent, ip) 
      : null;

    await prisma.pageView.create({
      data: {
        path,
        userAgent: userAgent || null,
        referer: referer || null,
        ip: hashedIp,
        sessionId
      }
    });
    
    return true;
  } catch (error) {
    console.error('Error tracking page view:', error);
    return false;
  }
};

// Track referrals
export const trackReferral = async (
  source: string,
  userAgent?: string | null,
  ip?: string | null
) => {
  try {
    // Hash IP for privacy if it exists
    const hashedIp = ip ? hashData(ip) : null;
    const sessionId = userAgent && ip 
      ? generateSessionId(userAgent, ip) 
      : null;

    await prisma.referral.create({
      data: {
        source,
        userAgent: userAgent || null,
        ip: hashedIp,
        sessionId
      }
    });
    
    return true;
  } catch (error) {
    console.error('Error tracking referral:', error);
    return false;
  }
};

// Function to get analytics data
export const getAnalytics = async () => {
  const [pageViews, referrals] = await Promise.all([
    prisma.pageView.count(),
    prisma.referral.groupBy({
      by: ['source'],
      _count: {
        id: true
      },
      orderBy: {
        _count: {
          id: 'desc'
        }
      }
    })
  ]);

  return {
    totalPageViews: pageViews,
    referralSources: referrals.map(r => ({
      source: r.source,
      count: r._count.id
    }))
  };
};