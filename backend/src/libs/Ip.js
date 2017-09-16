export const getClientIp4 = (req) => {
    const ip = req.ip;
    let ipreturn = '127.0.0.1';
    if (ip.length === 21) {
      if (ip.substr(0, 7) === '::ffff:') {
        ipreturn = ip.substr(7);
      }
    }
    return ipreturn;
};