export default function handler(req, res) {
    res.json({
        success: true,
        message: 'User management system active',
        features: {
            scaling: '1x-5x levels',
            withdrawal: '35% restriction active',
            invitations: '48hr expiry',
            kycVerification: 'Nigerian market ready'
        },
        timestamp: new Date().toISOString()
    });
}