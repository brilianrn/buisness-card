import crypto from 'crypto';
import 'dotenv/config';

export const encrypt = (text: string) => {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', process.env.CRYPTO_KEY || '', iv);
  let cipherText;
  try {
    cipherText = cipher.update(text.toString(), 'utf8', 'hex');
    cipherText += cipher.final('hex');
    cipherText = iv.toString('hex') + cipherText;
  } catch (e) {
    cipherText = null;
  }
  return cipherText;
};

export const decrypt = (cipherText: string) => {
  try {
    const contents = Buffer.from(cipherText, 'hex');
    const iv = contents.slice(0, 16);
    const textBytes = contents.slice(16);
    const decipher = crypto.createDecipheriv('aes-256-cbc', process.env.CRYPTO_KEY || '', iv);
    // @ts-ignore
    let decrypted = decipher?.update(textBytes, 'hex', 'utf8') || '';
    decrypted += decipher.final('utf8');
    return decrypted;
  } catch (error) {
    return null;
  }
};
