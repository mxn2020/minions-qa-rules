/**
 * Minions Qa-rules SDK
 *
 * Validation rules, consistency checks, compliance gates, and auto-fix definitions
 *
 * @module @minions-qa-rules/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Qa-rules.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
