/**
 * @module @minions-qa-rules/sdk/schemas
 * Custom MinionType schemas for Minions Qa-rules.
 */

import type { MinionType } from 'minions-sdk';

export const validationruleType: MinionType = {
  id: 'qa-rules-validation-rule',
  name: 'Validation rule',
  slug: 'validation-rule',
  description: 'A structural or content validation rule applied to toolboxes.',
  icon: '📏',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'category', type: 'select', label: 'category' },
    { name: 'target', type: 'select', label: 'target' },
    { name: 'condition', type: 'string', label: 'condition' },
    { name: 'severity', type: 'select', label: 'severity' },
    { name: 'autoFixable', type: 'boolean', label: 'autoFixable' },
    { name: 'autoFixCommand', type: 'string', label: 'autoFixCommand' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const consistencycheckType: MinionType = {
  id: 'qa-rules-consistency-check',
  name: 'Consistency check',
  slug: 'consistency-check',
  description: 'A cross-toolbox consistency check ensuring alignment between related Minions.',
  icon: '🔗',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'sourceToolbox', type: 'string', label: 'sourceToolbox' },
    { name: 'targetToolbox', type: 'string', label: 'targetToolbox' },
    { name: 'relation', type: 'string', label: 'relation' },
    { name: 'checkQuery', type: 'string', label: 'checkQuery' },
    { name: 'severity', type: 'select', label: 'severity' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const compliancegateType: MinionType = {
  id: 'qa-rules-compliance-gate',
  name: 'Compliance gate',
  slug: 'compliance-gate',
  description: 'A quality gate that must pass before a clawspace is considered healthy.',
  icon: '🚦',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'clawspace', type: 'string', label: 'clawspace' },
    { name: 'metric', type: 'string', label: 'metric' },
    { name: 'threshold', type: 'number', label: 'threshold' },
    { name: 'operator', type: 'select', label: 'operator' },
    { name: 'currentValue', type: 'number', label: 'currentValue' },
    { name: 'isPassing', type: 'boolean', label: 'isPassing' },
    { name: 'lastCheckedAt', type: 'string', label: 'lastCheckedAt' },
  ],
};

export const autofixType: MinionType = {
  id: 'qa-rules-auto-fix',
  name: 'Auto fix',
  slug: 'auto-fix',
  description: 'An automated fix that can resolve a known validation failure.',
  icon: '🔧',
  schema: [
    { name: 'validationRuleId', type: 'string', label: 'validationRuleId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'command', type: 'string', label: 'command' },
    { name: 'dryRunCommand', type: 'string', label: 'dryRunCommand' },
    { name: 'appliedCount', type: 'number', label: 'appliedCount' },
    { name: 'lastAppliedAt', type: 'string', label: 'lastAppliedAt' },
    { name: 'status', type: 'select', label: 'status' },
  ],
};

export const customTypes: MinionType[] = [
  validationruleType,
  consistencycheckType,
  compliancegateType,
  autofixType,
];

