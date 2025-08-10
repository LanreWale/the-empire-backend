// THE EMPIRE - Simplified Functional Backend
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
    origin: [
        'http://localhost:3000',
        'http://localhost:3001',
        'https://lambert-monstera-9fecf1.netlify.app',
        /\.netlify\.app$/,
        /localhost:\d+/
    ],
    credentials: true
}));
app.use(express.json());

console.log('🚀========================================🚀');
console.log('     THE EMPIRE BACKEND IS LIVE!');
console.log('🚀========================================🚀');
console.log(`🌐 Server: http://localhost:${PORT}`);
console.log(`📊 MongoDB: ${process.env.MONGODB_URI ? '✅ Configured' : '❌ Missing'}`);
console.log(`💳 Flutterwave: ${process.env.FLUTTERWAVE_PUBLIC_KEY ? '✅ Configured' : '❌ Missing'}`);
console.log(`🤖 Telegram: ${process.env.TELEGRAM_BOT_TOKEN ? '✅ Configured' : '❌ Missing'}`);
console.log('🚀========================================🚀');

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('✅ THE EMPIRE: MongoDB Connected Successfully');
})
.catch((err) => {
    console.log('❌ THE EMPIRE: MongoDB Connection Error:', err.message);
});

// Simple API Routes
app.get('/api/test', (req, res) => {
    res.json({
        message: '✅ THE EMPIRE API is working!',
        timestamp: new Date().toISOString(),
        status: 'active'
    });
});

app.get('/api/status', (req, res) => {
    res.json({
        server: 'THE EMPIRE Backend',
        status: '✅ Active',
        mongodb: mongoose.connection.readyState === 1 ? '✅ Connected' : '❌ Disconnected',
        accounts: {
            cpaGrip: 5,
            flutterwave: process.env.FLUTTERWAVE_PUBLIC_KEY ? '✅ Ready' : '❌ Missing',
            telegram: process.env.TELEGRAM_BOT_TOKEN ? '✅ Ready' : '❌ Missing'
        },
        timestamp: new Date().toISOString()
    });
});

app.get('/api/offers', (req, res) => {
    res.json({
        success: true,
        message: 'CPA Offers rotation active',
        rotation: '1300+ offers/hour capability',
        accounts: [1533836, 1909271, 2387883, 2286960, 2288009],
        timestamp: new Date().toISOString()
    });
});

app.get('/api/users', (req, res) => {
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
});

// Start Server
app.listen(PORT, () => {
    console.log(`\n🚀 THE EMPIRE Backend running on port ${PORT}`);
    console.log('🌐 API Endpoints:');
    console.log(`   📊 Status: http://localhost:${PORT}/api/status`);
    console.log(`   🧪 Test: http://localhost:${PORT}/api/test`);
    console.log(`   🎯 Offers: http://localhost:${PORT}/api/offers`);
    console.log(`   👥 Users: http://localhost:${PORT}/api/users`);
    console.log('\n✅ Ready for CPA offer rotations!');
});