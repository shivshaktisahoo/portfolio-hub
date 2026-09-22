import axios from 'axios'

/**
 * Pings a deployed project's /api/health/ endpoint. Doubles as a Render
 * cold-start pre-warm: visiting the hub wakes every linked project at once,
 * so by the time a visitor clicks through, the demo is already warm.
 */
export async function pingProjectHealth(baseUrl: string, timeoutMs = 30000): Promise<boolean> {
  try {
    await axios.get(`${baseUrl.replace(/\/$/, '')}/api/health/`, { timeout: timeoutMs })
    return true
  } catch {
    return false
  }
}
