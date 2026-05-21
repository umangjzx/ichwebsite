export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  error: string;
}

export function validate(value: string, rules: ValidationRule[]): ValidationResult {
  for (const rule of rules) {
    if (rule.required && !value.trim()) {
      return { isValid: false, error: rule.message };
    }
    if (rule.minLength && value.trim().length < rule.minLength) {
      return { isValid: false, error: rule.message };
    }
    if (rule.maxLength && value.trim().length > rule.maxLength) {
      return { isValid: false, error: rule.message };
    }
    if (rule.pattern && value && !rule.pattern.test(value)) {
      return { isValid: false, error: rule.message };
    }
  }
  return { isValid: true, error: '' };
}

export const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const phonePattern = /^[\+]?[\d\s\-\(\)]{7,15}$/;

export const validationRules = {
  name: [
    { required: true, message: 'Name is required' },
    { minLength: 2, message: 'Name must be at least 2 characters' },
  ],
  email: [
    { required: true, message: 'Email is required' },
    { pattern: emailPattern, message: 'Please enter a valid email address' },
  ],
  phone: [
    { required: true, message: 'Phone number is required' },
    { pattern: phonePattern, message: 'Please enter a valid phone number' },
  ],
  message: [
    { required: true, message: 'Message is required' },
    { minLength: 10, message: 'Message must be at least 10 characters' },
  ],
  company: [
    { minLength: 2, message: 'Company name must be at least 2 characters' },
  ],
  quantity: [
    { minLength: 1, message: 'Please specify a quantity' },
  ],
};
