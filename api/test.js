export default function handler(req, res) {
    res.json({
        message: '✅ THE EMPIRE API is working!',
        timestamp: new Date().toISOString(),
        status: 'active'
    });
}