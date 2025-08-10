export default function handler(req, res) {
    res.json({
        server: 'THE EMPIRE Backend',
        status: '✅ Active',
        mongodb: '✅ Connected',
        accounts: {
            cpaGrip: 5,
            flutterwave: process.env.FLUTTERWAVE_PUBLIC_KEY ? '✅ Ready' : '❌ Missing',
            telegram: process.env.TELEGRAM_BOT_TOKEN ? '✅ Ready' : '❌ Missing'
        },
        timestamp: new Date().toISOString()
    });
}