"""
Minions Qa-rules SDK — Type Schemas
Custom MinionType schemas for Minions Qa-rules.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

validation_rule_type = MinionType(
    id="qa-rules-validation-rule",
    name="Validation rule",
    slug="validation-rule",
    description="A structural or content validation rule applied to toolboxes.",
    icon="📏",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="category", type="select", label="category"),
        FieldDefinition(name="target", type="select", label="target"),
        FieldDefinition(name="condition", type="string", label="condition"),
        FieldDefinition(name="severity", type="select", label="severity"),
        FieldDefinition(name="autoFixable", type="boolean", label="autoFixable"),
        FieldDefinition(name="autoFixCommand", type="string", label="autoFixCommand"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

consistency_check_type = MinionType(
    id="qa-rules-consistency-check",
    name="Consistency check",
    slug="consistency-check",
    description="A cross-toolbox consistency check ensuring alignment between related Minions.",
    icon="🔗",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="sourceToolbox", type="string", label="sourceToolbox"),
        FieldDefinition(name="targetToolbox", type="string", label="targetToolbox"),
        FieldDefinition(name="relation", type="string", label="relation"),
        FieldDefinition(name="checkQuery", type="string", label="checkQuery"),
        FieldDefinition(name="severity", type="select", label="severity"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

compliance_gate_type = MinionType(
    id="qa-rules-compliance-gate",
    name="Compliance gate",
    slug="compliance-gate",
    description="A quality gate that must pass before a clawspace is considered healthy.",
    icon="🚦",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="clawspace", type="string", label="clawspace"),
        FieldDefinition(name="metric", type="string", label="metric"),
        FieldDefinition(name="threshold", type="number", label="threshold"),
        FieldDefinition(name="operator", type="select", label="operator"),
        FieldDefinition(name="currentValue", type="number", label="currentValue"),
        FieldDefinition(name="isPassing", type="boolean", label="isPassing"),
        FieldDefinition(name="lastCheckedAt", type="string", label="lastCheckedAt"),
    ],
)

auto_fix_type = MinionType(
    id="qa-rules-auto-fix",
    name="Auto fix",
    slug="auto-fix",
    description="An automated fix that can resolve a known validation failure.",
    icon="🔧",
    schema=[
        FieldDefinition(name="validationRuleId", type="string", label="validationRuleId"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="command", type="string", label="command"),
        FieldDefinition(name="dryRunCommand", type="string", label="dryRunCommand"),
        FieldDefinition(name="appliedCount", type="number", label="appliedCount"),
        FieldDefinition(name="lastAppliedAt", type="string", label="lastAppliedAt"),
        FieldDefinition(name="status", type="select", label="status"),
    ],
)

custom_types: list[MinionType] = [
    validation_rule_type,
    consistency_check_type,
    compliance_gate_type,
    auto_fix_type,
]

