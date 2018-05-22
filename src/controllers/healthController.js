class HealthController {
  constructor({ logger }) {
    this.logger = logger;
  }

  reportHealthStats(req, res) {
    return res.json({ ok: true });
  }
}
module.exports = HealthController;
