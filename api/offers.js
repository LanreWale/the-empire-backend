export default function handler(req, res) {
    res.json({
        success: true,
        message: 'CPA Offers rotation active',
        rotation: '1300+ offers/hour capability',
        accounts: [1533836, 1909271, 2387883, 2286960, 2288009],
        timestamp: new Date().toISOString()
    });
}